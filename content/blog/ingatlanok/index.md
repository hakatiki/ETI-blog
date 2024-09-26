---

title: "Budapesti Ingatlanpiac Elemzése: Adatok, Trendek és Előrejelzések"
date: "2024-10-01"
description: "Átfogó elemzést készítettünk a budapesti ingatlanpiacról, bemutatva a legfontosabb trendeket, statisztikákat és előrejelzéseket. Megvizsgáltuk az árak és területek eloszlását, valamint a legfontosabb tényezőket, amelyek befolyásolják az ingatlanok értékét."
released: "Yes"
author: "Kovács Péter"
image: "/ingatlanok/terulet_eloszlas.png"

---

Az ingatlanpiac mindig is központi szerepet játszott mind a befektetők, mind a lakosság életében. Budapest különösen izgalmas terület, ahol a folyamatosan változó kereslet és kínálat jelentősen befolyásolja az árakat és a trendeket. A rövid távú lakáskiadás szabályozásának változásai, mint például az Airbnb tevékenységére vonatkozó korlátozások, szintén befolyásolhatják a piaci dinamikát. **Kíváncsian várjuk, hogy ezek a tényezők milyen hatással lesznek a budapesti ingatlanpiacra.**


## Adatgyűjtés és módszertan

Elemzésünk egy **2112 budapesti ingatlan** hirdetéséből álló adatbázison alapul. Az adatokat az internetről gyűjtöttük össze manuálisan, strukturálatlan formában. A hirdetések szövegéből kinyertük a releváns információkat és egységesítettük őket. Az OpenAI API-t használtuk a szöveges adatok elemzésére és a szükséges információk kinyerésére, míg a LangChain eszközzel automatizáltuk az adatfeldolgozás folyamatát. A Pydantic könyvtár segítségével ellenőriztük és validáltuk az adatokat, biztosítva azok pontosságát és konzisztenciáját. Az így létrehozott, tisztított adatbázist CSV formátumban tároltuk. Külön köszönet illeti **Schneider Ákost**, aki jelentős szerepet vállalt az adatgyűjtés és feldolgozás során.


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

<div class="svg-container"> <img src="/ingatlanok/map_flat.png" alt="Budapesti ingatlanok sík térképen" class="dynamic-svg" /> <figcaption class="svg-caption">3. Ábra: Ingatlanok eloszlása a térképen.</figcaption> </div>

Az első ábrán Budapest térképe látható, ahol az ingatlanokat különböző színű és méretű pontok jelölik. A színek és a méretek az ingatlanok bizonyos jellemzőit az árat és a négyzetméterárat—reprezentálják. Érdekes módon a pontok hiánya jól kirajzolja a város zöldterületeit, valamint a Nyugati pályaudvar és a Duna vonalát.
<!-- 
### Budapesti ingatlanok elhelyezkedése

<div class="svg-container"> <img src="/ingatlanok/map.png" alt="Budapesti ingatlanok térképen" class="dynamic-svg" /> <figcaption class="svg-caption">4. Ábra: Budapesti ingatlanok elhelyezkedése.</figcaption> </div>
A második ábrán egy hagyományos Budapest térképet láthatunk, amelyen kék színű jelölők mutatják az ingatlanok földrajzi eloszlását. Ezek a pin-szerű jelzések sűrűn lefedik a város különböző részeit, különösen a központi kerületeket és a Duna menti területeket. A jelölők nemcsak a belvárosban, hanem a város külső részein, például a budai hegyekben és a pesti külvárosi területeken is jelentős számban megtalálhatók. Ez az ábra jól szemlélteti az ingatlanpiac aktivitását Budapesten, és azt, hogy az ingatlanok elérhetősége és sűrűsége hogyan oszlik meg a különböző városrészek között.

## Az ingatlanárak és területek eloszlása -->
### Az adatok kerületenként

<div class="svg-container"> <img src="/ingatlanok/district_map.png" alt="Kerületenkénti négyzetméterárak térképe" class="dynamic-svg" /> <figcaption class="svg-caption">5. Ábra: Az átlagos négyzetméterárak Budapest kerületeiben.</figcaption> </div>

Valamint a pontos számadatok:

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

A budapesti ingatlanok árait számos tényező alakítja, melyek közül néhány kiemelkedő hatással bír. Gépi tanulási modell segítségével elemeztük az adatokat, hogy meghatározzuk, mely jellemzők gyakorolják a legnagyobb befolyást az ingatlanok értékére.
<div class="custom-text-box-elmeleti">
    <h2>Hogyan határoztuk meg a jellemzők fontosságát az XGBRegressor modellben?</h2>
    <p>
        Az ingatlanárak előrejelzéséhez az <b>XGBRegressor</b> algoritmust használtuk, amely gradienst boostoló döntési fákat alkalmaz.. A modell betanítása után a <code>feature_importances_</code> attribútum segítségével kinyertük a jellemzők fontossági értékeit. Ezek az értékek numerikus súlyokként reprezentálják az egyes jellemzők relatív hozzájárulását a modell predikcióihoz. A kapott eredményeket csökkenő sorrendbe rendeztük, így azonosítva a legmeghatározóbb tényezőket az ingatlanárak alakulásában.
    </p>
</div>



### Mi fontos a piacon?

Az alábbi táblázatban összefoglaltuk a legfontosabb tényezőket amik a modell szerint az árat nagyban befolyásolják:



<div class="table-container">
  <table class="custom-table">
    <thead>
      <tr>
        <th>Sorszám</th>
        <th>Jellemző</th>
        <th>Relatív fontosság (%)</th>
      </tr>
    </thead>
    <tbody>
      <!-- Pozitív Koefficiensek -->
      <tr>
        <td>1.</td>
        <td><strong>Padlófűtés, falfűtés</strong></td>
        <td>49,27%</td>
      </tr>
      <tr>
        <td>2.</td>
        <td><strong>Gázfűtés</strong></td>
        <td>22,81%</td>
      </tr>
      <tr>
        <td>3.</td>
        <td><strong>Gázkazán, padlófűtés</strong></td>
        <td>10,23%</td>
      </tr>
      <tr>
        <td>4.</td>
        <td><strong>Infrafűtés, hűtő-fűtő klíma</strong></td>
        <td>7,62%</td>
      </tr>
      <tr>
        <td>5.</td>
        <td><strong>Hőszivattyú</strong></td>
        <td>6,08%</td>
      </tr>
      <tr>
        <td>8.</td>
        <td><strong>Gáz (konvektor)</strong></td>
        <td>-2,93%</td>
      </tr>
    </tbody>
  </table>
</div>



## Összegzés

Elemzésünk rámutatott, hogy a budapesti ingatlanpiacon az árakat nem csupán az ingatlan mérete vagy alapvető jellemzői határozzák meg. A modern technológiai felszereltség, a luxuskomfort és az előnyös elhelyezkedés olyan kulcsfontosságú tényezők, amelyek jelentősen befolyásolják az ingatlanok értékét. Ezen szempontok figyelembevételével a piaci trendek jobban megérthetők, és megalapozottabb döntéseket hozhatunk, legyen szó vásárlásról vagy befektetésről.

---

**Megjegyzés**: Az elemzés során felhasznált adatok és modellek a rendelkezésre álló információk alapján készültek, és tájékoztató jellegűek.
