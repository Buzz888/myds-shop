const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    formshop: { type: Object },
    img: { type: Object },
    fotitle:{type:String},
    option:0
})
module.exports = mongoose.model('list', schema)