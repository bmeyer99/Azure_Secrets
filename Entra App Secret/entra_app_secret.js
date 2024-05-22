// Using @azure/identity with @azure/keyvault-secrets:
const { ClientSecretCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const tenantId = "your_tenant_id";
const clientId = "your_client_id";
const clientSecret = "your_client_secret";
const vaultUrl = "https://your-key-vault-name.vault.azure.net/";

const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
const client = new SecretClient(vaultUrl, credential);

async function getSecret() {
    const secret = await client.getSecret("your-secret-name");
    console.log(secret.value);
}

getSecret();




// Using @azure/msal-node for Authentication:
const { ConfidentialClientApplication } = require("@azure/msal-node");

const config = {
    auth: {
        clientId: "your_client_id",
        authority: "https://login.microsoftonline.com/your_tenant_id",
        clientSecret: "your_client_secret",
    },
};

const client = new ConfidentialClientApplication(config);

const tokenRequest = {
    scopes: ["https://graph.microsoft.com/.default"],
};

client.acquireTokenByClientCredential(tokenRequest).then((response) => {
    console.log(response.accessToken);
}).catch((error) => {
    console.error(error);
});


// Using axios to Access Azure Resources:
const axios = require('axios');
const { ConfidentialClientApplication } = require("@azure/msal-node");

const config = {
    auth: {
        clientId: "your_client_id",
        authority: "https://login.microsoftonline.com/your_tenant_id",
        clientSecret: "your_client_secret",
    },
};

const client = new ConfidentialClientApplication(config);

const tokenRequest = {
    scopes: ["https://management.azure.com/.default"],
};

async function getResourceGroups() {
    try {
        const response = await client.acquireTokenByClientCredential(tokenRequest);
        const token = response.accessToken;

        const resourceResponse = await axios.get("https://management.azure.com/subscriptions/your_subscription_id/resourcegroups?api-version=2021-04-01", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(resourceResponse.data);
    } catch (error) {
        console.error(error);
    }
}

getResourceGroups();