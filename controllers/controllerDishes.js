const pool = require("../db");

const getDishes = (req, res) => {
  pool.query("SELECT * FROM dishes", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addDishes = async (req, res) => {
  try {
    const checkDishExists = "SELECT s FROM dishes s WHERE s.dish_name = $1";
    const addDish = "INSERT INTO dishes (dish_name) VALUES ($1) RETURNING *";
    const value = [req.body.dish_name];

    const results = await pool.query(checkDishExists, value);
    if (results.rows.length) {
      res.send("Dish already exists.");
    }
    await pool.query(addDish, value);
    res.status(201).send("The dish is added.");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getDishes,
  addDishes,
};
