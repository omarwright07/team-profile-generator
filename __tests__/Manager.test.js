const Manager = require('../lib/Manager');

console.log(new Manager());

test('create an manager object', () => {
    const manager = new Manager('John', 10, 'john@mail.com', 201);

    expect(manager.name).toBe('John');
    expect(manager.id).toEqual(10);
    expect(manager.email).toBe('john@mail.com');
    expect(manager.officeNumber).toBe(201);
});

test("get a manager's role", () => {
    const manager = new Manager();

    expect(manager.role).toBe('Manager');
})