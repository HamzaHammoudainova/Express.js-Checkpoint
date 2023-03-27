var express = require('express')
var router = express.Router()
const midleware = require('../midleware')

var path = require('path')

router.use(midleware)


    router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Home_page.html'));
    })
    
    router.get('/Home_page', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/Home_page.html'));
    })

    router.get('/Service', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/Services.html'));
    })

    router.get('/Contactus', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/Contuct_us.html'));
    })



    

    module.exports = router