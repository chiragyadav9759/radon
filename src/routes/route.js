const express = require('express');
const externalModule = require('../logger/logger')

const router = express.Router();

router.get('/test-me', function (req, res) {

 
    
    externalModule.welcome()
    res.send('My first ever api!')
})

module.exports = router;
// adding this comment for no reason