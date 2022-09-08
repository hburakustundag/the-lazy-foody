const Pool = require('pg').Pool;

const pool = new Pool({
    user: "halit",
    host: "localhost",
    database: "the-lazy-foody",
    password: "test",
    port: 5432,
});

module.exports = pool;