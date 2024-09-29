---
title: "Az Árulók stratégiai elemzése"
date: "2024-09-29"
description: "Az Árulók – Gyilkosság a kastélyban egy új, izgalmas magyar reality műsor, amely egyben példa a játékelmélet gyakorlati alkalmazására. A versenyzők között rejtett árulók jelenléte és a taktikai döntések folyamatosan próbára teszik a stratégiai gondolkodást, a bizalomépítést és a manipuláció művészetét."
released: "No"
author: "Egri Máté és Takáts Bálint"
image: "/arulok/arulok_cover.jpg"
---

## Bevezetés
Az Árulók – Gyilkosság a kastélyban egy új, izgalmas magyar reality műsor, amely egyben példa a játékelmélet gyakorlati alkalmazására. A versenyzők között rejtett árulók jelenléte és a taktikai döntések folyamatosan próbára teszik a stratégiai gondolkodást, a bizalomépítést és a manipuláció művészetét. A műsor 2023 novemberben megjelent nagysikerű első évadot követően idén már a második évaddal tért vissza, ezúttal újabb 22 közszereplővel, viszont változatlan műsorvezetővel, Árpa Attila szeméyében.


## Szabályok

A játékban $n$ Ártatlan és $k$ Áruló játszik. Utóbbiak tudják egymásról, hogy Árulók, de az Ártatlanok nem. Az első évadban $n=19$ és $k=3$, míg a másodikban $n=18$ és $k=4$. 

### Éjszaka

Minden éjszaka az Árulók összegyűlnek és együtt dönthetnek a következő lépésről. Mindig pontosan egyet választanak Gyilkosság és Hívás közül:
- Gyilkosság: közösen eldöntik, mely Ártatlant ölik meg, aki ezután kiesik a játékból.
- Hívás: ez csak akkor lehetséges, ha az Árulók száma kisebb, mint amennyien kezdtek. Egy ártatlant (anonim módon) felkérhetnek, hogy mostantól Áruló legyen, aki ezt visszautasíthatja következmények nélkül.
Továbbá:
- Zsarolás: ez mindig megtörténik, ha pontosan egy Áruló van (nem passzolhat), a Gyilkosságtól/Hívástól függetlenül. Egy Ártatlant felkér, hogy mostantól Áruló legyen, aki meghal, ha ezt visszautasítja, és ekkor az Áruló valaki mást választ, akit zsarol, egészen addig, amíg valaki el nem fogadja.

### Nappal

- Feladatok: A játékosok minden nap közösen dolgozva próbatételekkel nyerhetnek pénzt a közös nyereményalapba. 
- Szavazás: Este az összes játékos leül egy asztalhoz, majd (megbeszélés után) mindenki leír egy-egy nevet a táblájára. A legtöbb szavazatot kapott játékost elárulja szerepét és száműzik, tehát szintén kiesik a játékból (döntetlen esetén újra szavaznak).

### Játék vége

Amikor már csak öt játékos marad, már nem történik több gyilkosság, hanem a játékosok kétszer egymás után szavaznak, viszont a két kiszavazott játékos szerepét nem tudják meg. Ha a hátralévő három játékosból legalább egy úgy dönt, akkor még egyszer szavaznak és kiejtenek még egyet közülük. Ha végső kettő vagy három játékos között van Áruló, akkor a megmaradt Árulók osztják el maguk között a nyereményalapot (egyenlően), különben pedig a megmaradt Ártatlanok.

## Feltevések

Az optimális stratégia kialakításához a következő feltevésekkel élünk:
1. A szabályok a fentiek. Ez azért számít feltevésnek, mert a műsor nem teljesen transzparensen kommunikálja a játékszabályokat sem a játékosok, sem a nézők felé.
1. A játékosok kizárólag a saját pénznyereményük várható értékét maximalizálják, tehát indifferensek azzal szemben, hogy milyen lépéseket hoznak és hogy a többi játékosnak mennyi a nyereménye.
2. A játékosok racionálisak és az optimális stratégiát követik, hogy maximalizálják várható nyereményüket.
3. A játékosok kockázatkerülőek, tehát két azonos várható nyereményű stratégia közül a kisebb kockázatút választják.

## Stratégia

A gyilkosságok nem hagynak nyomot, tehát az egyetlen materiális információ, amin a nyomozás elindulhat, hogy ki hogyan szavazott. Hogyan szavazzanak az Ártatlanok és hogyan az Árulók? Érdemes-e az Árulóknak befolyásolni a szavazást, hogy egy Ártatlan kiejtését segítsék elő, vagy érdemes inkább beépülniük, hogy ne fedezzék fel őket? Ha valaki egy Árulóra szavaz, biztos-e, hogy Ártatlan, vagy lehet, hogy blöffölt? Mint sok játékelméleti kérdésre, ezekre is a **kevert stratégia** adja a megoldást.

### Kő-Papír-Olló

Mi az optimális stratégia a Kő-Papír-Olló játékban? Természetesen az egyenletes kevert stratégia. Ha $\frac{1}{3}$-$\frac{1}{3}$-$\frac{1}{3}$ eséllyel mutatok követ-papírt-ollót, akkor $\frac{1}{3}$-$\frac{1}{3}$-$\frac{1}{3}$ eséllyel nyerek-vesztek-játszom döntetlent, **függetlenül az ellenfelem stratégiájától**. A kérdés, tudok-e ezeknél az egyenlő esélyeknél jobbat elérni valamilyen stratégiával? Nem, ugyanis az ellenfelem alkalmazhatja az $\frac{1}{3}$-$\frac{1}{3}$-$\frac{1}{3}$ stratégiát, amivel **az én stratégiámtól függetlenül** eléri, hogy egyenlőek legyenek az esélyeink.

<div class="custom-text-box-elmeleti">
    <h2>Nash-egyensúly</h2>
    <p>
        Tegyük fel, hogy minden játékos valamilyen stratégiát alkalmaz egy játékban. Ha egyikük sem tud jobb eredményt elérni azzal, ha változtatna a stratégiáján, akkor ezt az állapotot <b>Nash-egyensúlynak</b> hívjuk.
    </p>
</div>

Ugyanez a mechanizmus érvényes az Árulók játékban is. Az Árulók elérhetik **az Ártatlanok stratégiájától függetlenül**, hogy ne fedezzék fel őket úgy, hogy csak véletlenszerűen szavaznak. Tudnak-e ennél jobb esélyeket adni maguknak, ha megpróbálnak egy Ártatlant kiejteni valamilyen furfangosabb stratégiával? Nem, hiszen az Ártatlanok is használhatnak teljesen véletlenszerű stratégiát, például felírnak minden minden nevet egy cetlire és egyet kihúznak. Ezzel az Ártatlan **az Árulók stratégiájától függetlenül** garantálják maguknak a véletlenszerű szavazást.


## Analízis
