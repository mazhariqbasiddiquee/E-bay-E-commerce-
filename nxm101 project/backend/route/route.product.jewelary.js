const express=require("express")
const app=express()
const {productjewelary}=require("../models/models.product.jewelary")

let productjewelaryRoute=express.Router()


productjewelaryRoute.get("",async(req,res)=>{
    try{
       let data=await productjewelary.find()

       res.send(data)

    }
    catch(err)
    {
       res.send(err)
    }
})

productjewelaryRoute.get("/sort",async(req,res)=>{
      
        let {price}=req.query
        console.log(price)
    try{
        if(req.query=="asc")
        {
            let data=await productjewelary.find({}).sort({price:1})
  
            res.send(data)
        }
        else{
            let data=await productjewelary.find().sort({price:-1})
  
            res.send(data)

        }
       

    }
    catch(err)
    {
       res.send(err)
    }
})

productjewelaryRoute.get("/filter",async(req,res)=>{
      
    let {color}=req.query
    console.log(color)
try{
  
        let data=await productjewelary.find({color})

        res.send(data)


}
catch(err)
{
   res.send(err)
}
})

productjewelaryRoute.get("/category",async(req,res)=>{
      
    let {category}=req.query

try{
  
        let data=await productjewelary.find({category})

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