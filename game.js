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

let pontszam = 0; // CSAK EGYSZER DEKLARÁLJUK
let jatekFut = false;
let jatekVege = false;
let aktualisIrany = { x: 1, y: 0 };
let kovetkezoIrany = { x: 1, y: 0 };
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
        aktualisIrany = kovetkezoIrany;

        const ujFejPozicio = {
            x: (kacsaTest[0].x + aktualisIrany.x + CSEMPE_X_SZAM) % CSEMPE_X_SZAM,
            y: (kacsaTest[0].y + aktualisIrany.y + CSEMPE_Y_SZAM) % CSEMPE_Y_SZAM
        };

        if (kacsaTest.some(p => p.x === ujFejPozicio.x && p.y === ujFejPozicio.y)) {
            jatekVege = true;
            return;
        }

        kacsaTest.unshift(ujFejPozicio);

        const kenyerIndex = kenyerek.findIndex(b => b.x === ujFejPozicio.x && b.y === ujFejPozicio.y);
        if (kenyerIndex !== -1) {
            pontszam++;
            pontszamKijelzo.innerText = "Halak: " + pontszam;

            const szazalek = (pontszam / 196) * 100;
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
    
    // Háttér rajzolása
    for (let x = 0; x < CSEMPE_X_SZAM; x++) {
        for (let y = 0; y < CSEMPE_Y_SZAM; y++) {
            if (x < CSEMPE_X_SZAM / 2 && y < CSEMPE_Y_SZAM / 2) {
                kontextus.fillStyle = (x + y) % 2 === 0 ? "#ff3355" : "#c60928";
            } else if (x >= CSEMPE_X_SZAM / 2 && y < CSEMPE_Y_SZAM / 2) {
                kontextus.fillStyle = (x + y) % 2 === 0 ? "#864cbf" : "#47178f";
            } else if (x < CSEMPE_X_SZAM / 2 && y >= CSEMPE_Y_SZAM / 2) {
                kontextus.fillStyle = (x + y) % 2 === 0 ? "#33cccc" : "#0aa3a3";
            } else {
                kontextus.fillStyle = (x + y) % 2 === 0 ? "#f5a23d" : "#eb670f";
            }
            kontextus.fillRect(x * RACSMERET, y * RACSMERET, RACSMERET, RACSMERET);
        }
    }

    // Halak rajzolása
    kenyerek.forEach(hal => {
        kontextus.font = "24px serif";
        kontextus.textAlign = "center";
        kontextus.textBaseline = "middle";
        kontextus.fillText("🐟", hal.x * RACSMERET + RACSMERET / 2, hal.y * RACSMERET + RACSMERET / 2);
    });

    // Kacsa rajzolása
    kontextus.lineWidth = 2.5;
    kontextus.strokeStyle = "#b7950b";
    kontextus.fillStyle = "#f1c40f";

    for (let i = kacsaTest.length - 1; i >= 0; i--) {
        let aktualisResz = kacsaTest[i];
        let kovetkezoResz = kacsaTest[i - 1];
        let rajzX, rajzY;

        if (kovetkezoResz) {
            let eltolasX = kovetkezoResz.x - aktualisResz.x;
            let eltolasY = kovetkezoResz.y - aktualisResz.y;
            if (Math.abs(eltolasX) > 1) eltolasX = -Math.sign(eltolasX);
            if (Math.abs(eltolasY) > 1) eltolasY = -Math.sign(eltolasY);

            rajzX = (aktualisResz.x + eltolasX * mozgasiFolyamat) * RACSMERET;
            rajzY = (aktualisResz.y + eltolasY * mozgasiFolyamat) * RACSMERET;
        } else {
            rajzX = (aktualisResz.x + aktualisIrany.x * mozgasiFolyamat) * RACSMERET;
            rajzY = (aktualisResz.y + aktualisIrany.y * mozgasiFolyamat) * RACSMERET;
        }

        const kX = rajzX + RACSMERET / 2;
        const kY = rajzY + RACSMERET / 2;

        kontextus.beginPath();
        kontextus.arc(kX, kY, sugar, 0, Math.PI * 2);
        kontextus.fill();
        kontextus.stroke();

        if (i === 0) {
            // Csőr
            kontextus.fillStyle = "#e67e22";
            kontextus.beginPath();
            kontextus.arc(kX + aktualisIrany.x * 10, kY + aktualisIrany.y * 10, 8, 0, Math.PI * 2);
            kontextus.fill();
            kontextus.stroke();

            // Szemek
            kontextus.fillStyle = "black";
            let szemTav = 6;
            let szemEltolas = 6;
            if (aktualisIrany.x !== 0) {
                kontextus.beginPath();
                kontextus.arc(kX + aktualisIrany.x * szemEltolas, kY - szemTav, 3.5, 0, Math.PI * 2);
                kontextus.arc(kX + aktualisIrany.x * szemEltolas, kY + szemTav, 3.5, 0, Math.PI * 2);
                kontextus.fill();
            } else {
                kontextus.beginPath();
                kontextus.arc(kX - szemTav, kY + aktualisIrany.y * szemEltolas, 3.5, 0, Math.PI * 2);
                kontextus.arc(kX + szemTav, kY + aktualisIrany.y * szemEltolas, 3.5, 0, Math.PI * 2);
                kontextus.fill();
            }
        }
    }

    // Overlay üzenetek
    if (!jatekFut && !jatekVege) {
        kontextus.fillStyle = "rgba(0, 0, 0, 0.5)";
        kontextus.fillRect(0, 0, vaszon.width, vaszon.height);
        kontextus.fillStyle = "white";
        kontextus.font = "20px sans-serif";
        kontextus.textAlign = "center";
        kontextus.fillText("Nyomj meg egy nyilat az indításhoz!", vaszon.width / 2, vaszon.height / 2);
    }

    if (jatekVege) {
        kontextus.fillStyle = "rgba(255, 0, 0, 0.6)";
        kontextus.fillRect(0, 0, vaszon.width, vaszon.height);
        kontextus.fillStyle = "white";
        kontextus.font = "bold 30px sans-serif";
        kontextus.textAlign = "center";
        kontextus.fillText("GAME OVER", vaszon.width / 2, vaszon.height / 2 - 20);
        kontextus.font = "16px sans-serif";
        kontextus.fillText("Nyomj SPACE-t az újraindításhoz!", vaszon.width / 2, vaszon.height / 2 + 20);
    }

    frissites();
    requestAnimationFrame(rajzolas);
}

rajzolas();