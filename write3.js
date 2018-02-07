var fs = require('fs');
const xml =
  `<testsuites>
  <testsuite name="constraint-solver" tests="1" failures="0" errors="0" time="591.973">
  <testcase name="constraint solver benchmark" time="52.705"/>
  </testsuite>
  <testsuite name="cordova-builds" tests="1" failures="0" errors="0" time="591.973">
  <testcase name="cordova builds with server options" time="409.562"/>
  </testsuite>
  <testsuite name="cordova-platforms" tests="1" failures="0" errors="0" time="591.973">
  <testcase name="add cordova platforms" time="44.543"/>
  </testsuite>
  <testsuite name="cordova-plugins" tests="3" failures="0" errors="0" time="591.973">
  <testcase name="change cordova plugins" time="58.487"/>
  <testcase name="remove cordova plugins" time="26.649"/>
  <testcase name="parse cordova plugin ID and version" time="0.015"/>
  </testsuite>
  <testsuite name="cordova-run" tests="1" failures="0" errors="0" time="591.973">
  <testcase name="get mobile server argument for meteor run" time="0.007"/>
  </testsuite>
  </testsuites>`;

console.log(xml);

fs.writeFile("./tmp/3.xml", xml, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 