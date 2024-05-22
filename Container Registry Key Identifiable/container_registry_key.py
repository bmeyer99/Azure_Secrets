import docker

client = docker.from_env()
registry_username = "your_registry_username_here"
registry_password = "your_registry_password_here"
registry_url = "your_registry_url_here"

client.login(
    username=registry_username, password=registry_password, registry=registry_url
)
