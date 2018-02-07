var fs = require('fs');
const xml =
  `<testsuites>
<testsuite name="shell-tests" tests="1" failures="0" errors="0" time="265.57">
  <testcase name="meteor shell" time="85.64"/>
</testsuite>
<testsuite name="source-maps" tests="1" failures="0" errors="0" time="265.57">
  <testcase name="source maps from checkout" time="1.26"/>
</testsuite>
<testsuite name="static-html" tests="2" failures="0" errors="0" time="265.57">
  <testcase name="static-html - add static content to head and body" time="53.737"/>
  <testcase name="static-html - throws error" time="51.069"/>
</testsuite>
  <testsuite name="stylus-cross-packages" tests="1" failures="0" errors="0" time="265.57">
  <testcase name="can import stylus across packages" time="73.86"/>
</testsuite>
</testsuites>`;

console.log(xml);

fs.writeFile("./tmp/10.xml", xml, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 