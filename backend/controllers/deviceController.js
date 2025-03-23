const axios = require('axios');
const deviceService = require('../services/deviceService');
const apiKey = 'e6ce0b9455cab0e494be4587d016c7c2';

// Fetch device data from the external API
const fetchDevices = async (req, res) => {
  const userAgents = req.body.userAgents;

  try {
    for (const ua of userAgents) {
      const response = await axios.get(
        `https://region0.deviceatlascloud.com/v1/detect/properties?licencekey=${apiKey}&useragent=${encodeURIComponent(ua)}`
      );
    console.log(response.data.properties)
      if (response.data.properties) {
        await deviceService.saveDevice(response.data.properties);
      }
    } 
    res.status(200).json({ message: 'Data fetched and stored successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
};

// Get all tablet devices
const getDevices = async (req, res) => {
  try {
    const devices = await deviceService.getDevices();
    console.log(devices)
    res.status(200).json(devices);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching Devices' });
  }
};

module.exports = { fetchDevices, getDevices };

