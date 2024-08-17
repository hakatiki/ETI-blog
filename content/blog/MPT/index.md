---
title: "Modern Portfólióelmélet"
date: "2024-08-11"
description: ""
released: "No"
---
<!-- !!!! -->
<!-- 
ffmpeg -i input.gif -vf "palettegen=max_colors=32:stats_mode=diff" -y palette.png
ffmpeg -i input.gif -i palette.png -lavfi "paletteuse=dither=bayer:bayer_scale=3" -b:v 300k output.gif 

-->




A modern portfólióelmélet (Modern Portfolio Theory, MPT) Harry Markowitz amerikai közgazdász nevéhez fűződik, aki 1952-ben publikálta az elmélet alapjait "Portfolio Selection" című tanulmányában, majd ez 1990-ben közgazdasági Nobel-díjat hozott számára. A portfólióelmélet célja, hogy segítséget nyújtson a befektetőknek abban, hogyan állítsanak össze optimális portfóliókat, amelyek minimalizálják a kockázatot adott hozam mellett, vagy maximalizálják a hozamot adott kockázati szint mellett. 

Markowitz úttörő felismerése volt, hogy a befektetések közötti korreláció figyelembevétele kulcsfontosságú a portfóliók összetételének optimalizálásában. Korábban a befektetők egyedi részvények kockázatára összpontosítottak, de Markowitz rámutatott, hogy a portfóliók teljes kockázata nem pusztán az egyedi befektetések kockázatainak összessége, hanem a befektetések közötti korrelációk is jelentős hatással vannak. Ez a diverzifikáció alapelve, amely szerint a különböző eszközökbe történő befektetés csökkenti a portfólió kockázatát.

<!-- Ez az elmélet a diverzifikáció fogalmának formális kiterjesztése a befektetések területén, mely szerint különböző típusú pénzügyi eszközök birtoklása kevésbé kockázatos, mint csak egyetlen típusú eszköz birtoklása. Az elmélet kulcsfontosságú meglátása az, hogy egy eszköz kockázatát és hozamát nem önmagában kell értékelni, hanem az alapján, hogy miként járul hozzá a portfólió teljes kockázatához és hozamához. A hozam szórását használják a kockázat mérésére, mivel ez kézzelfogható, amikor az eszközöket portfóliókba kombinálják. Gyakran a hozamok történelmi szórását és kovarianciáját használják ezen mennyiségek jövőbeli változatainak helyettesítőjeként, de más, kifinomultabb módszerek is rendelkezésre állnak. -->

## Feltételezések


 ## Portfóliók csak kockázatos eszközökből

<div class="custom-text-box">
    <h2>Mit jelent ez?</h2>
    <p>Minden befektető alapvető célja a magas hozam elérése alacsony kockázat mellett. Ennek érdekében nem érdemes egyetlen eszközre támaszkodni; helyette célszerűbb többféle eszközt választani, hogy csökkentsük a kockázatot. A keretrendszer egy szisztematikus megközelítést kínál, amely nemcsak az eszközök kiválasztásában nyújt iránymutatást, hanem abban is, hogy milyen arányban érdemes ezeket a portfóliónkba helyezni. Bár a mögöttes matematikai alapok bonyolultak, a lényeg egyszerű: az átlagos befektetők is könnyedén megvalósíthatják az optimális portfóliót, ha a piaci portfólióba fektetnek. Napjainkban könnyen hozzáférhetők azok az ETF-ek, amelyek ezt a stratégiát követik, például az S&P 500 vagy a DJIA indexet követő alapok.
    </p>
</div>


Mi az a portfólió? Adott mennyiségű tőkét osztunk szét különböző befektetési eszközök között. Az egyszerűség kedvéért legyen az összes tőkénk $1$, az eszközök száma $n$, ekkor a portfólió nem más, mint egy $n$ hosszú, egyösszegű vektor, ahol az $i.$ elem azt határozza meg, mennyi pénzt fektetünk az $i.$ eszközbe: $\underline{w}:\sum_{i=1}^n w_i=1$. Itt persze az egyes súlyok lehetnek negatívak is, hiszen feltételezzük, hogy az adott piacon lehet eszközöket rövidre eladni (shortolni).

Elegendő, ha csak egy adott időszakon nézzük a hozamokat. Jelölje az $i.$ eszköz hozamát $r_i$ ezen az időszakon.

