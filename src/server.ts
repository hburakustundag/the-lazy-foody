import express, {Request, Response} from 'express' ;
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 3000;

const routeDishes = require('./routers/routeDishes.js');
const routeIngredients = require('./routers/routeIngredients.js');

app.use(express.json());

app.use(morgan("combined"));

app.use("/ingredients", routeIngredients);
app.use("/dishes", routeDishes);


app.get("/", (req, res) => {
  res.send("Hello, welcome!");
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

export default app;

