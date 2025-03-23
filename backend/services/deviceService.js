const Device = require('../models/deviceModel');

// Save device properties to the database
const saveDevice = async (properties) => {

  return await Device.create(properties);
};

// Get all tablet devices sorted by OS version
const getDevices = async () => { 
  // return await Device.find({ primaryHardwareType: 'Tablet' }).sort({ osVersion: 1 });
  return await Device.find({}).sort({ osVersion: 1 });
};

module.exports = { saveDevice, getDevices };
