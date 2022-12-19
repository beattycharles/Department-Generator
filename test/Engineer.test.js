const Engineer = require("../lib/engineer.js");

describe("Get", () => {
  it("can get name via getName", () => {
    const engineerName = "Bob";
    const fakeEngineer = new Engineer("Bob", 21, "bob@gmail.com", "bobgit");
    expect(fakeEngineer.getName()).toBe(engineerName);
  });

  it("can get name via getId", () => {
    const engineerId = 44;
    const fakeEngineer = new Engineer("Bob", 44, "bob@gmail.com", "bobgit");
    expect(fakeEngineer.getId()).toBe(engineerId);
  });

  it("can get name via getEmail", () => {
    const engineerEmail = "bob@gmail.com";
    const fakeEngineer = new Engineer("Bob", 44, "bob@gmail.com", "bobgit");
    expect(fakeEngineer.getEmail()).toBe(engineerEmail);
  });

  it("can get name via getGithub", () => {
    const engineerGithub = "bobgit";
    const fakeEngineer = new Engineer("Bob", 44, "bob@gmail.com", "bobgit");
    expect(fakeEngineer.getGithub()).toBe(engineerGithub);
  });

  it("can get role via getRole", () => {
    const engineerRole = "Engineer";
    const fakeEngineer = new Engineer("Bob", 44, "bob@gmail.com", "bobgit");
    expect(fakeEngineer.getRole()).toBe(engineerRole);
  });
});
