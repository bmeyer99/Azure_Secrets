resource "azurerm_storage_account" "example" {
  name                     = "examplestorageacc"
  resource_group_name      = azurerm_resource_group.example.name
  location                 = azurerm_resource_group.example.location
  account_tier             = "Standard"
  account_replication_type = "GRS"

  tags = {
    environment = "example"
  }
}

output "primary_storage_account_key" {
  value     = azurerm_storage_account.example.primary_access_key
  sensitive = true
}