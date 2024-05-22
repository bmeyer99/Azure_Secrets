import requests
import json

url = "https://your-azure-ml-service.azurewebsites.net/api/v1/service"
service_key = "your_azure_ml_web_service_classic_key_here"

headers = {"Authorization": f"Bearer {service_key}", "Content-Type": "application/json"}

data = json.dumps(
    {
        "Inputs": {
            "input1": [{"Column1": "value1", "Column2": "value2", "Column3": "value3"}]
        },
        "GlobalParameters": {},
    }
)

response = requests.post(url, headers=headers, data=data)
print(response.json())
