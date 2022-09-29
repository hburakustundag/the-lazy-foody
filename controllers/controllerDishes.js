const db = require("../db/db");
const database = new db();

const getDishes = (req, res) => {
  database.pool.query("SELECT * FROM dishes", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getDishById = async (req, res) => {
  try {
    const { id } = req.params;
    const getDishFromCache = await database.redisClient.get(`dish:${id}`);
    if (getDishFromCache !== null) {
      console.log("returned from cache");
      return res.json(JSON.parse(getDishFromCache));
    }
    const getDish = "SELECT * FROM dishes WHERE id = $1";
    const getDishResult = await database.pool.query(getDish, [id]);
    const getDishFirstRow = JSON.stringify(getDishResult.rows[0]);

    await database.redisClient.set(`dish:${id}`, getDishFirstRow);

    return res.json(getDishResult.rows[0]);
  } catch (error) {}
};

const addDishes = async (req, res) => {
  try {
    const checkDishExists = "SELECT s FROM dishes s WHERE s.dish_name = $1";
    const addDish = "INSERT INTO dishes (dish_name) VALUES ($1) RETURNING *";
    const value = [req.body.dish_name];

    const results = await database.pool.query(checkDishExists, value);
    if (results.rows.length) {
      res.send("Dish already exists.");
    }
    await database.pool.query(addDish, value);
    res.status(201).send("The dish is added.");
  } catch (error) {
    console.log(error.message);
  }
};

const suggest = async (req, res) => {
  try {
    const dish_names = req.body.dish_names;
    const dish_count = req.body.dish_names.length;
    const suggestionQuery =
      "SELECT dish_name\n" +
      "FROM ingredients\n" +
      "join dish_ingredient di on ingredients.id = di.ingredient_id\n" +
      "join dishes d on di.dish_id = d.id\n" +
      "where ingredient_name = ANY ($1)\n" +
      "group by dish_name\n" +
      "having COUNT(*) = $2";
    const getResult = await database.pool.query(suggestionQuery, [
      dish_names,
      dish_count,
    ]);
    res.json(getResult.rows);
  } catch (error) {
    console.error(error.message);
  }
};

const removeDish = async (req, res) => {
  try {
    const removeDish = "DELETE FROM dishes WHERE id = $1";
    const { id } = req.params;
    await database.pool.query(removeDish, [id]);
    res.status(200).send({ message: "Successfully removed" });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  getDishes,
  addDishes,
  getDishById,
  suggest,
  removeDish,
};
