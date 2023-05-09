let signin=document.getElementById("formsubmit")
let firstname=document.getElementById("FirstName")
let lastname=document.getElementById("LastName")
let email=document.getElementById("Email")
let password=document.getElementById("Password")
console.log(firstname)

signin.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(1)
 

    let obj={
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        password:password.value
    }
    fetch("https://tame-gold-lizard-hose.cyclic.app/user/signin",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(obj)

})

.then((res)=>{
    return res.json()
})
.then((res)=>{

    
alert(res[0].process)
    
    console.log(res)
    window.location="http:../html/login.html"
})

})

