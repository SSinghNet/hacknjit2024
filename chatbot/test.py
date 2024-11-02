import os
import requests
import dotenv

dotenv.load_dotenv()

ACCOUNT_ID = os.environ.get("ACCOUNT_ID")
AUTH_TOKEN = os.environ.get("CLOUDFLARE_AUTH_TOKEN")

SYSTEM_PROMPT = "You are a friendly assistant"

messages = []

while True:
  message = input("ai interface. send ur message: ")
  messages.append(message)

  response = requests.post(
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@hf/thebloke/zephyr-7b-beta-awq",
      headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
      json={
        "messages": [
          {"role": "system", "content": SYSTEM_PROMPT},
          {"role": "user", "content": "hi my name is joe"},
          # *[{"role": "user", "content": m} for m in messages],
          {"role": "user", "content": message}
        ]
      }
  )
  result = response.json()
  print(result['result']['response'])