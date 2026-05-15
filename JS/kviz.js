var kerdesek = [
    ["Mikor jutott ki Magyarország legutóbb a labdarúgó EB-re?", "2016", "2020", "2024", "2022", 2],
    ["Hány méterről dobják a kézilabdázók a szabaddobást?", "9", "7", "10", "6", 0],
    ["Melyik Forma-1-es csapat nyerte meg meglepetésszerűen a világbajnokságot 2009-ben?", "Apex GP", "Mitsubishi F1 Team", "Brawn GP", "Subaru GP", 2],
    ["Melyik csapat nem nyert soha Bajnokok Ligáját?", "Nottingham Forest", "Real Madrid", "Ajax Amsterdam", "Tottenham Hotspur", 3],
    ["Milyen nemzetiségű Gerwyn Price, a többszörös világbajnok dartsjátékos?", "Walesi", "Brit", "Norvég", "Grúz", 0],
    ["Melyik csapatban nem játszott Szoboszlai Dominik?", "RB Salzburg", "Liverpool", "Puskás Akadémia", "MTK Budapest", 3],
    ["Melyik sportban használják a \"touchdown\" kifejezést?", "Kosárlabda", "Baseball", "Amerikai futball", "Rögbi", 2],
    ["Ki nyerte a 2022-es labdarúgó-világbajnokságot?", "Franciaország", "Brazília", "Németország", "Argentína", 3],
    ["Melyik sportban használják a \"Grand Slam\" kifejezést?", "Tenisz", "Golf", "Forma-1", "Jégkorong", 0],
    ["Hány világbajnokságot nyertek összesen a dél-amerikai válogatottak?", "10", "13", "20", "6", 0],
    ["Melyik sztárjátékos nem nyert soha Aranylabdát?", "Andrés Iniesta", "Zinedine Zidane", "Luka Modrić", "Lev Jasin", 0],
    ["Melyik sportágban rendezik meg évente a Tour de France versenyt?", "Kajak-kenu", "Autóverseny", "Kerékpár", "Sífutás", 2],
    ["Hány félidőből áll egy hivatalos kézilabda-mérkőzés?", "1", "2", "3", "4", 1],
    ["Ki volt a Forma-1 történetének első hétszeres világbajnoka?", "Ayrton Senna", "Lewis Hamilton", "Sebastian Vettel", "Michael Schumacher", 3],
    ["Melyik ország nyerte a legtöbb labdarúgó-világbajnokságot?", "Németország", "Argentína", "Brazília", "Olaszország", 2],
    ["Milyen hosszú egy olimpiai úszómedence?", "25 méter", "33 méter", "50 méter", "100 méter", 2],
    ["Hány perces a hosszabbítás a labdarúgásban (kieséses szakaszban)?", "2 x 15 perc", "3 x 10 perc", "2 x 20 perc", "1 x 30 perc", 0],
    ["Melyik küzdősportban használnak \"ippon\" és \"waza-ari\" pontokat?", "Karate", "Judo", "Taekwondo", "Birkózás", 1],
    ["Melyik sportágban lehet egy játékos \"center\" vagy \"irányító\"?", "Kosárlabda", "Kézilabda", "Röplabda", "Jégkorong", 0],
    ["Melyik sportágra jellemző a \"libero\" poszt?", "Kosárlabda", "Röplabda", "Kézilabda", "Labdarúgás", 1],
    ["Melyik sportágban található a \"palánk\"?", "Kézilabda", "Kosárlabda", "Jégkorong", "Salakmotor", 1],
    ["Melyik sportágban rendeznek egyéni és páros versenyeket is?", "Evezés", "Kosárlabda", "Tenisz", "Labdarúgás", 2],
    ["Melyik sportágban rendeznek csapatversenyeket is?", "Salakmotor", "Triatlon", "Snowboard", "Magasugrás", 0],
    ["Mi volt a legjobb helyezése a magyar férfi kézilabda-válogatottnak világbajnokságon?", "Világbajnoki ezüst", "Olimpiai bronz", "Világbajnokság 7. hely", "Európa-bajnokság 5. hely", 0],
    ["Melyik ország rendezte a 2018-as labdarúgó-világbajnokságot?", "Oroszország", "Németország", "Franciaország", "Katar", 0],
    ["Mi a neve a híres észak-amerikai profi kosárlabdaligának?", "NHL", "NFL", "NBA", "MLB", 2],
    ["Hány gyűrű található az olimpiai jelképen?", "4", "5", "6", "7", 1],
    ["Melyik sportban használnak ütőt és korongot?", "Baseball", "Golf", "Jégkorong", "Tollaslabda", 2],
    ["Melyik sportoló NEM volt hivatásos labdarúgó?", "Gera Zoltán", "Dzsudzsák Balázs", "Nagy László", "Grosics Gyula", 2],
    ["Ki nem szerzett gólt az angolok elleni 4-0-ás Nemzetek Ligája mérkőzésen?", "Nagy Zsolt", "Gazdag Dániel", "Sallai Roland", "Schäfer András", 3],
    ["A Halálos Iramban sorozat melyik részét szentelték Paul Walker emlékének?", "Halálos Iramban 8", "Halálos Iramban 7", "Halálos Iramban 5", "Los Bandoleros", 1],
    ["Melyik filmben nem szerepel Megan Fox?", "Transformers 2", "Tini Nindzsa Teknőcök", "Feláldozh4tók", "Transformers 3", 3],
    ["Melyik NEM Disney-animációs film?", "Így neveld a sárkányodat", "Verdák", "Lilo és Stitch", "Némó nyomában", 0],
    ["Mi Batman polgári neve?", "Lil Wayne", "Bruce Wayne", "Edison Ford", "Steve Rogers", 1],
    ["Milyen autóvá NEM alakult át Űrdongó a Transformers filmekben?", "Chevrolet Camaro", "Volkswagen Bogár", "Pontiac Firebird", "Jeep Willys MB", 2],
    ["Melyik színész alakítja Vasembert a Marvel filmekben?", "Chris Hemsworth", "Robert Downey Jr.", "Chris Evans", "Hugh Jackman", 1],
    ["Melyik filmben hangzik el: „Az Erő legyen veled!”?", "Star Trek", "A galaxis őrzői", "Star Wars", "Avatar", 2],
    ["Ki játszotta Jacket a Titanic című filmben?", "Matt Damon", "Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", 1],
    ["Melyik filmben nem szerepel Jason Momoa?", "Bosszúállók", "Az Igazság Ligája", "Halálos Iramban 10", "Aquaman", 0],
    ["Melyik ország nevét viseli az egyik leghíresebb amerikai filmstúdió?", "Columbia Pictures", "US Pictures", "Brazilian Pictures", "Egypt Pictures", 0],
    ["Melyik animációs filmben szerepel egy beszélő szamár?", "Rango", "Shrek", "Szörny Rt.", "A kis kedvencek titkos élete", 1],
    ["Melyik magyar filmben szerepel \"Feri\" karaktere (a fegyenc)?", "Üvegtigris", "Valami Amerika", "Kontroll", "Kincsem", 1],
    ["Ki játszotta Lara Croftot a 2001-es Tomb Raider filmben?", "Charlize Theron", "Scarlett Johansson", "Angelina Jolie", "Natalie Portman", 2],
    ["Melyik film főszereplője egy kisrobot, aki a szemét között él a Földön?", "Rango", "WALL-E", "Robotok", "Az 5. elem", 1],
    ["Mi a neve a Harry Potter történetek gonosz varázslójának?", "Gandalf", "Voldemort", "Dumbledore", "Sirius", 1],
    ["Melyik filmben hangzik el: „Az élet olyan, mint egy doboz bonbon...”?", "Forrest Gump", "A remény rabjai", "Halálsoron", "Életrevalók", 0],
    ["Ki a főszereplője a John Wick-sorozatnak?", "Jason Statham", "Vin Diesel", "Keanu Reeves", "Dwayne Johnson", 2],
    ["Melyik volt az első egész estés számítógéppel animált mozifilm?", "Shrek", "Toy Story", "Az Oroszlánkirály", "Madagaszkár", 1],
    ["Melyik film központi karaktere Neo?", "Mátrix", "Eredet", "Terminátor", "Tenet", 0],
    ["Ki a Mission: Impossible filmek főszereplője?", "Matt Damon", "Tom Hanks", "Tom Cruise", "Keanu Reeves", 2],
    ["Melyik volt az első világhírű hangosfilm?", "Ének az esőben", "Casablanca", "The Jazz Singer", "Elfújta a szél", 2],
    ["Melyik stúdió készítette a Toy Story filmeket?", "DreamWorks", "Pixar", "Illumination", "Sony Pictures", 1],
    ["Melyik stúdió készítette az Így neveld a sárkányodat filmeket?", "Sony Pictures", "Pixar", "Illumination", "DreamWorks", 3],
    ["Melyik karakter NEM a Marvel-univerzum része?", "Fekete Párduc", "Thor", "Doctor Strange", "Superman", 3],
    ["Melyik film híres jelenete a kerítés mögül kiszabaduló T-Rex?", "King Kong", "Jégkorszak", "Jurassic Park", "Godzilla", 2],
    ["Melyik színésznő alakította Hermionét a Harry Potter-filmekben?", "Emma Stone", "Emma Thompson", "Emma Watson", "Emily Blunt", 2],
    ["Melyik film szereplője Woody, a seriff?", "Szenilla nyomában", "Verdák", "Toy Story", "Madagaszkár", 2],
    ["Melyik karakter NEM szerepel a Madagaszkár pingvijei között?", "Kowalski", "Rico", "Vega", "Mort", 2],
    ["Melyik filmben nem szerepel Jennifer Aniston?", "Kellékfeleség", "Exférj-újratöltve", "Nagyfiúk", "Családi üzelmek", 2],
    ["Melyik filmben hangzik el: \"Te mondod, hogy rablótámadás, mert a te hangod mélyebb!\"?", "Bűnvadászok", "Különben dühbe jövünk", "Bunyó karácsonyig", "Kincs, ami nincs", 0],
    ["Melyik DESH szám érte el a 20 milliós megtekintést a YouTube-on?", "SUV", "Pannónia", "Rollin'", "Bandana | S600 Maybach", 3],
    ["Milyen betegséggel küzdött az AWS tragikusan elhunyt frontembere, Siklósi Örs?", "Tüdőproblémák", "Agydaganat", "Leukémia", "Májproblémák", 2],
    ["Melyik volt a Spotify leghallgatottabb magyar dala 2023-ban?", "Azahriah - Introvertált dal", "DESH - Osztriga", "KKevin, Bruno - PROSSECCO", "T.Danny - No Woman, No Cry", 0],
    ["Melyik szám érte el leggyorsabban az 1 milliárd streamelést?", "Lady Gaga & Bruno Mars - Die With A Smile", "Bruno Mars - Lazy Song", "The Weeknd - Blinding Lights", "John Newman - Love Me Again", 0],
    ["Melyik dal tartja az egy nap alatti legtöbb streamelés rekordját?", "Taylor Swift - Fortnight", "John Newman - Blame", "Calvin Harris - Summer", "Billie Eilish - Bad Guy", 0],
    ["Melyik rappert előzte meg The Weeknd a legtöbb 1 milliárd feletti streamelt dallal?", "Drake", "Playboi Carti", "Kendrick Lamar", "Sean Paul", 0],
    ["Ki énekli a \"Someone Like You\" című dalt?", "Beyoncé", "Adele", "Rihanna", "Lady Gaga", 1],
    ["Melyik zenekar dala a \"Bohemian Rhapsody\"?", "The Beatles", "Led Zeppelin", "Queen", "Guns N' Roses", 2],
    ["Ki volt a leghallgatottabb magyar előadó 2023-ban a Spotify-on?", "Beton.Hofi", "Dzsúdló", "Azahriah", "Manuel", 2],
    ["Melyik országból származik a K-pop műfaj?", "Japán", "Kína", "Dél-Korea", "Thaiföld", 2],
    ["Ki a \"Shape of You\" előadója?", "Shawn Mendes", "Harry Styles", "Justin Bieber", "Ed Sheeran", 3],
    ["Ki a Halott Pénz frontembere és alapítója?", "Marsalkó Dávid", "Molnár Attila", "Molnár Tamás", "Baukó Attila", 0],
    ["Melyik az ABBA együttes egyik legismertebb dala?", "Waterloo", "Thriller", "Yesterday", "Mamma Mia", 0],
    ["Melyik zenekar slágere a \"Bed of Roses\"?", "Queen", "The Eagles", "Pink Floyd", "Bon Jovi", 3],
    ["Melyik zenei műfajra jellemző a freestyle?", "Klasszikus", "Country", "Rap", "Rock", 2],
    ["Melyik magyar előadó dala a \"Pull Up\"?", "Dzsúdló", "T. Danny", "Azahriah", "Young Fly", 1],
    ["Melyik híres zeneszerző vakult meg élete végére?", "Bach", "Rodrigo", "Mozart", "Beethoven", 0],
    ["Melyik előadó adta ki a \"Carpe Diem\" című albumot?", "DESH", "Vance Joy", "Azahriah", "Ray Dalton", 0],
    ["Melyik városhoz kötődik a Tankcsapda zenekar?", "Pécs", "Szeged", "Debrecen", "Győr", 2],
    ["Mi a neve a hangszernek, amelyen vonóval játszanak a húrokon?", "Hárfa", "Zongora", "Hegedű", "Trombita", 2],
    ["Melyik előadó/együttes NEM képviselte Magyarországot az Eurovízión?", "Rúzsa Magdi", "ByeAlex", "Bagossy Brothers Company", "AWS", 2],
    ["Melyik dallal indult Kállay-Saunders András az Eurovízión?", "Simming", "Walking", "Sprinting", "Running", 3],
    ["Melyik előadó állította, hogy egy évig nem hallgatott zenét az Origó megírása előtt?", "Majka", "Pápai Joci", "Tóth Gabi", "L.L. Junior", 1],
    ["Hány évesen hunyt el Siklósi Örs?", "28", "33", "19", "26", 3],
    ["Ki énekli a \"Levitating\" című dalt?", "Doja Cat", "Dua Lipa", "Katy Perry", "Lizzo", 1],
    ["Melyik zeneszerző született a mai Németország területén (de flamand gyökerekkel)?", "Chopin", "Mozart", "Beethoven", "Liszt", 2],
    ["Melyik zenészről NEM készült még életrajzi mozifilm?", "Bob Marley", "Freddie Mercury", "Elvis Presley", "Snoop Dogg", 3],
    ["Melyik előadót ismerik \"Slim Shady\" néven is?", "Lil Wayne", "Travis Scott", "Drake", "Eminem", 3],
    ["Ki adta ki a \"Montero (Call Me By Your Name)\" című dalt?", "Lil Nas X", "Lil Baby", "Sean Paul", "Imagine Dragons", 0],
    ["Melyik előadó albumai viselnek matematikai jeleket címként?", "Ed Sheeran", "Drake", "Imagine Dragons", "Rag'n'Bone Man", 0],
    ["Melyik országra dobtak atombombát 1945-ben?", "Japán", "Kína", "Dél-Korea", "Malajzia", 0],
    ["Melyik kontinens nem határos szárazföldön másik kontinenssel?", "Afrika", "Európa", "Észak-Amerika", "Ausztrália", 3],
    ["Melyik név NEM egy létező országé?", "Pakisztán", "Üzbegisztán", "Tádzsikisztán", "Bindzsisztán", 3],
    ["Melyik felfedező flottája hajózta körbe először a Földet?", "Magellán", "Vasco da Gama", "Amerigo Vespucci", "Marco Polo", 0],
    ["Melyik amerikai városban történt a híres \"teadélután\"?", "London", "Manchester", "Newcastle", "Boston", 3],
    ["Melyik autonóm közösség tartozik Spanyolországhoz?", "Monaco", "Moldova", "Ciprus", "Katalónia", 3],
    ["Hány országgal határos Portugália?", "2", "3", "1", "0", 2],
    ["Melyik a világ legnagyobb területű országa?", "Oroszország", "USA", "Kanada", "Kína", 0],
    ["Melyik a világ második legnagyobb területű országa?", "Kanada", "India", "USA", "Oroszország", 0],
    ["Melyik városnak a legnagyobb a lakossága (agglomerációval)?", "Mumbai", "Sanghaj", "Peking", "Tokió", 3],
    ["Melyik ország NEM része az Egyesült Királyságnak?", "Észak-Írország", "Skócia", "Feröer-szigetek", "Wales", 2],
    ["Melyik terület NEM Dánia autonóm része?", "Feröer-szigetek", "Grönland", "Sjælland", "Man-sziget", 3],
    ["Melyik állam NEM az Egyesült Államok része?", "Új-Mexikó", "Észak-Dakota", "Brit Kolumbia", "Arizona", 2],
    ["Melyik szoros választja el Európát és Afrikát?", "Gibraltári", "Malaka", "Bass", "Hudson", 0],
    ["Melyik város NEM skandináv főváros?", "Helsinki", "Oslo", "Koppenhága", "Bergen", 3],
    ["Mi Törökország fővárosa?", "Ankara", "Bursa", "Isztambul", "Antalya", 0],
    ["Mi Belgium fővárosa?", "Belgrád", "Bécs", "Brüsszel", "Berlin", 2],
    ["Melyik város található Magyarországon?", "Szentpétervár", "Dunaszerdahely", "Nagyszentmiklós", "Makó", 3],
    ["Melyik sziget NEM Olaszországhoz tartozik?", "Elba", "Korzika", "Szardínia", "Szicília", 1],
    ["Melyik ország fővárosa Varsó?", "Litvánia", "Lengyelország", "Csehország", "Szlovákia", 1],
    ["Melyik kontinensen folyik a Nílus?", "Dél-Amerika", "Ázsia", "Afrika", "Európa", 2],
    ["Melyik országban található a Fuji-hegy?", "Kína", "Dél-Korea", "Japán", "Thaiföld", 2],
    ["Melyik ország NEM a Skandináv-félszigeten fekszik?", "Norvégia", "Finnország", "Svédország", "Dánia", 3],
    ["Mi Magyarország legmagasabb pontja?", "Kékes-tető", "Galyatető", "Csóványos", "Pilis", 0],
    ["Melyik kontinensen fekszik Peru?", "Észak-Amerika", "Ázsia", "Afrika", "Dél-Amerika", 3],
    ["Melyik városban van az Európai Parlament egyik székhelye?", "Brüsszel", "Berlin", "Bécs", "Párizs", 0],
    ["Melyik tenger határolja Olaszországot keletről?", "Földközi-tenger", "Adriai-tenger", "Égei-tenger", "Fekete-tenger", 1],
    ["Hány országgal határos Magyarország?", "5", "6", "7", "8", 2],
    ["Melyik ország NEM szomszédos Németországgal?", "Hollandia", "Csehország", "Luxemburg", "Liechtenstein", 3],
    ["Melyik ország „épített” fiktív tengeralattjárót egy április 1-jei tréfa keretében?", "Németország", "Csehország", "Szlovákia", "Lengyelország", 1],
    ["Ki alapította a Facebookot?", "Elon Musk", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos", 2],
    ["Melyik platform NEM a Meta cég tulajdona?", "Threads", "Facebook", "Instagram", "X", 3],
    ["Mi volt a TikTok elődje?", "Scroll", "Musical.ly", "Triller", "Dubsmash", 1],
    ["Hogy hívják az Instagram rövid, függőleges videóit?", "Live", "Highlights", "Reels", "Note", 2],
    ["Mit jelent az \"influencer\" kifejezés?", "Reklámszakember", "Véleményvezér, nagy hatású tartalomgyártó", "Hírességek menedzsere", "Gazdag örökös", 1],
    ["Melyik platformon vezették be legkorábban a hitelesített kék pipát?", "Twitter", "Pinterest", "Reddit", "YouTube", 0],
    ["Mi volt az X platform korábbi neve?", "Triller", "Twitter", "LinkedIn", "Tinder", 1],
    ["Melyik országban fejlesztették a TikTokot?", "USA", "Dél-Korea", "Japán", "Kína", 3],
    ["Mi a \"hashtag\"?", "Felhasználónév", "Személy megjelölése", "Kereshető kulcsszó (#)", "Emoji", 2],
    ["Mi a \"like\" gomb elsődleges funkciója?", "Tetszésnyilvánítás", "Kép letöltése", "Üzenetküldés", "Mentés a gyűjteménybe", 0],
    ["Melyik platformon a legnépszerűbbek a Reels videók?", "Snapchat", "YouTube", "Instagram", "BeReal", 2],
    ["Mit jelent a közösségi médiában a \"DM\"?", "Display Mode", "Download Media", "Direct Message", "Delete Mention", 2],
    ["Milyen hosszú lehet maximum egy TikTok-videó 2025 után?", "60 mp", "10 perc", "3 perc", "60 perc", 3],
    ["Mi az influencerek és márkák együttműködésének fő célja?", "Személyeskedés", "Politikai vita", "Termékek/szolgáltatások hirdetése", "Szórakoztatás", 2],
    ["Mit jelent a \"trending\" egy közösségi oldalon?", "Legújabb hírlevél", "Fizetős hirdetés", "Aktuálisan legnépszerűbb tartalmak", "Személyes profil", 2],
    ["Ki volt az első magyar király?", "I. Rákóczi Ferenc", "Szent István", "Szent László", "IV. Béla", 1],
    ["Melyik állat NEM emlős?", "Delfin", "Bálna", "Cápa", "Kenguru", 2],
    ["Melyik nyelvet beszélik még hivatalosként Kanadában az angol mellett?", "Francia", "Dán", "Német", "Spanyol", 0],
    ["Ki írta A Pál utcai fiúk című regényt?", "Petőfi Sándor", "Molnár Ferenc", "Móra Ferenc", "Jókai Mór", 1],
    ["Hány hét van egy naptári évben?", "48", "50", "52", "54", 2],
    ["Melyik NEM alapszín a fénytanban (RGB)?", "Kék", "Sárga", "Piros", "Zöld", 1],
    ["Melyik tudományág foglalkozik az égitestek tanulmányozásával?", "Kémia", "Asztronómia", "Földrajz", "Geológia", 1],
    ["Mit jelent az MTA rövidítés?", "Magyar Tudományos Akadémia", "Magyar Televíziós Akadémia", "Magyar Telekommunikációs Alap", "Mesterfokú Tanítóképző", 0],
    ["Melyik nyelvet beszélik a legtöbben anyanyelvként a világon?", "Spanyol", "Hindi", "Mandarin (kínai)", "Angol", 2],
    ["Hány liter egy köbméter víz?", "100", "1000", "10", "500", 1],
    ["Melyik művészeti ágban alkotta a legtöbbet Leonardo da Vinci?", "Zeneszerző", "Szobrász", "Festő", "Költő", 2],
    ["Hogy nevezik a számítógép központi feldolgozó egységét?", "RAM", "Alaplap", "CPU", "GPU", 2],
    ["Melyik az angol ábécé második betűje?", "A", "Á", "B", "C", 2],
    ["Melyik bolygónak van a legtöbb holdja (2024-es adatok szerint)?", "Föld", "Mars", "Jupiter", "Szaturnusz", 3],
    ["Mi Leonardo da Vinci leghíresebb portréjának címe?", "Az utolsó vacsora", "A teremtés", "Mona Lisa", "Napraforgók", 2],
    ["Melyik évben csatlakozott Magyarország az Európai Unióhoz?", "2000", "2004", "2010", "2007", 1],
    ["Melyik mértékegység jelöli az elektromos áramerősséget?", "Volt", "Watt", "Amper", "Ohm", 2],
    ["Hány ürege (kamrája és pitvara) van összesen az emberi szívnek?", "2", "3", "4", "6", 2],
    ["Ki énekli a \"Peaches\" című dalt?", "Justin Bieber", "Harry Styles", "Ed Sheeran", "Shawn Mendes", 0],
    ["Hány kontinenst tartunk számon a legelterjedtebb modell szerint?", "5", "6", "7", "8", 2],
    ["Mi volt Michael Jackson világszerte ismert beceneve?", "The Pop God", "The Moonwalker", "King of Pop", "Music Legend", 2],
    ["Mi Kanada fővárosa?", "Toronto", "Ottawa", "Vancouver", "Montreal", 1],
    ["Mi Brazília hivatalos nyelve?", "Spanyol", "Portugál", "Francia", "Angol", 1],
    ["Melyik országban található Machu Picchu?", "Ecuador", "Chile", "Peru", "Mexikó", 2],
    ["Mi volt az első egész estés Disney-rajzfilm?", "Hófehérke és a hét törpe", "Hamupipőke", "Mickey egér", "Bambi", 0],
    ["Melyik kosárlabdázóról szól a The Last Dance dokumentumfilm-sorozat?", "Kobe Bryant", "Michael Jordan", "LeBron James", "Shaquille O'Neal", 1],
    ["Melyik dal tartotta legtovább a nézettségi rekordot a magyar YouTube-on?", "Majka, Curtis, BLR - Belehalok", "Pápai Joci - Origo", "BSW - Kamagra Gang", "Ismerős Arcok - Nélküled", 0],
    ["Melyik városban rendezték a 2024-es nyári olimpiai játékokat?", "Los Angeles", "Párizs", "Tokió", "London", 1],
    ["Milyen műfajú a Stranger Things című sorozat?", "Romantikus", "Sci-fi/Horror", "Vígjáték", "Krimi", 1],
    ["Melyik csatorna tartotta a magyar nézettségi rekordot a Twitch-en?", "WeAreTheVR", "2okos", "Fyrexxx", "Zackey", 1],
    ["Melyik popsztár karrierje indult a Disney Channelnél?", "Selena Gomez", "Ariana Grande", "Adele", "Taylor Swift", 0],
    ["Melyik hegység vonulatai húzódnak végig Magyarország és Szlovákia határán?", "Kárpátok", "Alpok", "Bükk", "Bakony", 0],
    ["Melyik magyar előadó dala a \"MOKKA\"?", "Beton.Hofi", "DESH", "Azahriah", "Dzsúdló", 1],
    ["Melyik kutyafajta NEM magyar eredetű?", "Erdélyi kopó", "Kuvasz", "Komondor", "Dalmata", 3],
    ["Milyen alakú az \"Elsőbbségadás kötelező\" jelzőtábla?", "Kereszt", "Háromszög (csúcsán álló)", "Kör", "Négyszög", 1],
    ["Hogy hívják A nagy ho-ho-ho-horgász hűséges barátját/csaliját?", "Főkukac", "Csonti", "Cseles", "Csali", 0],
    ["Hány nemesfémet különböztetünk meg?", "8", "5", "11", "15", 0],
    ["Melyik NEM japán autómárka?", "Toyota", "Daewoo", "Honda", "Nissan", 1],
    ["Melyik opera nem Sevillában játszódik az alábbiak közül?", "Don Giovanni", "Bajazzók", "Carmen", "A sevillai borbély", 1],
    ["Melyik országban rendezik meg hagyományosan a Katalán Ralit?", "Spanyolország", "Argentína", "Salvador", "Portugália", 0],
    ["Melyik karakter NEM szerepel a Micimackóban?", "Bagoly", "Maugli", "Zsebibaba", "Malacka", 1],
    ["Melyik együttes eredeti száma a \"Most múlik pontosan\"?", "Quimby", "Tankcsapda", "Ismerős Arcok", "Edda Művek", 0],
    ["Melyik a helyes írásmód?", "folyjon", "fojjon", "follyon", "fojlyon", 0],
    ["Melyik modellt gyártja az Opel?", "206", "Espero", "Corsa", "Ibiza", 2],
    ["Melyik szer a hallucinogén kábítószer az alábbiak közül?", "morfium", "metadon", "heroin", "LSD", 3]
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
    mentesEsRanglista(pontok);
    
}

function ranglistaFrissites() {
    let lista = JSON.parse(localStorage.getItem("kacsaTop10k")) || [];
    let listaElem = document.getElementById("ranglista-elemek");
    
    if (listaElem) {
        listaElem.innerHTML = "";
        lista.forEach((adat, index) => {
            let sor = document.createElement("li");
            sor.innerHTML = `<span>${index + 1}. ${adat.nev}</span> <b>${adat.pont}</b>`;
            listaElem.appendChild(sor);
        });
    }
}

function mentesEsRanglista(vegszoPont) {
    let lista = JSON.parse(localStorage.getItem("kacsaTop10k")) || [];
    let nev = prompt("Vége a játéknak! Pontszámod: " + vegszoPont + "\nAdd meg a neved a listához:", "Kacsa");

    if (nev) {
        lista.push({ nev: nev, pont: vegszoPont });
        lista.sort((a, b) => b.pont - a.pont);
        lista = lista.slice(0, 10);
        localStorage.setItem("kacsaTop10k", JSON.stringify(lista));
        ranglistaFrissites();
    }
}

window.onload = function () {
    //localStorage.removeItem("kacsaTop10k");
    kerdesBetoltes();
    ranglistaFrissites();
};
