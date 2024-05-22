variable "azure_search_query_key" {
  description = "Read-only access key for Azure Cognitive Search"
  type        = string
  default     = "your_azure_search_query_key_here"
}

# Hypothetical use case: Passing the query key to a module or external tool
resource "null_resource" "example_query_access" {
  provisioner "local-exec" {
    command = "echo Using Azure Search Query Key for read-only operations"
    environment = {
      QUERY_KEY = var.azure_search_query_key
    }
  }
}