Több kockázatos eszköz esetén azt, hogy mennyi várható hozamot hoznak, azt az eszközökből álló vektorváltozó várható értékeként kapjuk meg: $\underline{\mu}:=\text{E}(\underline{r})$. Ebből megkaphatjuk a portfólió várható hozamát: $$\text{E}(r_P)=\underline{w}^T\underline{\mu}$$. 

Több kockázatos eszköz esetén nem csak az egyedi szórások érdekelnek minket, hanem az eszközök közötti korreláció is, tehát az eszközökből álló vektorváltozó szórásmátrixát (kovarianciamátrixát) használjuk fel: $$\Sigma:=\text{V}(\underline{r}) = \text{E}((\underline{r}-\text{E}(\underline{r}))(\underline{r}-\text{E}(\underline{r}))^T) $$. Ez egy pozitív szemidefinit, szimmetrikus mátrix, főátlójában az egyes eszközök szórásnégyzeteivel.
A portfólió kockázatának mérésére a hozamok varianciáját használjuk: $$\sigma_P:=\text{Var}(r_P)=\text{E} \left[(r_P-\text{E} [r_P])^{2}\right]=\underline{w}^T\Sigma\underline{w}$$.
<!-- <div style="display: flex; justify-content: center;">
    <img src="/MPT/PortfolioWeights.gif" alt="My GIF" style="max-width: 100%; height: auto;" />
</div> -->

Az eszközök várható hozamának és kovarianciamátrixának becslése kulcsfontosságú lépés az optimális portfólió kialakításában. Ehhez gyakran a múltbeli (historikus) adatokat használjuk fel, mivel ezek alapján próbálunk következtetni a jövőbeli teljesítményre. Nézzük meg, hogyan történik mindez.

### Várható hozam és a kovarianciamátrix becslése
A várható hozamot ($\underline{\mu}$) az egyes eszközök múltbeli hozamai alapján is megbecsülhetjük. Tegyük fel, hogy rendelkezésünkre áll egy időszakra vonatkozó historikus adatsor, ahol az $i.$ eszköz hozama $r_i^t$ a $t.$ időpontban. Ekkor az $i.$ eszköz átlagos hozamát a következőképpen számíthatjuk ki:

$$
\hat{\mu}_i = \frac{1}{T} \sum_{t=1}^T r_i^t,
$$

ahol $T$ az időszakok száma. A kovarianciamátrix elemei a következőképpen számíthatók ki:

$$
\hat{\sigma}_{ij} = \frac{1}{T-1} \sum_{t=1}^T (r_i^t - \hat{\mu}_i)(r_j^t - \hat{\mu}_j),
$$

ahol $\hat{\mu}_i$ és $\hat{\mu}_j$ az $i.$ és $j.$ eszköz várható hozamai, $\hat{\sigma}_{ij}$ pedig az $i.$ és $j.$ eszközök közötti kovarianciát jelenti. A képlet a korrigált tapaszttalati szórást használ. Bár ezek a **becslések nem garantálnak pontos előrejelzést**, megfelelő alapot nyújtanak az optimális portfólió kialakításához.

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

De mi van akkor, ha a hozamok nem függetlenek, hanem például korreláltan együttesen normálisak? Ekkor is felbonthatóak független normálisok összegére, például Cholesky felbontással. Például legyenek $Y_1, Y_2$ független standard normális változók és szeretnénk $X_1$ és $X_2$ együttesen standard normális változókat $\text{Corr}(X_1, X_2)=\rho$ korrelációval. Ekkor ez teljesül, ha $X_1:= Y_1$ és $X_2:= \rho \cdot Y_1 + \sqrt{1-\rho^2}\cdot Y_2$.

