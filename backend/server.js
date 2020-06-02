const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();                      //middleware
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log('Server is running on port: %s', port);
});