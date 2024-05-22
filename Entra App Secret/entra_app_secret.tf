# Provider Configuration:
provider "azurerm" {
  features {}

  client_id       = var.client_id
  client_secret   = var.client_secret
  tenant_id       = var.tenant_id
  subscription_id = var.subscription_id
}

variable "client_id" {}
variable "client_secret" {}
variable "tenant_id" {}
variable "subscription_id" {}




# Key Vault Secret Example:
resource "azurerm_key_vault" "example" {
  name                = "example-vault"
  location            = "West US"
  resource_group_name = "example-resources"
  tenant_id           = var.tenant_id
  sku_name            = "standard"

  soft_delete_retention_days = 7

  access_policy {
    tenant_id = var.tenant_id
    object_id = var.client_id

    secret_permissions = [
      "get",
      "list",
    ]
  }
}

resource "azurerm_key_vault_secret" "example" {
  name         = "example-secret"
  value        = "s3cr3t-value"
  key_vault_id = azurerm_key_vault.example.id
}



# Creating an Azure Resource:
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "West US"
}

resource "azurerm_storage_account" "example" {
  name                     = "examplestorageacct"
  resource_group_name      = azurerm_resource_group.example.name
  location                 = azurerm_resource_group.example.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}