var kerdesek = [
];

var sorszam = Math.floor(Math.random() * kerdesek.length);
var pontok = 0;
var joValasz = true;

function kerdesBetoltes() {
    var aktualis = kerdesek[sorszam];
    
    var kerdesElem = document.getElementById("kerdes-szoveg uveges");
    if (kerdesElem) {
        kerdesElem.innerHTML = aktualis[0];
    }
    
    document.getElementById("b0").innerHTML = aktualis[1];
    document.getElementById("b1").innerHTML = aktualis[2];
    document.getElementById("b2").innerHTML = aktualis[3];
    document.getElementById("b3").innerHTML = aktualis[4];
}
function valaszEllenorzese(szam) {
    var helyesValaszIndex = kerdesek[sorszam][5];

    if (szam == helyesValaszIndex) {
        alert("Helyes! Ügyes kacsa vagy! 🦆");
        pontok = pontok + 1000;
        
        sorszam = Math.floor(Math.random() * kerdesek.length);
        kerdesBetoltes();
    } else {
        alert("Sajnos rossz... A játék véget ért. A helyes válasz: " + kerdesek[sorszam][helyesValaszIndex + 1]);
        jatekVege();
    }
}

function jatekVege() {
    var kerdesSzoveg = document.getElementById("kerdes-szoveg");
    if (kerdesSzoveg) kerdesSzoveg.style.display = "none";
    
    var gombok = document.querySelectorAll(".gombok");
    gombok.forEach(g => g.style.display = "none");
    
    document.getElementById("vege-uzenet").style.display = "block";
    document.getElementById("eredmeny-szoveg").innerHTML = "Vége a játéknak! Összesen " + pontok + " pontot szereztél! 🏆";
}

window.onload = function() {
    kerdesBetoltes();
};