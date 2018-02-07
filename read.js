var fs = require('fs'),
  xml2js = require('xml2js');

var parser = new xml2js.Parser();

// Load most recent junit results
let results = [];
for (let i = 0; i < 4; i++) {
  const data = fs.readFileSync(`./results/${i}.xml`);
  parser.parseString(data, function (err, result) {
    result.testsuites.testsuite
      .map(testsuite => testsuite.testcase)
      .forEach(testcase =>
        testcase.forEach(({ $: { name, time } }) => {
          results.push({ name, time: +time })
        })
      );
  });
}

// Load previous test balance
let previousResults;
try {
  previousResults = JSON.parse(fs.readFileSync(`./test-groups/data.json`));
} catch (err) {
  console.log(err);
}

console.log(previousResults);

// Add new results and limit the record to five
const allResults = [results, ...previousResults].slice(0, 5);


// results.forEach()

// Split into groups
const groups = [[], [], [], []];
const totals = [0, 0, 0, 0];
const getMin = () => totals.reduce((max, total, i) => total < totals[max] ? i : max, 0);


let averageResults = [];

// We assume that all the tests that were run this time will be the ones run 
// next time, so we only calculate the averages for those. This is will ignore
// any tests that were not run most recently but which were run in previous
// builds
results.forEach(result => {
  const { name } = result;
  const times = [];
  allResults.forEach(result => {
    const time = result.find(test => test.name === name)
    if (time) {
      times.push(time);
    }
  })
  const averageTime = times.reduce((prev, x) => prev + x, 0) / times.length;
  averageResults.push({ name, time: averageTime });
})

console.log(averageResults);

results.forEach(test => {

  // Naive but simple allocation
  const min = getMin();
  groups[min].push(test);
  totals[min] += !isNaN(test.time) ? test.time : 0;
});

groups.forEach((group, i) => {
  const text = group.map(test => test.name).join('|');
  fs.writeFileSync(`./test-groups/${i}.txt`, text);
});




fs.writeFile("./test-groups/data.json", JSON.stringify(allResults), err => {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 