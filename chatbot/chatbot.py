import dotenv
import requests
import os

dotenv.load_dotenv()
ACCOUNT_ID = os.environ.get("CLOUDFLARE_ACCOUNT_ID")
AUTH_TOKEN = os.environ.get("CLOUDFLARE_AUTH_TOKEN")

system_prompt = "You are Octavius, a steampunk-themed shopkeeper. Help your customers to find parts in the shop and answer their questions about how to fix their machines."
model = "@hf/thebloke/llama-2-13b-chat-awq"
max_tokens = 256

def prompt(message, history):
    response = requests.post(
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/{model}",
        headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
        json={
            "messages": [
                {"role": "system", "content": system_prompt},
                *history,
                {"role": "user", "content": message}
            ],
            "max_tokens" : max_tokens
        }
    )
    response.raise_for_status()
    return response.json()['result']['response']

def runInTerminal():
    myhistory = []

    while True:
        message = input("your message: ")
        response = prompt(message, myhistory)
        print("\n" + response + "\n")
        myhistory.append({"role": "user", "content": message})
        myhistory.append({"role": "assistant", "content": response})

        # print("HISTORY")
        # for i, m in enumerate(myhistory):
        #     print(f"\t{i+1}: {m}")
        # print()

if __name__ == '__main__':
    runInTerminal()