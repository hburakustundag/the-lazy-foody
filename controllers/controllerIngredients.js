const pool = require("../db/db");

const getIngredients = async (req, res) => {
  try {
    const query = "SELECT * FROM ingredients";
    const results = await pool.query(query);
    res.status(200).send(results.rows);
  } catch (error) {
    console.log(error.message);
  }
};
  
const getIngredientById = async (req, res) => {
  try {
  const getIngredient = "SELECT * FROM ingredients WHERE id = $1";
  const { id } = req.params;
  const getResult = await pool.query(getIngredient, [id]);
  res.json(getResult.rows[0]);  
  } catch (error) {
    console.error(error.message);
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
  getIngredientById,
  addIngredient,
};
