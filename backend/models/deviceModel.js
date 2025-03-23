// Creating the data base schema for our project
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  primaryHardwareType: String,
  osVersion: String,
  vendor: String,
  browserName: String,
  model: String,
  osName: String,
  browserRenderingEngine: String,
});

module.exports = mongoose.model('Device', deviceSchema);
