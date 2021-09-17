const app = require('express').Router()
const productModel = require('../models/product.model')

app.get('/getProducts',async(req,res)=>{
    let products = await productModel.find({})
    res.json({message:"retrieved successfully",products})
})


module.exports = app