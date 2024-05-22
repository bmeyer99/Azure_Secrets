// Using Azure Batch Management Client:
const { BatchServiceClient, SharedKeyCredentials } = require("@azure/batch");

const accountName = "your_batch_account_name";
const accountKey = "your_batch_account_key";
const batchUrl = "https://your_batch_account.region.batch.azure.com";

const credentials = new SharedKeyCredentials(accountName, accountKey);
const batchClient = new BatchServiceClient(credentials, batchUrl);

// Example: List all pools
batchClient.pool.list((err, result) => {
    if (err) {
        console.error(err);
    } else {
        result.forEach(pool => {
            console.log(pool.id);
        });
    }
});



// Submitting a Job:
const jobId = "my-job";
const poolId = "my-pool";

batchClient.job.add({
    id: jobId,
    poolInfo: { poolId: poolId }
}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Job ${jobId} added.`);
    }
});



// Adding a Task to a Job:
const jobId = "my-job";
const taskId = "my-task";
const commandLine = "/bin/bash -c 'echo Hello, World!'";

batchClient.task.add(jobId, {
    id: taskId,
    commandLine: commandLine
}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Task ${taskId} added to job ${jobId}.`);
    }
});