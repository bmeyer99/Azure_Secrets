import requests

url = (
    "https://dev.azure.com/{organization}/{project}/_apis/build/builds?api-version=6.0"
)
token = "your_personal_access_token_here"

headers = {"Authorization": "Basic " + token, "Content-Type": "application/json"}

response = requests.get(url, headers=headers)
print(response.json())
