var borgors = document.getElementById("borgors")
var asia1 = document.getElementById("asia1")
var asia2 = document.getElementById("asia2")
var asia3 = document.getElementById("asia3")
var laskuri = 0
var click = 1
var asia1hin = 10
var brsec = 0
var asia2hin = 100
var asia3hin = 2000
var munch = new Audio('MUNCH.mp3')
setInterval(function(){
    laskuri = laskuri + brsec
    borgors.innerHTML=""+laskuri
},4000)
setInterval(function(){
    borgors.innerHTML=""+laskuri
},100)
function addborgor(){
    laskuri=laskuri+click
    borgors.innerHTML=""+laskuri
    munch.play()
}
function buyshop(lol){
    if(lol==1){
        if (laskuri >= asia1hin){
            laskuri=laskuri-asia1hin
            asia1hin = (Math.round(asia1hin * 3.1))
            borgors.innerHTML=""+laskuri
            asia1.innerHTML=""+asia1hin
        }
        
    }
    if (lol == 2){
        if (laskuri >= asia2hin){
            brsec = brsec+1
            laskuri=laskuri-asia2hin
            asia2hin = (Math.round(asia2hin * 1.3))
            asia2.innerHTML="Price - "+asia2hin + " Clicks Every 4 Seconds"
            borgors.innerHTML=""+laskuri
            
            
        }
    }
    if (lol == 3){
        if (laskuri >= asia3hin){
            brsec = brsec+10
            laskuri=laskuri-asia3hin
            asia3hin = (Math.round(asia3hin * 1.3))
            asia3.innerHTML=""+asia3hin   
            borgors.innerHTML=""+laskuri
            
            
        }
    }
    
}
function addclick(lol){
    click=click+lol
}


