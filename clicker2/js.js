var A = 0
var click = 1
var hinta = 20
function hellyeah(){
    soundGo()
    A = A + click
    document.getElementById("P").textContent = A
    
}
function reset(){
    hinta = 20
    A = 0
    click = 1
    sound2Go()
    document.getElementById("clickPower").textContent = "Click power: "+ click
    document.getElementById("Cost").textContent = "Cost: "+ hinta
    document.getElementById("P").textContent = A
}
function addClick(){
    
    if(A >= hinta){
        click = click + 1
        document.getElementById("clickPower").textContent = "Click power: "+ click
        A = A - hinta
        hinta = Math.round(hinta * 2)
        document.getElementById("P").textContent = A
        document.getElementById("Cost").textContent = "Cost: "+ hinta
        soundGo()
    } else {
        sound2Go()
    }
   
}
function soundGo(){
  var audio = new Audio('dih.mp3');
  audio.play();  
}
function sound2Go(){
  var audio = new Audio('dihh.mp3');
  audio.play();  
}