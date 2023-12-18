let datum= new Date()
let second = datum.getSeconds()*6
let minute = datum.getMinutes()*6+datum.getSeconds()*0.1
let hour = datum.getHours()*30+datum.getMinutes()*0.5

//.0.0083

document.getElementsByClassName('mp')[0].style
    ="transform: rotate("+second+"deg);"

document.getElementsByClassName('perc')[0].style
    ="transform: rotate("+minute+"deg);"

document.getElementsByClassName('ora')[0].style
    ="transform: rotate("+hour+"deg);"

setInterval(
    function(){
        // Valódi müködés
        // datum= new Date()
        // Teszt mód:
        datum.setSeconds(datum.getSeconds()+1)

        let second = datum.getSeconds()*6
        let minute = datum.getMinutes()*6+datum.getSeconds()*0.1
        let hour = datum.getHours()*30+datum.getMinutes()*0.5
        
        document.getElementsByClassName('mp')[0].style
        ="transform: rotate("+second+"deg);"

        document.getElementsByClassName('perc')[0].style
        ="transform: rotate("+minute+"deg);"

        document.getElementsByClassName('ora')[0].style
        ="transform: rotate("+hour+"deg);"      
    }
    ,10)