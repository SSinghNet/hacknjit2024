import dotenv
import os
import requests
import json

class Chatbot:
    def __init__(self):
        dotenv.load_dotenv()
        self.ACCOUNT_ID = os.environ.get("CLOUDFLARE_ACCOUNT_ID")
        self.AUTH_TOKEN = os.environ.get("CLOUDFLARE_AUTH_TOKEN")

        self.system_prompt = "You are Octavius, a steampunk-themed shopkeeper. Help your customers to find parts in the shop and answer their questions about how to fix their machines."
        self.model = "@hf/thebloke/llama-2-13b-chat-awq"
        # self.model = "@hf/nousresearch/hermes-2-pro-mistral-7b"
        self.max_tokens = 256

    def getAllItems(self):
        response ="""[
{
    "id": "item1",
    "name": "Iron Gear",
    "description": "A simple iron gear"
},
{
    "id": "item2",
    "name": "Brass Pipe",
    "description": "A fancy brass pipe"
}
]"""
        items = json.loads(response)
        # for item in items:
        #     item.pop("id")
        return items

    def prompt(self, message, history):
        response = requests.post(
        f"https://api.cloudflare.com/client/v4/accounts/{self.ACCOUNT_ID}/ai/run/{self.model}",
            headers={"Authorization": f"Bearer {self.AUTH_TOKEN}"},
            json={
                "messages": [
                    {"role": "system", "content": self.system_prompt},
                    *history,
                    {"role": "user", "content": message}
                ],
                # "tools": [
                #     {
                #     "name": "getAllItems",
                #     "description": "Provides a list of items with their ID, name, and description.",
                #     "parameters": {}
                #     }
                # ],
                "max_tokens" : self.max_tokens
            }
        )
        response.raise_for_status()
        return response.json()['result']['response']

    def runInTerminal(self):
        myhistory = []

        while True:
            message = input("your message: ")
            response = self.prompt(message, myhistory)
            print("\n" + response + "\n")
            myhistory.append({"role": "user", "content": message})
            myhistory.append({"role": "assistant", "content": response})

            # print("HISTORY")
            # for i, m in enumerate(myhistory):
            #     print(f"\t{i+1}: {m}")
            # print()

if __name__ == '__main__':
    cb = Chatbot()
    cb.runInTerminal()