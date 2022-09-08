const expresss = require('express');
const app = expresss();

const port = 3000;
const pool = require('./db')

const routeIngredients = require('./routers/routeIngredients');
const routeDishes = require('./routers/routeDishes');

app.use(expresss.json());

app.use('/ingredients', routeIngredients);
app.use('/dishes', routeDishes);

app.get('/', (req, res) => {
    res.send("Hello, welcome!");
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})