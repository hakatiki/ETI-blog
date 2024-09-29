---
title:  "Modern Portfólióelmélet és a CAPM"
date: "2024-08-18"
description: "A modern portfólióelmélet (Modern Portfolio Theory, MPT) Harry Markowitz amerikai közgazdász nevéhez fűződik, aki 1952-ben publikálta az elmélet alapjait Portfolio Selection című tanulmányában, majd ez 1990-ben közgazdasági Nobel-díjat hozott számára."
released: "Yes"
author: "Egri Máté és Takáts Bálint"
image: "/MPT/Harry-Markowitz.jpg"
---
<!-- !!!! -->
<!-- 
ffmpeg -i input.gif -vf "palettegen=max_colors=32:stats_mode=diff" -y palette.png
ffmpeg -i input.gif -i palette.png -lavfi "paletteuse=dither=bayer:bayer_scale=3" -b:v 300k output.gif 

-->

A modern portfólióelmélet (Modern Portfolio Theory, MPT) Harry Markowitz amerikai közgazdász nevéhez fűződik, aki 1952-ben publikálta az elmélet alapjait "Portfolio Selection" című tanulmányában, majd ez 1990-ben közgazdasági Nobel-díjat hozott számára.

<div class="responsive-image">
  <img src="/MPT/Harry-Markowitz.jpg" alt="Description of the image" />
    <figcaption class="svg-caption">Harry Markowitz (1927 - 2023)</figcaption>
</div>

 A portfólióelmélet célja, hogy segítséget nyújtson a befektetőknek abban, hogyan állítsanak össze optimális portfóliókat, amelyek minimalizálják a kockázatot adott hozam mellett, vagy maximalizálják a hozamot adott kockázati szint mellett. 



Markowitz úttörő felismerése volt, hogy a befektetések közötti korreláció figyelembevétele kulcsfontosságú a portfóliók összetételének optimalizálásában. Korábban a befektetők egyedi részvények kockázatára összpontosítottak, de Markowitz rámutatott, hogy a portfóliók teljes kockázata nem pusztán az egyedi befektetések kockázatainak összessége, hanem a befektetések közötti korrelációk is jelentős hatással vannak. Ez a diverzifikáció alapelve, amely szerint a különböző eszközökbe történő befektetés csökkenti a portfólió kockázatát.


<div class="responsive-image-left">
  <img src="/MPT/William_sharpe_2007.jpg" alt="Description of the image" />
    <figcaption class="svg-caption">William F. Sharpe (1934 -)</figcaption>
</div>


William Sharpe továbbfejlesztette a portfólióelméletet azáltal, hogy 1964-ben kidolgozta a Tőkepiaci Árfolyamok Modelljét (Capital Asset Pricing Model), felhasználva Markowitz elméletét piaci egyensúly mellett. Sharpe modellje arra tanítja a befektetőket, hogy ne csak az egyes eszközök önmagukban vett kockázatát vegyék figyelembe, hanem azt is, hogy milyen összefüggésben van a piac egészével. A CAPM megmutatja, hogyan lehet az egyes eszközök várható hozamát meghatározni a piaci kockázatból és a piac mozgásából. 1990-ben megosztva Sharpe-ot is közgazdasági Nobel-díjjal jutalmazták.

<br/><br/>

## Feltételezések
Kezdjük a feltételekkel, amelyek mellet kidolgozhatjuk a modern portfólióelmélet keretrendszerét.


### Feltevések a befektetőkről
1. A befektetők racionálisan döntenek, és céljuk a várható hasznosságuk maximalizálása egy perióduson.
2. A befektetők várható hasznossága csak a portfólió hozamának várható értékétől és szórásától függ.
3. A befektetők kockázatkerülők, tehát a várható hasznosság a szórásban csökkenő.
4. A piacon sok, elhanyagolható vagyonú, árelfogadó befektető van.
5. A várakozások homogének, azaz a befektetők vélekedése a hozamok együttes eloszlásáról azonos.


