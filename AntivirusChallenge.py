from Challenge import Challenge

class AntivirusChallenge(Challenge): 
    def parseInput(self, testcase):
        return {
            "antivirus_length": testcase[1],
            "texts": testcase[2:]
        }
    def solve(self, testcase):
        print(testcase)