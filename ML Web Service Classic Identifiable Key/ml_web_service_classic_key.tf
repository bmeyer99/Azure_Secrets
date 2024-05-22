variable "azure_ml_service_classic_key" {
  description = "The key for Azure ML Web Service Classic"
  type        = string
  default     = "your_azure_ml_web_service_classic_key_here"
}

# Hypothetical use case where you might need the key in a deployment script
resource "null_resource" "invoke_ml_service" {
  provisioner "local-exec" {
    command = "curl -X POST -H 'Authorization: Bearer ${var.azure_ml_service_classic_key}' -H 'Content-Type: application/json' -d '{\"Inputs\": {\"input1\": [{\"Column1\": \"value1\", \"Column2\": \"value2\", \"Column3\": \"value3\"}]}, \"GlobalParameters\": {}}' 'https://your-azure-ml-service.azurewebsites.net/api/v1/service'"
  }
}