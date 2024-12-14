var borgors = document.getElementById("borgors")
var asia1 = document.getElementById("asia1")
var asia2 = document.getElementById("asia2")
var asia3 = document.getElementById("asia3")
var asia4 = document.getElementById("asia4")
var level = document.getElementById("level").value;
var level = 50
var laskuri = 0
var click = 1
var asia1hin = 10
var brsec = 0
var asia2hin = 100
var asia3hin = 2000
var asia4hin = 10000
var munch = new Audio('MUNCH.mp3')
setInterval(function(){
    laskuri = laskuri + brsec/40
    borgors.innerHTML=(Math.round(laskuri))
},100)
setInterval(function(){
    level.innerHTML=level
    borgors.innerHTML=(Math.round(laskuri))
},100)
function addborgor(){
    laskuri=laskuri+click
    borgors.innerHTML=(Math.round(laskuri))
    munch.play()
}
function buyshop(lol){
    if(lol==1){
        if (laskuri >= asia1hin){
            laskuri=laskuri-asia1hin
            asia1hin = (Math.round(asia1hin * 10.1))
            borgors.innerHTML=(Math.round(laskuri))
            asia1.innerHTML=""+asia1hin
        }
        
    }
    if (lol == 2){
        if (laskuri >= asia2hin){
            brsec = brsec+1
            laskuri=laskuri-asia2hin
            asia2hin = (Math.round(asia2hin * 1.3))
            asia2.innerHTML=""+asia2hin
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 3){
        if (laskuri >= asia3hin){
            brsec = brsec+10
            laskuri=laskuri-asia3hin
            asia3hin = (Math.round(asia3hin * 1.3))
            asia3.innerHTML=""+asia3hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 4){
        if (laskuri >= asia3hin){
            brsec = brsec+30
            laskuri=laskuri-asia3hin
            asia4hin = (Math.round(asia4hin * 1.3))
            asia4.innerHTML=""+asia4hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    
}
function addclick(lol){
    click=click+lol
}


