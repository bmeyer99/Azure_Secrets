// Using Azure Management Libraries with a Certificate:
const msRestNodeAuth = require("@azure/ms-rest-nodeauth");
const { ResourceManagementClient } = require("@azure/arm-resources");

const clientId = "your_client_id";
const tenantId = "your_tenant_id";
const subscriptionId = "your_subscription_id";
const certificatePath = "/path/to/your/certificate.pem";

msRestNodeAuth.loginWithServicePrincipalSecretWithCertificate(
    clientId,
    certificatePath,
    tenantId,
    (err, credentials) => {
        if (err) {
            console.error(err);
            return;
        }

        const client = new ResourceManagementClient(credentials, subscriptionId);
        
        client.resourceGroups.list().then((result) => {
            console.log(result);
        }).catch((err) => {
            console.error(err);
        });
    }
);



// Using Azure Key Vault Client:
const msRestNodeAuth = require("@azure/ms-rest-nodeauth");
const { KeyVaultClient } = require("@azure/keyvault");

const clientId = "your_client_id";
const tenantId = "your_tenant_id";
const certificatePath = "/path/to/your/certificate.pem";
const vaultUrl = "https://your-vault-name.vault.azure.net/";

msRestNodeAuth.loginWithServicePrincipalSecretWithCertificate(
    clientId,
    certificatePath,
    tenantId,
    (err, credentials) => {
        if (err) {
            console.error(err);
            return;
        }

        const client = new KeyVaultClient(credentials);
        
        client.getSecret(vaultUrl, 'your-secret-name', '').then((result) => {
            console.log(result.value);
        }).catch((err) => {
            console.error(err);
        });
    }
);



// Using Azure Storage Management Client:
const msRestNodeAuth = require("@azure/ms-rest-nodeauth");
const { StorageManagementClient } = require("@azure/arm-storage");

const clientId = "your_client_id";
const tenantId = "your_tenant_id";
const subscriptionId = "your_subscription_id";
const certificatePath = "/path/to/your/certificate.pem";

msRestNodeAuth.loginWithServicePrincipalSecretWithCertificate(
    clientId,
    certificatePath,
    tenantId,
    (err, credentials) => {
        if (err) {
            console.error(err);
            return;
        }

        const client = new StorageManagementClient(credentials, subscriptionId);
        
        client.storageAccounts.list().then((result) => {
            console.log(result);
        }).catch((err) => {
            console.error(err);
        });
    }
);