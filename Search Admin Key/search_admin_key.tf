variable "azure_search_admin_key" {
  description = "The admin key for Azure Cognitive Search service"
  type        = string
  default     = "your_azure_search_admin_key_here"
}

# Using the admin key in a local-exec provisioner for setup or management tasks
resource "null_resource" "setup_search_service" {
  provisioner "local-exec" {
    command = "curl -X GET 'https://${var.azure_search_admin_key}.search.windows.net/indexes?api-version=2020-06-30' -H 'api-key: ${var.azure_search_admin_key}'"
  }
}