let heading=document.getElementById("heading")
let drop=document.querySelector(".card-dropdown")
let cancel=document.getElementById("cancel")

heading.addEventListener("click",(e)=>{
    console.log(1)
    e.preventDefault()
    drop.classList.add("card")
})

cancel.addEventListener("click",(e)=>{
    e.preventDefault()
    drop.classList.remove("card")
})


let heading1=document.getElementById("heading1")
let upi=document.querySelector(".upi-dropdown")

heading1.addEventListener("click",(e)=>{
    console.log(1)
    e.preventDefault()
    upi.classList.add("upi")
})