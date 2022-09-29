const db = require("../db/db");
const database = new db();
const queries = require('./queries')

const getIngredients = async (req, res) => {
  try {
    const getAllIngredients = await database.pool.query(queries.getAllIngredients);
    res.status(200).send(getAllIngredients.rows);
  } catch (error) {
    console.error(error.message);
  }
};

const getIngredientById = async (req, res) => {
  try {
    const { id } = req.params;
    const getIngredientFromCache = await database.redisClient.get(`ingredient:${id}`);
    if(getIngredientFromCache !== null) {
      console.log('returned from cache');
      return res.json(JSON.parse(getIngredientFromCache))
    }
    const getOneIngredient = await database.pool.query(queries.getOneIngredient, [id]);
    const stringifyGetOneIngredient = JSON.stringify(getOneIngredient.rows[0])
    await database.redisClient.setEx(`ingredient:${id}`, 300, stringifyGetOneIngredient)
    res.json(getOneIngredient.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

const addIngredient = async (req, res) => {
  try {
    const checkIngredientExists = await database.pool.query(queries.checkIngredientExists, [req.body.ingredient_name]);
    if (checkIngredientExists.rows.length) {
      res.send("Ingredient already exists.");
    }
    await database.pool.query(queries.addIngredient, [req.body.ingredient_name]);
    res.status(201).send("The ingredient is successfully added.");
  } catch (error) {
    console.error(error.message);
  }
};

const removeIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    await database.pool.query(queries.removeIngredient, [id]);
    res.status(200).send({ message: "Successfully removed" });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getIngredients,
  getIngredientById,
  addIngredient,
  removeIngredient,
};
