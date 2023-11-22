let formsubmit=document.getElementById("formsubmit")
let email=document.getElementById("email")
let password=document.getElementById("password")



    formsubmit.addEventListener("click",(e)=>{
        e.preventDefault()
        console.log(1)
        console.log(email.value)
        fetch("https://ebay-40ar.onrender.com/user/login",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({email:email.value,password:password.value})

    })

    .then((res)=>{
        return res.json()
    })
    .then((res)=>{

        localStorage.setItem("token",res[1].token)

         console.log(res[0])
            alert(res[0])
            window.location="http:../html/index.html"
        

        
        console.log(res)
    })
 
    })






