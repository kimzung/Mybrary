const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    //res.send('Hello world! This is my first web')
    res.render('index')
})

module.exports = router