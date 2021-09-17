const app = require('express').Router()
const productModel = require('../models/product.model')

app.post('/addProduct',async(req,res)=>{
    const {title,desc,price} = req.body
    await productModel.insertMany({title,desc,price})
    res.json({message:"product added successfully"})
})


module.exports = app