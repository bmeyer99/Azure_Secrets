const { BlobServiceClient } = require('@azure/storage-blob');

const storageAccountUrl = 'https://yourstorageaccount.blob.core.windows.net/';
const sasToken = 'your_sas_token_here';

const blobServiceClient = new BlobServiceClient(`${storageAccountUrl}?${sasToken}`);

const containerName = 'your-container-name';
const blobName = 'your-blob-name';

async function downloadBlob() {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlobClient(blobName);
    const downloadBlockBlobResponse = await blobClient.download(0);
    console.log(await downloadBlockBlobResponse.blobBody());
}

downloadBlob().catch(console.error);