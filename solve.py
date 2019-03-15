import sys

challenge_name = sys.argv[1]
input_file = sys.argv[2]

Challenge = getattr(__import__(challenge_name), challenge_name)

challenge = Challenge()

challenge.readInput(input_file)
challenge.runTests()