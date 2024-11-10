---
title: "Fogadási piacok alkalmazása a befektetésekben"
date: "2024-11-10"
description: "A bizonytalanság kezelése kulcsfontosságú a gazdasági és piaci döntéshozatalban, és az előrejelző piacok ebben úttörő szerepet játszanak. A Nobel-díjas Kenneth Arrow és más szakértők mint Vitalik Buterin szerint ezek a piacok kivételes pontossággal képesek aggregálni az információkat, hiszen a résztvevők különböző nézőpontjait egyesítik egy közös előrejelzésben. Például az Eli Lilly (és más nagyvállalatok) előrejelző piacokat alkalmaznak a gyógyszerkutatási eredményeik sikerének becslésére. Ebben a cikkben az előrejelző piacok matematikai alapjával és pénzügyi felhasználásával ismerkedhet meg az olvasó."
released: "Yes"
author: "Egri Máté és Takáts Bálint"
image: "/prediction_markets/Polymarket.jpg"
---

## Bevezetés
<div class="responsive-image">
  <img src="/prediction_markets/arrow.webp" alt="Kenneth Arrow" />
    <figcaption class="svg-caption">Kenneth Arrow (1921-2017)</figcaption>
</div>
A bizonytalanság kezelése kulcsfontosságú a gazdasági és piaci döntéshozatalban, és az előrejelző piacok ebben úttörő szerepet játszanak. A Nobel-díjas Kenneth Arrow és más szakértők szerint ezek a piacok kivételes pontossággal képesek aggregálni az információkat, hiszen a résztvevők különböző nézőpontjait egyesítik egy közös előrejelzésben. Például az Eli Lilly (és más nagyvállalatok) előrejelző piacokat alkalmaznak a gyógyszerkutatási eredményeik sikerének becslésére.

Több kutatás is kimutatja, hogy az előrejelző piacok pontosabbak, mint a hagyományos módszerek, például a közvélemény-kutatások, amelyek gyakran torzítottak és nem reagálnak olyan gyorsan az új információkra. Ebben a cikkben az előrejelző piacok matematikai alapjával és pénzügyi felhasználásával ismerkedhet meg az olvasó. 

## Mi az az előrejelző piac?

Az előrejelző piacok hasonlóak a hagyományos fogadóirodákhoz, mivel mindkettő lehetőséget nyújt az embereknek arra, hogy fogadjanak bizonyos események kimenetelére. A fő különbség azonban az, hogy míg a fogadóirodákban a szorzókat általában a bukmékerek határozzák meg, az előrejelző piacokon a szerződések árait a piaci kereslet és kínálat alakítja, így azok dinamikusan tükrözik a résztvevők kollektív véleményét és információit.


### Hogyan működnek?

- **Szerződések:** A kereskedők olyan szerződéseket vásárolnak, amelyek fix összeget fizetnek, ha egy bizonyos esemény bekövetkezik. Például egy szerződés 1 dollárt fizet, ha Kamala Harris nyeri a választást. Abban az esetben, ha veszít a szerződés 0$-t fizet.
- **Elszámolás:** Az esemény bekövetkezése után a szerződéseket elszámolják. A nyertes szerződések tulajdonosai megkapják a kifizetést, míg a vesztes szerződések értéktelenek.
- **Árazás:** A szerződés ára a piaci konszenzus szerinti esemény bekövetkezésének valószínűségét reprezentálja. Ha a szerződés ára 0,70 dollár, a piac 70% esélyt ad A jelölt győzelmére.
- **Piac:** Mint egy tőzsdén, **kereskedni lehet a szerződéseinkkel**, szabadon lehet bármikor adni vagy venni a piac likviditásának a függvényében.
- **Információ:** A piac résztvevői az **új információkra gyorsan és hatékonyan tudnak reagálni** a szerződések kereskedésével. Ez a piaci mechanizmus aggregálja több ezer ember véleményét az árfolyamban.
- **Hatékonyság:** Mivel minden résztvevőnek a **saját** pénzét kell kockáztatnia, ezért várhatóan a döntésük meghozatala elött alaposan megvizsgálják az elérhető információt.


