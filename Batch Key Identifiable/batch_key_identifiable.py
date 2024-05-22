# Using Azure Batch Management SDK:
from azure.batch import BatchServiceClient
from azure.batch.batch_auth import SharedKeyCredentials
from azure.common.credentials import ServicePrincipalCredentials

batch_account_name = "your_batch_account_name"
batch_account_key = "your_batch_account_key"
batch_account_url = "https://your_batch_account.region.batch.azure.com"

credentials = SharedKeyCredentials(batch_account_name, batch_account_key)
batch_client = BatchServiceClient(credentials, base_url=batch_account_url)

# Example: List all pools
pools = batch_client.pool.list()
for pool in pools:
    print(pool.id)


# Submitting a Job:
from azure.batch.models import PoolInformation, JobAddParameter

job_id = "my-job"
pool_id = "my-pool"

job = JobAddParameter(id=job_id, pool_info=PoolInformation(pool_id=pool_id))
batch_client.job.add(job)
print(f"Job {job_id} added.")


# Adding a Task to a Job:
from azure.batch.models import TaskAddParameter

job_id = "my-job"
task_id = "my-task"
command_line = "/bin/bash -c 'echo Hello, World!'"

task = TaskAddParameter(id=task_id, command_line=command_line)
batch_client.task.add(job_id=job_id, task=task)
print(f"Task {task_id} added to job {job_id}.")
