const { BlobServiceClient } = require('@azure/storage-blob');

const storageAccountName = 'your_storage_account_name';
const storageAccountKey = 'your_storage_account_key';
const containerName = 'your_container_name';

const connectionString = `DefaultEndpointsProtocol=https;AccountName=${storageAccountName};AccountKey=${storageAccountKey};EndpointSuffix=core.windows.net`;
const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

async function listBlobs() {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    let blobs = containerClient.listBlobsFlat();
    for await (const blob of blobs) {
        console.log(`Blob name: ${blob.name}`);
    }
}

listBlobs().catch(console.error);