const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    username: { type: String },
    password: {
        type: String,
        select:false,//防止二次散列
        set(val){
            return require('bcrypt').hashSync(val,10) //用于散列存入数据库,同样值散列不同的值
        }
    },
    option: { type: Number },
    name: { type: String }
})
module.exports = mongoose.model('login', schema)