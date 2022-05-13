function Employee() {
    this.name = 'Test';
    this.id = -1;
    this.email = 'test@mail.com';
}

Employee.prototype.getName = function() {
    return this.id;
};

Employee.prototype.getId = function() {
    return this.id;
};

Employee.prototype.getEmail = function() {
    return this.email;
};

Employee.prototype.getRole = function(assignedRole) {
    if(assignedRole == '') {
        return this.role = 'Employee';
    }
    return this.role = '';
};

module.exports = Employee;