<div class="custom-text-box-elmeleti">
    <h2>Hasznossági függvény</h2>
    <p>A közgazdaságtan legtöbb ágában a racionális befektetők nem a vagyonukat maximalizálják, hanem annak egy úgynevezett <b>Neumann-Morgenstern hasznossági függvény</b> várható értékét. Ennek oka, hogy egy megkeresett forint okozta boldogság sok mindentől függhet, például boldogabbá tesz az utcán talált 1 000 forintos egy földönfutót, mint egy milliomost. Általában feltesszük, hogy a hasznossági függvény <b>szigorúan monoton növekvő</b> (hiszen minden pénznek örülünk), de <b>konkáv</b>, azaz minél több pénzünk van, annál kevésbé örülünk 1 Ft összegnek. Ezen megkötések mellett azonban a befektetők hasznossági függvényei lehetnek <b>különbözők</b>, hiszen mindenki máshogy gondolkozik. Bizonyítható, hogy egy befektető pontosan akkor kockázatkerülő, ha hasznossági függvénye konkáv.
    </p>
</div>
<div class="custom-text-box">
    <h2>Kilátáselmélet</h2>
    <p>Tudat alatt valóban minden befektető egy konkáv hasznossági függvény várható értéklét maximalizálja? Erre a feltételezésre épült a modern közgazdaságtan, viszont <b>Daniel Kahneman</b> és <b>Amos Tversky</b> 1979-ben ellenőrzött pszichológiai kísérletekkel cáfolta a hasznossági függvény létezését, többek között aszimmetriát fedezve fel az elszenvedett veszteségek okozta fájdalom és a megszerzett nyereségek okozta öröm között. Elméletük összetettebb rendszerbe foglalja az emberek viselkedését és viszonyát a pénzhez.
    </p>
</div>


### Feltevések az eszközökről
1. A piac tökéletes, tehát nincsenek tranzakciós költségek, adók vagy egyéb piaci súrlódások.
2. Nincs arbitrázs, azaz minden kockázatmentes portfólió hozama azonos.
3. A piacon lehet eszközöket rövidre eladni (shortolni) és hitelt felvenni.
4. Az eszközök korlátlanul oszthatók.
5. Nincs redundáns értékpapír, azaz az eszközök hozamainak eloszlásai lineárisan függetlenek.
6. Legalább két értékpapír várható hozama különböző.
7. Az értékpapírok hozamai véges szórásúak.



## Portfóliók csak kockázatos eszközökből


Mi az a portfólió? Adott mennyiségű tőkét osztunk szét különböző befektetési eszközök között. Az egyszerűség kedvéért legyen az összes tőkénk $1$, az eszközök száma $n$, ekkor a portfólió nem más, mint egy $n$ hosszú, egyösszegű vektor, ahol az $i.$ elem azt határozza meg, mekkora arányban fektetünk az $i.$ eszközbe: $\underline{w}:\sum_{i=1}^n w_i=1$. Fontos megjegyezni, hogy az egyes súlyok lehetnek negatívak is, hiszen feltételezzük, hogy az adott piacon lehet eszközöket rövidre eladni (shortolni).

Elegendő, ha csak egy adott időszakon nézzük a hozamokat. Jelölje az $i.$ eszköz hozamát $r_i$ ezen az időszakon.

Több kockázatos eszköz esetén azt, hogy mennyi várható hozamot hoznak, azt az eszközökből álló vektorváltozó várható értékeként kapjuk meg: $\underline{\mu}:=\mathbb{E}(\underline{r})$. Ebből megkaphatjuk a portfólió várható hozamát: $$\mathbb{E}(r_P)=\underline{w}^T\underline{\mu}$$. 

Több kockázatos eszköz esetén nem csak az egyedi szórások érdekelnek minket, hanem az eszközök közötti korreláció is, tehát az eszközökből álló vektorváltozó szórásmátrixát (kovarianciamátrixát) használjuk fel: $$\Sigma:=\text{V}(\underline{r}) = \mathbb{E}((\underline{r}-\mathbb{E}(\underline{r}))(\underline{r}-\mathbb{E}(\underline{r}))^T) $$. Ez egy pozitív szemidefinit, szimmetrikus mátrix, főátlójában az egyes eszközök szórásnégyzeteivel.
A portfólió kockázatának mérésére a hozamok varianciáját használjuk: $$\sigma_P:=\text{Var}(r_P)=\mathbb{E} \left[(r_P-\mathbb{E} [r_P])^{2}\right]=\underline{w}^T\Sigma\underline{w}$$.
<!-- <div style="display: flex; justify-content: center;">
    <img src="/MPT/PortfolioWeights.gif" alt="My GIF" style="max-width: 100%; height: auto;" />
