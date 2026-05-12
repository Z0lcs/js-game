var kerdesek = [
    ["Mikor jutott ki Magyarország legutóbb az EB-re?", "2016", "2020", "2024", "2022", 2],
    ["Hány méterről dobják a kézilabdázók a szabaddobást?", "9", "7", "10", "6", 0],
    ["Melyik Forma 1-es csapat nyerte meg meglepetésszerűen a világbajnokságot?", "Apex GP", "Mitsubishi F1 Team", "Brawn GP", "Subaru GP", 2],
    ["Melyik csapat nem nyert soha Bajnokok Ligáját?", "Nottingham Forest", "Real Madrid", "Ajax Amsterdam", "Totthenam Hotspur", 3],
    ["Milyen nemzetiségű Gerwin Price, a többszörös Darts Vb győztes?", "Walesi", "Brit", "Norvég", "Grúz", 0],
    ["Melyik csapatban nem játszott Szoboszlai Dominik?", "RB Salzburg", "Liverpool", "Puskás Akadémia", "MTK Budapest", 3],
    ["Melyik sportban használják a \"touchdown\" kifejezést?", "Kosárlabda", "Baseball", "Amerikai futball", "Rögbi", 2],
    ["Ki nyerte a 2022-es labdarúgó-világbajnokságot?", "Franciaország", "Brazília", "Németország", "Argentína", 3],
    ["Melyik sportban szerepel a \"Grand Slam\" kifejezés?", "Tenisz", "Golf", "Forma-1", "Jégkorong", 0],
    ["Hány világbajnokságot nyert Dél-Amerika válogatottjai?", "10", "13", "20", "6", 0],
    ["Melyik sztárjátékos nem nyert Aranylabdát?", "Andres Iniesta", "Zinadine Zidane", "Luka Modrič", "Lev Yashin", 0],
    ["Melyik sportágban rendezik meg évente a Tour de France versenyt?", "Kajak-kenu", "Autóverseny", "Kerékpár", "Sífutás", 2],
    ["Hány félidőből áll egy hivatalos kézilabda-mérkőzés?", "1", "2", "3", "4", 1],
    ["Ki volt a Forma-1 első 7-szeres világbajnoka?", "Ayrton Senna", "Lewis Hamilton", "Sebastian Vettel", "Michael Schumacher", 3],
    ["Melyik ország nyerte a legtöbb labdarúgó-világbajnokságot?", "Németország", "Argentína", "Brazília", "Olaszország", 2],
    ["Milyen hosszú egy olimpiai medence?", "25 méter", "33 méter", "50 méter", "100 méter", 2]
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
    var kerdesSzoveg = document.getElementById("kerdes-szoveg uveges");
    if (kerdesSzoveg) kerdesSzoveg.style.display = "none";

    var gombok = document.querySelectorAll(".gombok");
    gombok.forEach(g => g.style.display = "none");

    document.getElementById("vege-uzenet").style.display = "block";
    document.getElementById("eredmeny-szoveg").innerHTML = "Vége a játéknak! Összesen " + pontok + " pontot szereztél! 🏆";
}

window.onload = function () {
    kerdesBetoltes();
};