import requests

service_name = "your-azure-search-service"
index_name = "your-index-name"
api_version = "2020-06-30"
query_key = "your_azure_search_query_key_here"
url = f"https://{service_name}.search.windows.net/indexes/{index_name}/docs?api-version={api_version}&search=*"

headers = {"api-key": query_key, "Content-Type": "application/json"}

response = requests.get(url, headers=headers)
print(response.json())
