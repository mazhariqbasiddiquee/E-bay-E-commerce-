let mainbody=document.getElementById("main-body")
let count=0
let data1

fetch("http://localhost:4500/jewelary")
.then((res)=>{
  return res.json()
})

.then((res)=>{
  let total=page(res)
 
  productslider1(res)

})

function productslider1(data)
{
  
  mainbody.innerHTML=""
   for(let i=0;i<16;i++)
   {
      let productdiv=document.createElement("div")
      let image=document.createElement("img")
      let div1=document.createElement("div")
      let p1=document.createElement("p")
      let p2=document.createElement("p")
      let p3=document.createElement("p")
      let button=document.createElement("button")
      button.classList.add("add-cart")
      button.innerText="Add to cart"

      button.addEventListener("click",(e)=>{
        e.preventDefault()
        let obj={
          image:data[i].image,
          description:data[i].description,
          price:data[i].price,
          category:data[i].category,
          color:data[i].color,
          count:1

        }
        console.log(obj)
        fetch("http://localhost:4500/cart/addproduct",{
          method:"POST",
          headers:{
              "content-type":"application/json",
              "authorization":localStorage.getItem("token")

          },
          body:JSON.stringify(obj)
  
      })
       .then(async(res)=>{
        return res.json()
       })
       .then(async(res)=>{
        alert(res[0].process)
        console.log(res)
       })


      })

      image.src=data[i].image;
      p1.innerText=data[i].description;
      p2.innerText=data[i].price;
      p3.innerText=data[i].category;
      productdiv.append(image,p1,p2,p3,button)
      mainbody.append(productdiv)
   }
  
}



// color filter 

let color=document.getElementById("color-change")



color.addEventListener("change",(e)=>{

  if(color.value!="")
  {
   
    fetch(`http://localhost:4500/jewelary/filter?color=${color.value}`)
.then((res)=>{
  return res.json()
})

.then((res)=>{
 page(res)
  productslider1(res)

})
  }

  else{
    console.log(color.value,"iqbal")

    fetch("http://localhost:4500/jewelary")
.then((res)=>{
  return res.json()
})

.then((res)=>{
  productslider1(res)

})

  }
  
  

})







// category-filter 



let category=document.getElementById("category-change")



category.addEventListener("change",(e)=>{
  console.log(category.value)

  if(category.value!="")
  {
   
    fetch(`http://localhost:4500/jewelary/category?category=${category.value}`)
.then((res)=>{
  return res.json()
})

.then((res)=>{
 page(res)
  productslider1(res)

})
  }

  else{
    console.log(category.value,"iqbal")

    fetch("http://localhost:4500/jewelary")
.then((res)=>{
  return res.json()
})

.then((res)=>{
  productslider1(res)

})

  }
  
  

})


// 

let pricesort=document.getElementById("price-sort")

pricesort.addEventListener("change",(e)=>{
  e.preventDefault()
  console.log(1)

  fetch("http://localhost:4500/jewelary")
.then((res)=>{
  return res.json()
})

.then((res)=>{
 
  if(pricesort.value=="HightoLow")
  {
    let filter=res.sort(function(a,b){
       a=a.price
         b=b.price
      a=a.replace(/[A-Za-z$-]/g, "")
      b=b.replace(/[A-Za-z$-]/g, "")
      a=Number(a)
      b=Number(b)
      return a-b
    })
    productslider1(filter)
  }
  else if(pricesort.value=="LowtoHigh")
  {
    let filter=res.sort(function(a,b){
      a=a.price
        b=b.price
     a=a.replace(/[A-Za-z$-]/g, "")
     b=b.replace(/[A-Za-z$-]/g, "")
     a=Number(a)
     b=Number(b)
     return b-a
   })
   productslider1(filter)

  }
  else{
    productslider1(res)
  }
 


})
})








// pagination 

let buttondiv=document.getElementById("pagination-div")

function page(pageno)
{
  buttondiv.innerHTML=""

  let totalpage=Math.ceil(pageno.length/16)
  

for(let i=1;i<=totalpage;i++)
{

  let data=buttoncreation(i,i)
  buttondiv.append(data)
}
  
return totalpage
}


function buttoncreation(text,id)
{
  let buttonel=document.createElement("button")
  buttonel.classList.add("pagination-button")
  buttonel.setAttribute("data-page-number",text)
  buttonel.innerText=id;

  buttonel.addEventListener("click",function(e){
    let pageNumber=e.target.dataset.pageNumber

    count=pageNumber
    localStorage.setItem("page",JSON.stringify(count))
    console.log(count)

    

  } )
  return buttonel

}


