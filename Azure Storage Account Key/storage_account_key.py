from azure.storage.blob import BlobServiceClient

storage_account_name = "your_storage_account_name"
storage_account_key = "your_storage_account_key"
container_name = "your_container_name"

connection_string = f"DefaultEndpointsProtocol=https;AccountName={storage_account_name};AccountKey={storage_account_key};EndpointSuffix=core.windows.net"

blob_service_client = BlobServiceClient.from_connection_string(connection_string)

# List blobs in container
container_client = blob_service_client.get_container_client(container_name)
blob_list = container_client.list_blobs()
for blob in blob_list:
    print(blob.name)
