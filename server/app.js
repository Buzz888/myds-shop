const express = require('express')
const app = express()
app.use(require('cors')())
app.use(express.json())
app.use('/uploads',express.static(__dirname + '/uploads'))
require('./plugins/db')(app)
require('./router/admin')(app)
require('./router/see')(app)
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(3000,(req,res)=>{
    console.log('3000 is ok!')
})