</div> -->

Az eszközök várható hozamának és kovarianciamátrixának becslése fontos lépés az optimális portfólió kialakításában. Ehhez gyakran a múltbeli (historikus) adatokat használjuk fel, mivel ezek alapján próbálunk következtetni a jövőbeli teljesítményre.

### Várható hozam és a kovarianciamátrix becslése
A várható hozamot ($\underline{\mu}$) az egyes eszközök múltbeli hozamai alapján is megbecsülhetjük. Tegyük fel, hogy rendelkezésünkre áll egy időszakra vonatkozó historikus adatsor, ahol az $i.$ eszköz hozama $r_i^t$ a $t.$ időpontban. Ekkor az $i.$ eszköz átlagos hozamát a következőképpen számíthatjuk ki:

$$
\hat{\mu}_i = \frac{1}{T} \sum_{t=1}^T r_i^t,
$$

ahol $T$ az időszakok száma. A kovarianciamátrix elemei a következőképpen számíthatók ki:

$$
\hat{\sigma}_{ij} = \frac{1}{T-1} \sum_{t=1}^T (r_i^t - \hat{\mu}_i)(r_j^t - \hat{\mu}_j),
$$

ahol $\hat{\mu}_i$ és $\hat{\mu}_j$ az $i.$ és $j.$ eszköz várható hozamai, $\hat{\sigma}_{ij}$ pedig az $i.$ és $j.$ eszközök közötti kovarianciát jelenti. A képlet a korrigált tapasztalati szórást használja. Bár ezek a **becslések nem garantálnak pontos előrejelzést**, megfelelő alapot nyújtanak az optimális portfólió kialakításához.

<!-- <video width="600" controls>
  <source src="/Diversification.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> -->
## Diverzifikáció
Minél több különböző eszközbe fektetünk be, annál kisebb a portfólió kockázata.

<div style="display: flex; flex-direction: column; align-items: center;">
   <img src="/MPT/Diversification.gif" alt="Diversification" style="max-width: 100%; height: auto;" />    
    <figcaption class="svg-caption">1. Ábra: Eszközöket véletlen szimulálunk, a portfólió pedig az eszközök számtani átlaga. Ahogyan az eszközök száma növekszik, úgy csökken a szórás, tehát egyre "simább" lesz a portfólió fejlődése.</figcaption>
</div>

Jelen esetben a portfólió hozama független, azonos eloszlású valószínűségi változók számtani átlaga. Így az $n$ eszközből álló portfólió hozamának szórásnégyzetét megkapjuk, mint:

$$
\begin{align*}
\text{Var}\left(\frac{1}{n}\sum_{i=1}^n X_i\right) 
&= \frac{1}{n^2}\text{Var}\left(\sum_{i=1}^n X_i\right) \\
&= \frac{1}{n^2}\cdot n \cdot \sigma^2 \\
&= \frac{\sigma^2}{n} \xrightarrow{n\rightarrow \infty} 0.
\end{align*}
$$

Más szóval a hozamok átlagolása négyzetesen csökkenti, míg a hozamok összeadása csak lineárisan növeli a szórásnégyzetet.

<div class="custom-text-box-elmeleti">
    <p>
      De mi van akkor, ha a hozamok nem függetlenek, hanem például korreláltan együttesen normálisak? Ekkor is felbonthatóak független normálisok összegére, például Cholesky felbontással. Például legyenek $Y_1, Y_2$ független standard normális változók és szeretnénk $X_1$ és $X_2$ együttesen standard normális változókat $\text{Corr}(X_1, X_2)=\rho$ korrelációval. Ekkor ez teljesül, ha $X_1:= Y_1$ és $X_2:= \rho \cdot Y_1 + \sqrt{1-\rho^2}\cdot Y_2$. Lényeg a lényeg: korrelált portfólió esetén is működik a fenti indoklás, azaz a diverzifikáció csökkenti a kockázatot.
    </p>
