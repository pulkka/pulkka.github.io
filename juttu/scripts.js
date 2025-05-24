let pisteet = document.getElementById("pisteet")
document.getElementById("form").addEventListener("submit", function (e){
    let name = document.getElementById("name").value;
    e.preventDefault();
    pisteet.style.display="block"
    noppa.style.display="block"
    form.style.display="none"
    let tr = document.createElement("tr")
    let nametd = document.createElement("td")
    let tasotd = document.createElement("td")
    let pointstd = document.createElement("td")
    nametd.appendChild(document.createTextNode(name))
    pointstd.appendChild(document.createTextNode(current))
    tasotd.appendChild(document.createTextNode("0"))
    tr.appendChild(nametd)
    tr.appendChild(tasotd)
    tr.appendChild(pointstd)
    pisteet.appendChild(tr)

});

let current = 0;
document.querySelector("#noppa button").addEventListener("click", function() {
    let min = 0
    let max = 6
    current = Math. floor(Math. random() * (max - min + 1) + min)
    document.querySelector("#noppa i").innerHTML = "" + current
});
