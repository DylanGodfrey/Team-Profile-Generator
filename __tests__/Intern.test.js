const Intern = require('../lib/Intern');

describe('Intern created from the Class', () => {
    const school = 'DylanGodfrey';

    it('getSchool method properly gets the employee ID', () => {
        const intern = new Intern('Dylan', 33, 'dylan.godfrey@gmail', school);
        expect(intern.getSchool()).toEqual(school);
    })

    it('Correctly overloads the "getRole" method of Employee', () => {
        const intern = new Intern('Dylan', 33, 'dylan.godfrey@gmail', school);
        expect(intern.getRole()).toEqual('Intern');
    })
})