</div>

<div class="custom-text-box">
    <h2>Ipari szegmensek és korreláció</h2>
    <p>Cégek árfolyama közti korrelációt okozhatja az, hogy ugyanabban az iparágban tevékenykednek. Például az olajvállalatok részvényei szorosan követik az olaj világpiaci árának változásait. Ha portfóliónkban sok olajkockázat van jelen, nehéz azt más olajcégek részvényeivel diverzifikálni. Ilyen helyzetben előnyös lehet a más szektorokba történő befektetés, hiszen ezek gyakran kevésbé korreláltak. Azonban az ipari termékeket gyártó cégek, a szállítmányozási vállalatok és az autógyártók is jelentős mértékben függenek az energiaáraktól. Érdemes olyan vállalatokat keresni, amelyek bevételeit és költségeit minimálisan befolyásolják csak az olaj áringadozásai. Ilyenek lehetnek a gyógyszeripari cégek, félvezetőgyártók vagy a szoftvercégek. 
    </p>
</div>


### Kockázatminimalizálás

A portfóliók kialakítása során a befektetők egyik fő célja a kockázat minimalizálása, miközben elérik a kívánt hozamot. 

A feladat az, hogy egy adott célzott hozam ($\mu^*$) mellett minimalizáljuk a portfólió kockázatát, amit a következő optimalizálási probléma segítségével fejezhetünk ki:

<p style="text-align: center; margin-bottom: 0px;">Minimalizálandó:</p>

$$
\frac{1}{2} \underline{w}^T \Sigma \underline{w}
$$

<p style="text-align: center; margin-bottom: 0px;">Feltéve, hogy:</p>

$$
\underline{w}^T \underline{\mu} = \mu^*
$$
$$
\sum_{i=1}^n w_i=1
$$

<div class="custom-text-box">
    <h2>Mit jelent ez?</h2>
    <p>
A fenti minimalizációs probléma célja, hogy egy portfólió kockázatát – azaz a hozamok szórását – a lehető legkisebbre csökkentsük, miközben biztosítjuk, hogy a portfólió hozama megegyezzen egy előre meghatározott célértékkel. A portfólió súlyvektora azt határozza meg, hogy a befektető milyen arányban osztja el a tőkéjét a különböző eszközök között. A kovarianciamátrix leírja, hogy az egyes eszközök hozamai hogyan mozognak együtt, azaz milyen kapcsolatban állnak egymással a kockázat szempontjából. Az első feltétel biztosítja, hogy a portfólió eléri a kívánt hozamot, míg a második feltétel garantálja, hogy a portfólió összsúlya 1 legyen, vagyis az összes rendelkezésre álló tőkét befektetjük.
    </p>
</div>

A fenti minimalizációs probléma megadja a **határportfóliók** halmazát.

Minden portfóliót ábrázolhatunk hozamának várható értéke és szórása szerint egy kétdimenziós síkban. Itt a határportfóliók halmaza egy hiperbolát rajzol ki.

<!-- <img src="/MPT/Diversification.gif" alt="My GIF"  /> -->

<div style="display: flex; flex-direction: column; align-items: center;">
    <img src="/MPT/Markowitz.gif" alt="Markowitz" style="max-width: 100%; height: auto;" />    
    <figcaption class="svg-caption">2. Ábra: Portfóliók véletlen szimulációja felfedi a piac határportfólióit. Az elkészítéséhez az Apple, Google, Microsoft és az Amazon 2023 és 2024 közötti részvényárfolyamát használtuk. Ezekből az adatokból becsüljük a kovarianciamátrixot és a várható hozamot.</figcaption>
</div>

Fontos, hogy egy portfólió ábrán felvett helyzete nem mond el semmit a súlyairól, azaz arról, hogy milyen arányban szerepelnek benne az eszközök, csak azt, hogy mennyi a várható hozama és szórása.

