const Manager = require("../lib/Manager")

describe("Get", () => {
  it("get Manager from getName", () => {
    const managerName = "Steve";
    const fakeManager = new Manager("Steve", 88, "Steve@biz.com", "234");
    expect(fakeManager.getName()).toBe(managerName);
  });
  it("get Manger id from getId", () => {
    const managerId = 88;
    const fakeManager = new Manager("Steve", 88, "Steve@biz.com", "234");
    expect(fakeManager.getId()).toBe(managerId);
  });
  it("get Manger email from getEmail", () => {
    const managerEmail = "Steve@biz.com";
   const fakeManager = new Manager("Steve", 88, "Steve@biz.com", "234");
    expect(fakeManager.getEmail()).toBe(managerEmail);
  });
  it("get Manager role from getRole", () => {
    const managerRole = "Manager";
    const fakeManager = new Manager("Steve", 88, "Steve@biz.com", "234");
    expect(fakeManager.getRole()).toBe(managerRole);
  });
});