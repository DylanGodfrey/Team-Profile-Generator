const Manager = require('../lib/Manager');

describe('Manager created from the Class', () => {
    it('Can create an Office Number', () => {
        let number = 1234;
        const manager = new Manager('Dylan', 33, 'dylan.godfrey@gmail.com', number);
        expect(manager.getOffice()).toEqual(number);
    })

    it('Correctly overloads the "getRole" method of Employee', () => {
        const manager = new Manager('Dylan', 33, 'dylan.godfrey@gmail.com', 33);
        expect(manager.getRole()).toEqual('Manager');
    })
});