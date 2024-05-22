from azure.cosmos import CosmosClient

url = "your_cosmosdb_url_here"
key = "your_cosmosdb_key_here"

client = CosmosClient(url, credential=key)
