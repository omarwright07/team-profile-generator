const Intern = require('../lib/Intern');

console.log(new Intern());

test('create an intern object', () => {
    const intern = new Intern('John', 10, 'john@mail.com', 'tech school');

    expect(intern.name).toBe('John');
    expect(intern.id).toEqual(10);
    expect(intern.email).toBe('john@mail.com');
    expect(intern.school).toBe('tech school');
});

test("get an intern's school", () => {
    const intern = new Intern('John', 10, 'john@mail.com', 'tech school');

    expect(intern.getSchool()).toBe('tech school');
})

test("get an intern's role", () => {
    const intern = new Intern();

    expect(intern.role).toBe('Intern');
});