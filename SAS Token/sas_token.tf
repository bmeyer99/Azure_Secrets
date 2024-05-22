variable "azure_sas_token" {
  description = "Azure SAS Token for accessing storage"
  type        = string
  default     = "your_sas_token_here"
}

# Using the SAS token in a local-exec provisioner to interact with Azure Blob Storage
resource "null_resource" "example_blob_access" {
  provisioner "local-exec" {
    command = "curl 'https://yourstorageaccount.blob.core.windows.net/your-container-name/your-blob-name?${var.azure_sas_token}'"
  }
}