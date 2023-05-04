let mainbody=document.getElementById("main-body")

fetch("http://localhost:4500/jewelary")
.then((res)=>{
  return res.json()
})

.then((res)=>{
  productslider1(res)
  console.log(res)
})

function productslider1(data)
{
  data.forEach((item)=>{
      let productdiv=document.createElement("div")
      let image=document.createElement("img")
      let p1=document.createElement("p")
      let p2=document.createElement("p")
      let p3=document.createElement("p")

      image.src=item.image;
      p1.innerText=item.description;
      p2.innerText=item.price;
      p3.innerText=item.offpercent;
      productdiv.append(image,p1,p2,p3)
      productslider.append(productdiv)
  })
}