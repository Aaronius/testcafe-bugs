import { RequestLogger } from "testcafe";

const networkLoggerOptions = {
  logRequestHeaders: true,
  logRequestBody: true,
  logResponseBody: true,
  stringifyResponseBody: false,
  stringifyRequestBody: true,
  logResponseHeaders: true,
};

const requestLogger = RequestLogger(
  "https://cataas.com/cat/cute",
  networkLoggerOptions
);

fixture("Bug Test").page("http://localhost:3000").requestHooks(requestLogger);

test("should pass without errors", async (t) => {
  await t.expect(requestLogger.requests.length).eql(1);
});
