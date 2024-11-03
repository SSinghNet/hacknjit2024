import dotenv
import os
import requests
import json

# import cloudflare

# client = cloudflare.Cloudfare()

class Chatbot:
    def __init__(self):
        dotenv.load_dotenv()
        self.ACCOUNT_ID = os.environ.get("CLOUDFLARE_ACCOUNT_ID")
        self.AUTH_TOKEN = os.environ.get("CLOUDFLARE_AUTH_TOKEN")

        self.system_prompt = (
            "Do not act like an AI language model. You are a chatbot that will act as the shopkeeper of a machine parts store."
            "Customers will ask you for information about parts, and you will answer using only the provided parts list. Do not use real-world information to answer their questions."
            "Here is the list of items: " + str(Chatbot.getAllItems()) +
            "Only use the list to answer questions. If a customer asks about an item that is not in the list, tell them that you do not have it in your shop."
        )
        self.model = "@hf/thebloke/llama-2-13b-chat-awq"
        self.max_tokens = 256

    def getAllItems():
        with open("chatbot/items.json") as f:
            items = json.loads(f.readline())
        for item in items:
            item.pop("tags")
            item.pop("image")
            item.pop("id")
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
                "max_tokens": self.max_tokens
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

if __name__ == '__main__':
    cb = Chatbot()
    cb.runInTerminal()