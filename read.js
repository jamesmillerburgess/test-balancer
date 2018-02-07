var fs = require('fs'),
  xml2js = require('xml2js');

var parser = new xml2js.Parser();

// Load previous test balance
try {
  console.log(fs.readFileSync(`./test-groups/data.json`));
} catch (err) {
  console.log(err);
}

// Load most recent junit results
let tests = [];
for (let i = 0; i < 4; i++) {
  const data = fs.readFileSync(`./results/${i}.xml`);

  parser.parseString(data, function (err, result) {
    result.testsuites.testsuite
      .map(testsuite => testsuite.testcase)
      .forEach(testcase =>
        testcase.forEach(({ $: { name, time } }) =>
          tests.push({ name, time: +time })
        )
      );
    console.log(tests);
  });
}

tests.sort((a, b) => b.time - a.time)
console.log(tests);

// Split into groups
const groups = [[], [], [], []];
const totals = [0, 0, 0, 0];
const getMin = () => totals.reduce((max, total, i) => total < totals[max] ? i : max, 0);

// Naive but simple allocation
tests.forEach(test => {
  const min = getMin();
  groups[min].push(test);
  totals[min] += !isNaN(test.time) ? test.time : 0;
});

groups.forEach((group, i) => {
  const text = group.map(test => test.name).join('|');
  fs.writeFileSync(`./test-groups/${i}.txt`, text);
});

fs.writeFile("./test-groups/data.json", JSON.stringify(groups), function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 