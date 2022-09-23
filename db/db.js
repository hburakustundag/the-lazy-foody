const Pool = require('pg').Pool;

const pool = new Pool({
    user: "halitburak",
    host: "localhost",
    database: "the_lazy_foody",
    password: "test",
    port: 5432,
});


module.exports = pool;