Vizsgáljuk meg, hogy hol helyezkednek el a portfóliók terében az egyedi részvények. Az alábbi ábrán látható négy cég mind a hatékony portfóliók belső határán tartózkodnak. A legnagyobb Sharpe-rátájú portfóliót nem lehet elérni csak egy eszköz tartásával ebben az esetben. 

<div class="svg-container">
  <img src="/MPT/MPT4.svg" alt="Részvények a szimulációk között" class="dynamic-svg" />
  <figcaption class="svg-caption">4. Ábra: MSFT, APPL, GOOGL és AMZN a lehetséges portfóliók terében.</figcaption>
</div>

### Hozammaximalizálás

Mi van, ha megfordítjuk a feladatot, és adott szórás mellett maximalizáljuk a hozamot? 

A feladat az, hogy egy adott célzott szórás ($\sigma^*$) mellett maximalizáljuk a portfólió várható hozamát, amit a következő optimalizálási probléma segítségével fejezhetünk ki:

<p style="text-align: center; margin-bottom: 0px;">Maximalizálandó:</p>

$$
\underline{w}^T \underline{\mu}
$$

<p style="text-align: center; margin-bottom: 0px;">Feltéve, hogy:</p>

$$
\frac{1}{2} \underline{w}^T \Sigma \underline{w} = (\sigma^*)^2
$$
$$
\sum_{i=1}^n w_i=1
$$

Ugyanazt a halmazt kapjuk vissza? Majdnem. Megfigyelhetjük, hogy a fenti hiperbolán egy adott szóráshoz két különböző várható hozamú portfólió is határportfólió. Persze semmi értelme a kisebbet választani, ennek a hiperbolának a felső felét kapjuk vissza a hozammaximalizálási problémából, ezt hívjuk a **hatékony portfóliók** halmazának.

A hiperbola csúcsán van a **minimális variancia portfólió**. Az ennél nagyobb várható hozamú határportfóliók a hatékony portfóliók.

<div class="svg-container">
  <img src="/MPT/MPT3.svg" alt="Határportfóliók" class="dynamic-svg" />
  <!-- <figcaption class="svg-caption">4. Ábra: Stratégiaválasztás</figcaption> -->
</div>

 ## Portfóliók kockázatmentes eszközzel

Mostantól fogva $n$ helyett legyen $n+1$ darab eszközünk, amiből a $0.$ eszköz a kockázatmentes befektetés, aminek hozama $r_f$ konstans; $\text{Var}(r_f)=0$. A portfóliónkat mostantól eközött az $n+1$ eszköz között osztjuk el: $\sum_{i=0}^n w_i=1$.

<div class="custom-text-box">
    <h2>Hitelezés és tőkeáttét</h2>
    <p>
A kockázatmentes eszköz, gyakran államkötvények formájában, alapvető szerepet játszik a portfólióelméletben, mivel lehetővé teszi a befektetők számára, hogy a kockázatot és hozamot egyensúlyozzák. A <strong>kockázatmentes eszköz eladása</strong>, azaz a shortolás, a <strong>tőkeáttételhez hasonlítható</strong>, a befektetők a kockázatmentes kamatlábon keresztül hitelt vesznek fel, hogy kockázatosabb eszközökbe fektessenek, növelve a potenciális hozamokat és a kockázatot. Ezzel szemben a <strong>kockázatmentes eszköz vásárlása</strong> a hitelezéshez hasonlít, amikor a befektetők <strong>pénzt kölcsönöznek az államnak</strong>, csökkentve ezzel portfóliójuk volatilitását.
    </p>
</div>

