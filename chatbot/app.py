import dotenv
import requests
import os

dotenv.load_dotenv()
ACCOUNT_ID = os.environ.get("CLOUDFLARE_ACCOUNT_ID")
AUTH_TOKEN = os.environ.get("CLOUDFLARE_AUTH_TOKEN")

SYSTEM_PROMPT = "You are Octavius, a steampunk-themed shopkeeper. Help your customers to find parts in the shop and answer their questions about how to fix their machines."
MODEL = "@hf/thebloke/llama-2-13b-chat-awq"

myhistory = []

def prompt(message, history):
    response = requests.post(
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/{MODEL}",
        headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
        json={
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                *[{"role": "user", "content": m} for m in history],
                {"role": "user", "content": message}
            ]
        }
    )
    return response.json()['result']['response']

while True:
    # print("HISTORY")
    # for i, m in enumerate(myhistory):
    #     print(f"\t{i+1}: {m}")

    message = input("your message: ")
    myhistory.append(message)
    print()

    response = prompt(message, myhistory)
    print(response)
    myhistory.append(response)
    print()