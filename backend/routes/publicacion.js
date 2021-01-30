const express = require('express');
const router = express.Router();

const { list, create, remove, publicacionById } = require('../controllers/publicacionController');

router.get('/publicaciones', list);
router.post('/createpublicacion', create);
router.delete('/:publicacionId', remove);

router.param('publicacionId', publicacionById);

module.exports = router;