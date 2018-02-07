var fs = require('fs'),
  xml2js = require('xml2js');

var parser = new xml2js.Parser();

fs.readFile('./tmp/10.xml', function (err, data) {
  console.log(err);
  console.log(data);
  parser.parseString(data, function (err, result) {
    console.log(err);
    console.log(result);
    let tests = [];
    result.testsuites.testsuite
      .map(testsuite => testsuite.testcase)
      .forEach(testcase =>
        testcase.forEach(({ $: { name, time } }) =>
          tests.push({ name, time })
        )
      );
    console.log(tests);
  });
});