const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    item:{ type: Object },
    data:{type:String},
    user:{ type: Object },
    dizhi:{ type: String },
})
module.exports = mongoose.model('buy', schema)