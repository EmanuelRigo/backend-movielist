import { config } from "dotenv";
import argsUtil from "./args.util.js";

const { env } = argsUtil;

const path = "./.env." + env;
config({ path });

const envUtil = {
  PORT: process.env.PORT,
  MONGO_LINK: process.env.MONGO_LINK,
  SECRET_KEY: process.env.SECRET_KEY,
  MOVIES_COLLECTION: process.env.MOVIES_COLLECTION_COLLECTION,
  BASE_URL: process.env.BASE_URL,
};

export default envUtil;
