from flask import Flask, request
import chatbot
  
app = Flask(__name__)
  
# on the terminal type: curl http://127.0.0.1:5000/ 
# returns hello world when we use GET. 
# returns the data that we send when we use POST. 
@app.route('/', methods = ['GET', 'POST']) 
def prompt(): 
    if(request.method == 'POST'): 
        data = request.get_json()
        return chatbot.prompt(data['prompt'], data['message_history'])

if __name__ == '__main__': 
    app.run(debug = True)