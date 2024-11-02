---
title: "Az Árulók stratégiai elemzése"
date: "2024-10-15"
description: "Az Árulók – Gyilkosság a kastélyban egy új, izgalmas magyar reality műsor, amely egyben példa a játékelmélet gyakorlati alkalmazására. A versenyzők között rejtett árulók jelenléte és a taktikai döntések folyamatosan próbára teszik a stratégiai gondolkodást, a bizalomépítést és a manipuláció művészetét."
released: "Yes"
author: "Egri Máté és Takáts Bálint"
image: "/arulok/arulok_cover.jpg"
---


## Bevezetés
Az Árulók – Gyilkosság a kastélyban egy új, izgalmas magyar reality műsor. A játékosok között rejtőző árulók és a taktikai döntések folyamatosan próbára teszik a stratégiai gondolkodást, a bizalomépítést és a manipuláció művészetét. A 2023 novemberében bemutatott nagysikerű első évadot követően idén visszatért a második évaddal, ezúttal újabb 22 közszereplővel és változatlan műsorvezetővel, Árpa Attila személyében. A cikkben bemutatjuk a játékosok játékelméletileg optimális stratégiáját, majd ennek alapján elemezzük a műsorban résztvevők stratégiai hibáit.

<div class="svg-container" style="width: 100%;"> 
  <img src="/arulok/arulok_cover.jpg" alt="Kerületenkénti négyzetméterárak térképe" class="dynamic-svg" style="width: 100%;" /> 
</div>

## Szabályok

A játékban $n$ Ártatlan és $k$ Áruló található. Az Árulók egymás kilétét ismerik, de az Ártatlanok számára az Árulók kiléte rejtély marad. Az első évadban 19 Ártatlan és 3 Áruló játszik, míg a második évadban 18 Ártatlan és 4 Áruló van jelen.

### Éjszaka

Minden éjszaka az Árulók összegyűlnek és együtt dönthetnek a következő lépésről. Mindig pontosan egyet választanak a Gyilkosság és a Hívás közül:
- **Gyilkosság**: közösen eldöntik, mely Ártatlant ölik meg, aki ezután kiesik a játékból.
- **Hívás**: ez csak akkor lehetséges, ha az Árulók száma kisebb, mint amennyien kezdtek. Egy ártatlant (anonim módon) felkérhetnek, hogy mostantól Áruló legyen, aki ezt visszautasíthatja következmények nélkül.
Ha csak egy Áruló van, életbe lép egy másik szabály:
- **Zsarolás**: ez mindig megtörténik, ha pontosan egy Áruló van (aki nem passzolhat), a Gyilkosságtól/Hívástól függetlenül. Az Áruló felkér egy Ártatlant, hogy csatlakozzon hozzá, aki meghal, ha ezt visszautasítja, és ekkor az Áruló valaki mást választ, akit zsarol, egészen addig, amíg valaki el nem fogadja az ajánlatát.

### Nappal

- **Feladatok**: A játékosok minden nap közösen dolgozva próbatételekkel nyerhetnek pénzt a közös nyereményalapba. 
- **Szavazás**: Este az összes játékos leül egy asztalhoz, majd (egy megbeszélés után) mindenki leír egy-egy nevet a táblájára. A legtöbb szavazatot kapott játékost elárulja szerepét és száműzik, tehát szintén kiesik a játékból. Döntetlen esetén újra szavaznak.
- **Pajzs**: A feladatok során véletlenszerűen időnként egy-egy játékos Pajzsot kap, ami védi egy napig a Gyilkosság ellen.

### Játék vége

Észrevehetjük, hogy a jelenlegi szabályok szerint az Árulók nem veszíthetnek, hiszen a Zsarolás miatt sosem fogynak el. Így amikor már csak öt játékos marad, a producerek közbeszólnak, ezután már nem történik több gyilkosság, hanem a játékosok kétszer egymás után szavaznak, és kiejtik két játékos társukat. A két kiszavazott játékos szerepét nem tudják meg.
Végül a hátralévő három játékos dönthet, hogy befejezzék a játékot vagy kiszavazzanak még egyet hármójuk közül. Ha a játék végén a játékosok között van legalább egy Áruló, akkor a megmaradt Árulók osztják el maguk között a nyereményalapot, különben pedig a megmaradt Ártatlanoké a díj.

