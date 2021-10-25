const express = require('express');
const shortid = require('shortid');

const router = express.Router();

const controllers = require('../controllers/auth.controller');

router.get('/login', controllers.login);

router.post('/login', controllers.postLogin);

module.exports = router