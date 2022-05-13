const { expect } = require('expect');
const Engineer = require('../lib/engineer');

console.log(new Engineer());

test('create an engineer object', () => {
    const engineer = new Engineer('John', 10, 'john@mail.com', 'johnsmith01');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toEqual(10);
    expect(engineer.email).toBe('john@mail.com');
    expect(engineer.gitHub).toBe('johnsmith01');
});

test("get an engineer's GitHub", () => {
    const engineer = new Engineer('John', 10, 'john@mail.com', 'johnsmith01');

    expect(engineer.getGithub()).toBe('johnsmith01');
})

test("get an engineer's role", () => {
    const engineer = new Engineer();

    expect(engineer.role).toBe('Engineer');
});