## Feltevések

Az optimális stratégia kialakításához a következő feltevésekkel élünk:
1. A szabályok a fentiek. Ez azért számít fontos feltevésnek, mert a műsor nem kommunikálja transzparensen a játékszabályokat sem a játékosok, sem a nézők felé. Azonban a pontos matematikai elemzéshez szigorú szabályokra van szükség.
1. A játékosok kizárólag a saját pénznyereményük várható értékét maximalizálják, tehát indifferensek a többi játékos nyereményével és személyével szemben. 
2. A játékosok racionálisak és az optimális stratégiát követik, hogy maximalizálják várható nyereményüket.
3. A játékosok kockázatkerülőek, tehát két azonos várható nyereményű stratégia közül a kisebb kockázatút választják.



## Stratégia

A legfontosabb észrevétel: a játékban **nincsenek nyomok**, tehát csak a játékosok viselkedéséből és a szavazataikból lehet következtetni szerepükre. De miért is viselkednék máshogyan, ha nem kell semmit sem lepleznem? Bár Áruló vagyok, nincs tárgyi bizonyíték, ami rám terelné a gyanút. Ha az Árulók rájönnek, hogy nem bukhatnak le, teljesen véletlenszerű szavazást garantálhatnak az alábbi logika szerint.

### Kő-Papír-Olló

A gyilkosságok nem hagynak nyomot, tehát az egyetlen materiális információ, amin a nyomozás elindulhat, hogy ki hogyan szavazott. Hogyan szavazzanak az Ártatlanok és hogyan az Árulók? Érdemes-e az Árulóknak befolyásolni a szavazást, hogy egy Ártatlan kiejtését segítsék elő, vagy érdemes inkább beépülniük, hogy ne fedezzék fel őket? Ha valaki egy Árulóra szavaz, biztos-e, hogy Ártatlan, vagy lehet, hogy blöffölt? Mint sok játékelméleti kérdésre, ezekre is a **kevert stratégia** adja a megoldást.

Mi az optimális stratégia a Kő-Papír-Olló játékban? Természetesen az egyenletes kevert stratégia. Ha $\frac{1}{3}$-$\frac{1}{3}$-$\frac{1}{3}$ eséllyel mutatok követ-papírt-ollót, akkor $\frac{1}{3}$-$\frac{1}{3}$-$\frac{1}{3}$ eséllyel nyerek-vesztek-játszom döntetlent, **függetlenül az ellenfelem stratégiájától**. A kérdés, tudok-e ezeknél az egyenlő esélyeknél jobbat elérni valamilyen stratégiával? Nem, ugyanis az ellenfelem alkalmazhatja az $\frac{1}{3}$-$\frac{1}{3}$-$\frac{1}{3}$ stratégiát, amivel **az én stratégiámtól függetlenül** eléri, hogy egyenlőek legyenek az esélyeink.

Ugyanez a mechanizmus érvényes az Árulók játékban is. Az Árulók elérhetik **az Ártatlanok stratégiájától függetlenül**, hogy ne fedezzék fel őket úgy, hogy csak véletlenszerűen szavaznak. Tudnak-e ennél jobb esélyeket adni maguknak, ha megpróbálnak egy Ártatlant kiejteni valamilyen furfangosabb stratégiával? Nem, hiszen az Ártatlanok is használhatnak teljesen véletlenszerű stratégiát, például közösen felírnak  minden nevet egy cetlire és egyet kihúznak. Ezzel az Ártatlan **az Árulók stratégiájától függetlenül** garantálják maguknak a véletlenszerű szavazást.

