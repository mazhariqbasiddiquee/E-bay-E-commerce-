const express=require("express")
const app=express()
const {productjewelary}=require("../models/models.product.jewelary")

let productjewelaryRoute=express.Router()


productjewelaryRoute.get("",async(req,res)=>{
    try{
       let data=await productjewelary.find()
       console.log(data,"mazhar")
       res.send(data)

    }
    catch(err)
    {
       res.send(err)
    }
})

productjewelaryRoute.post("/add",async(req,res)=>{
  try{
     let data=await new productjewelary(req.body)
     data.save()
     console.log(data,"ma")
     res.send(data)

  }
  catch(err)
  {
     res.send(err)
  }
})

module.exports={productjewelaryRoute}