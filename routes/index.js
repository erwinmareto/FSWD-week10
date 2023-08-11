const express = require('express');
const usersRouter = require("./users.js")
const moviesRouter = require("./movies.js");
const router = express.Router();


router.use('/users', usersRouter);
router.use("/movies", moviesRouter);

module.exports = router;