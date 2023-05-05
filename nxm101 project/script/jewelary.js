let mainbody=document.getElementById("main-body")

fetch("http://localhost:4500/jewelary")
.then((res)=>{
  return res.json()
})

.then((res)=>{
  productslider1(res)

})

function productslider1(data)
{
  mainbody.innerHTML=""
  data.forEach((item)=>{
      let productdiv=document.createElement("div")
      let image=document.createElement("img")
      let p1=document.createElement("p")
      let p2=document.createElement("p")
      let p3=document.createElement("p")

      image.src=item.image;
      p1.innerText=item.description;
      p2.innerText=item.price;
      p3.innerText=item.category;
      productdiv.append(image,p1,p2,p3)
      mainbody.append(productdiv)
  })
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