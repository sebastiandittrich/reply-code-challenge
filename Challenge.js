const fs = require('fs')

module.exports = class Challenge {

    constructor() {
        this.output = []
    }

    runTests() {
        for(const testcase of this.tests.data) {
            this.output.push(this.solve(testcase))
        }
    }

    readInput(file_name) {
        let file = fs.readFileSync(`./${this.constructor.name}/inputs/${file_name}`, 'utf-8').split('\n')

        const tests = {data: [], total: file.splice(0, 1)[0]}

        let parsed_file = []

        // console.log(this.testcase_length)

        for(let i = 0; i < file.length; i = i+this.testcase_length) {
            tests.data.push(this.parseInput(file.slice(i, i+this.testcase_length)))
        }

        this.tests = tests
    }
}