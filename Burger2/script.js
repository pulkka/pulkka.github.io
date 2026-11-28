var burgers = document.getElementById("burgers");
burgers.innerHTML = "hehee"
var zmoney = Number(localStorage.getItem("zmoney")) || 0;
var clickpower = 1
var bps = 0
var burgercontainer = document.getElementById("burgerspace")
var purchase = new Audio("purchase.wav");
var cancel = new Audio("cancel.wav");
var click = new Audio("clicksound1.mp3");
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
let shopitems = [
    { name: "item1", price: 50, power: 1, amount:0,},
    { name: "item2", price: 250, power: 3, amount:0,},
    { name: "item3", price: 1000, power: 8, amount:0,},
    { name: "item4", price: 4000, power: 20, amount:0,},
    { name: "item5", price: 15000, power: 50, amount:0,},
    { name: "item6", price: 50000, power: 120, amount:0,},
    { name: "item7", price: 160000, power: 300, amount:0,},
    { name: "item8", price: 500000, power: 750, amount:0,},
    { name: "item9", price: 1600000, power: 1800, amount:0,},
    { name: "item10", price: 5000000, power: 4500, amount:0,},
    { name: "item11", price: 16000000, power: 11000, amount:0,},
    { name: "item12", price: 50000000, power: 28000, amount:0,}
];
let clickitems =[
    { name:"click1",price:1000, power:1,amount:0},
    { name:"click2",price:50000, power:20,amount:0},
    { name:"click3",price:250000, power:100,amount:0},
    { name:"click4",price:1250000, power:500,amount:0}
]
bps = Number(localStorage.getItem("bps")) || 0;
clickpower = Number(localStorage.getItem("clickpower")) || 1;
let savedItems = localStorage.getItem("shopitems");

if (savedItems) {
    shopitems = JSON.parse(savedItems);
}
let saved2Items = localStorage.getItem("clickitems");

if (saved2Items) {
    clickitems = JSON.parse(saved2Items);
}
for (let i = 0; i < 12; i++) {
  document.getElementById(shopitems[i].name).innerHTML = numberWithSpaces(Math.round(shopitems[i].price))   +"🍔"
  console.log(i)
}
for (let i = 0; i < clickitems.length; i++) {
    document.querySelector("#" + clickitems[i].name + " .clickPrice p").innerHTML =
        numberWithSpaces(Math.round(clickitems[i].price)) + "🍔";
}

function addburger(){
    click.currentTime = 0;
    click.play();
    zmoney += clickpower
    burgers.innerHTML = numberWithSpaces(Math.round(zmoney)) 
    const x = event.offsetX
    const y = event.offsetY + 40
    const div = document.createElement("div")
    div.innerHTML = `+${Math.round(clickpower)}`;
    div.style.cssText = `color: black;position: absolute;top: ${y}px;left: ${x + (Math.random() - 0.5) * 50}px;font-size: 20px;pointer-events: none;`;
    burgercontainer.appendChild(div)
    div.classList.add("click")
    timeout(div)
    const burger = document.getElementById("burger");

    burger.classList.remove("clicked");
    void burger.offsetWidth;
    burger.classList.add("clicked");
}
const timeout = (div)=>{
    setTimeout(() =>{
        div.remove()
    },800)
}
function buyshop(item){
    if(zmoney>=shopitems[item-1].price){
        zmoney -= shopitems[item-1].price
        shopitems[item-1].price = shopitems[item-1].price * 1.2
        bps += shopitems[item-1].power
        purchase.play()
        shopitems[item-1].amount += 1;
    } else{
        cancel.currentTime=0
        cancel.play()
    }
    document.getElementById(shopitems[item-1].name).innerHTML = numberWithSpaces( Math.round(shopitems[item-1].price))  + "🍔"
    burgers.innerHTML = numberWithSpaces(Math.round(zmoney)) 
}
function buyclick(item){
    if(zmoney>=clickitems[item-1].price){
        zmoney -= clickitems[item-1].price
        clickitems[item-1].price = clickitems[item-1].price * 1.2
        clickpower += clickitems[item-1].power
        purchase.currentTime=0
        purchase.play()
        clickitems[item-1].amount += 1;
    } else{
        cancel.currentTime=0
        cancel.play()
    }
    document.querySelector("#" + clickitems[item-1].name + " .clickPrice p").innerHTML =
    numberWithSpaces(Math.round(clickitems[item-1].price)) + "🍔";
    burgers.innerHTML = numberWithSpaces(Math.round(zmoney)) 
}
setInterval(() => {
    zmoney += bps/10
    burgers.innerHTML = numberWithSpaces(Math.round(zmoney))
      
    }, 100);
setInterval(() => {
    for (let i = 0; i < shopitems.length; i++) {
        const div = document.getElementById(shopitems[i].name + "div");
        const div2 = div .querySelector('.info')
        div.style.backgroundColor = zmoney >= shopitems[i].price
            ? "rgb(213, 228, 255)"
            : "rgb(136, 145, 163)";
        div2.style.backgroundColor = zmoney >= shopitems[i].price
            ? "rgb(213, 228, 255)"
            : "rgb(136, 145, 163)";
        const amount = div.querySelector('.itemamt')
        amount.innerHTML = shopitems[i].amount
        
    }
    for (let i = 0; i < 12; i++) {
        document.getElementById("i"+shopitems[+i].name).innerHTML = "BPS: " + shopitems[i].power +"🍔" + "<br>"+ "Total: "+  shopitems[i].power * shopitems[i].amount + "🍔"
        
        }
    document.getElementById("bps").innerHTML = "BPS: "+ Math.round(bps) 
    document.getElementById("bpc").innerHTML = "BPC: "+ Math.round(clickpower) 
}, 100);
setInterval(() => {
    localStorage.setItem("zmoney", zmoney)
    localStorage.setItem("shopitems", JSON.stringify(shopitems));
    localStorage.setItem("clickitems", JSON.stringify(clickitems));
    localStorage.setItem("bps",bps)
    localStorage.setItem("clickpower",clickpower)
    }, 5000);
setInterval(() => {
    for (let i = 0; i < clickitems.length; i++) {
        const div = document.getElementById(clickitems[i].name);

        div.style.backgroundColor = zmoney >= clickitems[i].price
            ? "rgb(213, 228, 255)"
            : "rgb(136, 145, 163)";

        const amount1 = div.querySelector('.itemamtclick');
        amount1.innerHTML = clickitems[i].amount;
    }
}, 100);
