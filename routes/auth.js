const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./forms.html'))
    res.end
})

router.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./forms.html'))
    res.end
})

module.exports = router