# Arrow-Debreu termékek

Matematikailag formalizálva a predikciós piacokon egy speciális típusú termékkel, az **Arrow-Debreu termékkel** kereskedünk. Ez a termék pontosan egy meghatározott időpontban, a világ egy adott állapotában fizet $1$ egységet (jelen esetben $1$ dollárt), míg minden más állapotban $0$-át fizet.

Ha a világállapotokat faként képzeljük el, az Arrow-Debreu termék egy adott csúcsban fizet $1$-et. Egy ilyen termék ára megegyezik a diszkontált várható kifizetésével, azaz a $t$ időpont $i$-edik állapotában fizető Arrow-Debreu termékre:

$$
P_{i,t} = p_i \times D_t
$$

ahol:
- $p_i$ az adott világállapot bekövetkezésének valószínűsége,
- $D_t$ a $t$ időpontra vonatkozó diszkontfaktor.

Ha az időintervallum elhanyagolható ($t \approx 0$), akkor $D_t \approx 1$, így a termék ára közelítőleg egyenlő a bekövetkezés valószínűségével:

$$
P_{i,t} \approx p_i
$$

Az összes Arrow-Debreu termék egy adott $t$ időpontra, azaz a fának egy szintjére összeadva, $1$ egységnyi biztos kifizetést ad a $t$ időpontban, amely természetesen egy **elemi kötvény**, aminek az ára maga a diszkontfaktor:

$$
\sum_i P_{i,t} = D_t
$$

Egy másik megfogalmazásban: egy adott időpontra vonatkozó összes világállapot valószínűségének összege $1$:

$$
\sum_i p_i = 1
$$






## Kalibráció

A piacok hatékonyságának mérésére használhatjuk a kalibráció fogalmát (ez ismerős lehet a gépi tanulásban jártas olvasóink számára). A kalibráció célja, hogy megmérje azt, hogy mennyire egyeznek meg előrejelzéseink a valósággal. Ha egy esemény sokszor megismételhető, mint például egy pénzfeldobás, akkor a valószínűséget könnyen tudjuk értelmezni. Fej dobásának valószínűségét megbecsülhetjük úgy, mint a fejek aránya egy nagy mintában (1000 dobásból nagyjából 500 fej nagyjából 50% valószínűséget jelent).

Azonban a valóságban általában csak egyszer figyelhetünk meg egy adott eseményt, például egy választás eredményét. Ez felveti a kérdést: hogyan rendelhetünk valószínűséget egyszeri, nem megismételhető eseményekhez? Hogyan tudjuk megállapítani, helyes-e a becslésünk, ha csak a kimeneteleket tudjuk?


Vegyük azokat a fogadásokat (mondjuk $N$ darabot), amelyeket a piac mind ugyanakkora $f$ valószínűségre áraz. Tegyük fel, hogy tudjuk a fogadások kimeneteleit, ezeket jelölje $x_i, \ i=1,2,\ldots, N$, ahol $x_i=1$, ha az $i$ esemény bekövetkezett, különben 0. Nyilván ha az események $p$ valószínűséggel következnek be, azt szeretnénk, hogy $f \approx p$ legyen. $p$ értékét természetesen megbecsülhetjük a kimenetelek átlagaként, azaz  $\frac{1}{N} \sum_{i=1}^{N} x_i$. Tehát a piac annál jobban kalibrált, minél közelebb van a becsült valószínűség a megfigyelt átlaghoz.

Ezzel az eljárással a gyakorlatban egy kalibrációs ábrát rajzolhatunk, csak pontos $f$ helyett 10 darab "bint" használunk. Például gyűjtsük össze azokat a fogadásokat egy olyan csoportba, amely olyan fogadásokat tartalmaz, amelyek a lezárásuk előtt egy héttel 30% és 40% közötti értéken kereskedtek.  Egy tökéletes piac esetén ésszerű elvárni, hogy a csoportban lévő események 30-40 százaléka következzen be. 

