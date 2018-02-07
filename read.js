var fs = require('fs'),
  xml2js = require('xml2js');

var parser = new xml2js.Parser();

let tests = [];
for (let i = 0; i < 4; i++) {
  const data = fs.readFileSync(`./tmp/${i}.xml`);
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