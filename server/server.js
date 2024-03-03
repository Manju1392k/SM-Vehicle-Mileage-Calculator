const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // for parsing application/json

app.post('/save', (req, res) => {
  const data = req.body;

  fs.writeFile('VehicleData.json', JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while writing the file.');
    } else {
      res.send('Data successfully written to VehicleData.json file.');
    }
  });
});

app.get('/data', (req, res) => {
  fs.readFile('VehicleData.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while reading the file.');
    } else {
      res.send(data);
    }
  });
});

app.listen(3001, () => console.log('Server listening on port 3001'));
