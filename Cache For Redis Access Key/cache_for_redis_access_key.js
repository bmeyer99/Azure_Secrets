const redis = require("redis");

const host = "your_redis_host_here";
const key = "your_redis_key_here";

const client = redis.createClient({
  host: host,
  password: key
});
