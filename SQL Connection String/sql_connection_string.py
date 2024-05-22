import pyodbc

server = "your_server.database.windows.net"
database = "your_database"
username = "your_username"
password = "your_password"
driver = "{ODBC Driver 17 for SQL Server}"

# Construct connection string
connection_string = f"DRIVER={driver};SERVER=tcp:{server};PORT=1433;DATABASE={database};UID={username};PWD={password}"

# Create connection
conn = pyodbc.connect(connection_string)
print("Connected to Azure SQL Database!")
