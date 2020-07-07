const Engineer = require("../lib/Engineer");

test("Can set gitHub account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.gitHub).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get gitHub username via getGitHub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGitHub()).toBe(testValue);
});
