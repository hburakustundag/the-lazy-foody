const pool = require("../db");

const getIngredients = async (req, res) => {
  try {
    const text = "SELECT * FROM ingredients";
    const results = await pool.query(text);

    res.status(200).send(results.rows);
  } catch (error) {
    console.log(error.message);
  }
};

const addIngredient = async (req, res) => {
  try {
    const checkIngredient = "SELECT s FROM ingredients s WHERE s.ingredient_name = $1";
    const addIngredient = "INSERT INTO ingredients (ingredient_name) VALUES ($1) RETURNING *";
    const value = [req.body.ingredient_name];

    const results = await pool.query(checkIngredient, value);
    if (results.rows.length) {
      res.send("Ingredient already exists.");
    }
    await pool.query(addIngredient, value);
    res.status(201).send("The ingredient is successfully added.");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getIngredients,
  addIngredient,
};
