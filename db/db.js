const redis = require("redis");
const Pool = require("pg").Pool;

class db {
  pool = new Pool({
    user: "halitburak",
    host: "localhost",
    database: "the_lazy_foody",
    password: "test",
    port: 5432,
  });

  constructor() {
    this.redisClient = redis.createClient();
    this.redisClient.on("error", (err) =>
      console.log("Redis Client Error", err)
    );
    this.redisClient.connect();
  }
}

module.exports = db;
