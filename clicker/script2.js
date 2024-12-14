var borgors = document.getElementById("borgors")
var tuote1 = document.getElementById("tuote1")
var tuote2 = document.getElementById("tuote2")
var tuote3 = document.getElementById("tuote3")
var tuote4 = document.getElementById("tuote4")
var tuote5 = document.getElementById("tuote5")
var asia1 = document.getElementById("asia1")
var asia2 = document.getElementById("asia2")
var asia3 = document.getElementById("asia3")
var asia4 = document.getElementById("asia4")
var asia5 = document.getElementById("asia5")
var level = document.getElementById("level").value;
var levelcount = 50
var laskuri = 0
var click = 1
var asia1hin = 10
var brsec = 0
var asia2hin = 100
var asia3hin = 2000
var asia4hin = 10000
var asia5hin = 150000
var munch = new Audio('MUNCH.mp3')
setInterval(function(){
    laskuri = laskuri + brsec/40
    borgors.innerHTML=(Math.round(laskuri))
},100)
setInterval(function(){
    level.innerHTML=levelcount
    borgors.innerHTML=(Math.round(laskuri))
    
    if (laskuri<asia1hin){
        tuote1.style.backgroundColor="#838181"
      }else{
        tuote1.style.backgroundColor="white"
      }
      if (laskuri<asia2hin){
        tuote2.style.backgroundColor="#838181"
      }else{
        tuote2.style.backgroundColor="white"
      }
      if (laskuri<asia3hin){
        tuote3.style.backgroundColor="#838181"
      }else{
        tuote3.style.backgroundColor="white"
      }
      if (laskuri<asia4hin){
        tuote4.style.backgroundColor="#838181"
      }else{
        tuote4.style.backgroundColor="white"
      }
      if (laskuri<asia5hin){
        tuote5.style.backgroundColor="#838181"
      }else{
        tuote5.style.backgroundColor="white"
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
            brsec = brsec+500
            laskuri=laskuri-asia5hin
            asia5hin = (Math.round(asia5hin * 1.3))
            asia5.innerHTML=""+asia5hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    
}
function addclick(lol){
    click=click+lol
}

