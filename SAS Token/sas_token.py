from azure.storage.blob import BlobServiceClient

storage_account_url = "https://yourstorageaccount.blob.core.windows.net/"
sas_token = "your_sas_token_here"

blob_service_client = BlobServiceClient(
    account_url=storage_account_url, credential=sas_token
)

container_name = "your-container-name"
blob_name = "your-blob-name"

blob_client = blob_service_client.get_blob_client(
    container=container_name, blob=blob_name
)

downloaded_blob = blob_client.download_blob().readall()
print(downloaded_blob)
