var borgors = document.getElementById("borgors")
var brsecc = document.getElementById("brsecc")
var clickk = document.getElementById("clickk")
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
var asia12 = document.getElementById("asia12")
var omistat1 = document.getElementById("omistat1")
var omistat2 = document.getElementById("omistat2")
var omistat3 = document.getElementById("omistat3")
var omistat4 = document.getElementById("omistat4")
var omistat5 = document.getElementById("omistat5")
var omistat6 = document.getElementById("omistat6")
var omistat7 = document.getElementById("omistat7")
var omistat8 = document.getElementById("omistat8")
var omistat9 = document.getElementById("omistat9")
var omistat10 = document.getElementById("omistat10")
var omistat11= document.getElementById("omistat11")
var omistat12 = document.getElementById("omistat12")
var omistat13 = document.getElementById("omistat13")
var omistat14 = document.getElementById("omistat14")
var shop = document.getElementById("shop")
var showshop = document.getElementById("show-shop")
var settings = document.getElementById("settings")
var settingsctrl = document.getElementById("settings-ctrl")
var leaderboardctrl = document.getElementById("leaderboard-ctrl")
var leaderboard = document.getElementById("leaderboard")
var levelcount = 50
var vari = document.getElementById("vari")
var valittuvari = window.localStorage.getItem('valittuvari') || "#b507a8";
let name = window.localStorage.getItem('name') || "";
let playerId = window.localStorage.getItem('playerId') || crypto.randomUUID();
var brsec = parseInt(window.localStorage.getItem('brsec') || "0");
var laskin = parseFloat(window.localStorage.getItem('laskin') || "0");
var prestigee = parseFloat(window.localStorage.getItem('prestigee') || "1");
var click =  parseFloat(window.localStorage.getItem('click') || 1 * prestigee); console.log(click)
var asia1hin = parseInt(window.localStorage.getItem('asia1hin') || "10");
var asia2hin = parseInt(window.localStorage.getItem('asia2hin') || "100");
var asia3hin = parseInt(window.localStorage.getItem('asia3hin') || "500");
var asia4hin = parseInt(window.localStorage.getItem('asia4hin') || "2000");
var asia5hin = parseInt(window.localStorage.getItem('asia5hin') || "7000");
var asia6hin = parseInt(window.localStorage.getItem('asia6hin') || "25000");
var asia7hin = parseInt(window.localStorage.getItem('asia7hin') || "100000");
var asia8hin = parseInt(window.localStorage.getItem('asia8hin') || "1000000");
var asia9hin = parseInt(window.localStorage.getItem('asia9hin') || "12345678");
var asia10hin = parseInt(window.localStorage.getItem('asia10hin') || "100");
var asia11hin = parseInt(window.localStorage.getItem('asia11hin') || "50000");
var asia12hin = parseInt(window.localStorage.getItem('asia12hin') || "1000");
var asia13hin = parseInt(window.localStorage.getItem('asia13hin') || "10000");
var asia14hin = parseInt(window.localStorage.getItem('asia14hin') || "100000");
var asia1ostettu = parseInt(window.localStorage.getItem('asia1ostettu') || "0");
var asia2ostettu = parseInt(window.localStorage.getItem('asia2ostettu') || "0");
var asia3ostettu = parseInt(window.localStorage.getItem('asia3ostettu') || "0");
var asia4ostettu = parseInt(window.localStorage.getItem('asia4ostettu') || "0");
var asia5ostettu = parseInt(window.localStorage.getItem('asia5ostettu') || "0");
var asia6ostettu = parseInt(window.localStorage.getItem('asia6ostettu') || "0");
var asia7ostettu = parseInt(window.localStorage.getItem('asia7ostettu') || "0");
var asia8ostettu = parseInt(window.localStorage.getItem('asia8ostettu') || "0");
var asia9ostettu = parseInt(window.localStorage.getItem('asia9ostettu') || "0");
var asia10ostettu = parseInt(window.localStorage.getItem('asia10ostettu') || "0");
var asia11ostettu = parseInt(window.localStorage.getItem('asia11ostettu') || "0");
var asia12ostettu = parseInt(window.localStorage.getItem('asia12ostettu') || "0");
var asia13ostettu = parseInt(window.localStorage.getItem('asia13ostettu') || "0");
var asia14ostettu = parseInt(window.localStorage.getItem('asia14ostettu') || "0");
var munch = new Audio('munchhmp3')
var brgr = document.getElementById("brgr");
var isxmas = 0
var ishat = 0
var issmile = 0
var isweird = 0
var vippi = 0
var kaikki = document.getElementById("kaikki")
var vip = document.getElementById("vip")
coolbackground()
var prestigetimes = parseInt(window.localStorage.getItem('prestigetimes') || "1");
function vaihdavari() {
  
  console.log(vari.value)
  document.body.style.backgroundColor=vari.value
  localStorage.setItem('valittuvari', vari.value);

}
vari.value=valittuvari
vaihdavari()
var juttu4 = parseInt(window.localStorage.getItem('juttu4') || "0");

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
asia11.innerHTML =""+ asia11hin
asia12.innerHTML =""+ asia12hin
asia13.innerHTML =""+ asia13hin
asia14.innerHTML =""+ asia14hin
setInterval(function(){
  laskin = laskin + brsec/400
  borgors.innerHTML=(Math.round(laskin))
},10)
setInterval(function(){
  borgors.innerHTML=(Math.round(laskin))
  
  
  if (laskin<asia1hin){
    tuote1.style.backgroundColor="#c5b9a5"
  }else{
    tuote1.style.backgroundColor="#ffd283"
  }
  if (laskin<asia2hin){
    tuote2.style.backgroundColor="#c5b9a5"
  }else{
    tuote2.style.backgroundColor="#ffd283"
  }
  if (laskin<asia3hin){
    tuote3.style.backgroundColor="#c5b9a5"
  }else{
    tuote3.style.backgroundColor="#ffd283"
  }
  if (laskin<asia4hin){
    tuote4.style.backgroundColor="#c5b9a5"
  }else{
    tuote4.style.backgroundColor="#ffd283"
  }
  if (laskin<asia5hin){
    tuote5.style.backgroundColor="#c5b9a5"
  }else{
    tuote5.style.backgroundColor="#ffd283"
  }
  if (laskin<asia6hin){
    tuote6.style.backgroundColor="#c5b9a5"
  }else{
    tuote6.style.backgroundColor="#ffd283"
  }
  if (laskin<asia7hin){
    tuote7.style.backgroundColor="#c5b9a5"
  }else{
    tuote7.style.backgroundColor="#ffd283"
  }
  if (laskin<asia8hin){
    tuote8.style.backgroundColor="#c5b9a5"
  }else{
    tuote8.style.backgroundColor="#ffd283"
  }
  if (laskin<asia9hin){
    tuote9.style.backgroundColor="#c5b9a5"
  }else{
    tuote9.style.backgroundColor="#ffd283"
  }
  if (laskin<asia10hin){
    tuote10.style.backgroundColor="#c5b9a5"
  }else{
    tuote10.style.backgroundColor="#ffd283"
  }
  if (laskin<asia11hin){
    tuote11.style.backgroundColor="#c5b9a5"
  }else{
    tuote11.style.backgroundColor="#ffd283"
  }
  if (laskin<asia12hin){
    tuote12.style.backgroundColor="#c5b9a5"
  }else{
    tuote12.style.backgroundColor="#ffd283"
  }
  if (laskin<asia13hin){
    tuote13.style.backgroundColor="#c5b9a5"
  }else{
    tuote13.style.backgroundColor="#ffd283"
  }
  if (laskin<asia14hin){
    tuote14.style.backgroundColor="#c5b9a5"
  }else{
    tuote14.style.backgroundColor="#ffd283"
  }
  
},100)
function addborgor(){
  brgr.style.transform="scale(1.2,1.2)"
  laskin=laskin+click
  borgors.innerHTML=(Math.round(laskin))
  setTimeout(() => {
    brgr.style.transform="scale(1,1)"
  }, 100);
  
  munch.play()
}
function buyshop(lol){
  if(lol==1){
    if (laskin >= asia1hin){
      asia1ostettu = asia1ostettu + 1
      omistat1.innerHTML="omistat: " +asia1ostettu 
      brsec = brsec + 1*prestigee 
      laskin=laskin-asia1hin
      asia1hin = (Math.round(asia1hin * 1.2))
      borgors.innerHTML=(Math.round(laskin))
      asia1.innerHTML=""+asia1hin
    }
    
  }
  if (lol == 2){
    if (laskin >= asia2hin){
      asia2ostettu = asia2ostettu + 1
      omistat2.innerHTML="omistat: " +asia2ostettu 
      brsec = brsec+4*prestigee
      laskin=laskin-asia2hin
      asia2hin = (Math.round(asia2hin * 1.2))
      asia2.innerHTML=""+asia2hin
      borgors.innerHTML=(Math.round(laskin))
      
      
    }
  }
  if (lol == 3){
    if (laskin >= asia3hin){
      asia3ostettu = asia3ostettu + 1
      omistat3.innerHTML="omistat: " +asia3ostettu 
      brsec = brsec+10*prestigee
      laskin=laskin-asia3hin
      asia3hin = (Math.round(asia3hin * 1.2))
      asia3.innerHTML=""+asia3hin   
      borgors.innerHTML=(Math.round(laskin))
      
      
    }
  }
  if (lol == 4){
    if (laskin >= asia4hin){
      asia4ostettu = asia4ostettu + 1
      omistat4.innerHTML="omistat: " +asia4ostettu 
      brsec = brsec+20*prestigee
      laskin=laskin-asia4hin
      asia4hin = (Math.round(asia4hin * 1.2))
      asia4.innerHTML=""+asia4hin   
      borgors.innerHTML=(Math.round(laskin))
      
      
    }
  }
  if (lol == 5){
    if (laskin >= asia5hin){
      asia5ostettu = asia5ostettu + 1
      omistat5.innerHTML="omistat: " +asia5ostettu 
      brsec = brsec+60*prestigee
      laskin=laskin-asia5hin
      asia5hin = (Math.round(asia5hin * 1.2))
      asia5.innerHTML=""+asia5hin   
      borgors.innerHTML=(Math.round(laskin))
      
      
    }
  }
  if (lol == 6){
    if (laskin >= asia6hin){
      asia6ostettu = asia6ostettu + 1
      omistat6.innerHTML="omistat: " +asia6ostettu 
      brsec = brsec+150*prestigee
      laskin=laskin-asia6hin
      asia6hin = (Math.round(asia6hin * 1.2))
      asia6.innerHTML=""+asia6hin   
      borgors.innerHTML=(Math.round(laskin))
      
      
    }
  }
  if (lol == 7){
    if (laskin >= asia7hin){
      asia7ostettu = asia7ostettu + 1
      omistat7.innerHTML="omistat: " +asia7ostettu 
      brsec = brsec+500*prestigee
      laskin=laskin-asia7hin
      asia7hin = (Math.round(asia7hin * 1.2))
      asia7.innerHTML=""+asia7hin   
      borgors.innerHTML=(Math.round(laskin))
      
      
    }
  }
  if (lol == 8){
    if (laskin >= asia8hin){
      asia8ostettu = asia8ostettu + 1
      omistat8.innerHTML="omistat: " +asia8ostettu 
      brsec = brsec+1000*prestigee
      laskin=laskin-asia8hin
      asia8hin = (Math.round(asia8hin * 1.2))
      asia8.innerHTML=""+asia8hin   
      borgors.innerHTML=(Math.round(laskin))
      
      
    }
  }
  if (lol == 9){
    if (laskin >= asia9hin){
      asia9ostettu = asia9ostettu + 1
      omistat9.innerHTML="omistat: " +asia9ostettu 
      brsec = brsec+10000*prestigee
      laskin=laskin-asia9hin
      asia9hin = (Math.round(asia9hin * 1.2))
      asia9.innerHTML=""+asia9hin   
      borgors.innerHTML=(Math.round(laskin))
      
      
    }
  }
  if (lol == 10){
    if (laskin >= asia10hin){
      asia10ostettu = asia10ostettu + 1
      omistat10.innerHTML="omistat: " +asia10ostettu 
      click = click + 1 
      laskin=laskin-asia10hin
      asia10hin = (Math.round(asia10hin * 2.0))
      asia10.innerHTML=""+asia10hin   
      borgors.innerHTML=(Math.round(laskin))
      
      
    }
  }
  if (lol == 11){
    if (laskin >= asia11hin){
      asia11ostettu = asia11ostettu + 1
      omistat11.innerHTML="omistat: " +asia11ostettu 
      brsec = brsec * 2
      laskin=laskin-asia11hin
      asia11hin = (Math.round(asia11hin * 122))
      asia11.innerHTML=""+asia11hin   
      borgors.innerHTML=(Math.round(laskin))
      
      
    }
  }
  if (lol == 12){
    if (laskin >= asia12hin){
      asia12ostettu = asia12ostettu + 1
      omistat12.innerHTML="omistat: " +asia12ostettu 
      click = click + 10
      laskin=laskin-asia12hin
      asia12hin = (Math.round(asia12hin * 2.0))
      asia12.innerHTML=""+asia12hin   
      borgors.innerHTML=(Math.round(laskin))
      
      
    }
  }
  if (lol == 13){
    if (laskin >= asia13hin){
      asia13ostettu = asia13ostettu + 1
      omistat13.innerHTML="omistat: " +asia13ostettu 
      click = click + 20
      laskin=laskin-asia13hin
      asia13hin = (Math.round(asia13hin * 2.0))
      asia13.innerHTML=""+asia13hin   
      borgors.innerHTML=(Math.round(laskin))
      
      
    }
  }
  if (lol == 14){
    if (laskin >= asia14hin){
      asia14ostettu = asia14ostettu + 1
      omistat14.innerHTML="omistat: " +asia14ostettu 
      click = click + 100
      laskin=laskin-asia14hin
      asia14hin = (Math.round(asia14hin * 2.0))
      asia14.innerHTML=""+asia14hin   
      borgors.innerHTML=(Math.round(laskin))
      
      
    }
  }
}




