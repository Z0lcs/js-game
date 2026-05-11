const vaszon = document.getElementById("duckCanvas");
const kontextus = vaszon.getContext("2d");
const pontszamKijelzo = document.getElementById("score");

const sugar = 15;
const RACSMERET = 30;
const vizszintesMezok = 14;
const fuggolegesMezok = 14;

vaszon.width = vizszintesMezok * RACSMERET;
vaszon.height = fuggolegesMezok * RACSMERET;

const CSEMPE_X_SZAM = vaszon.width / RACSMERET;
const CSEMPE_Y_SZAM = vaszon.height / RACSMERET;

let kacsaTest = [];
for (let i = 0; i < 3; i++) {
    kacsaTest.push({ x: 10 - i, y: 10 });
}

let pontszam = 0;
let jatekFut = false;
let jatekVege = false;
let aktualisIrany = { x: 1, y: 0 };
let kovetkezoIrany = { x: 1, y: 0 };
let elozoIrany = { x: 1, y: 0 };
let mozgasiFolyamat = 0;
let mozgasiSebesseg = 0.05;

let kenyerek = [];
for (let i = 0; i < 3; i++) { kenyerLetrehozas(); }

window.addEventListener("keydown", esemeny => {
    if (!jatekFut && !jatekVege && esemeny.key.startsWith("Arrow")) {
        jatekFut = true;
    }
    if (esemeny.key === "ArrowUp" && aktualisIrany.y === 0) kovetkezoIrany = { x: 0, y: -1 };
    if (esemeny.key === "ArrowDown" && aktualisIrany.y === 0) kovetkezoIrany = { x: 0, y: 1 };
    if (esemeny.key === "ArrowLeft" && aktualisIrany.x === 0) kovetkezoIrany = { x: -1, y: 0 };
    if (esemeny.key === "ArrowRight" && aktualisIrany.x === 0) kovetkezoIrany = { x: 1, y: 0 };

    if (jatekVege && esemeny.code === "Space") {
        location.reload();
    }
});

function kenyerLetrehozas() {
    let ujPozicio;
    while (true) {
        ujPozicio = {
            x: Math.floor(Math.random() * CSEMPE_X_SZAM),
            y: Math.floor(Math.random() * CSEMPE_Y_SZAM)
        };
        let foglalt = kacsaTest.some(p => p.x === ujPozicio.x && p.y === ujPozicio.y) ||
            kenyerek.some(b => b.x === ujPozicio.x && b.y === ujPozicio.y);
        if (!foglalt) break;
    }
    kenyerek.push(ujPozicio);
}

function frissites() {
    if (!jatekFut || jatekVege) return;

    mozgasiFolyamat += mozgasiSebesseg;
    if (mozgasiFolyamat >= 1) {
        mozgasiFolyamat = 0;

        elozoIrany = { x: aktualisIrany.x, y: aktualisIrany.y };
        aktualisIrany = { x: kovetkezoIrany.x, y: kovetkezoIrany.y };

        const ujFejPozicio = {
            x: kacsaTest[0].x + aktualisIrany.x,
            y: kacsaTest[0].y + aktualisIrany.y
        };
        const utkozesFallal = ujFejPozicio.x < 0 || ujFejPozicio.x >= CSEMPE_X_SZAM ||
            ujFejPozicio.y < 0 || ujFejPozicio.y >= CSEMPE_Y_SZAM;

        const utkozesTesttel = kacsaTest.some(p => p.x === ujFejPozicio.x && p.y === ujFejPozicio.y);

        if (utkozesFallal || utkozesTesttel) {
            jatekVege = true;
            mentesEsRanglista(pontszam); 
            return;
        }

        kacsaTest.unshift(ujFejPozicio);

        const kenyerIndex = kenyerek.findIndex(b => b.x === ujFejPozicio.x && b.y === ujFejPozicio.y);
        if (kenyerIndex !== -1) {
            pontszam++;
            pontszamKijelzo.innerText = "Halak: " + pontszam;
            const szazalek = Math.min((pontszam / 50) * 100, 100);

            let szin = "linear-gradient(to top, #3a7bd5, #00d2ff)";
            if (szazalek > 30) szin = "linear-gradient(to top, #16a085, #2ecc71)";
            if (szazalek > 70) szin = "linear-gradient(to top, #f39c12, #f1c40f)";

            pontszamKijelzo.style.setProperty('--magassag', szazalek + "%");
            pontszamKijelzo.style.setProperty('--szin', szin);

            kenyerek.splice(kenyerIndex, 1);
            kenyerLetrehozas();
        } else {
            kacsaTest.pop();
        }
    }
}

