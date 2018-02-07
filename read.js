const fs = require('fs');
const xml2js = require('xml2js');

const args = process.argv.slice(2);

const numGroups = +args[args.indexOf('--num-groups') + 1];

const parser = new xml2js.Parser();

// Load most recent junit results
let results = [];
for (let i = 0; i < numGroups; i++) {
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

// Add new results and limit the record to five
const allResults = [results, ...previousResults].slice(0, 5);

let averageResults = [];

// We assume that all the tests that were run this time will be the ones run 
// next time, so we only calculate the averages for those. This is will ignore
// any tests that were not run most recently but which were run in previous
// builds
results.forEach(result => {
  const { name } = result;
  const times = [];
  allResults.forEach(result => {
    const { time } = result.find(test => test.name === name) || {};
    if (time) {
      times.push(!isNaN(time) ? time : 0);
    }
  })
  const averageTime =
    Math.floor(times.reduce((p, x) => p + x, 0) / times.length * 1000) / 1000;
  averageResults.push({ name, time: averageTime });
})

averageResults.sort((a, b) => b.time - a.time);

console.log('averageResults');
console.log(averageResults);

// Split into groups
const groups = Array(numGroups).fill([]);
const totals = Array(numGroups).fill(0);
const getMin = () =>
  totals.reduce((min, total, i) => total < totals[min] ? i : min, 0);

averageResults.forEach(test => {

  // Naive but simple allocation
  const min = getMin();
  groups[min].push(test);
  totals[min] += test.time;
});

console.log(groups);

groups.forEach((group, i) => {
  const text = `^${group.map(test => test.name).join('$|^')}$`;
  fs.writeFileSync(`./test-groups/${i}.txt`, text);
  console.log(`Group ${i}:`);
  console.log(text);
});

fs.writeFile("./test-groups/data.json", JSON.stringify(allResults), err => {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 