<div class="custom-text-box-elmeleti">
    <h2>Nash-egyensúly</h2>
    <p>
        Tegyük fel, hogy minden játékos valamilyen stratégiát alkalmaz egy játékban. Ha egyikük sem tud jobb eredményt elérni azzal, ha változtatna a stratégiáján, akkor ezt az állapotot <b>Nash-egyensúlynak</b> hívjuk.
    </p>
</div>

**Ha mindkét csapat teljesen véletlenül szavaz, Nash-egyensúlyt ér el.** Ekkor az ellenfél csapat nem tudja kihasználni a másik stratégiáját, míg bármelyik másik stratégia esetén ez lehetséges volna.

### Zsarolás és Hívás

Analízisünk kimutatta, hogy **ha Árulóként kezdjük a játékot, sokkal nagyobb a várható nyereményünk**.
Ennek megfelelően, ha Ártatlanként hívnak vagy zsarolnak minket, azt mindenképpen el kell fogadnunk, mert ettől a várható nyereményünk megtöbbszöröződik. 

Szintén kimutattuk, hogy **az Árulók várható nyereménye annál nagyobb, minél kevesebb társuk van**. Tehát a legjobb stratégia Árulóként, ha **sosem használjuk a Hívást**. A Zsarolást persze továbbra is kötelező, ha egyedül marad az Áruló.


### A játék vége

Érdemes az Ártatlanoknak a játék végén kiszavazni még egy játékost hármuk közül? Ha nem minket szavaznak ki, még akkor is megéri, ha nincs Áruló közöttünk. Hiszen kevesebb felé kell osztozkodni! Persze kockáztatjuk, hogy minket szavaznak ki. Persze sosem lehetünk biztosak, hogy nincs köztünk, így, ha nem szavazunk, lehet, hogy automatikusan veszítünk. Számoljuk ki várható nyereményünket mindkét esetben! Legyen $N$ a nyereményalap és legyen $p$ a valószínűsége, hogy van köztünk Áruló. Tegyük fel, hogy $p>0$, hiszen nem lehetünk teljesen biztosak, hogy nincs.

Várható nyeremény, ha nem szavazunk: 

$$p \cdot 0 + (1-p) \cdot \frac{N}{3} = \frac{N}{3} - \frac{p \cdot N}{3}$$.

Várható nyeremény, ha véletlenszerűen kiszavazunk valakit: 

$$p \cdot \frac{1}{3} \cdot \frac{N}{2} + (1-p)\cdot \frac{2}{3} \cdot \frac{N}{2} = \frac{N}{3} - \frac{p \cdot N}{6} > \frac{N}{3} - \frac{p \cdot N}{3}$$.

Ha van Áruló, csak akkor nyerünk, amikor kiszavazzuk ($\frac{1}{3}$ eséllyel). Ha nincs Áruló, akkor nyerünk, ha nem minket szavaznak ki ($\frac{2}{3}$ eséllyel).

Tehát megkaptuk, hogy **várható nyereményünk nagyobb, ha szavazunk, függetlenül attól, hogy mennyire vagyunk biztosak az Áruló létezésében**. Természetesen az Áruló nem szeretne szavazni, de neki is az az optimális stratégia, különben felfedné a kilétét.
Következésképp: hiba volt az első évad végén Szabados Ágnes, Tapasztó Orsi és Mohai Tamás részéről úgy dönteni, hogy befejezik a játékot további kiszavazás nélkül.

### Csapatjáték

A szabályok első hallásra egy izgalmas csapatjátékos sejtetnek. Azonban csapatban gondolkodni ebben a játékban egy végzetes stratégia. Bármelyik csapat is nyer, a nyereményen csak a túlélő tagok osztoznak, tehát **mindenkinek csak a saját túlélését érdemes szem előtt tartania.** 

