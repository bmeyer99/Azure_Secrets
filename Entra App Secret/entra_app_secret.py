# Using MSAL for Authentication:
import msal
import requests

client_id = "your_client_id"
client_secret = "your_client_secret"
tenant_id = "your_tenant_id"
authority = f"https://login.microsoftonline.com/{tenant_id}"
scope = ["https://graph.microsoft.com/.default"]

app = msal.ConfidentialClientApplication(
    client_id, authority=authority, client_credential=client_secret
)

token_response = app.acquire_token_for_client(scopes=scope)
access_token = token_response.get("access_token")

headers = {"Authorization": "Bearer " + access_token}
response = requests.get("https://graph.microsoft.com/v1.0/me", headers=headers)

print(response.json())


# Using Azure Identity for Azure SDKs:
from azure.identity import ClientSecretCredential
from azure.keyvault.secrets import SecretClient

tenant_id = "your_tenant_id"
client_id = "your_client_id"
client_secret = "your_client_secret"
vault_url = "https://your-key-vault-name.vault.azure.net/"

credential = ClientSecretCredential(tenant_id, client_id, client_secret)
client = SecretClient(vault_url=vault_url, credential=credential)

secret = client.get_secret("your-secret-name")
print(secret.value)


# Using Azure Management Libraries:
from azure.identity import ClientSecretCredential
from azure.mgmt.resource import ResourceManagementClient

tenant_id = "your_tenant_id"
client_id = "your_client_id"
client_secret = "your_client_secret"
subscription_id = "your_subscription_id"

credential = ClientSecretCredential(tenant_id, client_id, client_secret)
resource_client = ResourceManagementClient(credential, subscription_id)

for resource_group in resource_client.resource_groups.list():
    print(resource_group.name)