let saving = false;
setInterval(function(){
  localStorage.setItem('laskin', laskin);
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
  localStorage.setItem('asia11hin', asia11hin);
  localStorage.setItem('asia12hin', asia12hin);
  localStorage.setItem('asia13hin', asia13hin);
  localStorage.setItem('asia14hin', asia14hin);
  localStorage.setItem('prestigee', prestigee);
  localStorage.setItem('prestigetimes', prestigetimes);
  localStorage.setItem('click', click);
  localStorage.setItem('vari', vari);
  brsecc.innerHTML="burgereita sekunnis: " + brsec / 4
  clickk.innerHTML="burgereita klikkauksesta: " + click
  if (!saving) {
    saving = true;
    if (name && name !== "") {
      (async function sendResult() {
        var response = await fetch(
          'https://wfe6dj7pjl.execute-api.eu-west-1.amazonaws.com/6b56430d-ecd7-444b-b80d-38c30c1b23a4/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, score: Math.round(laskin), id: playerId })
          });
          if (response.ok) {
            var results = await response.json();
            drawBoard(results)
          }
          setTimeout(sendResult, 10000);
        })();
      }
    }
  },5000)
  
  function toggleShop() {
    if(shop.style.display=="block"){
      shop.style.display="none"
      showshop.innerHTML="Kauppa"
    }
    else{
      settings.style.display="none"
      settingsctrl.innerHTML="Asetukset"
      shop.style.display="block"
      showshop.innerHTML="Borgor"
    }
  }
  function togglesettings() {
    if(settings.style.display=="block"){
      settings.style.display="none"
      settingsctrl.innerHTML="Asetukset"
    }
    else{
      settings.style.display="block"
      settingsctrl.innerHTML="Sulje"
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
    localStorage.setItem('name', name);
    localStorage.setItem('playerId', playerId);
    localStorage.setItem('juttu4', ""+juttu4);
    location.reload()
  }
  
    
  
  function coolbackground(){
    document.body.classList.toggle("body");
  }
  function drawBoard(results){
    let pisteet = document.getElementById("pisteet")
    pisteet.innerHTML = '<tr><th>nimi</th> <br> <th>borgorit</th></tr>';
    results.forEach(function(result) {
      console.log(result.name + ": " + result.score);
      let tr = document.createElement("tr")
      let nametd = document.createElement("td")
      let pointstd = document.createElement("td")
      nametd.appendChild(document.createTextNode(result.name))
      pointstd.appendChild(document.createTextNode(result.score))
      tr.appendChild(nametd)
      tr.appendChild(pointstd)                
      pisteet.appendChild(tr)
    });
    
  }
  
  function updateBoard(){
    
    (async function() {
      var response = await fetch('https://wfe6dj7pjl.execute-api.eu-west-1.amazonaws.com/6b56430d-ecd7-444b-b80d-38c30c1b23a4/')
      if (response.ok) {
        var results = await response.json();
        drawBoard(results)
      }
    })();
  }
  function showboard(){   
    if(leaderboard.style.display=="block"){
      leaderboard.style.display="none"
      leaderboardctrl.innerHTML="Pistetaulukko"
    }
    else{
      leaderboard.style.display="block"
      leaderboardctrl.innerHTML="Sulje"
      updateBoard()
      
    }
  }
  function showkaikki(){
    kaikki.style.display="block"
    let form = document.getElementById("form")
    form.style.display="none"
    
  }
  
  if (name !== "") {
    showkaikki();
    
  } else {
    document.getElementById("form").addEventListener("submit", function(e) {
      e.preventDefault();
      name = document.getElementById("name").value
      console.log(name)
      localStorage.setItem('name', name);
      showkaikki();
    });
  }
  
  if (name == "Eero" || name == "Eeron puhelin" || name == "Eeron chromebook" || name == "Tuttuujuu") {
    vippi = 1
  }
  if (vippi == 1) {
    vip.style.display="block"
  }
  updateBoard()
  function deletename(playername){
    (async function() {
    var response = await fetch(
        'https://wfe6dj7pjl.execute-api.eu-west-1.amazonaws.com/6b56430d-ecd7-444b-b80d-38c30c1b23a4/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: playername })
        });
    var body = await response.json();
    console.log(body);
})();
  }
  
if (juttu4 == 0) {
  juttu4 = 1
  restart()
}
  