class Clock extends HTMLElement{
    constructor(){
        super()
        let ora = document.createElement('div')
        ora.className="ora"
        const shadow=this.attachShadow({mode:'open'})
        
        let style = document.createElement('link')
        style.setAttribute('rel','stylesheet')
        style.setAttribute('href','./clockStyle.css')

        // style.rel='stylesheet'
        // style.href='./clockStyle.css'
        shadow.appendChild(style)
        shadow.appendChild(ora)

        let font1 = document.createElement('link')
        font1.setAttribute('rel','preconnect')
        font1.setAttribute('href','https://fonts.googleapis.com')
        shadow.appendChild(font1)

        let font2 = document.createElement('link')
        font2.setAttribute('rel','preconnect')
        font2.setAttribute('href','https://fonts.gstatic.com')    
        shadow.appendChild(font2)

        let font3 = document.createElement('link')
        font3.setAttribute('rel','stylesheet')
        font3.setAttribute('href','https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap')    
        shadow.appendChild(font3)

        ora.innerHTML=new Date().toLocaleTimeString()
        setInterval(function(){
            ora.innerHTML=new Date().toLocaleTimeString()
            setTimeout(function(){ora.innerHTML=new Date().toLocaleTimeString().replaceAll(':',' ')},350)
        },1000)  
    }
}

customElements.define('my-clock',Clock)


// document.getElementsByClassName('ora')[0].innerHTML=new Date().toLocaleTimeString()
// setInterval(function(){
//     document.getElementsByClassName('ora')[0].innerHTML=new Date().toLocaleTimeString()
//     setTimeout(function(){document.getElementsByClassName('ora')[0].innerHTML=new Date().toLocaleTimeString().replaceAll(':',' ')},350)
// },1000)