import requests

service_name = "your-azure-search-service"
api_version = "2020-06-30"
admin_key = "your_azure_search_admin_key_here"
url = f"https://{service_name}.search.windows.net/indexes?api-version={api_version}"

headers = {"Content-Type": "application/json", "api-key": admin_key}

response = requests.get(url, headers=headers)
print(response.json())
