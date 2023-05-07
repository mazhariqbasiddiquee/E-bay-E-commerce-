
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


  


  let jewelarycategory=document.getElementById("jewelary and watches")

  jewelarycategory.addEventListener("click",function(e){
    window.location="http:../html/jewelary.html"
  })