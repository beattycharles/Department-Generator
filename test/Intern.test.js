const Intern = require('../lib/intern.js');

describe("Get", () => {
    it('get intern from getName', () => {
        const internName = 'Ed';
        const fakeIntern = new Intern('Ed', 38, 'ed@ed.com', 'Uncc');
        expect(fakeIntern.getName()).toBe(internName);
    })
    it('get intern id from getId', () => {
        const internId = 38;
        const fakeIntern = new Intern("Ed", 38, "ed@ed.com", "Uncc");
        expect(fakeIntern.getId()).toBe(internId)
    })
    it('get intern email from getEmail', () => {
        const internEmail = "ed@ed.com";
        const fakeIntern = new Intern("Ed", 38, "ed@ed.com", "Uncc");
        expect(fakeIntern.getEmail()).toBe(internEmail)
        })
    it("get intern school from getSchool", () => {
            const internSchool = 'Uncc';
            const fakeIntern = new Intern("Ed", 38, "ed@ed.com", "Uncc");
            expect(fakeIntern.getSchool()).toBe(internSchool);
        });
    it("get intern role from getRole", () => {
            const internRole = 'Intern';
            const fakeIntern = new Intern("Ed", 38, "ed@ed.com", "Uncc");
            expect(fakeIntern.getRole()).toBe(internRole);
            });
})