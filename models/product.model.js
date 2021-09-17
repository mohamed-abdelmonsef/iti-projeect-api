const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    prodType:String,
    title:String,
    desc:String,
    price:String,
    imgName:String
})

module.exports = mongoose.model('product', productSchema)