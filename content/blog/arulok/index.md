---
title: "Az Árulók stratégiai elemzése"
date: "2024-10-15"
description: "Az Árulók – Gyilkosság a kastélyban egy új, izgalmas magyar reality műsor, amely egyben példa a játékelmélet gyakorlati alkalmazására. A versenyzők között rejtett árulók jelenléte és a taktikai döntések folyamatosan próbára teszik a stratégiai gondolkodást, a bizalomépítést és a manipuláció művészetét."
released: "No"
author: "Egri Máté és Takáts Bálint"
image: "/arulok/arulok_cover.jpg"
---

## Bevezetés
Az Árulók – Gyilkosság a kastélyban egy új, izgalmas magyar reality műsor, amely egyben példa a játékelmélet gyakorlati alkalmazására. A versenyzők között rejtett árulók jelenléte és a taktikai döntések folyamatosan próbára teszik a stratégiai gondolkodást, a bizalomépítést és a manipuláció művészetét. A műsor 2023 novemberben megjelent nagysikerű első évadot követően idén már a második évaddal tért vissza, ezúttal újabb 22 közszereplővel, viszont változatlan műsorvezetővel, Árpa Attila szeméyében.

<div class="svg-container" style="width: 100%;"> 
  <img src="/arulok/arulok_cover.jpg" alt="Kerületenkénti négyzetméterárak térképe" class="dynamic-svg" style="width: 100%;" /> 
</div>


## Szabályok

A játékban $n$ Ártatlan és $k$ Áruló játszik. Utóbbiak tudják egymásról, hogy Árulók, de az Ártatlanok nem. Az első évadban $n=19$ és $k=3$, míg a másodikban $n=18$ és $k=4$. 

### Éjszaka

Minden éjszaka az Árulók összegyűlnek és együtt dönthetnek a következő lépésről. Mindig pontosan egyet választanak Gyilkosság és Hívás közül:
- **Gyilkosság**: közösen eldöntik, mely Ártatlant ölik meg, aki ezután kiesik a játékból.
- **Hívás**: ez csak akkor lehetséges, ha az Árulók száma kisebb, mint amennyien kezdtek. Egy ártatlant (anonim módon) felkérhetnek, hogy mostantól Áruló legyen, aki ezt visszautasíthatja következmények nélkül.
Ha egy Áruló van, életbe lép egy másik szabály:
- **Zsarolás**: ez mindig megtörténik, ha pontosan egy Áruló van (nem passzolhat), a Gyilkosságtól/Hívástól függetlenül. Egy Ártatlant felkér, hogy mostantól Áruló legyen, aki meghal, ha ezt visszautasítja, és ekkor az Áruló valaki mást választ, akit zsarol, egészen addig, amíg valaki el nem fogadja.

### Nappal

- **Feladatok**: A játékosok minden nap közösen dolgozva próbatételekkel nyerhetnek pénzt a közös nyereményalapba. 
- **Szavazás**: Este az összes játékos leül egy asztalhoz, majd (megbeszélés után) mindenki leír egy-egy nevet a táblájára. A legtöbb szavazatot kapott játékost elárulja szerepét és száműzik, tehát szintén kiesik a játékból (döntetlen esetén újra szavaznak).
- **Pajzs**: A feladatok során véletlenszerűen időnként egy-egy játékos Pajzsot kap, ami védi egy napig a Gyilkosság ellen.

### Játék vége

Észrevehetjük, hogy a jelenlegi szabályok szerint az Árulók nem veszthetnének, hiszen a Zsarolás miatt sosem fogynak el. Így amikor már csak öt játékos marad, a producerek közbeszólnak, ezután már nem történik több gyilkosság, hanem a játékosok kétszer egymás után szavaznak, viszont a két kiszavazott játékos szerepét nem tudják meg. Ha a hátralévő három játékosból legalább egy úgy dönt, akkor még egyszer szavaznak és kiejtenek még egyet közülük. Ha végső kettő vagy három játékos között van Áruló, akkor a megmaradt Árulók osztják el maguk között a nyereményalapot (egyenlően), különben pedig a megmaradt Ártatlanok.

## Feltevések

Az optimális stratégia kialakításához a következő feltevésekkel élünk:
1. A szabályok a fentiek. Ez azért számít feltevésnek, mert a műsor nem kommunikálja transzparensen a játékszabályokat sem a játékosok, sem a nézők felé.
1. A játékosok kizárólag a saját pénznyereményük várható értékét maximalizálják, tehát indifferensek a többi játékos nyereményével és személyével szemben.
2. A játékosok racionálisak és az optimális stratégiát követik, hogy maximalizálják várható nyereményüket.
3. A játékosok kockázatkerülőek, tehát két azonos várható nyereményű stratégia közül a kisebb kockázatút választják.

## Stratégia

### Zsarolás és Hívás

Analízisünk kimutatta, hogy ha Árulóként kezdjük a játékot, sokkal nagyobb a várható nyereményünk.
Ennek megfelelően, ha Ártatlanként hívnak (vagy megzsarolnak) minket, azt mindenképpen el kell fogadnunk, mert ettől a várható nyereményünk megtöbbszöröződik. 

Szintén kimutattuk, hogy az Árulók várható nyereménye annál nagyobb, minél kevesebb társuk van. Tehát a legjobb stratégia Árulóként, ha sosem használjuk a Hívást (a Zsarolást persze kötelező, ha egyedül marad az Áruló).

A gyilkosságok nem hagynak nyomot, tehát az egyetlen materiális információ, amin a nyomozás elindulhat, hogy ki hogyan szavazott. Hogyan szavazzanak az Ártatlanok és hogyan az Árulók? Érdemes-e az Árulóknak befolyásolni a szavazást, hogy egy Ártatlan kiejtését segítsék elő, vagy érdemes inkább beépülniük, hogy ne fedezzék fel őket? Ha valaki egy Árulóra szavaz, biztos-e, hogy Ártatlan, vagy lehet, hogy blöffölt? Mint sok játékelméleti kérdésre, ezekre is a **kevert stratégia** adja a megoldást.

### Kő-Papír-Olló

Mi az optimális stratégia a Kő-Papír-Olló játékban? Természetesen az egyenletes kevert stratégia. Ha $\frac{1}{3}$-$\frac{1}{3}$-$\frac{1}{3}$ eséllyel mutatok követ-papírt-ollót, akkor $\frac{1}{3}$-$\frac{1}{3}$-$\frac{1}{3}$ eséllyel nyerek-vesztek-játszom döntetlent, **függetlenül az ellenfelem stratégiájától**. A kérdés, tudok-e ezeknél az egyenlő esélyeknél jobbat elérni valamilyen stratégiával? Nem, ugyanis az ellenfelem alkalmazhatja az $\frac{1}{3}$-$\frac{1}{3}$-$\frac{1}{3}$ stratégiát, amivel **az én stratégiámtól függetlenül** eléri, hogy egyenlőek legyenek az esélyeink.

Ugyanez a mechanizmus érvényes az Árulók játékban is. Az Árulók elérhetik **az Ártatlanok stratégiájától függetlenül**, hogy ne fedezzék fel őket úgy, hogy csak véletlenszerűen szavaznak. Tudnak-e ennél jobb esélyeket adni maguknak, ha megpróbálnak egy Ártatlant kiejteni valamilyen furfangosabb stratégiával? Nem, hiszen az Ártatlanok is használhatnak teljesen véletlenszerű stratégiát, például közösen felírnak minden minden nevet egy cetlire és egyet kihúznak. Ezzel az Ártatlan **az Árulók stratégiájától függetlenül** garantálják maguknak a véletlenszerű szavazást.

<div class="custom-text-box-elmeleti">
    <h2>Nash-egyensúly</h2>
    <p>
        Tegyük fel, hogy minden játékos valamilyen stratégiát alkalmaz egy játékban. Ha egyikük sem tud jobb eredményt elérni azzal, ha változtatna a stratégiáján, akkor ezt az állapotot <b>Nash-egyensúlynak</b> hívjuk.
    </p>
</div>

Ha mindkét csapat teljesen véletlenül szavaz, Nash-egyensúlyt ér el. Ekkor az ellenfél csapat nem tudja kihasználni a másik stratégiáját, míg bármelyik másik stratégia esetén ez lehetséges volna.

### A játék vége

Érdemes az Ártatlanoknak a játék végén kiszavazni még egy játékost hármuk közül? Ha nem minket szavaznak ki, akkor még akkor is megéri, ha nincs Áruló közöttünk, hiszen kevesebb felé kell osztozkodni. Persze kockáztatjuk, hogy minket szavaznak ki. Persze sosem lehetünk biztosak, hogy nincs köztünk, így ha nem szavazunk, lehet, hogy automatikusan veszítünk. Számoljuk ki várható nyereményünket mindkét esetben! Legyen $N$ a nyereményalap és legyen $p$ a valószínűsége, hogy van köztünk Áruló. Tegyük fel, hogy $p>0$, hiszen nem lehetünk teljesen biztosak, hogy nincs.

Várható nyeremény, ha nem szavazunk: 

$$p \cdot 0 + (1-p) \cdot \frac{N}{3} = \frac{N}{3} - \frac{p \cdot N}{3}$$.

Várható nyeremény, ha véletlenszerűen kiszavazunk valakit: 

$$p \cdot \frac{1}{3} \cdot \frac{N}{2} + (1-p)\cdot \frac{2}{3} \cdot \frac{N}{2} = \frac{N}{3} - \frac{p \cdot N}{6} > \frac{N}{3} - \frac{p \cdot N}{3}$$.

Ha van Áruló, csak akkor nyerünk, amikor kiszavazzuk ($\frac{1}{3}$ eséllyel). Ha nincs Áruló, akkor nyerünk, ha nem minket szavaznak ki ($\frac{2}{3}$ eséllyel).

Tehát megkaptuk, hogy **várható nyereményünk nagyobb, ha szavazunk, függetlenül attól, hogy mennyire vagyunk biztosak az Áruló létezésében**. Temészetesen az Áruló nem szeretne szavazni, de neki is az az optimális stratégia, különben felfedné a kilétét.
Következésképp: hiba volt az első évad végén Szabados Ágnes, Tapasztó Orsi és Mohai Tamás részéről a tartózkodás.

### Csapatjáték

A szabályok első hallásra egy izgalmas csapatjátékos sejtetnek. Azonban csapatban gondolkodni ebben a játékban gyenge stratégia. Bármelyik csapat is nyer, a nyereményen csak a túlélő tagok osztoznak, tehát mindenkinek csak a saját túlélését érdemes szem előtt tartania. 

Sőt, az elemzésünk kimutatta, hogy bár a győzelmi valószínűség csökken, **a várható nyereménye növekszik egy Árulónak, ha csapattársát szavazzák ki**. Ennek oka, hogy ekkor kevesebb felé kell osztozkodni, ami erősebb hatás, mint esélyünk kis csökkenése.
<!-- Szurkolhatunk Krajnyák Lucának az Árulónak vagy az Ártatlan Bereczki Zolinak.  -->
 A műsorban rengetegszer csapatban gondolkoznak a játékosok, ami **súlyos stratégiai hiba**:
 - Az első évad második epizódjában Nagy Zsolt védi megvádolt Áruló társát, Lucát és nem szavaz a tömeggel, ezzel segítve saját lelepleződését. 
 - A második évad negyedik részében az egyik gyilkosságot egy mérgezett alma átadásával kellett elvégezni. A négy gyilkos egymás között megbeszélhette, melyikük teszi ezt meg a csapatért. Dér Heni hősiesen vállalta, feleslegesen kockáztatva lelepleződését.

<!-- A játékban a nyereményünk nem a csapatunk teljesítményétől függ, sosem származik semmi előnyünk a kooperációból. Például gyilkosként nő a várható nyereményünk, ha kiszavazzuk gyilkostársunkat. Hiszen abban az esetben, ha három helyett csak ketten nyerünk a pénzt három helyett csak két felé kell osztanunk. -->


<div class="svg-container" style="width: 50%;"> 
  <img src="/arulok/alma.png" alt="Kerületenkénti négyzetméterárak térképe" class="dynamic-svg" style="width: 100%;" /> 
  <figcaption class="svg-caption">1. Ábra: Az alma.</figcaption>
</div>


<!-- ### Árulónak jobb lenni vagy Ártatlannak?

A játék során minden körben két játékos kiesik. Ha mindkét csapat véletlenszerűen választ (ami a Nash-egyensúly), akkor az alábbi táblázat valószínűségei szerint esnek ki a játékosok egy adott körben: -->

<!-- A gyilkosok véletlenszerűen választanak az $n$ Ártatlan közül, így a valószínűsége, hogy meghalunk ha Ártatlanok vagyunk $\frac{1}{n}$. 

$$\mathbb{P}(\text{meghalunk}|\text{ártatlan}) = \frac{1}{n}$$, valamint $$\mathbb{P}(\text{meghalunk}|\text{áruló}) =0$$.


A játékosok a szavazás során ugyanígy járnak el, az $n + k - 1$  játékosból egyet kiszavaznak.

$$\mathbb{P}(\text{meghalunk}|\text{ártatlan}) = \frac{1}{n + k - 1}$$, valamint $$\mathbb{P}(\text{meghalunk}|\text{áruló}) =\frac{1}{n + k - 1}$$.

Tehát elmondható, hogy **ha Árulók vagyunk nagyjából kétszer jobbak az esélyeink**. -->

<!-- <div class="table-container">
  <table class="custom-table">
    <tr>
      <th></th>
      <th>Gyilkosság</th>
      <th>Szavazás</th>
    </tr>
    <tr>
      <td><strong>Ártatlan</strong></td>
      <td><sup>1</sup>&frasl;<sub>n</sub></td>
      <td><sup>1</sup>&frasl;<sub>(n+k-1)</sub></td>
    </tr>
    <tr>
      <td><strong>Áruló</strong></td>
      <td>0</td>
      <td><sup>1</sup>&frasl;<sub>(n+k-1)</sub></td>
    </tr>
  </table>
</div> -->



## Analízis

Ezekkel az észrevételekkel felvértezve már közel optimális a stratégiánk. Mivel a műsor legtöbb szereplője nem játszik jól, helye lehet más kihasználásra alapuló stratégiának is. Mint a szavazatok elemzése, ami könnyen lebuktathatta volna Nagy Zsoltot.

A játék további elemzése érdekében írtunk egy Monte Carlo szimulációt, ami az itt leírt stratégiát követve egymilliószor lejátszotta nekünk a játékot. 

<div class="custom-text-box-elmeleti">
    <h2>Monte Carlo-módszer</h2>
    <p>
        A Monte Carlo-módszer egy numerikus technika, amely véletlenszerű mintavételt alkalmaz a matematikai és fizikai problémák megoldására. A módszer lényege, hogy véletlenszerűen generált adatok segítségével közelítsük a kívánt eredményeket. Ez különösen hasznos a komplex rendszerek szimulációjában és a valószínűségi folyamatok modellezésében. A "Monte Carlo" név a kaszinóvárosból ered, utalva a módszer véletlen természetére. A Monte Carlo-szimuláció széles körben használatos a pénzügyekben, mérnöki tervezésben és a tudomány számos területén.
    </p>
</div>

<br>



A szimulációt 19 Ártatlanra és 3 Árulóra lefuttatva a következő eredményeket kapjuk:

<div class="table-container">
  <table class="custom-table">
    <tr>
      <th></th>
      <th>Nyerési valószínűség (csapat)</th>
      <th>Várható nyeremény (egyéni)</th> 
    </tr>
    <tr>
      <td><strong>Ártatlanok</strong></td>
      <td>29.21%</td>
      <td>287.2 eFt</td>
    </tr>
    <tr>
      <td><strong>Árulók</strong></td>
      <td>70.79%</td>
      <td>1903.5 eFt</td>
    </tr>
  </table>
</div>

Ezen kívül az első évad minden epizódjára kiszámolhatjuk, mennyi minden egyes játékos várható nyereménye:
<div class="svg-container">
  <img src="/arulok/batch_1.svg" alt="Árfolyamok" class="dynamic-svg" />
</div>
<div class="svg-container">
  <img src="/arulok/batch_2.svg" alt="Árfolyamok" class="dynamic-svg" />
</div>
<div class="svg-container">
  <img src="/arulok/batch_3.svg" alt="Árfolyamok" class="dynamic-svg" />
</div>
<div class="svg-container">
  <img src="/arulok/batch_4.svg" alt="Árfolyamok" class="dynamic-svg" />
</div>
<div class="svg-container">
  <img src="/arulok/batch_5.svg" alt="Árfolyamok" class="dynamic-svg" />
</div>
<div class="svg-container">
  <img src="/arulok/batch_6.svg" alt="Árfolyamok" class="dynamic-svg" />
</div>

