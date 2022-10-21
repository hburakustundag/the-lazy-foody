import express, { Request, Response } from "express";
const morgan = require("morgan");
const app = express();
const controller = require("./controllers/controllerIngredients");

var cors = require("cors");

const port = process.env.PORT || 3000;

const routeDishes = require("./routers/routeDishes");
const routeIngredients = require("./routers/routeIngredients");

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.use(express.urlencoded({ extended: true }));
app.use("/ingredients", routeIngredients);
app.use("/dishes", routeDishes);
app.use("/", express.static("client/public"));

app.get("/", controller.getIngredients);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

export default app;
