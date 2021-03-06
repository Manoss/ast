var express = require('express');
var router = express.Router();

const ctrlEvent = require('../controllers/event');

router
  .route('/')
  .get(ctrlEvent.index);

router
  .route('/event/new')
  .get(ctrlEvent.create)
  .post(ctrlEvent.doCreate);

module.exports = router