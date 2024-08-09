const express = require('express')
const router = express.Router()

const { create, read } = require('./controller')
const func = require('./controller')

router.get('/', (req,res) => {
    console.log(req.body)
    res.send('Home')
})

router.post('/test', (req,res)=>{
    console.log(req.body)
    res.send('Test')
})

router.post('/addstudent', create)
// router.post('/addstudent', func.create)

router.get('/studentinfo', read)
// router.get('/studentinfo', func.read)

router.put('/studentupdate', func.update)

router.delete('/studentdelete', func.deletestud)

module.exports = router;