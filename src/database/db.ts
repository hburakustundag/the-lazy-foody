const redis = require("redis");
const Pool = require("pg").Pool;
const dotenv = require("dotenv");
dotenv.config();

export default class Database {
  pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  });
  //cache
  redisClient: any;
  constructor() {
    this.redisClient = redis.createClient();
    this.redisClient.on("error", (err: any) =>
      console.log("Redis Client Error", err)
    );
    this.redisClient.connect();
  }
}
