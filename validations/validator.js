const { body, validationResult, check} = require('express-validator');
const error = require('./errorSchema')
const addDishes = [body('dish_name')
    .exists({checkFalsy: true})
    .isLength({min: 2})
    .isAlpha(),
    error.checkError
]
const addIngredient = [body('ingredient_name')
    .exists({checkFalsy: true})
    .isLength({min: 2})
    .isAlpha(),
    error.checkError
]
const getDishById = [check('id')
    .isInt(),
    error.checkError
]
const getIngredientById = [check('id')
    .isInt(),
    error.checkError
]

module.exports = {
    addDishes,
    addIngredient,
    getDishById,
    getIngredientById
}