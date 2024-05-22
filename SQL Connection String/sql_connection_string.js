const sql = require('mssql')

const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_server.database.windows.net',
    database: 'your_database',
    options: {
        encrypt: true, // Azure SQL requires encryption
        enableArithAbort: true
    }
}

sql.connect(config)
    .then(() => {
        console.log("Connected to Azure SQL Database!");
    })
    .catch(err => {
        console.error("Could not connect to Azure SQL Database: " + err);
    });