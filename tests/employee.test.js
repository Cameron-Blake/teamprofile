const Employee = require('../lib/Employee')



it("can instatiate to be an object" , () => {
        const e = new Employee();

    expect(typeof (e)).toBe('object');
    });


it("Can set name via constructor argument", () => {
    const name = "Cameron";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

it("Can set id via constructor argument", () => {
    const testValue = 40;
    const e = new Employee("Cameron", testValue);
    expect(e.id).toBe(testValue);
});

it("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Cameron", 1, testValue);
    expect(e.email).toBe(testValue);
});

describe("getName", () => {
    it("Can get name via getName()", () => {
        const testValue = "Cameron";
        const e = new Employee(testValue);
        expect(e.getName()).toBe(testValue);
    });
});
    
describe("getId", () => {
    it("Can get id via getId()", () => {
        const testValue = 100;
        const e = new Employee("Cameron", testValue);
        expect(e.getId()).toBe(testValue);
    });
});
    
describe("getEmail", () => {
    it("Can get email via getEmail()", () => {
        const testValue = "test@test.com";
        const e = new Employee("Cameron", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    });
});
    
describe("getRole", () => {
    it("getRole() should return \"Employee\"", () => {
        const testValue = "Employee";
        const e = new Employee("Cameron", 1, "test@test.com");
        expect(e.getRole()).toBe(testValue);
    });
});