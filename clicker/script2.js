var borgors = document.getElementById("borgors")
var tuote1 = document.getElementById("tuote1")
var tuote2 = document.getElementById("tuote2")
var tuote3 = document.getElementById("tuote3")
var tuote4 = document.getElementById("tuote4")
var tuote5 = document.getElementById("tuote5")
var tuote6 = document.getElementById("tuote6")
var tuote7 = document.getElementById("tuote7")
var tuote8 = document.getElementById("tuote8")
var tuote9 = document.getElementById("tuote9")
var tuote10 = document.getElementById("tuote10")
var asia1 = document.getElementById("asia1")
var asia2 = document.getElementById("asia2")
var asia3 = document.getElementById("asia3")
var asia4 = document.getElementById("asia4")
var asia5 = document.getElementById("asia5")
var asia6 = document.getElementById("asia6")
var asia7 = document.getElementById("asia7")
var asia8 = document.getElementById("asia8")
var asia9 = document.getElementById("asia9")
var asia10 = document.getElementById("asia10")
var asia11 = document.getElementById("asia11")
var shop = document.getElementById("shop")
var showshop = document.getElementById("show-shop")
var settings = document.getElementById("settings")
var settingsctrl = document.getElementById("settings-ctrl")
var levelcount = 50
var brsec = parseInt(window.localStorage.getItem('brsec') || "0");
var laskuri = parseInt(window.localStorage.getItem('laskuri') || "0");
var click = 1
var asia1hin = parseInt(window.localStorage.getItem('asia1hin') || "10");
var asia2hin = parseInt(window.localStorage.getItem('asia2hin') || "100");
var asia3hin = parseInt(window.localStorage.getItem('asia3hin') || "500");
var asia4hin = parseInt(window.localStorage.getItem('asia4hin') || "2000");
var asia5hin = parseInt(window.localStorage.getItem('asia5hin') || "7000");
var asia6hin = parseInt(window.localStorage.getItem('asia6hin') || "25000");
var asia7hin = parseInt(window.localStorage.getItem('asia7hin') || "100000");
var asia8hin = parseInt(window.localStorage.getItem('asia8hin') || "1000000");
var asia9hin = parseInt(window.localStorage.getItem('asia9hin') || "12345678");
var asia10hin = parseInt(window.localStorage.getItem('asia10hin') || "10000");
var asia11hin = parseInt(window.localStorage.getItem('asia11hin') || "50000");
var munch = new Audio('munch.mp3')
var brgr = document.getElementById("brgr");
var isxmas = 0
var ishat = 0
var issmile = 0
var isweird = 0
vaihdavari()
asia1.innerHTML =""+ asia1hin
asia2.innerHTML =""+ asia2hin
asia3.innerHTML =""+ asia3hin
asia4.innerHTML =""+ asia4hin
asia5.innerHTML =""+ asia5hin
asia6.innerHTML =""+ asia6hin
asia7.innerHTML =""+ asia7hin
asia8.innerHTML =""+ asia8hin
asia9.innerHTML =""+ asia9hin
asia10.innerHTML =""+ asia10hin
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
      if (laskuri<asia10hin){
        tuote10.style.backgroundColor="#c5b9a5"
      }else{
        tuote10.style.backgroundColor="#ffd283"
      }
      if (laskuri<asia11hin){
        tuote11.style.backgroundColor="#c5b9a5"
      }else{
        tuote11.style.backgroundColor="#ffd283"
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
            brsec = brsec + 1
            laskuri=laskuri-asia1hin
            asia1hin = (Math.round(asia1hin * 1.2))
            borgors.innerHTML=(Math.round(laskuri))
            asia1.innerHTML=""+asia1hin
        }
        
    }
    if (lol == 2){
        if (laskuri >= asia2hin){
            brsec = brsec+4
            laskuri=laskuri-asia2hin
            asia2hin = (Math.round(asia2hin * 1.2))
            asia2.innerHTML=""+asia2hin
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 3){
        if (laskuri >= asia3hin){
            brsec = brsec+10
            laskuri=laskuri-asia3hin
            asia3hin = (Math.round(asia3hin * 1.2))
            asia3.innerHTML=""+asia3hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 4){
        if (laskuri >= asia4hin){
            brsec = brsec+20
            laskuri=laskuri-asia4hin
            asia4hin = (Math.round(asia4hin * 1.2))
            asia4.innerHTML=""+asia4hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 5){
        if (laskuri >= asia5hin){
            brsec = brsec+60
            laskuri=laskuri-asia5hin
            asia5hin = (Math.round(asia5hin * 1.2))
            asia5.innerHTML=""+asia5hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 6){
        if (laskuri >= asia6hin){
            brsec = brsec+100
            laskuri=laskuri-asia6hin
            asia6hin = (Math.round(asia6hin * 1.2))
            asia6.innerHTML=""+asia6hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 7){
        if (laskuri >= asia7hin){
            brsec = brsec+500
            laskuri=laskuri-asia7hin
            asia7hin = (Math.round(asia7hin * 1.2))
            asia7.innerHTML=""+asia7hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 8){
        if (laskuri >= asia8hin){
            brsec = brsec+1000
            laskuri=laskuri-asia8hin
            asia8hin = (Math.round(asia8hin * 1.2))
            asia8.innerHTML=""+asia8hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 9){
        if (laskuri >= asia9hin){
            brsec = brsec+10000
            laskuri=laskuri-asia9hin
            asia9hin = (Math.round(asia9hin * 1.2))
            asia9.innerHTML=""+asia9hin   
            borgors.innerHTML=(Math.round(laskuri))
            
            
        }
    }
    if (lol == 10){
      if (laskuri >= asia10hin){
          click = click * 10
          laskuri=laskuri-asia10hin
          asia10hin = (Math.round(asia10hin * 100.2))
          asia10.innerHTML=""+asia10hin   
          borgors.innerHTML=(Math.round(laskuri))
          
          
      }
  }
  if (lol == 11){
    if (laskuri >= asia11hin){
        brsec = brsec * 2
        laskuri=laskuri-asia11hin
        asia11hin = (Math.round(asia11hin * 112))
        asia11.innerHTML=""+asia11hin   
        borgors.innerHTML=(Math.round(laskuri))
        
        
    }
}
}


function vaihdavari() {
    var vari = document.getElementById("vari")
    console.log(vari.value)
    document.body.style.backgroundColor=vari.value
}

setInterval(function(){
    localStorage.setItem('laskuri', laskuri);
    localStorage.setItem('brsec', brsec);
    localStorage.setItem('asia1hin', asia1hin);
    localStorage.setItem('asia2hin', asia2hin);
    localStorage.setItem('asia3hin', asia3hin);
    localStorage.setItem('asia4hin', asia4hin);
    localStorage.setItem('asia5hin', asia5hin);
    localStorage.setItem('asia6hin', asia6hin);
    localStorage.setItem('asia7hin', asia7hin);
    localStorage.setItem('asia8hin', asia8hin);
    localStorage.setItem('asia9hin', asia9hin);
    localStorage.setItem('asia10hin', asia10hin);
    localStorage.setItem('asia1', asia1);
    localStorage.setItem('asia2', asia2);
    localStorage.setItem('asia3', asia3);
    localStorage.setItem('asia4', asia4);
    localStorage.setItem('asia5', asia5);
    localStorage.setItem('asia6', asia6);
    localStorage.setItem('asia7', asia7);
    localStorage.setItem('asia8', asia8);
    localStorage.setItem('asia9', asia9);
    localStorage.setItem('asia9', asia9);
    localStorage.setItem('asia10', asia10);
},5000)

function toggleShop() {
  if(shop.style.display=="block"){
    shop.style.display="none"
    showshop.innerHTML="SHOP"
  }
  else{
    shop.style.display="block"
    showshop.innerHTML="BORGOR"
  }
}
function togglesettings() {
  if(settings.style.display=="block"){
    settings.style.display="none"
    settingsctrl.innerHTML="Settings"
  }
  else{
    settings.style.display="block"
    settingsctrl.innerHTML="Close"
  }
}
function togglexmas(){
    if (isxmas == 0){
      brgr.src = "xmasbrgr.png"
      isxmas = 1
    } else{
      brgr.src = "BORGOR.png"
      isxmas = 0
    }
}
function costume(lol){
  if(lol==1){
    if (isxmas == 0){
      brgr.src = "xmasbrgr.png"
      isxmas = 1
    } else{
      brgr.src = "BORGOR.png"
      isxmas = 0
    }
  }
  if(lol==2){
    if (ishat == 0){
      brgr.src = "burgerwithhat.png"
      ishat = 1
    } else{
      brgr.src = "BORGOR.png"
      ishat = 0
    }
  }
  if(lol==3){
    if (issmile == 0){
      brgr.src = "smileybrgr.png"
      issmile = 1
    } else{
      brgr.src = "BORGOR.png"
      issmile = 0
    }
  }
  if(lol==4){
    if (isweird == 0){
      brgr.src = "weirdbrgr.png"
      isweird = 1
    } else{
      brgr.src = "BORGOR.png"
      isweird = 0
    }
  }
}



function restart(){
  localStorage.clear();
  location.reload()
}