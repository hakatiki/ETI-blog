---

title: "A Budapesti Ingatlanpiac Elemzése"
date: "2024-09-26"
description: "A budapesti ingatlanpiacot az elmúlt évek során jelentős strukturális változások jellemezték, melyek mind a keresleti, mind a kínálati oldalon markánsan befolyásolták az árakat és a piaci trendeket. Az olyan szabályozási tényezők, mint a rövid távú bérleti piacra vonatkozó szigorítások, tovább árnyalják a helyzetet. Ebben a cikkben a célunk, hogy részletesen áttekintsük az aktuális piaci helyzetet és feltérképezzük a fő mozgatórugókat."
released: "Yes"
author: "Schneider Ákos, Takáts Bálint, Egri Máté"
image: "/ingatlanok/budapest_latkep.jpg"

---

A budapesti ingatlanpiacot az elmúlt évek során jelentős strukturális változások jellemezték, melyek mind a keresleti, mind a kínálati oldalon markánsan befolyásolták az árakat és a piaci trendeket. Az olyan szabályozási tényezők, mint a rövid távú bérleti piacra vonatkozó szigorítások, tovább árnyalják a helyzetet. **Ebben a cikkben a célunk, hogy részletesen áttekintsük az aktuális piaci helyzetet és feltérképezzük a fő mozgatórugókat.**

## Adatgyűjtés és módszertan

