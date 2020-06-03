const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();                      //middleware
const port = process.env.port || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection is established.');
});

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log('Server is running on port: %s', port);
});