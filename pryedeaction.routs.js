const express = require('express');
const { predictPerformance } = require('../controllers/predictionController');

const router = express.Router();

router.post('/predict', predictPerformance);

module.exports = router;
