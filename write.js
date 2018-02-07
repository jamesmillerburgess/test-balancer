var fs = require('fs');
const xml = [
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
  </testsuites>`,
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
  </testsuites>`,
  `<testsuites>
  <testsuite name="compiler-plugins" tests="8" failures="0" errors="0" time="457.07">
  <testcase name="compiler plugin caching - coffee" time="96.331"/>
  <testcase name="compiler plugin caching - less" time="86.542"/>
  <testcase name="compiler plugin caching - stylus" time="88.197"/>
  <testcase name="compiler plugin caching - local plugin" time="60.651"/>
  <testcase name="compiler plugins - duplicate extension" time="26.243"/>
  <testcase name="compiler plugins - inactive source" time="36.264"/>
  <testcase name="compiler plugins - compiler throws" time="12.623"/>
  <testcase name="compiler plugins - compiler addAsset" time="50.212"/>
  </testsuite>
  </testsuites>`,
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
  </testsuites>`,
];

console.log(xml);

const group = process.argv[2];
fs.writeFile(`./results/${group}.xml`, xml, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 