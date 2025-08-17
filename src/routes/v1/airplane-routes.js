const express = require('express');
const router = express.Router();

const { AirplaneController } = require('../../controllers');

// this is directing to: /api/v1/airplanes POST

console.log('Inside airplanes routes!!');

router.post('/', AirplaneController.createAirplane);

module.exports = router;