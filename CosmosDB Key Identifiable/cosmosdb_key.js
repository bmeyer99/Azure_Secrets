const { CosmosClient } = require("@azure/cosmos");

const endpoint = "your_cosmosdb_url_here";
const key = "your_cosmosdb_key_here";

const client = new CosmosClient({ endpoint, key });
