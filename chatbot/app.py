from flask import Flask, request
from chatbot import Chatbot
  
app = Flask(__name__)
cb = Chatbot()
  
@app.route('/', methods = ['GET', 'POST']) 
def prompt(): 
    if(request.method == 'POST'): 
        data = request.get_json()
        return cb.prompt(data['prompt'], data['message_history'])

if __name__ == '__main__': 
    app.run(debug = True)