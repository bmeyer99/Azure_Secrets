const axios = require('axios');

const url = 'https://dev.azure.com/{organization}/{project}/_apis/build/builds?api-version=6.0';
const token = 'your_personal_access_token_here';

const headers = {
    'Authorization': `Basic ${token}`,
    'Content-Type': 'application/json'
};

axios.get(url, { headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });