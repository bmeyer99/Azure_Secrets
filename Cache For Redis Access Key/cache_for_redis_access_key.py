import redis

host = "your_redis_host_here"
key = "your_redis_key_here"

r = redis.Redis(host=host, password=key)
