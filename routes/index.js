const express = require('express');
const router = express.Router();
const noteRouter = require('./notes');


router.use('/notes', noteRouter);


module.exports = router;