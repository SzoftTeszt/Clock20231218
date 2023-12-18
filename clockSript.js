document.getElementsByClassName('ora')[0].innerHTML=new Date().toLocaleTimeString()
setInterval(function(){
    document.getElementsByClassName('ora')[0].innerHTML=new Date().toLocaleTimeString()
    setTimeout(function(){document.getElementsByClassName('ora')[0].innerHTML=new Date().toLocaleTimeString().replaceAll(':',' ')},350)
},1000)