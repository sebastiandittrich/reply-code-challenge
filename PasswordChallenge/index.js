const Challenge = require('../Challenge')

module.exports = class PasswordChallenge extends Challenge {

    constructor() {
        super()

        this.testcase_length = 2
    }
    
    parseInput(testcase) {
        return {
            password_length: testcase[0].split(' ')[0],
            forbidden_length: testcase[0].split(' ')[1],
            forbidden_sequence: testcase[1]
        }
    }

    solve(testcase) {
        const padding = testcase.password_length
        const maxi = 2**testcase.password_length

        for(let i = 0; i < maxi; i++) {
            const binary = i.toString(2).padStart(2, '0')
            if(!binary.includes(testcase.forbidden_sequence)) {

            }
        }
    }

}