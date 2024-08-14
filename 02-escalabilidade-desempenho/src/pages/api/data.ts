// Exemplo de uso de cache com Redis

import type { NextApiRequest, NextApiResponse } from "next";
import redisClient from "../../server/redis-client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cacheKey = "myData";
  redisClient.get(cacheKey, async (error, data) => {
    if (data != null) {
      console.log("Cache hit");
      return res.status(200).json(JSON.parse(data));
    } else {
      console.log("Cache miss");
      const newData = { message: "Generated data" }; //Somente para representação, precisa ser alterado
      redisClient.setex(cacheKey, 3600, JSON.stringify(newData));
      return res.status(200).json(newData);
    }
  });
}
