import express, {Request, Response} from 'express' ;
const morgan = require("morgan");
const app = express();
const controller = require('./controllers/controllerIngredients')

const port = process.env.PORT || 3000;

const routeDishes = require('./routers/routeDishes');
const routeIngredients = require('./routers/routeIngredients');

app.use(express.json());
app.set('view engine', 'ejs');
app.use(morgan("combined"));

app.use(express.urlencoded({extended: true}))
app.use("/ingredients", routeIngredients);
app.use("/dishes", routeDishes);
app.use("/", express.static('public'))


app.get("/", controller.getIngredients);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

export default app;

