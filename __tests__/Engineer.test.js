const Engineer = require('../lib/Engineer');

describe('Engineer created from the Class', () => {
    const github = 'DylanGodfrey';
  
    it('getId method properly gets the employee ID', () => {
        const engineer = new Engineer('Dylan', 33, 'dylan.godfrey@gmail', github);
        expect(engineer.getGithub()).toEqual(github);
    })

    it('Correctly overloads the "getRole" method of Employee', () => {
        const engineer = new Engineer('Dylan', 33, 'dylan.godfrey@gmail', github);
        expect(engineer.getRole()).toEqual('Engineer');
    })
})