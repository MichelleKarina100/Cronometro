const express = require('express');
const {loginView , insertarTiempo} = require('../controllers/loginController');
const router = express.Router();

// router.get('/register', registerView);
router.get('/cronometro', loginView);
router.post('/cronometro', insertarTiempo);
module.exports = router;