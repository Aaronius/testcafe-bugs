import {RequestMock} from "testcafe";

fixture.only("edge configs").page("http://localhost:3000");

const requestMock = RequestMock()
  .onRequestTo({
    url: "https://edge.adobe.io/configs/user/edge?orderby=title",
    method: "GET"
  })
  .respond(
    {
      foo: "bar"
    },
    200,
    {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Accept,Authorization,Content-Type,If-Match,If-None-Match,User-Agent,x-api-key,x-gw-ims-org-id,x-request-id,x-debug-enabled,Keep-Alive,X-Requested-With"
    }
  )

test.requestHooks(requestMock)("My first test", async t => {
  // Test code
});