function rajzolas() {
    kontextus.clearRect(0, 0, vaszon.width, vaszon.height);

    // Sakktábla háttér 
    for (let x = 0; x < CSEMPE_X_SZAM; x++) {
        for (let y = 0; y < CSEMPE_Y_SZAM; y++) {
            kontextus.fillStyle = (x + y) % 2 === 0 ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)";
            kontextus.fillRect(x * RACSMERET, y * RACSMERET, RACSMERET, RACSMERET);
        }
    }

    // Halak rajzolása 
    kenyerek.forEach(hal => {
        kontextus.save();
        const x = hal.x * RACSMERET + RACSMERET / 2;
        const y = hal.y * RACSMERET + RACSMERET / 2;
        kontextus.font = "bold 26px serif";
        kontextus.textAlign = "center";
        kontextus.textBaseline = "middle";
        kontextus.shadowColor = "white";
        kontextus.shadowBlur = 10;
        kontextus.strokeStyle = "white";
        kontextus.lineWidth = 2;
        kontextus.strokeText("🐟", x, y);
        kontextus.fillText("🐟", x, y);
        kontextus.restore();
    });

    for (let i = kacsaTest.length - 1; i >= 0; i--) {
        let aktualisResz = kacsaTest[i];
        let kovetkezoResz = kacsaTest[i - 1];
        let rajzX, rajzY;

        if (kovetkezoResz) {
            let dx = kovetkezoResz.x - aktualisResz.x;
            let dy = kovetkezoResz.y - aktualisResz.y;
            if (Math.abs(dx) > 1) dx = -Math.sign(dx);
            if (Math.abs(dy) > 1) dy = -Math.sign(dy);

            rajzX = (aktualisResz.x + dx * mozgasiFolyamat) * RACSMERET;
            rajzY = (aktualisResz.y + dy * mozgasiFolyamat) * RACSMERET;
        } else {
            rajzX = (aktualisResz.x + aktualisIrany.x * mozgasiFolyamat) * RACSMERET;
            rajzY = (aktualisResz.y + aktualisIrany.y * mozgasiFolyamat) * RACSMERET;
        }

        const kX = rajzX + RACSMERET / 2;
        const kY = rajzY + RACSMERET / 2;

        kontextus.lineWidth = 2.5;
        kontextus.strokeStyle = "#b7950b";
        kontextus.fillStyle = "#f1c40f";
        kontextus.beginPath();
        kontextus.arc(kX, kY, sugar, 0, Math.PI * 2);
        kontextus.fill();
        kontextus.stroke();

        if (i === 0) {
            kontextus.fillStyle = "#e67e22";
            kontextus.beginPath();
            kontextus.arc(kX + aktualisIrany.x * 10, kY + aktualisIrany.y * 10, 8, 0, Math.PI * 2);
            kontextus.fill();
            kontextus.stroke();

            kontextus.fillStyle = "black";
            let sT = 6, sE = 6;
            if (aktualisIrany.x !== 0) {
                kontextus.beginPath();
                kontextus.arc(kX + aktualisIrany.x * sE, kY - sT, 3.5, 0, Math.PI * 2);
                kontextus.arc(kX + aktualisIrany.x * sE, kY + sT, 3.5, 0, Math.PI * 2);
                kontextus.fill();
            } else {
                kontextus.beginPath();
                kontextus.arc(kX - sT, kY + aktualisIrany.y * sE, 3.5, 0, Math.PI * 2);
                kontextus.arc(kX + sT, kY + aktualisIrany.y * sE, 3.5, 0, Math.PI * 2);
                kontextus.fill();
            }
        }
    }

    if (!jatekFut && !jatekVege) {
        kontextus.save();
        kontextus.fillStyle = "rgba(0, 0, 0, 0.5)";
        kontextus.fillRect(0, 0, vaszon.width, vaszon.height);

        kontextus.fillStyle = "white";
        kontextus.font = "bold 20px sans-serif";
        kontextus.textAlign = "center";
        kontextus.fillText("Nyomj meg egy nyilat az indításhoz!", vaszon.width / 2, vaszon.height / 2);
        kontextus.restore();
    }

    if (jatekVege) {
        kontextus.fillStyle = "rgba(0, 0, 0, 0.7)";
        kontextus.fillRect(0, 0, vaszon.width, vaszon.height);

        kontextus.fillStyle = "white";
        kontextus.font = "bold 25px sans-serif";
        kontextus.fillText("TOP 10 HALÁSZ", vaszon.width / 2, 50);

        let lista = JSON.parse(localStorage.getItem("kacsaTop10")) || [];
        kontextus.font = "16px sans-serif";

        lista.forEach((sor, i) => {
            kontextus.textAlign = "left";
            kontextus.fillText((i + 1) + ". " + sor.nev, 50, 90 + (i * 25));
            kontextus.textAlign = "right";
            kontextus.fillText(sor.pont + " hal", vaszon.width - 50, 90 + (i * 25));
        });

        kontextus.textAlign = "center";
        kontextus.font = "bold 14px sans-serif";
        kontextus.fillText("Nyomj SPACE-t az újraindításhoz!", vaszon.width / 2, vaszon.height - 30);
    }
    frissites();
    requestAnimationFrame(rajzolas);
}

function mentesEsRanglista(vegszoPont) {
    let rekord = localStorage.getItem("kacsaRekord") || 0;
    if (vegszoPont > rekord) {
        localStorage.setItem("kacsaRekord", vegszoPont);
    }

    let lista = JSON.parse(localStorage.getItem("kacsaTop10")) || [];
    let nev = prompt("Vége a játéknak! Pontszámod: " + vegszoPont + "\nAdd meg a neved a listához:", "Kacsa");

    if (nev) {
        lista.push({ nev: nev, pont: vegszoPont });
        lista.sort((a, b) => b.pont - a.pont);
        lista = lista.slice(0, 10);
        localStorage.setItem("kacsaTop10", JSON.stringify(lista));
    }
}

rajzolas();