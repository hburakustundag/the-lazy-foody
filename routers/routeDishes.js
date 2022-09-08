const { Router } = require('express');
const controller = require('../controllers/controllerDishes');

const router = Router();

router.get('/', controller.getDishes);
// router.post('/', controller.addDishes);

module.exports = router;