var borgors = document.getElementById("borgors")
var tuote1 = document.getElementById("tuote1")
var tuote2 = document.getElementById("tuote2")
var tuote3 = document.getElementById("tuote3")
var tuote4 = document.getElementById("tuote4")
var tuote5 = document.getElementById("tuote5")
var tuote6 = document.getElementById("tuote6")
var tuote7 = document.getElementById("tuote7")
var tuote8 = document.getElementById("tuote8")
var asia1 = document.getElementById("asia1")
var asia2 = document.getElementById("asia2")
var asia3 = document.getElementById("asia3")
var asia4 = document.getElementById("asia4")
var asia5 = document.getElementById("asia5")
var asia6 = document.getElementById("asia6")
var asia7 = document.getElementById("asia7")
var asia8 = document.getElementById("asia8")
var asia9 = document.getElementById("asia9")
var levelcount = 50
var laskuri = 0
var click = 1
var asia1hin = 10
var brsec = 0
var asia2hin = 100
var asia3hin = 2000
var asia4hin = 10000
var asia5hin = 150000
var asia6hin = 3000000
var asia7hin = 50000000
var asia8hin = 100000000
var asia9hin = 12345678910
var munch = new Audio('munch.mp3')
vaihdavari()
setInterval(function(){
    laskuri = laskuri + brsec/400
    borgors.innerHTML=(Math.round(laskuri))
},10)
setInterval(function(){
    borgors.innerHTML=(Math.round(laskuri))
    
    if (laskuri<asia1hin){
        tuote1.style.backgroundColor="#c5b9a5"
      }else{
        tuote1.style.backgroundColor="#ffd283"
      }
      if (laskuri<asia2hin){
        tuote2.style.backgroundColor="#c5b9a5"
      }else{
        tuote2.style.backgroundColor="#ffd283"
      }
      if (laskuri<asia3hin){
        tuote3.style.backgroundColor="#c5b9a5"
      }else{
        tuote3.style.backgroundColor="#ffd283"
      }
      if (laskuri<asia4hin){
        tuote4.style.backgroundColor="#c5b9a5"
      }else{
        tuote4.style.backgroundColor="#ffd283"
      }
      if (laskuri<asia5hin){
        tuote5.style.backgroundColor="#c5b9a5"
      }else{
        tuote5.style.backgroundColor="#ffd283"
      }
      if (laskuri<asia6hin){
        tuote6.style.backgroundColor="#c5b9a5"
      }else{
        tuote6.style.backgroundColor="#ffd283"
      }
      if (laskuri<asia7hin){
        tuote7.style.backgroundColor="#c5b9a5"
      }else{
        tuote7.style.backgroundColor="#ffd283"
      }
      if (laskuri<asia8hin){
        tuote8.style.backgroundColor="#c5b9a5"
      }else{
        tuote8.style.backgroundColor="#ffd283"
      }
      if (laskuri<asia9hin){
        tuote9.style.backgroundColor="#c5b9a5"
      }else{
        tuote9.style.backgroundColor="#ffd283"
      }
      
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
        if (laskuri >= asia4hin){
            brsec = brsec+100
            laskuri=laskuri-asia4hin
            asia4hin = (Math.round(asia4hin * 1.3))
            asia4.innerHTML=""+asia4hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 5){
        if (laskuri >= asia5hin){
            brsec = brsec+700
            laskuri=laskuri-asia5hin
            asia5hin = (Math.round(asia5hin * 1.3))
            asia5.innerHTML=""+asia5hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 6){
        if (laskuri >= asia6hin){
            brsec = brsec+2000
            laskuri=laskuri-asia6hin
            asia6hin = (Math.round(asia6hin * 1.3))
            asia6.innerHTML=""+asia6hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 7){
        if (laskuri >= asia7hin){
            brsec = brsec+10000
            laskuri=laskuri-asia7hin
            asia7hin = (Math.round(asia7hin * 1.3))
            asia7.innerHTML=""+asia7hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 8){
        if (laskuri >= asia8hin){
            brsec = brsec+100000
            laskuri=laskuri-asia8hin
            asia8hin = (Math.round(asia8hin * 1.3))
            asia8.innerHTML=""+asia8hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 9){
        if (laskuri >= asia9hin){
            brsec = brsec+100000
            laskuri=laskuri-asia9hin
            asia9hin = (Math.round(asia9hin * 1.3))
            asia9.innerHTML=""+asia9hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
}
function addclick(lol){
    click=click+lol
}

function vaihdavari() {
    var vari = document.getElementById("vari")
    console.log(vari.value)
    document.body.style.backgroundColor=vari.value
}