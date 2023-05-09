let cartproduct=document.getElementById("cart-product-div")
let subtotal=document.getElementById("sub-total")
let totalel=document.getElementById("total-value")


  function data2()
  {
    fetch("https://tame-gold-lizard-hose.cyclic.app/cart",{
          method:"GET",
          headers:{
              "content-type":"application/json",
              "authorization":localStorage.getItem("token")

          },
  
  
      })
       .then(async(res)=>{
        return res.json()
       })
       .then(async(res)=>{

          render(res)
          costing(res)
        
       })

    }




       function render(data)
       {
         cartproduct.innerHTML=""

        console.log(data)

        if(data[0].image!=undefined)
        {
     
        for(let i=0;i<data.length;i++)
        {
            let div=document.createElement("div")
            div.classList.add("cart-div")
            let image=document.createElement("img")
            let p=document.createElement("p")
            p.classList.add("description")
            let increasebtn=document.createElement("button")
            increasebtn.addEventListener("click",(e)=>{
                  
                e.preventDefault()
                let data1=data[i].count
                data1=++data1
                let description=data[i]._id
              
     

                fetch(`https://tame-gold-lizard-hose.cyclic.app/cart/update/${description}`,{
          method:"PATCH",
          headers:{
              "content-type":"application/json",
              "authorization":localStorage.getItem("token")

          },
          body:JSON.stringify({count:data1})
  
  
      })
       .then(async(res)=>{
        return res.json()
       })
       .then(async(res)=>{
          data2()
        console.log(res)
       })


            })
            let decreasebtn=document.createElement("button")
            decreasebtn.addEventListener("click",(e)=>{

                e.preventDefault()
                if(data[i].count!==1)
                {
                let data1=data[i].count
                data1=--data1
                let description=data[i]._id
                
     

                fetch(`https://tame-gold-lizard-hose.cyclic.app/cart/update/${description}`,{
          method:"PATCH",
          headers:{
              "content-type":"application/json",
              "authorization":localStorage.getItem("token")

          },
          body:JSON.stringify({count:data1})
  
  
      })
       .then(async(res)=>{
        return res.json()
       })
       .then(async(res)=>{
          data2()
        
       })
    }

            })
            let quantityp=document.createElement("p")
            let pricep=document.createElement("p")
            let priced=document.createElement("div")

            let deletep=document.createElement("p")
            deletep.classList.add("delete")
            deletep.innerText="Remove"

            deletep.addEventListener("click",(e)=>{
                console.log(1)
                let description=data[i]._id
                fetch(`https://tame-gold-lizard-hose.cyclic.app/cart/delete/${description}`,{
                    method:"DELETE",
                    headers:{
                        "content-type":"application/json",
                        "authorization":localStorage.getItem("token")
          
                    },
               
            
            
                })
                 .then(async(res)=>{
                  return res.json()
                 })
                 .then(async(res)=>{
                    data2()
                  
                 })

            })

            
            pricep.classList.add("price-p")

            image.src=data[i].image
            p.innerText=data[i].description
            let quantdiv=document.createElement("div")
            quantdiv.classList.add("quantity-div")
            increasebtn.innerText="+"
            decreasebtn.innerText="-"
            quantityp.innerText=data[i].count;

            
            quantdiv.append(increasebtn,decreasebtn,quantityp)
            pricep.innerText=`US${data[i].price}`
            priced.append(pricep,deletep)

            div.append(image,p,quantdiv,priced)
 
            cartproduct.append(div)


        }
    }
    }
       

data2()

       let pricediv=document.getElementById("price-div")

       function costing(data)
       {
      
        console.log(data)
        let total=0
        for(let i=0;i<data.length;i++)
        {
            let cost=data[i].price
            cost=cost.replace(/[A-Za-z$-]/g, "")
          
            let count=Number(data[i].count)
            console.log(count)
          
            cost=Number(cost)
            console.log(cost)
            total+=cost*count

        }
        total=total.toFixed(2)
        subtotal.innerText=total
        totalel.innerText=total
        console.log(total)
        

    }