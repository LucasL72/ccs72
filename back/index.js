const Server = require('./src/serverc');
const express = require('express');
const app = express();

require('dotenv').config()
const port = process.env.PORT || 3031;

const index = new Server(app, port);
index.run();
