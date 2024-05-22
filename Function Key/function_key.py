import requests

url = "https://your-azure-function-app.azurewebsites.net/api/your-function-name"
function_key = "your_azure_function_key_here"

params = {"code": function_key}

response = requests.get(url, params=params)
print(response.text)
