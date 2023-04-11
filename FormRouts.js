const { Router } = require('express');
const router = Router();
const {getForm, newForm} = require('./FormController');

router.get('/', getForm);
router.post('/', newForm);

module.exports = router;