Csináljuk meg ezt az eljárást a kilenc további csoportra is, és számoljuk össze, hogy a csoportban lévő események közül mennyi következett be. Továbbra is elvárjuk, hogy minden csoportban az előrejelzések közel legyenek a ténylegesen bekövetkezett események arányához. Ezt az információt úgynevezett kalibrációs ábrán tudjuk megjeleníteni.


<div class="svg-container">
  <img src="/prediction_markets/manifold.svg" alt="Árfolyamok" class="dynamic-svg" />
  <figcaption class="svg-caption">
    1. Ábra: <a href="https://manifold.markets/calibration" target="_blank">Manifold Markets</a> kalibrációs görbéje. A mintaméret 65.000 lezárt fogadás.
  </figcaption>
</div>

Az optimális kalibrációt az $x=y$ egyenes jelzi, minél közelebb van ehhez a görbe, annál hatékonyabb a predikciós piac. 

### Brier-pontszám

A Brier-pontszám egy másik gépi-tanulásban sokszor használt metrika előrejelző modellek kiértékelésére. A pontszámot így definiáljuk:

$$
\text{Br(f, o)} = \frac{1}{N} \sum_{i=1}^{N} (f_i - o_i)^2.
$$
- $$ f_i $$: Előrejelzett valószínűség.
- $$ o_i $$: Tényleges kimenetel (1, ha az esemény bekövetkezett, 0, ha nem).
- $$ N $$: A minták száma.
A Brier-pontszám mindig 0 és 1 közötti értéket vesz fel. Annál jobb egy modell minél közelebb van a Brier-pontszáma a 0-hoz. Azt állítjuk, hogy egy jól kalibrált predikciós modell minimalizálja a Brier-pontot.

Legyen $X_1, ..., X_{10}$ tíz közel megkülönbözthetetlen (másszóval azonos eloszlású) esemény. $X_i$ értéke 1, ha bekövetkezik az esemény, különben 0. Azaz ha az esemény bekövetkezésének valószínűsége $p$: $\mathbb{P}(X_i=1)=p, \ i=1,\ldots,10$. Mi az az $f$ becslés, ami a minimalizálja a Brier-pontszám várható értékét?


$$\mathbb{E}\left(\frac{1}{N} \sum_{i=1}^{N} (f - X_i)^2\right)=\frac{1}{N}\sum_{i=1}^{N}\mathbb{E}((f - X_i)^2)=\frac{1}{N}\sum_{i=1}^{N}\mathbb{E}(f^2 - 2 f X_i + X_i)= $$

$$\frac{1}{N}\cdot N\cdot(f^2-2 f p + p)=(f^2-2 f p + p)$$.

Ennek minimumát persze megkaphatjuk $f$ szerinti deriválással: $2f-2p=0$ azaz $f=p$. Ezzel visszakaptuk a kalibráció definicióját, tehát kijelenthetjük, hogy a Brier-pontszám várható értékét a jól kalibrált előrejelzések minimalizálják. 

[Manifold Markets](https://manifold.markets/calibration) Brier-pontszáma $0.17791$, ez nagyon erősnek számít.

## Predikciós piacok

### Kalshi

A [Kalshi](https://kalshi.com/) platform úttörő szerepet játszik az Egyesült Államokban, mivel létrehozta az első **legálisan szabályozott** választási piacot. A Kalshi-t az amerikai kormány független ügynöksége, a **Commodity Futures Trading Commission (CFTC)** szabályozza, amely 1974 óta felügyeli az Egyesült Államok derivatív piacait, és amelyet a Kongresszus ellenőriz. A CFTC engedélyezte a Kalshi működését, amely **Designated Contract Market (DCM)** státusszal rendelkezik – ez a besorolás lehetővé teszi, hogy a platform határidős ügyleteket, swapokat és egyéb termékeket forgalmazzon.


### Polymarket

A Polymarket egy decentralizált előrejelző piac platform, amely blokklánc technológiára épül. Lehetővé teszi a felhasználók számára, hogy kriptovaluták segítségével valós események kimeneteleire kereskedjenek. A megbízhatósága és átláthatósága miatt a piac gyorsan nagy népszerűségre tett szert. A weboldal sikerét tovább tetézte az idei amerikai választás és az, hogy közben több fontos eseményt sikeresen előre jelzett.

<div class="svg-container">
  <img src="/prediction_markets/polymarket_with_biden.svg" alt="Árfolyamok" class="dynamic-svg" />
  <figcaption class="svg-caption">2. Ábra: Biden 2024 Julius 21.-én feladja a versenyt, ezt a piac már Julius 5.-én előre jelzi.</figcaption>
</div>

A választások után is beigazolódott a platform pontossága, hiszen 60/40-es eséllyel előre jelezte Trump győzelmét, miközben a többi felmérés 50/50-es esélyt mutatott. A választások során megfigyelhettük a piac reakcióját az új információkra. A jól működő piacok egyik sarokköve az információ gyors beépítése az árba. A platform ebből is jól vizsgázott, a már megszámolt szavazatokból származó információkra a kereskedők azonnal reagáltak. Így fordulhatott elő, hogy a [platformot figyelő felhasználók](https://x.com/deedydas/status/1854577600016138480/photo/1) az Associated Press (AP) hivatalos eredményhirdetése előtt 9 órával már 95%-os bizonyossággal előre láthatták a választás kimenetelét. Az alábbi táblázatban összegezzük, hogy Polymarket és AP szerint mikor dőlt el a választás az adott államban:

<div class="table-container">
  <table class="custom-table">
    <tr>
      <th></th>
      <th>Államok</th>
      <th>Polymarket > 95%</th>
      <th>AP Bejelentés</th>
      <th>Mennyivel Korábban?</th>
    </tr>
    <tr>
      <td><strong>1</strong></td>
      <td>Észak-Karolina</td>
      <td>21:34</td>
      <td>23:18</td>
      <td>1 óra 45 perc</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Arizona</td>
      <td>22:10</td>
      <td>Nincs bejelentve</td>
      <td>-</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Georgia</td>
      <td>22:27</td>
      <td>00:58</td>
      <td>2 óra 30 perc</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Wisconsin</td>
      <td>23:10</td>
      <td>05:34</td>
      <td>6 óra 25 perc</td>
    </tr>
	<tr style="background-color: #f1d1d5;">
      <td><strong>5</strong></td>
      <td>Összesített Győztes</td>
      <td>23:43</td>
      <td>08:43</td>
      <td>9 óra</td>
    </tr>
    <tr>
      <td><strong>6</strong></td>
      <td>Pennsylvania</td>
      <td>23:48</td>
      <td>02:24</td>
      <td>2 óra 35 perc</td>
    </tr>
    <tr>
      <td><strong>7</strong></td>
      <td>Michigan</td>
      <td>01:06</td>
      <td>12:54</td>
      <td>11 óra 50 perc</td>
    </tr>
    <tr>
      <td><strong>8</strong></td>
      <td>Nevada</td>
      <td>01:29</td>
      <td>Nincs bejelentve</td>
      <td>-</td>
    </tr>
  </table>
</div>



<div class="custom-text-box">
<h2>Egy francia kereskedő története</h2>
    <p>Az amerikai választásokra több mint 3 milliárd dollár értékben spekuláltak, de kiemelkedő egy francia állampolgár, Théo, aki 40 millió dollár értékben fogadott Trump győzelmére. Egy a <a href="https://www.wsj.com/finance/how-the-trump-whale-correctly-called-the-election-cb7eef1d" target="_blank">Wall Street Journal</a>nek tett interjúja során elmondta, hogy egy megbízott egy közvélemény kutató céget, hogy az úgy nevezett "szomszéd effektust" használva mérjék fel a választás kimenetelét. Az elképzelés az, hogy az emberek lehet, hogy nem akarják felfedni a saját preferenciáikat, de közvetetten mégis felfedik azokat, amikor arra kérik őket, hogy találják ki, kire szándékoznak szavazni a szomszédaik.
	Théo azzal érvelt, hogy ezt a módszert használva pontosabban fel lehet mérni a választás kimenetelét. Az általa megrendelt felmérés eredményei nagymértékben Trumpnak kedveztek, így ennek tudatában rá  fogadott. 
    </p>
</div>


## Kritikák

A választásokra való fogadás a fogadási piacok első sikeres felhasználása. Azonban a hatalmas siker mellett a Polymarket több vihart is kavart. [Például egyes országok bejelentették a platform betiltását](https://www.politico.eu/article/french-regulator-opens-probe-into-election-betting-platform-polymarket/). Sokan kritizálják, hogy a felhasználók jelentős része pénzt veszít, és hogy a platform kizsákmányolja az átlagos felhasználót, hiszen a [statisztikák](https://x.com/hmalviya9/status/1854166393786364293) szerint a felhasználók 89%-a veszít. Társadalmi kritikaként felmerül az is, hogy a választásokra feltett milliárdokat produktívabb eszközökbe is lehetne fektetni, amelyek az egész társadalom számára teremtenek értéket. Mi nem szeretnénk ezekben a kérdésekben állást foglalni; helyette vizsgáljuk meg, hogyan lehet az eddig megismert mechanizmust az átlagember szolgálatába állítani.

## Döntési piacok

A döntési piacok olyan speciális előrejelzési piacok, amelyek célja nem csupán egy jövőbeli esemény bekövetkezésének valószínűségét meghatározni, hanem azt is, hogy melyik döntés hozza a legjobb eredményt egy adott mérőszám szerint. Míg az előrejelzési piacok arra fókuszálnak, hogy mi fog történni, addig a döntési piacok azt próbálják előre jelezni, melyik döntés vezet a kívánt kimenetelhez.

Például, ha szeretnénk eldönteni, hogy melyik ellenzéki politikust indítsuk Orbán Viktor ellen a következő választáson, a következő módon használhatjuk a döntési piacokat. Tegyük fel, hogy a két lehetséges kihívó Magyar Péter és Gyurcsány Ferenc. Létrehozhatunk két feltételes piacot az alábbi fogadásokkal:

- Ha Magyar Péter az ellenzéki jelölt, ki nyeri a választást: Orbán Viktor vagy Magyar Péter?
- Ha Gyurcsány Ferenc az ellenzéki jelölt, ki nyeri a választást: Orbán Viktor vagy Gyurcsány Ferenc?


A piacok alapján azt a jelöltet választjuk, akinek esetében a piac magasabb győzelmi valószínűséget jelez. Ha végül Magyar Péter lesz az ellenzék jelöltje, akkor a Gyurcsány Ferencre vonatkozó piac érvénytelen lesz, és mindenki visszakapja a befizetett összeget. Az első piac viszont aktív marad, és a választás eredménye alapján történik a kifizetés.
<div class="responsive-image">
  <img src="/prediction_markets/vitalik.jpg" alt="Kenneth Arrow" />
    <figcaption class="svg-caption">Vitalik Buterin az Ethereum alapítója</figcaption>
</div>

Ezzel a mechanizmussal sokkal jobb döntéseket lehetne hozni – érvel [Vitalik Buterin a blogjában](https://vitalik.eth.limo/general/2024/11/09/infofinance.html). Azonban a piacok likviditása nagyban nehezíti az alkalmazhatóságukat, mivel az illikvid piac manipulálható és megbízhatatlan. Vitalik mégis mellettük érvel, mert ahogy a Wall Streeten, úgy a Polymarketen is lehetséges a kereskedési folyamatok automatizálása. Nem nehéz elképzelni egy olyan jövőt, ahol a fogadások nagy részét nyelvi modellek serege végzi el. Ennek egy kezdetleges példája a Perplexity integrációja a Polymarkettel, ami lehetővé teszi a kereskedők számára, hogy elolvassanak egy frissen generált összefoglalót az interneten elérhető információkból. 
