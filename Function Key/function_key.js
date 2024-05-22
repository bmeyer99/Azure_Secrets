const axios = require('axios');

const url = 'https://your-azure-function-app.azurewebsites.net/api/your-function-name';
const function_key = 'your_azure_function_key_here';

const params = {
    code: function_key
};

axios.get(url, { params })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });