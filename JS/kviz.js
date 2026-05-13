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
    ["Milyen hosszú egy olimpiai medence?", "25 méter", "33 méter", "50 méter", "100 méter", 2],
      ["Hány perc a tétmeccsek utáni hosszabbítás a fociban?", "2 x 15 perc", "3 x 10 perc", "2 x 20 perc", "1 x 30 perc", 0],
  ["Melyik sportban használnak \"ippon\" és \"waza-ari\" pontokat?", "Karate", "Judo", "Taekwondo", "Birkózás", 1],
  ["Melyik sportágban lehet egy játékos \"center\" vagy \"irányító\"?", "Kosárlabda", "Kézilabda", "Röplabda", "Jégkorong", 0],
  ["Melyik sportágra jellemző a \"libero\" poszt?", "Kosárlabda", "Röplabda", "Kézilabda", "Labdarúgás", 1],
  ["Melyik sportágban található a \"palánk\"?", "Kézilabda", "Kosárlabda", "Jégkorong", "Salakmotor", 1],
  ["Melyik sportágban rendeznek egyéni és páros versenyeket is?", "Evezés", "Kosárlabda", "Tenisz", "Labdarúgás", 2],
  ["Melyik sportágban rendeznek csapatversenyeket?", "Salakmotor", "Triatlon", "Snowboard", "Magasugrás", 0],
  ["Mi volt a legjobb helyezése a magyar kézilabda válogatottnak?", "Világbajnoki ezüst", "Olimpiai bronz", "Világbajnokság 7. hely", "Európa bajnokság 5. hely", 0],
  ["Melyik ország rendezte a 2018-as labdarúgó-világbajnokságot?", "Oroszország", "Németország", "Franciaország", "Katar", 0],
  ["Mi a neve a híres amerikai kosárlabdaligának?", "NHL", "NFL", "NBA", "MLB", 2],
  ["Hány gyűrű van az olimpiai jelképen?", "4", "5", "6", "7", 1],
  ["Melyik sportban használnak ütőt és korongot?", "Baseball", "Golf", "Jégkorong", "Tollaslabda", 2],
  ["Melyik sportoló NEM volt labdarúgó?", "Gera Zoltán", "Dzsudzsák Balázs", "Nagy László", "Grosics Gyula", 2],
  ["Ki nem szerzett gólt a Nemzetek Ligájában az angolok elleni 4-0-ás mérkőzésen?", "Nagy Zsolt", "Gazdag Dániel", "Sallai Roland", "Schafer András", 3],
  ["A Halálos Iramban franchise melyik filmje van Paul Walkernek szentellve?", "Halálos Iramban: 8", "Halálos Iramban: 7", "Halálos Iramban: Ötödik sebesség", "Los Bandoleros", 1],
  ["Melyik filmben nem szerepel Megan Fox?", "Transformers: A bukottak bosszúja", "Tini Nindzsa Teknőcök", "FELÁLDOZH4TÓK", "Transformers: A hold sötét oldala", 3],
  ["Melyik nem Disney film?", "Így neveld a sárkányodat", "Verdák", "Lilo és Stich", "Nemo nyomában", 0],
  ["Mi Batman valódi neve?", "Lil Wayne", "Bruce Wayne", "Edison Ford", "Steve Rogers", 1],
  ["Milyen autó nem volt Űrdongó a Transformersben?", "Chevrolet Camaro 2009", "Volkswagen Beetle", "Pontiac Firebird", "Jeep Willys MB", 2],
  ["Melyik színész játszotta a Vasembert?", "Chris Hemsworth", "Robert Downey Jr.", "Chris Evans", "Hugh Jackman", 1],
  ["Melyik filmben hangzik el a híres mondat: „May the Force be with you”?", "Star Trek", "Galaxis őrzői", "Star Wars", "Avatar", 2],
  ["Ki játszotta Jack szerepét a Titanicban?", "Matt Damon", "Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", 1],
  ["Melyik filmben nem szerepel Jason Mamoa?", "Bosszúállók", "Az igazság ligája", "Halálos Iramban", "Aquaman", 0],
  ["Melyik ország nevét viseli az egyik leghíresebb filmstúdió?", "Columbia Pictures", "US Pictures", "Brazilian Pictures", "Egypt Pictures", 0],
  ["Melyik filmben szerepel egy beszélő szamár?", "Rango", "Shrek", "Szörny Rt.", "A kis kedvencek titkos élete", 1],
  ["Melyik magyar filmben szerepel a karakter: Feri?", "Üvegtigris", "Valami Amerika", "Kontroll", "Kincsem", 1],
  ["Ki játszotta Lara Croftot a 2001-es Tomb Raider filmben?", "Charlize Theron", "Scarlett Johansson", "Angelina Jolie", "Natalie Portman", 2],
  ["Melyik film főszereplője egy robot, aki szemét között él a Földön?", "Rango", "WALL-E", "Robotok", "Az 5. elem", 1],
  ["Mi a neve a Harry Potter történet gonosz varázslójának?", "Gandalf", "Voldemort", "Dumbledore", "Sirius", 1],
  ["Melyik filmben hangzik el: „Az élet olyan, mint egy doboz bonbon, sosem tudhatod, mit kapsz”?", "Forrest Gump", "A remény rabjai", "Zöld mérföld", "Életrevalók", 0],
  ["Ki a főszereplője a \"John Wick\" filmsorozatnak?", "Jason Statham", "Vin Diesel", "Keanu Reeves", "Dwayne Johnson", 2],
  ["Melyik film volt az első teljes hosszúságú számítógépes animációs film?", "Shrek", "Toy Story", "Oroszlánkirály", "Madagaszkár", 1],
  ["Melyik filmben láthatjuk a karaktert: Neo?", "Mátrix", "Eredet", "Terminátor", "Tenet", 0],
  ["Ki volt a főszereplő a Mission: Impossible filmsorozatban?", "Matt Damon", "Tom Hanks", "Tom Cruise", "Keanu Reeves", 2],
  ["Mi volt a legelső hangosfilm címe, amely világhírűvé vált?", "Ének az esőben", "Casablanca", "The Jazz Singer", "Elfújta a szél", 2],
  ["Melyik stúdió készítette a Toy Story-filmeket?", "DreamWorks", "Pixar", "Illumination", "Sony Pictures", 1],
  ["Melyik stúdió készítette az Így neveld a sárkányod-filmeket?", "Sony Pictures", "Pixar", "Illumination", "DreamWorks", 3],
  ["Melyik film NEM Marvel-produkció?", "Fekete Párduc", "Thor: Ragnarök", "Doctor Strange", "Superman", 3],
  ["Melyik filmben van a híres jelenet, ahol egy dínó kiszabadul a kerítés mögül?", "King Kong", "Jégkorszak", "Jurassic Park", "Godzilla", 2],
  ["Melyik színésznő alakította Hermionét a Harry Potter-filmekben?", "Emma Stone", "Emma Thompson", "Emma Watson", "Emily Blunt", 2],
  ["Melyik film szereplője Woody?", "Szenilla nyomában", "Verdák", "Toy Story", "Madagaszkár", 2],
  ["Melyik nem szerepel a Madagaszkár Pingvinjei című sorozatban?", "Kowalsky", "Rico", "Vega", "Mort", 2],
  ["Melyik filmben nem szerepel Jennifer Anniston?", "Kellékfeleség", "Exférj-újratöltve", "Nagyfiúk", "Családi üzelmek", 2],
  ["Melyik Bud Spencer és Terence Hill filmben hangzik el a híres mondat: \"Te mondod, mert a te hangod mélyebb\"?", "Bűnvadászok", "Különben dühbe jövünk", "Bunyó karácsonyig", "Kincs, ami nincs", 0],
  ["Melyik DESH szám érte el a 20M megtekintést a Youtube-on?", "SUV", "Pannonia", "Rollin'", "Bandana | S600 Maybach", 3],
  ["Milyen betegséggel küzdött az AWS frontembere, Siklósi Örs?", "Tüdő problémák", "Agydaganat", "Leukémia", "Máj problémák", 2],
  ["Melyik volt a leghallgatottabb magyar sláger 2023-ban?", "Azahriah - Introvertált dal", "DESH - Osztriga", "KKevin, Bruno - PROSSECCO", "T.Danny - No Woman, No Cry", 0],
  ["Melyik szám tartja a leggyorsabb 1 milliárd stream-elést?", "Lady Gaga, Bruno Mars - Die With A Smile", "Bruno Mars - Lazy Song", "The Weeknd - Blinding Lights", "John Newmann - Love Me Again", 0],
  ["Melyik számot hallgatták meg legtöbben 24 óra alatt?", "Taylor Swift - Fortnight", "John Newmann - Blame", "Calvin Harris - Summer", "Billie Eilish - Bad Guy", 0],
  ["Melyik rappert előzte meg a The Weeknd +1 milliárd streamelt számok között?", "Drake", "Playboy Carti", "Kendrick Lamar", "Sean Paul", 0],
  ["Ki énekelte a \"Someone Like You\" című dalt?", "Beyoncé", "Adele", "Rihanna", "Lady Gaga", 1],
  ["Melyik zenekar énekelte a \"Bohemian Rhapsody\"-t?", "The Beatles", "Led Zeppelin", "Queen", "Guns 'n Roses", 2],
  ["Ki az a magyar előadó, akit 2023-ban legtöbbet hallgatott Spotify-on?", "Beton.Hofi", "Dzsúdló", "Azahriah", "Manuel", 2],
  ["Melyik ország származik a K-pop?", "Japán", "Kína", "Dél-Korea", "Thaiföld", 2],
  ["Ki a \"Shape of You\" előadója?", "Shawn Mendes", "Harry Styles", "Justin Bieber", "Ed Sheeran", 3],
  ["Melyik magyar rapper a \"Halott Pénz\" tagja?", "Marsalkó Dávid", "Molnár Attila", "Molnár Tamás", "Baukó Attila", 0],
  ["Mi a neve az ABBA együttes egyik leghíresebb dalának?", "Waterloo", "Thriller", "Yesterday", "Mamma Mia", 0],
  ["Melyik zenekar írta a \"Bed of Roses\"-t?", "Queen", "The Eagles", "Pink Floyd", "Bon Jovi", 3],
  ["Melyik zenei műfajra jellemző a freestyle?", "Klasszikus", "Country", "Rap", "Rock", 2],
  ["Melyik magyar előadó dala a \"Pull Up\"?", "Dzsúdló", "T. Danny", "Azahriah", "Young Fly", 1],
  ["Melyik zeneszerző volt vak?", "Bach", "Rodrigo", "Mozart", "Beethoven", 1],
  ["Melyik énekes adta ki \"Carpe Diem\" albumot?", "DESH", "Vance Joy", "Azahriah", "Ray Dalton", 0],
  ["Melyik magyar városhoz kötődik a Tankcsapda zenekar?", "Pécs", "Szeged", "Debrecen", "Győr", 2],
  ["Mi a neve a hangszernek, amely húrokkal és vonóval szólal meg?", "Hárfa", "Zongora", "Hegedű", "Trombita", 2],
  ["Melyik előadó nem volt az Eurovíziós dalfesztiválon?", "Rúzsa Magdi", "Byealex", "Bagossy Brothers", "AWS", 2],
  ["Melyik számmal indult Kállay-Saunders András az Eurovízión?", "Simming", "Walking", "Sprinting", "Running", 3],
  ["Melyik előadó nem hallgatott 1 évig zenét slágere megírásához?", "Majka", "Pápai Joci", "Tóth Gabi", "L.L. Junior", 1],
  ["Hány évesen hunyt el Siklósi Örs?", "28", "33", "19", "26", 3],
  ["Ki énekli a \"Levitating\" című slágert?", "Doja Cat", "Dua Lipa", "Katy Perry", "Lizzo", 1],
  ["Melyik zeneszerző volt holland származású?", "Chopin", "Mozart", "Beethoven", "Liszt", 2],
  ["Melyik zenészről nem született életrajzi film?", "Bob Marley", "Freddie Mercury", "Elvis Presley", "Snoop Dogg", 3],
  ["Ki az az előadó, akit \"Slim Shady\" néven is ismernek?", "Lil Wayne", "Travis Scott", "Drake", "Eminem", 3],
  ["Melyik előadó adta ki a \"Montero (Call Me By Your Name)\"?", "Lil Nas X", "Lil Baby", "Sean Paul", "Imagine Dragons", 0],
  ["Melyik előadó adott ki matematika szimbólumú albumborítókat?", "Ed Sheeran", "Drake", "Imagine Dragons", "Rag n Bone Man", 0],
  ["Melyik ország területére dobták le az Amerikaiak az atombombát 1945-ben?", "Japán", "Kína", "Dél-Kórea", "Malajzia", 0],
  ["Melyik kontinenset nem \"kötik\" össze másik kontinenssel?", "Afrika", "Európa", "Észak-Amerika", "Ausztrália", 3],
  ["Melyik név nem egy létező ország neve?", "Pakisztán", "Üzbegisztán", "Tádzsikisztán", "Bindzsisztán", 3],
  ["Melyik felfedező hajózta először körbe a Földet?", "Kolumbusz Kristóf", "Vasco da Gamma", "Amerigo Vespucci", "Marco Polo", 0],
  ["Melyik angol városban volt a leghíresebb teadélután?", "London", "Manchester", "Newcastle", "Boston", 3],
  ["Melyik országrész tartozik Spanyolországhoz?", "Monaco", "Moldova", "Ciprus", "Katalónia", 3],
  ["Hány ország kapcsolódik Portugáliához?", "2", "3", "1", "0", 2],
  ["Melyik ország a legnagyobb a világon?", "Oroszország", "Amerikai Egyesült Államok", "Kanada", "Kína", 0],
  ["Melyik a második legnagyobb ország a világon?", "Kanada", "India", "Amerikai Egyesült Államok", "Oroszország", 0],
  ["Melyik a városban laknak a legtöbben?", "Mumbai", "Shanghaj", "Peking", "Tokió", 3],
  ["Melyik ország nem tartozik Nagy-Britanniához?", "Észak-Írország", "Skócia", "Feröer-szigetek", "Wales", 2],
  ["Melyik nem Dánia autonom területe?", "Feröer-szigetek", "Grönland", "Sjælland", "Man-szigetek", 2],
  ["Melyik állam nem az Egyesült Államokban található?", "Új-Mexikó", "Észak-Dakota", "Brit Kolumbia", "Arizona", 2],
  ["Melyik szoros \"köti\" össze Európát és Afrikát?", "Gibraltári", "Malakai", "Bassi", "Hudsoni", 0],
  ["Melyik város nem skandináv főváros?", "Helsinki", "Oslo", "Koppenhága", "Bergen", 3],
  ["Mi Törökország fővárosa?", "Ankara", "Bursa", "Isztambul", "Antalya", 0],
  ["Mi Belgium fővárosa?", "Belgrád", "Bécs", "Brüsszel", "Berlin", 2],
  ["Melyik város található Magyarországon?", "Szentpétervár", "Dunaszerdahely", "Nagyszentmiklós", "Makó", 3],
  ["Melyik sziget nem Olaszországhoz tartozik?", "Isola d'Elba", "Corse", "Sardegna", "Szícilia", 1],
  ["Melyik ország fővárosa Varsó?", "Litvánia", "Lengyelország", "Csehország", "Szlovákia", 1],
  ["Melyik kontinensen található a Nílus folyó?", "Dél-Amerika", "Ázsia", "Afrika", "Európa", 2],
  ["Melyik országban található a Fuji-hegy?", "Kína", "Dél-Korea", "Japán", "Thaiföld", 2],
  ["Melyik ország nem tagja a Skandináv-félszigetnek?", "Norvégia", "Finnország", "Svédország", "Dánia", 3],
  ["Mi Magyarország legmagasabb pontja?", "Kékes", "Galyatető", "Csóványos", "Pilis", 0],
  ["Melyik kontinensen fekszik Peru?", "Észak-Amerika", "Ázsia", "Afrika", "Dél-Amerika", 3],
  ["Melyik városban van az Európai Parlament székhelye?", "Brüsszel", "Berlin", "Bécs", "Párizs", 0],
  ["Melyik tenger található Olaszország keleti partjainál?", "Földközi-tenger", "Adriai-tenger", "Égei-tenger", "Fekete-tenger", 1],
  ["Hány ország határolja Magyarországot?", "5", "6", "7", "8", 2],
  ["Melyik ország nem szomszédja Németországnak?", "Hollandia", "Csehország", "Luxembourg", "Lichtenstein", 3],
  ["Melyik ország hitette el április 1-jén a nagyhatalmakkal, hogy egy szupererős tengeralattjárót csinálnak?", "Németország", "Csehország", "Szlovákia", "Lengyelország", 1],
  ["Ki alapította a Facebookot?", "Elon Musk", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos", 2],
  ["Melyik platform tartozik nem a Meta céghez?", "Threads", "Facebook", "Instagram", "X", 3],
  ["Mi volt a TikTok elődje, mielőtt nevet váltott?", "Scroll", "Musica.ly", "Triller", "Dubsmash", 1],
  ["Mi a neve az Instagram 24 órán át látható tartalmainak?", "Live", "Highlights", "Reels", "Note", 2],
  ["Mit jelent az, ha valaki \"influencer\"?", "Folyamatosan reklámokat hirdet", "Sok embert elér, befolyással van követőire", "Csak hírességekkel barátkozik", "Gazdag, jóízű életet él", 1],
  ["Melyik az a platform, ahol a \"kék pipa\" igazolt profilt jelöl?", "Twitter", "Pinterest", "Reddit", "YouTube", 0],
  ["Mi a neve az X nevű platformnak korábban?", "Triller", "Twitter", "Linked In", "Tinder", 1],
  ["Melyik országban készült a TikTok alkalmazás?", "USA", "Dél-Korea", "Japán", "Kína", 3],
  ["Mi az a \"hashtag\"?", "Valaminek a címe", "Megjelölni valakit", "Kulcsszó", "Emoji", 2],
  ["Mit csinál a \"like\" gomb?", "Tetszés kinyílvánítást", "Kép letöltést", "Üzenetküldést", "Mentést a gyűjteménybe", 0],
  ["Melyik platformon népszerűek a \"Reels\" nevű rövid videók?", "Snapchat", "YouTube", "Instagram", "TikTok", 2],
  ["Mi a \"DM\" rövidítés jelentése?", "Display Mode", "Download Media", "Direct Message", "Delete Mention", 2],
  ["Milyen hosszú lehet maximum egy TikTok-videó 2025-ben?", "60 mp", "10 perc", "3 perc", "30 perc", 3],
  ["Milyen gyakori célja van az influencerek együttműködéseinek?", "Viccelődés", "Politikai vita", "Márkák hirdetése", "Terjeszkedés", 2],
  ["Mi az a \"trending\" fül egy platformon?", "Legújabb feltöltések", "Fizetős tartalom", "Jelenleg népszerű, felkapott tartalmak listája", "Neked ajánlott videók", 2],
  ["Ki volt az első magyar király?", "I. Rákóczi Ferenc", "Szent István", "Szent László", "IV. Béla", 1],
  ["Melyik állat nem emlős?", "Delfin", "Bálna", "Cápa", "Teknős", 2],
  ["Milyen is nyelven beszélnek Kanadában az angolon kívül?", "Francia", "Dán", "Német", "Spanyol", 0],
  ["Ki írta a \"Pál utcai fiúk\" című regényt?", "Petőfi Sándor", "Molnár Ferenc", "Móra Ferenc", "Jókai Mór", 1],
  ["Hány hét van egy évben?", "48", "50", "52", "54", 2],
  ["Melyik nem alapszín?", "Kék", "Sárga", "Piros", "Zöld", 3],
  ["Melyik tudományág foglalkozik a csillagokkal és bolygókkal?", "Kémia", "Asztronómia", "Földrajz", "Geológia", 1],
  ["Mi a MTA rövidítése?", "Magyar Tudományos Akadémia", "Magyar Televíziós Akadémia", "Magyar Telekomunikácós Alapfokú Iskola", "Mesterfokú Tanítóképző Akadémia", 0],
  ["Melyik nyelv a világ legtöbb ember által beszélt anyanyelve?", "Spanyol", "Hindi", "Kínai", "Angol", 2],
  ["Hány liter egy köbméter?", "100", "1000", "10", "500", 1],
  ["Ki volt Leonardo da Vinci?", "Zeneszerző", "Szobrász", "Festő", "Költő", 2],
  ["Mi a neve a számítógép \"agyának\"?", "RAM", "Alaplap", "CPU", "GPU", 2],
  ["Mi a neve az angol ABC második betűjének?", "A", "Á", "B", "C", 2],
  ["Melyik bolygónak van a legtöbb holdja?", "Föld", "Mars", "Jupiter", "Szaturnusz", 3],
  ["Mi volt Leonardo da Vinci híres festményének a címe?", "Az utolsó vacsora", "A teremtés", "Mona Lisa", "Napraforgók", 2],
  ["Melyik évben lett Magyarország az Európai Unió tagja?", "2000", "2004", "2010", "2007", 1],
  ["Melyik mértékegység jelöli az elektromos áram erősségét?", "Volt", "Watt", "Amper", "Ohm", 2],
  ["Hány szívkamrája van az emberi szívnek?", "2", "3", "4", "6", 2],
  ["Ki énekli a \"Peaches\" című dalt?", "Justin Bieber", "Harry Styles", "Ed Sheeran", "Shawn Mendes", 0],
  ["Hány kontinenst különböztetünk meg a Földön?", "5", "6", "7", "8", 2],
  ["Ki volt Michael Jackson beceneve?", "The Pop God", "The Moonwalker", "King of Pop", "Music Legend", 2],
  ["Mi a fővárosa Kanadának?", "Toronto", "Ottawa", "Vancouver", "Montreal", 1],
  ["Mi a hivatalos nyelve Brazíliának?", "Spanyol", "Portugál", "Francia", "Angol", 1],
  ["Melyik országban található Machu Picchu?", "Ecuador", "Chile", "Peru", "Mexikó", 2],
  ["Mi volt az első Disney-rajzfilm?", "Hófehérke", "Hamupipőke", "Mickey egér", "Bambi", 2],
  ["Melyik kosárlabdázóhoz köthető a \"The Last Dance\" című dokumentumfilm?", "Kobe Bryant", "Michael Jordan", "LeBron James", "Shaquille O'Neal", 1],
  ["Melyik szám tartja a nézettségi rekordot a magyar YouTube-on?", "Majka, Curtis, BLR - Belehalok", "Pápai Joci - Origo", "BSW - Kamagra Gang", "Ismerős Arcok - Nélküled", 0],
  ["Melyik városban rendezték a 2024-es nyári olimpiát?", "Los Angeles", "Párizs", "Tokió", "London", 1],
  ["Milyen műfajú a \"Stranger Things\" című sorozat?", "Romantikus", "Sci-fi", "Vígjáték", "Thriller", 1],
  ["Melyik csatorna tartja a magyar nézettségi rekordot a Twitch-en?", "WeAreTheVR", "2okos", "Fyrexxx", "zackey", 1],
  ["Melyik világhírű popsztár indult a Disney Channel műsoraiban?", "Selena Gomez", "Ariana Grande", "Adele", "Taylor Swift", 0],
  ["Melyik hegység húzódik Magyarország és Szlovákia határán?", "Kárpátok", "Alpok", "Bükk", "Bakony", 0],
  ["Melyik magyar előadó dala a \"MOKKA\"?", "Beton.Hofi", "DESH", "Azariah", "DZSÚDLÓ", 1],
  ["Melyik kutya nem magyar kutyafajta?", "Erdélyi kopó", "Kuvasz", "Komodor", "Dalmata", 3],
  ["Milyen alakú tábla az \"elsőbbségadás kötelező\"?", "Kereszt", "Háromszög", "Kör", "Négyszög", 1],
  ["Hogy hívják a Nagy ho-ho-ho horgász beszélő csaliját?", "Főkukac", "Csonti", "Cseles", "Csali", 0],
  ["Hány db nemesfémet ismerünk?", "8", "5", "11", "15", 0],
  ["Melyik nem japán autómárka az alábbiak közül?", "Toyota", "Daewoo", "Honda", "Nissan", 1],
  ["Az alábbiak közül melyik opera nem Sevillában játszódik?", "Don Giovanni", "Bajazzók", "Carmen", "A sevillai borbély", 1],
  ["Melyik ország területén rendezik a Katalán Ralit?", "Spanyolország", "Argentína", "Salvador", "Portugália", 0],
  ["Ki nem ismerőse Micimackónak?", "Bagoly", "Maugli", "Zsebibaba", "Malacka", 1],
  ["Melyik együttes száma a \"Most múlik pontosan\"?", "Quimby", "Tankcsapda", "Ismerős Arcok", "Edda Művek", 0],
  ["Melyik a helyes?", "folyjon", "fojjon", "follyon", "fojlyon", 0],
  ["Melyik modellt gyártja az Opel?", "206", "Espero", "Corsa", "Ibiza", 2],
  ["Az alábbiak közül melyik hallucinogén kábítószer?", "morfium", "metadon", "heroin", "LSD", 3]
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
    let lista = JSON.parse(localStorage.getItem("kacsaTop10")) || [];
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
    let lista = JSON.parse(localStorage.getItem("kacsaTop10")) || [];
    let nev = prompt("Vége a játéknak! Pontszámod: " + vegszoPont + "\nAdd meg a neved a listához:", "Kacsa");

    if (nev) {
        lista.push({ nev: nev, pont: vegszoPont });
        lista.sort((a, b) => b.pont - a.pont);
        lista = lista.slice(0, 10);
        localStorage.setItem("kacsaTop10", JSON.stringify(lista));
        ranglistaFrissites();
    }
}

window.onload = function () {
    //localStorage.removeItem("kacsaTop10");
    kerdesBetoltes();
    ranglistaFrissites();
};