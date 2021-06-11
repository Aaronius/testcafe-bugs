#!/usr/bin/env node
const path = require("path");
const createTestCafe = require("testcafe");
const testsDir = path.join(__dirname, "../test/sample");

(async () => {
  const testcafe = await createTestCafe("localhost", 1337, 1338);
  const failedCount = await testcafe
    .createLiveModeRunner()
    .clientScripts("preventSpecificErrorsFromFailingTests.js")
    .src(testsDir)
    .browsers("chrome")
    .run();
  testcafe.close();
  process.exit(failedCount ? 1 : 0);
})();
