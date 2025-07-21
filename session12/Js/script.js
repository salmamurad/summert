var count = prompt("enter number of users")
var users =[]
var num = Number(count)
function adduser(num){
    for(var i = 0; i < num; i++){
        var name = prompt("enter name")
        var id = prompt("enter id")
        var balance = prompt("enter balance")
        users.push({Name: name , Id: id , Balance: balance })
    }
    console.table(users)
}
adduser(num)
var d = prompt("enter id to edit balance")
var b = prompt("enter your balance")
function edituserbalance(d , b){
    var element = users.find((item)=> item.Id == d)
    element.Balance = b;
    console.table(users)
}
edituserbalance(d,b)
var deletid = prompt("inter id to remove")
function delet(deletid){
    var deletindex = users.findIndex((item)=> item.Id == deletid)
    users.splice(deletindex , 1)
    console.table(users)
}
delet(deletid)