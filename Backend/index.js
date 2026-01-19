import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import('./db/config.js')
import UserData from './db/UserData.js'
import ProductData from './db/ProductData.js'

const app = express()

app.use(express.json())
app.use(cors())
app.post('/register', async (req, res) => {
    let user = new UserData(req.body)
    let result = await user.save()
    result = result.toObject()
    delete result.password

    res.send(result)

})

app.post('/login', async (req, res) => {
    let user = await UserData.findOne(req.body).select('-password')
    if (req.body.email && req.body.password) {

        if (user) {

            res.send(user)
        }
        else {
            res.send({ result: 'No user found' })
        }
    }else{
        res.send({result:'No user found'})
    }
})

app.post('/add-product',async(req,res)=>{
    let product=new ProductData(req.body)
    let result=await product.save()
    res.json(result)
})

app.listen(3200)