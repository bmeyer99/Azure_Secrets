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




# Creating an Azure Batch Account:
resource "azurerm_batch_account" "example" {
  name                = "examplebatchaccount"
  location            = "West US"
  resource_group_name = "example-resources"

  storage_account_id = azurerm_storage_account.example.id
}



# Creating a Batch Pool:
resource "azurerm_batch_pool" "example" {
    name                = "examplepool"
    resource_group_name = "example-resources"
    account_name        = azurerm_batch_account.example.name
    vm_size             = "STANDARD_A1_v2"
    node_agent_sku_id   = "batch.node.ubuntu 18.04"

    storage_image_reference {
        publisher = "Canonical"
        offer     = "UbuntuServer"
        sku       = "18.04-LTS"
        version   = "latest"
    }
}