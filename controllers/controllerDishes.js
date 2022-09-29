const db = require("../db/db");
const database = new db();
const queries = require("./queries");

const getDishes = async (req, res) => {
  try {
    const getAllDishes = await database.pool.query(queries.getAllDishes);
    res.status(200).json(getAllDishes.rows);
  } catch (error) {
    console.error(error.message);
  }
};

const getDishById = async (req, res) => {
  try {
    const { id } = req.params;
    const getDishFromCache = await database.redisClient.get(`dish:${id}`);
    if (getDishFromCache !== null) {
      console.log("returned from cache");
      return res.json(JSON.parse(getDishFromCache));
    }
    const getOneDish = await database.pool.query(queries.getOneDish, [id]);
    const stringifyGetOneDish = JSON.stringify(getOneDish.rows[0]);
    await database.redisClient.setEx(`dish:${id}`, 300, stringifyGetOneDish);
    res.json(getOneDish.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

const addDishes = async (req, res) => {
  try {
    const checkDishQueryResult = await database.pool.query(
      queries.checkDishExists,
    );
    if (checkDishQueryResult.rows.length) {
      res.send("Dish already exists.");
    }
    await database.pool.query(queries.addDish, [req.body.dish_name]);
    res.status(201).send("The dish is added.");
  } catch (error) {
    console.error(error.message);
  }
};

const removeDish = async (req, res) => {
  try {
    const { id } = req.params;
    await database.pool.query(queries.removeDish, [id]);
    res.status(200).send({ message: "Successfully removed" });
  } catch (error) {
    console.error(error.message);
  }
};

const suggestDishes = async (req, res) => {
  try {
    const dish_names = req.body.dish_names;
    const dish_count = req.body.dish_names.length;
    const suggestDishes = await database.pool.query(queries.suggestDishes, [
      dish_names,
      dish_count,
    ]);
    res.json(suggestDishes.rows);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getDishes,
  addDishes,
  getDishById,
  suggestDishes,
  removeDish,
};
