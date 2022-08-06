const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();

const router = require('./apis')

app.use(cors());
app.use(express.json());
app.use(router);
require('./db/mongodb');

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});