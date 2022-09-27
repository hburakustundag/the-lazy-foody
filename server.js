const express = require('express');
const app = express();
const morgan = require('morgan')

const port = 3000;

const routeIngredients = require('./routers/routeIngredients');
const routeDishes = require('./routers/routeDishes');

app.use(express.json());


app.use('/ingredients', routeIngredients);
app.use('/dishes', routeDishes);
app.use(morgan('combined'))


app.get('/', (req, res) => {
    res.send("Hello, welcome!");
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})

module.exports = app;
