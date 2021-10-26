const express = require('express');
const shortid = require('shortid');

const router = express.Router();

const db = require('../db');
const controllers = require('../controllers/user.controller');
// const validate = require('../validate/user.validation');
const validate = require('../middleware/validate.middleware');

//link localhost:3000/user/...

router.get('/', controllers.index);

router.get('/search', controllers.search);

router.get('/create', controllers.getCreate);

router.get('/:id', controllers.getById);

router.post('/create', validate.createValidation, controllers.postCreate);

module.exports = router;