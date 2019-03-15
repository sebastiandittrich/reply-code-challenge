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
        const file = fs.readFileSync(`./${this.constructor.name}/inputs/${file_name}`, 'utf-8').split('\n\n')

        const tests = {data: [], total: file.splice(0, 1)[0]}

        for(let lines of file) {

        tests.data.push(this.parseInput(lines.split('\n')))

        }

        this.tests = tests
    }
}