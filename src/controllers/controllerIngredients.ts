import express, { Request, Response } from "express";
import Database from "../database/db";
import queries from "./queries";
const database = new Database();

const getIngredients = async (req: Request, res: Response) => {
  try {
    const getAllIngredients = await database.pool.query(
      queries.getAllIngredients
    );
    res.status(200).send(getAllIngredients.rows);
  } catch (error) {
    console.error(error);
  }
};

const getIngredientById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const getIngredientFromCache = await database.redisClient.get(
      `ingredient:${id}`
    );
    if (getIngredientFromCache !== null) {
      console.log("returned from cache");
      return res.json(JSON.parse(getIngredientFromCache));
    }
    const getOneIngredient = await database.pool.query(
      queries.getOneIngredient,
      [id]
    );
    const stringifyGetOneIngredient = JSON.stringify(getOneIngredient.rows[0]);
    await database.redisClient.setEx(
      `ingredient:${id}`,
      300,
      stringifyGetOneIngredient
    );
    res.json(getOneIngredient.rows[0]);
  } catch (error) {
    console.error(error);
  }
};

const addIngredient = async (req: Request, res: Response) => {
  try {
    const checkIngredientExists = await database.pool.query(
      queries.checkIngredientExists,
      [req.body.ingredient_name]
    );
    if (checkIngredientExists.rows.length) {
      res.send({ message: "Ingredient already exists." });
    }
    await database.pool.query(queries.addIngredient, [
      req.body.ingredient_name,
    ]);
    res.status(201).send({ message: "The ingredient is successfully added." });
  } catch (error) {
    console.error(error);
  }
};

const removeIngredient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await database.pool.query(queries.removeIngredient, [id]);
    res.status(200).send({ message: "Successfully removed" });
  } catch (error) {
    console.error(error);
  }
};

export { getIngredients, getIngredientById, addIngredient, removeIngredient };