Elemzésünk egy **2112 budapesti ingatlan** hirdetéséből álló adatbázison alapul. Az adatokat az internetről gyűjtöttük össze manuálisan, strukturálatlan formában. A hirdetések szövegéből kinyertük a releváns információkat és egységesítettük őket. Az adatfeldolgozási folyamat automatizálására az OpenAI API-t valamint LangChain-t használtunk. Végül, az így létrehozott, tisztított adatbázist CSV formátumban tároltuk. Külön köszönet illeti [Schneider Ákost](https://www.linkedin.com/in/akos-schneider), aki jelentős szerepet vállalt az adatgyűjtés és feldolgozás során.

Az adatbázis kizárólag budapesti ingatlanokat tartalmaz, és olyan kulcsfontosságú jellemzőket foglal magában, mint az ár, alapterület, szobák száma, építés éve, emelet, erkély mérete, fenntartási költségek és egyéb fontos paraméterek. **Az adatminőség javítása érdekében az ingatlanokat 25 és 200 millió forint közötti árkategóriára szűrtük**, így kizártuk az extrém értékeket és biztosítottuk az adatok megbízhatóságát.

## Statisztikai elemzés

Az alábbi táblázat összefoglalja az adatok legfontosabb statisztikai mutatóit:

  <table class="custom-table">
    <tr>
      <th></th>
      <th>Átlag</th>
      <th>Medián</th>
      <th>Minimum</th>
      <th>Maximum</th>
    </tr>
    <tr>
      <td><strong>Ár (millió Ft)</strong></td>
      <td>75,3</td>
      <td>65,9</td>
      <td>25,9</td>
      <td>199,9</td>
    </tr>
    <tr>
      <td><strong>Terület (m²)</strong></td>
      <td>60,8</td>
      <td>57,0</td>
      <td>19,0</td>
      <td>434,0</td>
    </tr>
    <tr>
      <td><strong>Szobák száma</strong></td>
      <td>2,5</td>
      <td>2,0</td>
      <td>1,0</td>
      <td>7,0</td>
    </tr>
    <tr>
      <td><strong>Építés éve</strong></td>
      <td>1982</td>
      <td>1981</td>
      <td>1882</td>
      <td>2026</td>
    </tr>
    <tr>
      <td><strong>Négyzetméterár (ezer Ft/m²)</strong></td>
      <td>1 257</td>
      <td>1 178</td>
      <td>230</td>
      <td>4 865</td>
    </tr>
  </table>

<!-- Az adatokból látható, hogy az átlagos ingatlanár Budapesten **75,3 millió forint**, míg az átlagos terület **60,8 négyzetméter**. A négyzetméterárak jelentős szórást mutatnak, ami a különböző kerületek és ingatlantípusok közötti eltéréseknek köszönhető.

Budapesti ingatlanok térképes megjelenítése
Az alábbi térképek szemléltetik az ingatlanok eloszlását és a négyzetméterárak földrajzi megoszlását Budapesten. -->

### Ingatlanok eloszlása térképen

<div class="svg-container"> <img src="/ingatlanok/map_flat.png" alt="Budapesti ingatlanok sík térképen" class="dynamic-svg" /> <figcaption class="svg-caption">1. Ábra: Ingatlanok eloszlása a térképen.</figcaption> </div>

Az első ábrán Budapest térképe látható, ahol az ingatlanokat különböző méretű és színű körök jelölik. A körök színe a sárgától a pirosig terjed, ahol a világos sárga a magasabb, míg a piros az alacsonyabb árú ingatlanokat jelzi. A körök mérete az ingatlan alapterületét mutatja: minél nagyobb az ingatlan, annál nagyobb a kör. A pontok elhelyezkedése szépen kirajzolja a város zöldterületeit, valamint a Nyugati pályaudvar és a Duna vonalát, amely szintén jól látható a térképen.

### Az adatok kerületenként

<div class="svg-container"> <img src="/ingatlanok/district_map.png" alt="Kerületenkénti négyzetméterárak térképe" class="dynamic-svg" /> <figcaption class="svg-caption">2. Ábra: Az átlagos négyzetméterárak Budapest kerületeiben. (Millió Ft)</figcaption> </div>

Valamint a pontos számadatok a teljesség kedvéért:

<div class="table-container">
  <table class="custom-table">
    <thead>
      <tr>
        <th></th>
        <th>Átlagos négyzetméterár (M Ft)</th>
        <th>Medián (M Ft)</th>
        <th>Minimum (M Ft)</th>
        <th>Maximum (M Ft)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Budapest I. kerület</strong></td>
        <td>1.52</td>
        <td>1.40</td>
        <td>0.94</td>
        <td>3.14</td>
      </tr>
      <tr>
        <td><strong>Budapest II. kerület</strong></td>
        <td>1.55</td>
        <td>1.47</td>
        <td>1.01</td>
        <td>2.86</td>
      </tr>
      <tr>
        <td><strong>Budapest III. kerület</strong></td>
        <td>1.27</td>
        <td>1.21</td>
        <td>0.65</td>
        <td>2.41</td>
      </tr>
      <tr>
        <td><strong>Budapest V. kerület</strong></td>
        <td>1.79</td>
        <td>1.67</td>
        <td>1.07</td>
        <td>4.86</td>
      </tr>
      <tr>
        <td><strong>Budapest VI. kerület</strong></td>
        <td>1.38</td>
        <td>1.34</td>
        <td>0.81</td>
        <td>2.71</td>
      </tr>
      <tr>
        <td><strong>Budapest VII. kerület</strong></td>
        <td>1.21</td>
        <td>1.13</td>
        <td>0.47</td>
        <td>2.27</td>
      </tr>
      <tr>
        <td><strong>Budapest VIII. kerület</strong></td>
        <td>1.18</td>
        <td>1.08</td>
        <td>0.59</td>
        <td>2.51</td>
      </tr>
      <tr>
        <td><strong>Budapest IX. kerület</strong></td>
        <td>1.28</td>
        <td>1.21</td>
        <td>0.23</td>
        <td>2.09</td>
      </tr>
      <tr>
        <td><strong>Budapest XI. kerület</strong></td>
        <td>1.47</td>
        <td>1.41</td>
        <td>0.54</td>
        <td>2.98</td>
      </tr>
      <tr>
        <td><strong>Budapest XII. kerület</strong></td>
        <td>1.48</td>
        <td>1.40</td>
        <td>0.90</td>
        <td>2.81</td>
      </tr>
      <tr>
        <td><strong>Budapest XIII. kerület</strong></td>
        <td>1.40</td>
        <td>1.38</td>
        <td>0.63</td>
        <td>2.18</td>
      </tr>
      <tr>
        <td><strong>Budapest XIV. kerület</strong></td>
        <td>1.13</td>
        <td>1.07</td>
        <td>0.77</td>
        <td>2.11</td>
      </tr>
      <tr>
        <td><strong>Budapest XIX. kerület</strong></td>
        <td>1.00</td>
        <td>1.00</td>
        <td>0.65</td>
        <td>1.59</td>
      </tr>
      <tr>
        <td><strong>Budapest XX. kerület</strong></td>
        <td>0.83</td>
        <td>0.83</td>
        <td>0.56</td>
        <td>1.21</td>
      </tr>
      <tr>
        <td><strong>Budapest XXI. kerület</strong></td>
        <td>0.82</td>
        <td>0.80</td>
        <td>0.64</td>
        <td>1.30</td>
      </tr>
      <tr>
        <td><strong>Budapest XXII. kerület</strong></td>
        <td>1.16</td>
        <td>1.10</td>
        <td>0.89</td>
        <td>1.61</td>
      </tr>
      <tr>
        <td><strong>Budapest XXIII. kerület</strong></td>
        <td>1.07</td>
        <td>1.07</td>
        <td>0.72</td>
        <td>1.34</td>
      </tr>
    </tbody>
  </table>
</div>

Az adatokból egyértelműen látszik, hogy a legmagasabb átlagos négyzetméterárakat a belvárosi kerületekben találjuk. Különösen az V. kerület emelkedik ki, ahol az átlagos négyzetméterár közel 1,79 millió forint. Ezt szorosan követi a II. kerület 1,55 millió forintos átlaggal, valamint az I. kerület 1,52 millió forintos értékkel.

Ezzel szemben a külső kerületekben, mint például a XXI. kerületben, az átlagos négyzetméterár mindössze 823 ezer forint, ami jelentősen alacsonyabb a belső kerületek áraihoz képest.


A térkép és a táblázat együttesen jól szemlélteti, hogy az ingatlanok értékét erősen befolyásolja az elhelyezkedés. A belvárosi területek presztízse, a kiváló infrastruktúra és a kulturális lehetőségek magasabb árakat eredményeznek, míg a külső kerületekben az ingatlanok elérhetőbb áron kaphatók.















<!-- ### Terület eloszlása

Az ingatlanok területének eloszlását vizsgálva megállapítottuk, hogy a legtöbb lakás mérete 30 és 80 négyzetméter között mozog. Az adatok eloszlásának modellezésére Gamma és Lognormális eloszlást illesztettünk a mintára. A Kolmogorov–Szmirnov teszt eredményei alapján a Lognormális eloszlás bizonyult jobb illeszkedésnek, amelynek p-értéke 0,0525 volt.
<div class="svg-container">
  <img src="/ingatlanok/terulet_eloszlas.png" alt="Terület eloszlása" class="dynamic-svg" />
  <figcaption class="svg-caption">1. Ábra: Az ingatlanok területének eloszlása.</figcaption>
</div>
Az illeszkedés javulását a p-értékek tükrözik: a lognormális eloszlás p-értéke 0,0525 azt jelzi, hogy a nullhipotézist—miszerint az adatok lognormális eloszlást követnek—nem utasíthatjuk el az 5%-os szignifikanciaszinten. Ez arra utal, hogy a lognormális eloszlás megfelelő modell az ingatlanok területének eloszlására, és jól leírja a méretbeli különbségeket a budapesti ingatlanpiacon.

### Négyzetméterár eloszlása

A négyzetméterárak esetében is megvizsgáltuk az eloszlást. A legtöbb ingatlan négyzetméterára 800 000 és 1 500 000 Ft között található. Itt is a Gamma és Lognormális eloszlást illesztettük az adatokra. A statisztikai tesztek alapján a Lognormális eloszlás adta a jobb illeszkedést, bár a p-értéke 0,0035 alacsonyabb volt, mint a terület esetében.
<div class="svg-container">
  <img src="/ingatlanok/nm_eloszlas.png" alt="Négyzetméterár eloszlása" class="dynamic-svg" />
  <figcaption class="svg-caption">2. Ábra: Az ingatlanok négyzetméterárának eloszlása.</figcaption>
</div>
A p-érték 0,0035 azt jelzi, hogy a lognormális eloszlás illeszkedése a négyzetméterárakra kevésbé erős, mivel ez az érték kisebb az 5%-os szignifikanciaszintnél. Ez azt sugallja, hogy bár a lognormális eloszlás jobb illeszkedést mutat, mint a Gamma eloszlás, az ingatlanok négyzetméterárai esetében az eloszlás nem teljes mértékben követi a lognormális mintát. Ennek oka lehet a piaci árakban tapasztalható nagyobb variabilitás vagy az extrém értékek jelenléte, amelyek torzíthatják az eloszlást.

Négyzetméterárak kerületenkénti elemzése
Az ingatlanok négyzetméterárai jelentős eltéréseket mutatnak Budapest egyes kerületeiben. Az alábbi táblázatban összefoglaltuk a legfontosabb statisztikai adatokat kerületenként, amelyek segítségével mélyebb betekintést nyerhetünk a főváros ingatlanpiacának területi különbségeibe.
 -->



## Az ingatlanok árát befolyásoló legfontosabb tényezők


A budapesti ingatlanok árait számos tényező alakítja, melyek közül néhányat itt bemutatunk. Lineáris regresszió segítségével modelleztük az ingatlanárak és a független változók közötti összefüggéseket:

**Adatelőkészítés**: Tisztítottuk az adatokat, kezeltük a hiányzó értékeket, és a kategóriákat numerikus formára alakítottuk.

**Modellbetanítás**: Iteratívan elilimináltuk a nem szignifikáns változókat. Majd a végső jellemzőkre illesztettük a regressziós modellt.

**Koefficiensek elemzése**: A modell koefficiensei és a p-értékek alapján meghatároztuk az egyes jellemzők fontosságát. A pozitív koefficiensek az adott jellemző árnövelő, a negatívak pedig árcsökkentő hatását jelzik.


Az alábbi táblázatban összefoglaltuk a legfontosabb tényezőket, amik a modell szerint az árat nagyban befolyásolják:
<div class="table-container">
  <table class="custom-table">
    <thead>
      <tr>
        <th>Sorszám</th>
        <th>Jellemző</th>
        <th>Koefficiens</th>
        <th>p-érték</th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr>
        <td>1.</td>
        <td><strong>A házban a kazán nemrég lett felújítva</strong></td>
        <td>0.6998</td>
        <td>0.00012</td>
      </tr> -->
      <tr>
        <td>1.</td>
        <td><strong>Gázkonvektor, padlófűtés, hűtő-fűtő klíma</strong></td>
        <td>0.6423</td>
        <td>0.00042</td>
      </tr>
      <tr>
        <td>2.</td>
        <td><strong>Gázkazán, padlófűtés</strong></td>
        <td>0.3207</td>
        <td>1.819e-09</td>
      </tr>
      <tr>
        <td>3.</td>
        <td><strong>Hőszivattyú, padlófűtés, mennyezeti hűtés</strong></td>
        <td>0.2956</td>
        <td>0.00499</td>
      </tr>
      <tr>
        <td>4.</td>
        <td><strong>Mennyezeti hűtés-fűtés, hőszivattyú</strong></td>
        <td>0.1836</td>
        <td>2.137e-08</td>
      </tr>
    </tbody>
  </table>
</div>

Jól látható, hogy a modern fűtéstechnológiáért a vevők hajlandóak többet fizetni. 

<div class="table-container">
  <table class="custom-table">
    <thead>
      <tr>
        <th>Sorszám</th>
        <th>Jellemző</th>
        <th>Koefficiens</th>
        <th>p-érték</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.</td>
        <td><strong>Gázkonvektor</strong></td>
        <td>-0.1450</td>
        <td>2.585e-20</td>
      </tr>
      <tr>
        <td>2.</td>
        <td><strong>Távfűtés</strong></td>
        <td>-0.1262</td>
        <td>4.013e-14</td>
      </tr>
      <tr>
        <td>3.</td>
        <td><strong>Távfűtés egyedi méréssel</strong></td>
        <td>-0.1252</td>
        <td>1.211e-09</td>
      </tr>
      <tr>
        <td>4.</td>
        <td><strong>Gázkonvektor, elektromos fűtőpanel</strong></td>
        <td>-0.1565</td>
        <td>0.00321</td>
      </tr>
      <tr>
        <td>5.</td>
        <td><strong>Gázkonvektor, hűtő-fűtő klíma</strong></td>
        <td>-0.1467</td>
        <td>0.00289</td>
      </tr>
    </tbody>
  </table>
</div>

A régi, elavult fűtés viszont rontja az ingatlanok értékét. 


<div class="table-container">
  <table class="custom-table">
    <thead>
      <tr>
        <th>Sorszám</th>
        <th>Jellemző</th>
        <th>Koefficiens</th>
        <th>p-érték</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1.</td>
        <td><strong>A kerületi lakosoknak ingyenes a parkolás</strong></td>
        <td>0.7063</td>
        <td>0.00014</td>
      </tr>
      <!-- <tr>
        <td>2.</td>
        <td><strong>Gépkocsibeálló</strong></td>
        <td>0.5684</td>
        <td>0.00214</td>
      </tr> -->
      <tr>
        <td>2.</td>
        <td><strong>Önálló garázs - megvásárolható</strong></td>
        <td>0.2105</td>
        <td>0.00001</td>
      </tr>
      <tr>
        <td>3.</td>
        <td><strong>Önálló garázs - bérelhető</strong></td>
        <td>-0.1579</td>
        <td>0.00885</td>
      </tr>
      <tr>
        <td>4.</td>
        <td><strong>Utca, közterület - fizetős</strong></td>
        <td>-0.0530</td>
        <td>0.00551</td>
      </tr>
    </tbody>
  </table>
</div>

A parkolást is nagyra becsülik a vevők egy jó parkolóhely az ingatlan árát is megnövelheti. 



## Összegzés

A budapesti ingatlanpiacon az árak mindenütt magasak, különösen az V. és II. kerületben. A belvárosi kerületek közül a VIII. kerület a legolcsóbb, az egész várost nézve Csepel a legmegengedhetőbb. A vásárlók számára kiemelten fontos a modern technológiai felszereltség és az ingatlanok energetikai hatékonysága. A zöld technológiák és alacsony energiafogyasztású rendszerek, mint a hőszivattyú, vonzóvá teszik az ingatlanokat, míg a parkolási lehetőségek, mint az önálló garázs vagy ingyenes parkolás, tovább növelik azok értékét.