var borgors = document.getElementById("borgors")
var asia1 = document.getElementById("asia1")
var asia2 = document.getElementById("asia2")
var laskuri = 0
var click = 1
var asia1hin = 10
var brsec = 0
var asia2hin = 100
setInterval(function(){
    laskuri = laskuri + brsec
    borgors.innerHTML=""+laskuri
},4000)
function addborgor(){
    laskuri=laskuri+click
    borgors.innerHTML=""+laskuri
}
function buyshop(lol){
    if(lol==1){
        if (laskuri >= asia1hin){
            laskuri=laskuri-asia1hin
            asia1hin = (Math.round(asia1hin * 3))
            borgors.innerHTML=""+laskuri
            asia1.innerHTML="price:"+asia1hin
        }
        
    }
    if (lol == 2){
        if (laskuri>=asia2hin){
            brsec = brsec+1
            asia2hin = (Math.round(asia2hin * 1.3))
            asia2.innerHTML="price:"+asia2hin   
            borgors.innerHTML=""+laskuri
            laskuri=laskuri-asia2hin
            
        }
    }
    
}
function addclick(lol){
    click=click+lol
}

function addbrgrsec(lol){
    brsec = brsec + lol
    
}
