from chatbot import Chatbot
import sys
import json

cb = Chatbot()

if __name__ == '__main__': 
    if len(sys.argv) > 1:
        jsonData = json.loads(sys.argv[1].replace("'", "\""));
        print(jsonData)
        response = cb.prompt(jsonData["prompt"], jsonData["messageHistory"])
        print(response)