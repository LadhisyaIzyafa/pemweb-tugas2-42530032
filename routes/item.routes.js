const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');

router.get('/', itemController.getDaftar);
router.get('/item/:id', itemController.getDetail);

module.exports = router;