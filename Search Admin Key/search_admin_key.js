const axios = require('axios');

const serviceName = 'your-azure-search-service';
const apiVersion = '2020-06-30';
const adminKey = 'your_azure_search_admin_key_here';
const url = `https://${serviceName}.search.windows.net/indexes?api-version=${apiVersion}`;

const headers = {
    'Content-Type': 'application/json',
    'api-key': adminKey
};

axios.get(url, { headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });