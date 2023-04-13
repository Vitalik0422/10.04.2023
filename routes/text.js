const express = require('express')
const router = express.Router();
const path = require("path");
const app = express()

router.get('/text/:id',(req,res) => {
    let textNumber = Number(req.params.id)
    res.sendFile(path.join(__dirname, "../public/"+textNumber+".txt"));
})

module.exports = router