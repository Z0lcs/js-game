var kerdesek = [];

var sorszam = 0;
var pontok = 0; 

function kerdesBetoltes() {
    var aktualis = kerdesek[sorszam];
    
    document.getElementById("kerdes-szoveg").innerHTML = aktualis[0];
    document.getElementById("b0").innerHTML = aktualis[1];
    document.getElementById("b1").innerHTML = aktualis[2];
    document.getElementById("b2").innerHTML = aktualis[3];
    document.getElementById("b3").innerHTML = aktualis[4];
}

function valaszEllenorzese(szam) {
    var helyesValasz = kerdesek[sorszam][5];

    if (szam == helyesValasz) {
        alert("Helyes! Ügyes kacsa vagy! 🦆");
        pontok = pontok + 1;
    } else {
        alert("Sajnos rossz...");
    }

    sorszam = sorszam + 1;

    if (sorszam < kerdesek.length) {
        kerdesBetoltes();
    } else {
        document.getElementById("kerdes-szoveg").style.display = "none";
        document.getElementById("b0").style.display = "none";
        document.getElementById("b1").style.display = "none";
        document.getElementById("b2").style.display = "none";
        document.getElementById("b3").style.display = "none";
        
        document.getElementById("vege-uzenet").style.display = "block";
        document.getElementById("eredmeny-szoveg").innerHTML = "Vége! Pontjaid: " + pontok;
    }
}

kerdesBetoltes();