const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title:String,
    desc:String,
    price:String
})

module.exports = mongoose.model('product', productSchema)