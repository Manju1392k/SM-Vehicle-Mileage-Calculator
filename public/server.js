const fs = require('fs');
const express = require('express');
const app = express();

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

app.listen(3001, () => console.log('Server listening on port 3001'));
