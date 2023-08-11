const express = require("express");
const PORT = 3000;
const router = require('./routes/index.js');
const path = require('path');
const errorHandler = require("./middlewares/errorHandler.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('uploads'));
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
