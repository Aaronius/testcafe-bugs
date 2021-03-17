fixture("CSP").page("http://localhost:3000");

test("should pass without errors", async t => {
  await t.expect(true).eql(true);
});
