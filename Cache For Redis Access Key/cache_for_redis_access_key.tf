resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "West Europe"
}

resource "azurerm_redis_cache" "example" {
  name                = "example-cache"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  capacity            = 0
  family              = "C"
  sku_name            = "Basic"
  enable_non_ssl_port = false
  minimum_tls_version = "1.2"

  redis_configuration {
    maxmemory_reserved = 2
    maxmemory_delta    = 2
    maxmemory_policy   = "allkeys-lru"
  }
}

output "hostname" {
  value = azurerm_redis_cache.example.hostname
}

output "primary_access_key" {
  value = azurerm_redis_cache.example.primary_access_key
}

output "secondary_access_key" {
  value = azurerm_redis_cache.example.secondary_access_key
}
