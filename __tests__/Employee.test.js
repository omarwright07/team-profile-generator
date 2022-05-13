const Employee = require('../lib/Employee');

console.log(new Employee());

test('create an employee object', () => {
    const employee = new Employee();

    expect(employee.name).toBe('Test');
    expect(employee.id).toEqual(-1);
    expect(employee.email).toBe('test@mail.com');
});