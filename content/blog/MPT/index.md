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

<div class="custom-text-box">
    <h2>Mit jelent ez?</h2>
    <p>Minden befektető két dolgot szeretne: sok pénzt keresni alacsony kockázattal. Ennek elérésért megéri egy eszköz helyett több különbözőt megvenni. Továbbá a keretrendszer egy szisztematikus módszert ad az eszközök kiválasztására és arra is, hogy miből mennyit tegyünk a portfóliónkba. A pontos matematikai háttere komplex de a fő konklúziót elmondjuk előre: átlagos befektetők is könnyedén megvalósíthatják az optimális portfóliót csak a Piaci portfóliót kell megvenniük. Manapság már könnyen elérhető ETF-ek pont ezt a stratégiát valósítják meg. Például vehetjük az S&P 500-at vagy a DOW indexet.
    </p>
</div>


Mi az a portfólió? Adott mennyiségű tőkét osztunk szét különböző befektetési eszközök között. Az egyszerűség kedvéért legyen az összes tőkénk $1$ és az eszközök száma $n$, ekkor a portfólió nem más, mint egy $n$ hosszú, egyösszegű vektor, ahol az $i.$ elem azt határozza meg, mennyi pénzt fektetünk az $i.$ eszközbe: $\underline{w}:\sum_{i=1}^n w_i=1$. Itt persze az egyes súlyok lehetnek negatívak is, hiszen feltételezzük, hogy az adott piacon lehet eszközöket rövidre eladni (shortolni).

Több kockázatos eszköz esetén azt, hogy mennyi várható hozamot hoznak, azt az eszközökből álló vektorváltozó várható értékeként kapjuk meg: $\underline{\mu}:=\text{E}(\underline{r})$. Ebből megkaphatjuk a portfólió várható hozamát: $$\text{E}(r_P)=\underline{w}^T\underline{\mu}$$. 

Több kockázatos eszköz esetén nem csak az egyedi szórások érdekelnek minket, hanem az eszközök közötti korreláció is, tehát az eszközökből álló vektorváltozó szórásmátrixát (kovarianciamátrixát) használjuk fel: $$\Sigma:=\text{V}(\underline{r}) = \text{E}((\underline{r}-\text{E}(\underline{r}))(\underline{r}-\text{E}(\underline{r}))^T) $$. Ez egy pozitív szemidefinit mátrix, főátlójában az egyes eszközök szórásnégyzeteivel.
A portfólió kockázatának mérésére a hozamok varianciáját használunk: $$\sigma_P:=\text{Var}(r_P)=\text{E} \left[(r_P-\text{E} [r_P])^{2}\right]=\underline{w}^T\Sigma\underline{w}$$. Gyakorlatilag a kockázat a várható értéke a négyzetes eltérése az eszköz hozamának az átlagától.

<div>
  \usepackage{amsmath}
  \begin{equation}
  E = mc^2
  \end{equation}
</div>

<!-- <video width="600" controls>
  <source src="/Diversification.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> -->
## Diverzifikáció
Minél több különböző eszközbe fektetünk be, annál kisebb a portfólió volatilitása.
Ezt alább demonstráljuk: eszközöket egyenként hozzáadunk és szimulálunk, a portfólió pedig az eszközök számtani átlaga.

<div style="display: flex; justify-content: center;">
    <img src="/Diversification.gif" alt="My GIF" style="max-width: 100%; height: auto;" />
</div>

Jelen esetben a portfólió hozama független, azonos normális eloszlású valószínűségi változók számtani átlaga. Jelölje az $i.$ eszköz hozamát $X_i \sim N(\mu, \sigma^2)$. Így az $n$ eszközből álló portfólió hozamának szórásnégyzetét megkapjuk, mint:

$$
\text{Var}\left(\frac{1}{n}\sum_{i=1}^n X_i\right)=\frac{1}{n^2}\text{Var}\left(\sum_{i=1}^n X_i\right)=\frac{1}{n^2}\cdot n \cdot \sigma^2=\frac{\sigma^2}{n}\xrightarrow{n\rightarrow \infty}0.
$$

Más szóval a hozamok átlagolása négyzetesen csökkenti, míg a hozamok összeadása csak lineárisan növeli a szórásnégyzetet.

De mi van akkor, ha a hozamok nem függetlenek, hanem korreláltan együttesen normálisak? Ekkor is felbonthatóak független normálisok összegére, például Cholesky felbontással. Például legyenek $Y_1, Y_2$ független standard normális változók és szeretnénk $X_1$ és $X_2$ együttesen standard normális változókat $\text{Corr}(X_1, X_2)=\rho$ korrelációval. Ekkor ez teljesül, ha $X_1:= Y_1$ és $X_2:= \rho \cdot Y_1 + \sqrt{1-\rho^2}\cdot Y_2$.

Lényeg a lényeg: korrelált portfólió esetén is működik a fenti indoklás, azaz a diverzifikáció csökkenti a kockázatot.

<!-- <img src="/Diversification.gif" alt="My GIF"  /> -->

<div style="display: flex; justify-content: center;">
    <img src="/Markowitz.gif" alt="My GIF" style="max-width: 100%; height: auto;" />
</div>