Lényeg a lényeg: korrelált portfólió esetén is működik a fenti indoklás, azaz a diverzifikáció csökkenti a kockázatot.
<div class="custom-text-box">
    <h2>Ipari szegmensek és korreláció</h2>
    <p>Az ugyanazon iparágban működő cégek árfolyamai gyakran együtt mozognak. Például az olajvállalatok részvényei szorosan követik az olaj világpiaci árának változásait. Ha portfóliónkban olajkockázat van jelen, nehéz azt más olajcégek részvényeivel diverzifikálni, mivel ezek árfolyamai általában korrelálnak. Ilyen helyzetben szükségessé válik más szektorokba történő befektetés. Azonban az ipari termékeket gyártó cégek, a szállítmányozási vállalatok és az autógyártók is jelentős mértékben függnek az olajáraktól. Érdemes olyan vállalatokat keresni, amelyek bevételei minimálisan függenek az olaj áringadozásaitól, például gyógyszeripari cégeket, félvezetőgyártókat vagy szoftvercégeket. Bár ezek csak általános irányelvek, az optimális portfólió allokáció érdekében érdemes matematikai módszereket alkalmazni. 
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
    <figcaption class="svg-caption">2. Ábra: Random portfóliók szimulációja felfedi a piac hatékony portfólióit. Az elkészítéséhez az Apple, Google, Microsoft és az Amazon 2023 és 2024 közötti részvényárfolyamát használtuk. Ezekből az adatokból becsüljük a kovarianciamátrixot és a várható hozamot.</figcaption>
</div>

Fontos, hogy egy portfólió ábrán felvett helyzete nem mond el semmit a súlyairól, azaz arról, hogy milyen arányban szerepelnek benne az eszközök, csak azt, hogy mennyi a várható hozama és szórása.

### Hozammaximalizálás

Mi van, ha megfordítjuk a feladatot, és adott szórásnégyzet mellett maximalizáljuk a hozamot? 

A feladat az, hogy egy adott célzott szórásnégyzet ($\sigma^*$) mellett maximalizáljuk a portfólió várhazó hozamát, amit a következő optimalizálási probléma segítségével fejezhetünk ki:

<p style="text-align: center; margin-bottom: 0px;">Maximalizálandó:</p>

$$
\underline{w}^T \underline{\mu}
$$

<p style="text-align: center; margin-bottom: 0px;">Feltéve, hogy:</p>

$$
\frac{1}{2} \underline{w}^T \Sigma \underline{w} = \sigma^*
$$
$$
\sum_{i=1}^n w_i=1
$$

Ugyanazt a halmazt kapjuk vissza? Majdnem. Megfigyelhetjük, hogy a fenti hiperbolán egy adott szóráshoz két különböző várható hozamú portfólió is határportfólió. Persze semmi értelme a kisebbet választani, ennek a hiperbolának a felső felét kapjuk vissza a hozammaximalizálási problémából, ezt hívjuk a **hatékony portfóliók** halmazának.

A hiperbola csúcsán van a **minimális variancia portfólió**. Az ennél nagyobb várható hozamú határportfóliók a hatékony portfóliók.

 ## Portfóliók kockázatmentes eszközzel

Mostantól fogva $n$ helyett legyen $n+1$ darab eszközünk, amiből a $0.$ eszköz a kockázatmentes befektetés, aminek hozama $r_f$ konstans: $\text{Var}(r_f)=0$. A portfóliónkat mostantól eközött az $n+1$ eszköz között osztjuk el: $\sum_{i=0}^n w_i=1$.

Legyen $P$ egy kockázatos eszközökből álló portfólió $r_P$ hozammal, $\mu_P$ várható hozammal és $\sigma_P$ szórással. Állítsunk össze egy olyan $Q$ portfóliót, amiben $P$-be $\alpha$, a kockázatmentes eszközbe $1-\alpha$ arányban tesszük a pénzünket. Ekkor ennek várható hozama és szórása:
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

Vegyük észre, hogy egy portfólióhoz tartozó tőkeallokációs egyenes áthalad a portfólión és az x tengelyt $r_f$-ben metszi. Ez a két eset rendre $\alpha=1$-hez és $\alpha=0$-hoz tartozik, azaz, ha csak a portfólióba, vagy csak a kockázatos eszközbe fektetünk. Vegyük továbbá észre, hogy a CAL túlhalad mindkettőn, hiszen a portfóliót és a kockázatmentes eszközt is tudjuk rövidre eladni (shortolni).


**Capital Market Line (CML)**
**Security Market Line (SML)**
**érintési portfólió**
**piaci portfólió**
<div class="svg-container">
  <img src="/MPT/MPT2.svg" alt="fgdsg" class="dynamic-svg" />
  <!-- <figcaption class="svg-caption">4. Ábra: Stratégiaválasztás</figcaption> -->
</div>