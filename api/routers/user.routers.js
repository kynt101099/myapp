const express = require('express');
const router = express.Router();

const controllers = require('../controllers/user.controller');

//link localhost:3000/api/user/...

router.get('/', controllers.index);

router.get('/search', controllers.search);

router.get('/:id', controllers.getById);

router.post('/create', controllers.postCreate);

router.put('/update', controllers.update);

router.delete('/delete', controllers.delete);





module.exports = router;