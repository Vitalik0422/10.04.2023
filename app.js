const http = require('http')
const express = require('express')
const router = require('./routes/product.js')
const router1 = require('./routes/text.js')
const app = express()




app.listen(3001)

app.use(router)
app.use(router1)



