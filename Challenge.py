import os

class Challenge: 

    def __init__(self):
        self.output = []
        self.tests = []
    
    def runTests(self):
        for testcase in self.tests:
            self.output.append(self.solve(testcase))
    
    def readInput(self, file_name):
        file = open('./inputs/' + file_name).read().split('\n\n')[1:]
        
        for testcase in file:
            self.tests.append(self.parseInput(testcase.split('\n')))

        print(file)
        