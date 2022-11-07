const Employee = require('../lib/Employee');

describe('Employee created from the Class', () => {
    it('getName method properly displays that Employees name', () => {
        const name = 'Dylan';
        const employeeInstance = new Employee(name);
        expect(employeeInstance.getName()).toBe(name);
    })

    it('getId method properly gets the employee ID', () => {
        let number = 33;
        const employee = new Employee('Dylan', number, 'dylan.godfrey@gmail');
        expect(employee.getId()).toEqual(number);
    })

    it('getEmail method properly gets the employee email', () => {
        const email = 'dylan.godfrey@gmail';
        const employee = new Employee('Dylan', 33, email);
        expect(employee.getEmail()).toEqual(email);
    })

    it('getRole method properly gets the employee role', () => {
        const employee = new Employee('Dylan', 33, 'dylan.godfrey@gmail');
        expect(employee.getRole()).toEqual('Employee');
    })
});