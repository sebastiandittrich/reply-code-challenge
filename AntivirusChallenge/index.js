const Challenge = require('../Challenge')

module.exports = class AntivirusChallenge extends Challenge {

  parseInput(testcase) {
    return {
      antivirus_length: testcase.splice(0, 2)[1],
      texts: testcase
    }
  }

  parseOutput() {

  }

  solve(testcase) {
    
    for(const text of testcase.texts) {
      
    }

  }

}
