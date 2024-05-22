# Using Azure Management Libraries with a Certificate:
from azure.common.credentials import ServicePrincipalCredentials
from azure.mgmt.resource import ResourceManagementClient

tenant_id = "your_tenant_id"
client_id = "your_client_id"
certificate_path = "/path/to/your/certificate.pem"

credentials = ServicePrincipalCredentials(
    client_id=client_id,
    secret=None,
    tenant=tenant_id,
    certificate_path=certificate_path,
)

subscription_id = "your_subscription_id"
resource_client = ResourceManagementClient(credentials, subscription_id)

# List all resource groups
for rg in resource_client.resource_groups.list():
    print(rg.name)




# Using Azure Key Vault Client:
from azure.keyvault import KeyVaultClient
from azure.common.credentials import ServicePrincipalCredentials

tenant_id = "your_tenant_id"
client_id = "your_client_id"
certificate_path = "/path/to/your/certificate.pem"

credentials = ServicePrincipalCredentials(
    client_id=client_id,
    secret=None,
    tenant=tenant_id,
    certificate_path=certificate_path,
)

key_vault_client = KeyVaultClient(credentials)
vault_url = "https://your-vault-name.vault.azure.net/"

# Retrieve a secret
secret = key_vault_client.get_secret(vault_url, "your-secret-name", "")
print(secret.value)





# Using Azure Storage Management Client:
from azure.common.credentials import ServicePrincipalCredentials
from azure.mgmt.storage import StorageManagementClient

tenant_id = 'your_tenant_id'
client_id = 'your_client_id'
certificate_path = '/path/to/your/certificate.pem'

credentials = ServicePrincipalCredentials(
    client_id=client_id,
    secret=None,
    tenant=tenant_id,
    certificate_path=certificate_path
)

subscription_id = 'your_subscription_id'
storage_client = StorageManagementClient(credentials, subscription_id)

# List all storage accounts
for account in storage_client.storage_accounts.list():
    print(account.name)