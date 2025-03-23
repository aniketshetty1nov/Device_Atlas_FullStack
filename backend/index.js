const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());  

mongoose.connect('mongodb://localhost:27017/deviceatlas');
const deviceSchema = new mongoose.Schema({
  primaryHardwareType: String,
  osVersion: String,
  vendor: String,
  browserName: String,
  model: String,
  osName: String,
  browserRenderingEngine: String,   
});

const Device = mongoose.model('Device', deviceSchema);

app.post('/fetch-devices', async (req, res) => {
  // await Device.deleteMany({}); for deleting existing contents from database
  const userAgents = req.body.userAgents;
  const apiKey = 'e6ce0b9455cab0e494be4587d016c7c2';
 
  try {
    for (const ua of userAgents) {
      const response = await axios.get(
        `https://region0.deviceatlascloud.com/v1/detect/properties?licencekey=${apiKey}&useragent=${encodeURIComponent(ua)}`
      );
      
      if (response.data.properties) {
        console.log(response.data.properties)
        await Device.create(response.data.properties);
      }
    }

    res.status(200).json({ message: 'Data fetched and stored successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.get('/tablets', async (req, res) => {
  try {
    const tablets = await Device.find({ primaryHardwareType: 'Tablet' }).sort({ osVersion: 1 });
    console.log(tablets)
    res.status(200).json(tablets);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tablets' });
  }
});

// DELETE: Delete all devices from the database
// app.delete('/delete-all-devices', async (req, res) => {

  async function Name() {
    try {
      console.log("called deleted")
      const result =await  Device.deleteMany({});
      console.log(result)
      console.log("deleted successfully")
      // res.status(200).json({ message: `${result.deletedCount} devices deleted successfully!` });
    } catch (error) {
      // res.status(500).json({ error: 'Error deleting devices' });
    }
  }
  Name()
// });

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


