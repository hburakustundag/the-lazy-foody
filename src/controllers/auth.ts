import express, { Request, Response, Router } from "express";
import Database from "../database/db";
import queries from "./queries";
const md5 = require("md5");
import { v4 as uuidv4 } from "uuid";
const database = new Database();

const registerUser = async (req: Request, res: Response) => {
  try {
    const username = req.body.username;
    const password = md5(req.body.password);
    const checkUser = await database.pool.query(queries.checkUserExists, [
      username,
    ]);
    if (checkUser.rows.length) {
      console.log("You can't take this username.");
      res.send("You can't take this username.");
    } else {
      await database.pool.query(queries.registerUser, [username, password]);
      res.status(201).send("User is successfully created.");
    }
  } catch (error) {
    console.error(error);
  }
};

const addTokenForUser = async (userID: any) => {
  const uuidToken = uuidv4();
  await database.pool.query(queries.addTokenForUser, [userID, uuidToken]);
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const username = req.body.username;
    const password = md5(req.body.password);
    const loggedIn = await database.pool.query(queries.loginUser, [
      username,
      password,
    ]);
    const userID = loggedIn.rows[0]["id"];
    addTokenForUser(userID);
    if (loggedIn.rows.length) {
      res.status(200).send(`Succesfully logged in.`);
    } else {
      res.status(200).send("Wrong username or password.");
    }
  } catch (error) {
    console.log(error);
  }
};

export { registerUser, loginUser };
