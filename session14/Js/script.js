
var formm = document.querySelector('#myform')
formm.addEventListener("submit", (e)=>{
    console.log("submiting")
    e.preventDefault()
    var user= {
        name : e.target[0].value ,
        email : e.target[1].value
    }
    var arr = []
    arr.push(user)
    var div = document.createElement('div')
    div.classList.add('card','w-50','p-2','text-primary')
    div.innerHTML = `<h3> name = ${arr[0].name} ${ arr[0].email}</h3>`
    formm.appendChild(div)
})