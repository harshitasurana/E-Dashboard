import express from 'express'
import mongoose from 'mongoose'


const app=express()
const connectDb=async ()=>{
    mongoose.connect('mongodb://localhost:27017/E-Commerce')
    const signUpSchema=new mongoose.Schema({});
    const signUp=mongoose.model('signUp',signUpSchema)
    const data=await signUp.find()
    console.warn(data)
}
connectDb
app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(3200)