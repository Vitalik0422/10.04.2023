const express = require('express')
const fs = require('fs-extra')
const router = express.Router();
const path = require("path");

router.get('/cat',(req,res) => {
    res.sendFile(path.join(__dirname, "../image/cat.jpg"));
})

module.exports = router