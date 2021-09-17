const app = require('express').Router()
const productModel = require('../models/product.model')

app.post('/addProduct',async(req,res)=>{
    const {prodType,title,desc,price,imgName} = req.body
    await productModel.insertMany({prodType,title,desc,price,imgName})
    res.json({message:"product added successfully"})
})


module.exports = app