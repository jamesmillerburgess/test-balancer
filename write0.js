var fs = require('fs');
const xml =
  `<testsuites>
  <testsuite name="autoupdate" tests="1" failures="0" errors="0" time="321.923">
  <testcase name="autoupdate" time="90.976"/>
  </testsuite>
  <testsuite name="package-tests" tests="1" failures="0" errors="0" time="321.923">
  <testcase name="package skeleton creates correct versionsFrom" time="0.822"/>
  </testsuite>
  <testsuite name="releases" tests="3" failures="0" errors="0" time="321.923">
  <testcase name="springboard" time="26.58"/>
  <testcase name="writing versions file" time="17.395"/>
  <testcase name="unknown release" time="12.149"/>
  </testsuite>
  <testsuite name="run" tests="1" failures="0" errors="0" time="321.923">
  <testcase name="update during run" time="97.242"/>
  </testsuite>
  <testsuite name="source-maps" tests="3" failures="0" errors="0" time="321.923">
  <testcase name="source maps from an app" time="54.859"/>
  <testcase name="source maps from built meteor tool" time="1.071"/>
  <testcase name="source maps from a build plugin implementation" time="20.82"/>
  </testsuite>
  </testsuites>`;

console.log(xml);

console.log(process.argv);

fs.writeFile("./results/0.xml", xml, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 