module.exports=app=>{
    const mongoonse = require('mongoose')
    mongoonse.connect('mongodb://127.0.0.1:27017/ds',{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
}