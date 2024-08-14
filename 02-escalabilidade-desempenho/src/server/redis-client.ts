//Código para criar um cliente Redis e exportá-lo como um módulo.

import Redis from "redis";

const redisClient = Redis.createClient({
  host: "localhost",
  port: 6379,
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

export default redisClient;
