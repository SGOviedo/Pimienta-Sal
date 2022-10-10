const express = require('express');
const router = express.Router();
const {home, detail} = require('../controllers/mainController')

/* GET home page. */
router
    .get('/', home)
    .get('/detail/:id', detail)
module.exports = router;
