const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

//middleware
app.use(express.json());

//serve static css files, etc
app.use(express.static(__dirname + '/'));

app.get('/test', function (req, res) {
  console.log('good request');
  res.status(200).send('You on the backend playa');
});

//root get request
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

//server start with listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
