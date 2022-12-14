import express, { Request, Response } from "express";
import Database from "../database/db";
import queries from "./queries";
const database = new Database();

const getDishes = async (req: Request, res: Response) => {
  try {
    const getAllDishes = await database.pool.query(queries.getAllDishes);
    res.status(200).json(getAllDishes.rows);
  } catch (error) {
    console.error(error);
  }
};

const getDishById = async (req: Request, res: Response) => {
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
    console.error(error);
  }
};

const addDishes = async (req: Request, res: Response) => {
  try {
    const checkDishQueryResult = await database.pool.query(
      queries.checkDishExists,
      [req.body.dish_name]
    );
    if (checkDishQueryResult.rows.length) {
      res.send({ message: "Dish already exists." });
    }
    await database.pool.query(queries.addDish, [req.body.dish_name]);
    res.status(201).send({ message: "The dish is added." });
  } catch (error) {
    console.error(error);
  }
};

const removeDish = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await database.pool.query(queries.removeDish, [id]);
    res.status(200).send({ message: "Successfully removed" });
  } catch (error) {
    console.error(error);
  }
};

const suggestDishes = async (req: Request, res: Response) => {
  try {
    const ingredient_names = req.body.ingredient_names;
    const ingredients_count = req.body.ingredient_names.length;
    const suggestDishes = await database.pool.query(queries.suggestDishes, [
      ingredient_names,
      ingredients_count,
    ]);
    res.json(suggestDishes.rows);
  } catch (error) {
    console.error(error);
  }
};

export { getDishes, addDishes, getDishById, suggestDishes, removeDish };
