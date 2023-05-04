
let sliderimage=["https://i.ebayimg.com/images/g/qBkAAOSwgvpkQk0q/s-l1600.webp","https://i.ebayimg.com/images/g/TDEAAOSwvRNkQjxN/s-l1600.webp"
,"https://i.ebayimg.com/images/g/f5gAAOSwbEZkRf1k/s-l1600.webp","https://i.ebayimg.com/images/g/ev0AAOSw5ANkPnAi/s-l1600.webp"]

let slider=document.getElementById("slider")
let i=0
let imagediv=document.createElement("div")
    let img=document.createElement("img")
    img.src=sliderimage[i]
    imagediv.append(img)
    slider.append(imagediv)

setInterval(() => {
    slider.innerHTML=""
    if(i>3)
    {
        i=0
    }
    let imagediv=document.createElement("div")
    let img=document.createElement("img")
    img.src=sliderimage[i]
    i++
    imagediv.append(img)
    slider.append(imagediv)
  

  }, 2.5 * 1000);


  let productslider=document.getElementById("Product-slider")

  fetch("http://localhost:4500/product")
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
        p1.innerText=item.offprice;
        p2.innerText=item.actualprice;
        p3.innerText=item.offpercent;
        productdiv.append(image,p1,p2,p3)
        productslider.append(productdiv)
    })
  }