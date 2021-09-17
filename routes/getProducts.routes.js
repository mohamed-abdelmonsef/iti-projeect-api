const app = require('express').Router()
const productModel = require('../models/product.model')

app.get('/getProducts/:prodType',async(req,res)=>{
    let products = await productModel.find({prodType:req.params.prodType})
    res.json({message:"retrieved successfully",products})
})


module.exports = app