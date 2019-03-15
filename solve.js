const challenge_name = process.argv[2]
const input = process.argv[3]

const Challenge = require('./' + challenge_name)
const challenge = new Challenge()

challenge.readInput(input)

challenge.runTests()