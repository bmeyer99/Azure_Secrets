const axios = require('axios');

const serviceName = 'your-azure-search-service';
const indexName = 'your-index-name';
const apiVersion = '2020-06-30';
const queryKey = 'your_azure_search_query_key_here';
const url = `https://${serviceName}.search.windows.net/indexes/${indexName}/docs?api-version=${apiVersion}&search=*`;

const headers = {
    'api-key': queryKey,
    'Content-Type': 'application/json'
};

axios.get(url, { headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });