const axios = require('axios');

const url = 'https://your-azure-ml-service.azurewebsites.net/api/v1/service';
const service_key = 'your_azure_ml_web_service_classic_key_here';

const headers = {
    'Authorization': `Bearer ${service_key}`,
    'Content-Type': 'application/json'
};

const data = {
    "Inputs": {
        "input1": [
            {
                "Column1": "value1",
                "Column2": "value2",
                "Column3": "value3"
            }
        ]
    },
    "GlobalParameters": {}
};

axios.post(url, data, { headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });