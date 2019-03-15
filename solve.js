const challenge_name = process.argv[2]

const Challenge = require('./' + challenge_name)
const challenge = new Challenge()

challenge.readInput('1')

challenge.runTests()