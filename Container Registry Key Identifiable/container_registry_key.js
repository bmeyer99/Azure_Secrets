const Docker = require('dockerode');

const docker = new Docker();
const registryUsername = "your_registry_username_here";
const registryPassword = "your_registry_password_here";
const registryUrl = "your_registry_url_here";

docker.checkAuth({
  username: registryUsername,
  password: registryPassword,
  serveraddress: registryUrl
}, function(err, data) {
  console.log(data);
});
