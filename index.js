function signin(e){


   e.preventDefault()
    var email=document.getElementById("exampleInputEmail1").value
    var password=document.getElementById("exampleInputPassword1").value
    console.log(email)
    console.log(password)

    clearInput()

}

function clearInput() {

    var email=document.getElementById("exampleInputEmail1").value=''
    var password=document.getElementById("exampleInputPassword1").value=''

}