Tudjuk, hogy a lehetséges előállítható portfóliók halmaza tisztán kockázatos eszközökből a hiperbolánk belseje. Hogyan változik ez a kockázatmentes eszköz bevonásával? Mostantól bármely tisztán kockázatos portfólióból és a kockázatmentes eszközből lineárisan kikombinálhatunk egy új portfóliót. Legyen $P$ egy kockázatos eszközökből álló portfólió $r_P$ hozammal, $\mu_P$ várható hozammal és $\sigma_P$ szórással. Állítsunk össze egy olyan $Q$ portfóliót, amiben $P$-be $\alpha$, a kockázatmentes eszközbe $1-\alpha$ arányban tesszük a pénzünket. Ekkor ennek várható hozama és szórása:
$$
\mu_Q=\alpha\cdot\mu_P+(1-\alpha)\cdot r_f
\\
\sigma_Q=\alpha\cdot\sigma_P.
$$

Ez a $P$ portfólióhoz tartozó **tőkeallokációs egyenest**, azaz **Capital Allocation Line-t (CAL)** rajzolja ki, ahogy $\alpha$ végigfut a valós számokon. Ennek meredeksége nem más, mint $\frac{\mu_P-r_f}{\sigma_P}$, amit úgy hívunk, mint a $P$ portfólió **Sharpe-rátája**. 

<div class="svg-container">
  <img src="/MPT/MPT1.svg" alt="Határportfóliók" class="dynamic-svg" />
  <!-- <figcaption class="svg-caption">4. Ábra: Stratégiaválasztás</figcaption> -->
</div>
<br/><br/>

Így **a lehetséges előállítható portfóliók halmaza az összes tőkeallokációs egyenes úniója**. 

Vegyük észre, hogy egy portfólióhoz tartozó CAL átmegy a portfólión és az x tengelyt $r_f$-ben metszi. Ez a két eset rendre $\alpha=1$-hez és $\alpha=0$-hoz tartozik, azaz, ha csak a portfólióba, vagy csak a kockázatos eszközbe fektetünk. Vegyük továbbá észre, hogy a CAL túlhalad a portfólión, hiszen a kockázatmentes eszközt is tudjuk rövidre eladni, azaz hitelt felvenni.

Mit mond meg a Sharpe ráta? A $\mu_P-r_f$ értéket hívjuk **kockázati prémiumnak**, azaz, hogy a kockázatmentes kamatlábnál mennyivel tudunk magasabb várható hozamot elérni a kockázatos portfólióval. Mivel a befektetők kockázatkerülők, ezért nyilván csak nagyobbat fogadnak el, tehát a kockázati prémium pozitív. Így a Sharpe-ráta ($\frac{\mu_P-r_f}{\sigma_P}$) **megadja az egységnyi szórásra jutó kockázati prémiumot**. Ez a portfólió teljesítményének egy értelmes mérőszáma, hiszen megmondja, mennyi plusz hozamot kapunk adott kockázat vállalásáért.

Hogyan maximalizáljuk a Sharpe-rátát a kockázatos portfóliók között? Ezt az a portfólió maximalizálja, amelyhez tartozó CAL a legmeredekebb mind közül. Ez nyilván az, amelyik a hiperbolát felülről érinti. Ezt a CAL-t hívjuk **tőkepiaci egyenesnek**, azaz **Capital Market Line-nak (CML)**. A hozzá tartozó (optimális) portfólió pedig az **érintési portfólió**.


<div class="svg-container">
  <img src="/MPT/MPT2.svg" alt="fgdsg" class="dynamic-svg" />
  <!-- <figcaption class="svg-caption">4. Ábra: Stratégiaválasztás</figcaption> -->
</div>

Mik a hatékony portfóliók kockázatmentes eszközzel? Ezek azok, amikre nincsen azonos szórású, nagyobb várható hozamú (azaz az ábrán nincsen felette) portfólió. Ebből könnyen leolvasható, hogy **a hatékony portfóliók halmaza maga a tőkepiaci egyenes (CML)**.

Legyen T az érintési portfólió, legyen $r_T$ annak hozama, $\mu_T$ várható hozama, $\sigma_T$ pedig szórása. Legyen továbbá 
$$
\beta_P:=\frac{\text{Cov}(r_P,r_T)}{\sigma^2_M}
$$

