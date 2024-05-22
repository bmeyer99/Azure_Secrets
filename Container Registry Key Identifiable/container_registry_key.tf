resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "West Europe"
}

resource "azurerm_container_registry" "example" {
  name                     = "exampleContainerRegistry"
  resource_group_name      = azurerm_resource_group.example.name
  location                 = azurerm_resource_group.example.location
  sku                      = "Basic"
  admin_enabled            = true
}

output "admin_username" {
  value = azurerm_container_registry.example.admin_username
}

output "admin_password" {
  value = azurerm_container_registry.example.admin_password
}
