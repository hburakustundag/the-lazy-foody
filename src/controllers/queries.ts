const getAllDishes = "SELECT * FROM dishes";
const getOneDish = "SELECT * FROM dishes WHERE id = $1";
const checkDishExists = "SELECT s FROM dishes s WHERE s.dish_name = $1";
const addDish = "INSERT INTO dishes (dish_name) VALUES ($1) RETURNING *";
const suggestDishes =
  "SELECT dish_name\n" +
  "FROM ingredients\n" +
  "join dish_ingredient di on ingredients.id = di.ingredient_id\n" +
  "join dishes d on di.dish_id = d.id\n" +
  "where ingredient_name = ANY ($1)\n" +
  "group by dish_name\n" +
  "having COUNT(*) = $2";
const removeDish = "DELETE FROM dishes WHERE id = $1";
const getAllIngredients = "SELECT * FROM ingredients";
const getOneIngredient = "SELECT * FROM ingredients WHERE id = $1";
const checkIngredientExists =
  "SELECT s FROM ingredients s WHERE s.ingredient_name = $1";
const addIngredient =
  "INSERT INTO ingredients (ingredient_name) VALUES ($1) RETURNING *";
const removeIngredient = "DELETE FROM ingredients WHERE id = $1";

const registerUser =
  "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *";
const checkUserExists = "SELECT s FROM users s WHERE s.username = $1";

export default {
  getAllDishes,
  getOneDish,
  checkDishExists,
  addDish,
  suggestDishes,
  removeDish,
  getAllIngredients,
  getOneIngredient,
  checkIngredientExists,
  addIngredient,
  removeIngredient,
  registerUser,
  checkUserExists,
};
