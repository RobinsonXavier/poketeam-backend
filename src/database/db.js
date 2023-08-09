import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const nameDb = "poketeam_api";

const client = new MongoClient(process.env.MONGO_URI);

try {
  await client.connect();
  console.log("Mongo connected");
} catch (error) {
  console.error("Erro ao conectar ao MongoDB", error);
}

const db = client.db(nameDb);

export default db;
