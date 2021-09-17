const express = require('express')
const app = express()
var cors = require('cors')
app.use(express.json())
const mongoose = require('mongoose')


app.use(cors())

app.use(require('./routes/register.routes'))
app.use(require('./routes/login.routes'))
app.use(require('./routes/addProduct.routes'))
app.use(require('./routes/getProducts.routes'))

mongoose.connect('mongodb+srv://admin:admin@cluster0.srnvy.mongodb.net/brilliant-DB',
 {useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
     console.log('DB===Connect');
 }).catch(()=>{
     console.log('DB ERoR');
 })
app.listen(process.env.PORT||3001, () =>{
    console.log("Connected")
})