valamely tetszőleges P portfólió **bétája**. Ekkor igaz az alábbi összefüggés:
$$
\mu_P=\beta_P\cdot(\mu_T-r_f)+r_f,
$$
azaz egy portfólió várható hozama megegyezik azzal, ha a kockázatmentes hozamhoz hozzáadjuk a kockázati prémiumot, felszorozva a portfólió bétájával. Ez az **értékpapírpiaci egyenes**, azaz a **Security Market Line (SML)** egyenlete.


## Capital Asset Pricing Model (CAPM)

Az alábbiakban a Tőkepiaci Árfolyamok Modelljét (CAPM) tárgyaljuk.

Képzeljünk el az eddig kiépített keretrendszerben (kockázatmentes eszközzel) kereskedő $N$ befektetőt. A piac egyensúlyban van, ha minden befektető olyan portfóliót alakított ki, amely számára optimális, továbbá az egyes értékpapírok iránti összkereslet megegyezik azok kínálatával. Bizonyítható, hogy az egyensúly létezik.

Vegyünk egy olyan portfóliót, amiben a piacon szereplő összes értékpapír szerepel, mégpedig mindegyik olyan arányban, amennyi az adott értékpapírból összesen a piacon szerepel. Ez részvények esetében a cégek piaci kapitalizációjának arányát jelenti. Nevezzük ezt **piaci portfólió-nak**, és legyen ennek hozama $r_M$, várható hozama $\mu_M$, szórása pedig $\sigma_M$.

<div class="custom-text-box">
    <h2>Proxy</h2>
    <p>A valóságban nehezen lenne megvalósítható a világ összes cégébe befektetni, ezért a gyakorlatban a piaci portfóliót csak egy közelítő portfólióval (proxy) helyettesítjük. Erre általában olyan indexportfóliók alkalmasak, amelyekben szerepelnek a piac legnagyobb piaci kapitalizációjú cégei annak arányában. Leggyakrabban a Standard & Poor's 500 (S&P500) indexet használják.</p>
</div>

**A CAPM fő állítása: egyensúlyban a piaci portfólió hatékony.** Mivel a piaci portfólió tisztán kockázatos eszközökből áll, ebből következik, hogy **egyensúlyban a piaci portfólió az érintési portfólió**.


Így viszont tudjuk, hogy a piaci portfólió és a kockázatmentes eszközből elkészíthető portfóliók halmaza maga a CML, tehát bármely hatékony portfólió előáll ebben a formában. Tehát **egyensúlyban minden befektetőnek csak a piaci portfólióba érdemes befektetni**, hasznossági függvényét pedig csak az reprezentálja, vagyonának mekkora részét fekteti be (akár tőkeáttéttel).

<!-- 
<div class="custom-text-box">
    <h2>Mit jelent ez?</h2>
    <p>Minden befektető alapvető célja a magas hozam elérése alacsony kockázat mellett. Ennek érdekében nem érdemes egyetlen eszközre támaszkodni; helyette célszerűbb többféle eszközt választani, hogy csökkentsük a kockázatot. A portfólióelmélet keretrendszere egy szisztematikus megközelítést kínál, amely nemcsak az eszközök kiválasztásában nyújt iránymutatást, hanem abban is, hogy milyen arányban érdemes ezeket a portfóliónkba helyezni. Ha feltételeink igazak, akkor az átlagos befektetők is könnyedén megvalósíthatják az optimális portfóliót, ha a piaci portfólióba fektetnek. Napjainkban könnyen hozzáférhetők azok az ETF-ek, amelyek ezt a stratégiát követik, például az S&P 500 vagy a DJIA indexet követő alapok.
    </p>
</div> -->

A CAPM leghíresebb egyenletét kapjuk vissza, ha az SML egyenletébe behelyettesítjük a piaci portfóliót:

$$
\boxed{\mu_P=\beta_P\cdot(\mu_M-r_f)+r_f},
$$

ahol $\beta_P=\frac{\text{Cov}(r_P,r_M)}{\sigma^2_T}$.

<div class="custom-text-box">
    <h2>Béta</h2>
    <p>Egy portfólió bétája azt fejezi ki, mennyire mozog együtt a piaci portfólióval, tágabb értelemben a piaccal. Az egyenletből kiolvasható, hogy a piaci portfólió bétája 1.</p>
</div>