Az elemzésünk szerint, **ha egy Áruló kiesik, a csapat győzelmi valószínűsége csökken**, de **az Árulók egyéni nyereménye nő**, mivel kevesebb tagra oszlik el a jutalom. A nyeremény felosztásának előnye erősebb, mint a győzelmi esély csökkenése!
A játékosok rendszeresen csapatban gondolkodnak, **amit mi súlyos hibának tekintünk**:
 - Az első évad második epizódjában Nagy Zsolt kiáll társáért, Lucáért, és nem szavaz a tömeggel, ezzel feleslegesen kockáztatva a lebukást.
 - A második évad negyedik részében az egyik gyilkosságot egy mérgezett alma átadásával kellett elvégezni. A négy gyilkos egymás között megbeszélhette, melyikük teszi ezt meg a csapatért. Dér Heni hősiesen vállalta a feladatot, ezzel feleslegesen kockáztatva lelepleződését.

<!-- A játékban a nyereményünk nem a csapatunk teljesítményétől függ, sosem származik semmi előnyünk a kooperációból. Például gyilkosként nő a várható nyereményünk, ha kiszavazzuk gyilkostársunkat. Hiszen abban az esetben, ha három helyett csak ketten nyerünk a pénzt három helyett csak két felé kell osztanunk. -->


<div class="svg-container" style="width: 50%;"> 
  <img src="/arulok/alma.png" alt="Kerületenkénti négyzetméterárak térképe" class="dynamic-svg" style="width: 100%;" /> 
  <figcaption class="svg-caption">1. Ábra: Az alma.</figcaption>
</div>


### Árulónak vagy Ártatlannak jobb lenni?

A játék során minden körben két játékos esik ki. Egyet az Árulók ölnek meg, egyet pedig a játékosok közösen szavaznak ki. Legyen az Ártatlanok száma $$i$$ és az Árulók száma $$j$$ egy adott kör elején. Ha mindkét csapat véletlenszerűen választ—ami a Nash-egyensúlynak felel meg—akkor az alábbi valószínűségekkel eshetünk ki egy adott körben:

**A gyilkosság során** az Árulók véletlenszerűen választanak egy játékost az $$ i $$ Ártatlan közül. Így az Ártatlan játékosok esetében a gyilkosság áldozatává válás valószínűsége: $$\frac{1}{i}.$$ Az Árulók nem ölhetik meg egymást, így számukra ez a valószínűség: $$  0. $$

**A szavazás során** a játékosok az összes fennmaradó játékos közül választanak ki egyet, beleértve az Árulókat is. A fennmaradó játékosok száma $$ i + j - 1 $$. Az Ártatlanok és az Árulók esetében a kiszavazás valószínűsége megegyezik:$$ \frac{1}{i + j - 1}.$$

**Összesített kiesési valószínűség** az alábbi **Ártatlan játékosként:**  $$\frac{1}{i} + \left( \frac{i - 1}{i} \times \frac{1}{i + j - 1} \right)$$

Valamint **Árulóként:** $$ \frac{1}{i + j - 1}. $$ Nagy általánosságban elmondható, hogy **Árulóként közel kétszer jobbak a túlélési esélyeink körönként!** (Ehhez szükséges, hogy $$i$$ jelentősen több legyen mint $$j$$ ami a játék szabályai szerint igaz a legtöbb esetben.)

<div class="custom-text-box-elmeleti"> <h2>Kizáró események</h2> <p> A kiesési valószínűség annak az esélye, hogy egy játékos egy adott körben elhagyja a játékot – akár egy gyilkosság, akár a szavazás révén. Ha Ártatlan vagy, az esélyed a kiesésre két részből áll össze: először is annak az esélye, hogy az Árulók éjjel pont téged választanak; másodszor pedig annak az esélye, hogy túléled az éjszakát, de nappal a szavazáson pont rád esik a többi játékos választása. Mivel egy körben csak egyszer eshetsz ki, ezt a két esélyt nem összeadjuk, hanem csak akkor vesszük figyelembe a szavazást, ha túlélted az éjszakát. Így kapjuk meg a teljes kiesési valószínűséget. </p> </div>

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
      <td>29%</td>
      <td>287 eFt</td>
    </tr>
    <tr>
      <td><strong>Árulók</strong></td>
      <td>71%</td>
      <td>1903 eFt</td>
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

