const Intern = require('../lib/Intern');

describe('Intern created from the Class', () => {
    const school = 'U of T';

    it('getSchool method properly gets the employee ID', () => {
        const intern = new Intern('Dylan', 33, 'dylan.godfrey@gmail.com', school);
        expect(intern.getSchool()).toEqual(school);
    })

    it('Correctly overloads the "getRole" method of Employee', () => {
        const intern = new Intern('Dylan', 33, 'dylan.godfrey@gmail.com', school);
        expect(intern.getRole()).toEqual('Intern');
    })
})