var fs = require('fs');
const xml =
  `<testsuites>
  <testsuite name="assets" tests="2" failures="0" errors="0" time="619.659">
  <testcase name="assets - unicode asset names are allowed" time="52.621"/>
  <testcase name="assets - helper exists to unicode normalize path strings" time="1.474"/>
  </testsuite>
  <testsuite name="boot-tests" tests="1" failures="0" errors="0" time="619.659">
  <testcase name="boot utils" time="0.067"/>
  </testsuite>
  <testsuite name="build-errors" tests="1" failures="0" errors="0" time="619.659">
  <testcase name="build errors - legacy handler error" time="12.937"/>
  </testsuite>
  <testsuite name="bundle-ignore-files" tests="1" failures="0" errors="0" time="619.659">
  <testcase name="bundle-ignore-files"/>
  </testsuite>
  <testsuite name="bundle" tests="2" failures="0" errors="0" time="619.659">
  <testcase name="bundle" time="97.825"/>
  <testcase name="bundle - verify sanitized asset names" time="104.554"/>
  </testsuite>
  <testsuite name="colon-converter-tests" tests="3" failures="0" errors="0" time="619.659">
  <testcase name="can't build local packages with colons" time="32.885"/>
  <testcase name="package with colons is unpacked as-is on unix" time="0.337"/>
  <testcase name="package with colons is converted on Windows" time="0.266"/>
  </testsuite>
  <testsuite name="command-line" tests="4" failures="0" errors="0" time="619.659">
  <testcase name="argument parsing" time="264.852"/>
  <testcase name="command-like options" time="3.742"/>
  <testcase name="rails reminders" time="14.016"/>
  <testcase name="meteor test-packages --test-app-path directory" time="34.071"/>
  </testsuite>
  </testsuites>`;

console.log(xml);

fs.writeFile("./tmp/1.xml", xml, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 