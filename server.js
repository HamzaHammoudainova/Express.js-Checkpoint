var express = require('express')
var app = express()



var pagerouter = require('./routes/routers')
app.use('/', pagerouter)

app.listen(3000)