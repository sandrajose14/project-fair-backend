// 1) import dotenv - loads .env file contents into process.env by default 
require('dotenv').config();

// 2) import express - to create server
const express = require('express');

// 3) import cors 
const cors = require('cors');

// import router
const router = require('./Routes/router');

// import mongoose
require('./DB/connections');

// 4) create server - creates an express application The express() function is a top-level function exported by the express module 
const pfServer = express();

// 5) use of cors by server
pfServer.use(cors());

// 6) Returns middleware that only parses json and converts it into JavaScript object
pfServer.use(express.json());

pfServer.use(router);

pfServer.use('/uploads', express.static('./uploads'));

// 7) customize the port
const PORT = process.env.PORT || 4000;

// 8) run server
pfServer.listen(PORT, () => {
    console.log(`server running successfully at port number ${PORT}`);
});

// 9) get http request to baseurl - http://localhost:4000/
pfServer.get('/', (req, res) => {
    res.send(`<h1 style="color:green">project fair server running successfully and waiting for client request</h1>`);
});
