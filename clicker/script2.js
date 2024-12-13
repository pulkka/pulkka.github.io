var borgors = document.getElementById("borgors")
var asia1 = document.getElementById("asia1")
var asia2 = document.getElementById("asia2")
var laskuri = 0
var click = 1
var asia1hin = 10
var brsec = 0
var asia2hin = 100
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
            asia2.innerHTML=""+asia2hin   
            borgors.innerHTML=""+laskuri
            
            
        }
    }
    
}
function addclick(lol){
    click=click+lol
}

function addbrgrsec(lol){
    brsec = brsec + lol
    
}
