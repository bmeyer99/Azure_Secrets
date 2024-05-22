variable "azure_function_key" {
  description = "The key to access Azure Function"
  type        = string
  default     = "your_azure_function_key_here"
}

# Example of using the function key in a local-exec provisioner
resource "null_resource" "example" {
  provisioner "local-exec" {
    command = "curl -X GET 'https://your-azure-function-app.azurewebsites.net/api/your-function-name?code=${var.azure_function_key}'"
  }
}