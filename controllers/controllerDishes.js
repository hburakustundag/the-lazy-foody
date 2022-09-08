const pool = require('../db')
const queries = require('../src/queries');

const getDishes = (req, res) => {
    pool.query("SELECT * FROM dishes", (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  };

module.exports = {
    getDishes,
}