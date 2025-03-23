const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');



module.exports = router;

// Route to fetch and save device data
router.post('/fetch-devices', deviceController.fetchDevices);

// Route to get all tablet devices
router.get('/tablets', deviceController.getTablets);

module.exports = router;

