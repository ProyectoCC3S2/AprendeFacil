const express = require('express'); // Creamos la ruta
const router = express.Router(); // Objeto para expotar 

const { signup, signin, signout } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/signout', signout);

module.exports = router;