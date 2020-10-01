const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// const port = 80;
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
