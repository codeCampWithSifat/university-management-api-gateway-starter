import { createClient } from 'redis';
import config from '../config';

let redisClient = createClient({
  url: config.redis.url
});

redisClient.on('error', (error) => console.log('Redis Error', error));
redisClient.on('connect', () => console.log('Redis Connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
