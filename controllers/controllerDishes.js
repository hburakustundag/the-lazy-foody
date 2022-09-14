const pool = require("../db");

const getDishes = (req, res) => {
  pool.query("SELECT * FROM dishes", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getDishById = async (req, res) => {
  try {
    const getDish = "SELECT * FROM dishes WHERE dish_id = $1";
    const { id } = req.params;
    const getResult = await pool.query(getDish, [id]);

    res.json(getResult.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
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

const suggest = async (req, res) => {
  try {
    const dish_names = req.body.dish_names;
    const dish_count = req.body.dish_names.length;
    const suggestionQuery = "SELECT dish_name\n" +
        "FROM ingredients\n" +
        "join dish_ingredient di on ingredients.id = di.ingredient_id\n" +
        "join dishes d on di.dish_id = d.id\n" +
        "where ingredient_name = ANY ($1)\n" +
        "group by dish_name\n" +
        "having COUNT(*) = $2"
    const getResult = await pool.query(suggestionQuery, [dish_names, dish_count]);
    res.json(getResult.rows);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getDishes,
  addDishes,
  getDishById,
  suggest
};
