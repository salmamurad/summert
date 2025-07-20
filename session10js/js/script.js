
function looping(start , end , breaknum, conum){
    if(start == undefined || end == undefined || breaknum == undefined||conum==undefined){
        console.log("please enter all parameters")
    }else{
    for(var i = start; i<= end; i++){
        if(i == breaknum)break
        else if(i == conum)continue
        else console.log(i)
    }
}
}

looping(5 , 10 , 9)
looping(3, 8)
looping(1 , 9 , null,7)
looping(null, 5 , 9 ,5)
looping(1 , 7 ,5 ,4)