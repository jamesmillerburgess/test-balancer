var fs = require('fs');
const xml =
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
  </testsuites>`;

console.log(xml);

fs.writeFile("./results/2.xml", xml, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 