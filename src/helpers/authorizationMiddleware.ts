import { Request, Response, NextFunction } from "express";
import Database from "../database/db";
import queries from "../controllers/queries";
import { validate as uuidValidate } from "uuid";
const database = new Database();

export default () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.headers["authorization"] as string;
    if (uuidValidate(token) === false) {
      return res.status(401).send({ message: "Access denied." });
    } else {
      const checkTokenIsValid = await database.pool.query(queries.checkToken, [
        token,
      ]);
      if (!checkTokenIsValid.rows.length) {
        return res.status(401).send({ message: "Access denied." });
      } else {
        next();
      }
    }
  };
};
