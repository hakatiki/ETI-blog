---
title: "Az árulók"
date: "2024-09-24"
description: "Az Árulók – Gyilkosság a kastélyban nem csupán egy izgalmas magyar reality műsor, hanem egy élő laboratórium a játékelmélet gyakorlati alkalmazására. A versenyzők között rejtett árulók jelenléte és a taktikai döntések folyamatosan próbára teszik a stratégiai gondolkodást, a bizalomépítést és a manipuláció művészetét. A szavazások és gyilkosságok során a résztvevőknek folyamatosan mérlegelniük kell szövetségeik erősségét és a potenciális árulók azonosítását, ami lenyűgöző betekintést nyújt a kooperáció és versengés dinamikájába. Ez a műsor remek példa arra, hogyan ötvözhető a szórakoztatás a mélyebb stratégiai elemzésekkel."
released: "No"
author: "Egri Máté és Takáts Bálint"
image: "/Befalapok/bét.jpg"
---

## Bevezetés
Az Árulók – Gyilkosság a kastélyban nem csupán egy izgalmas magyar reality műsor, hanem egy élő laboratórium a játékelmélet gyakorlati alkalmazására. A versenyzők között rejtett árulók jelenléte és a taktikai döntések folyamatosan próbára teszik a stratégiai gondolkodást, a bizalomépítést és a manipuláció művészetét. A szavazások és gyilkosságok során a résztvevőknek folyamatosan mérlegelniük kell szövetségeik erősségét és a potenciális árulók azonosítását, ami lenyűgöző betekintést nyújt a kooperáció és versengés dinamikájába. Ez a műsor remek példa arra, hogyan ötvözhető a szórakoztatás a mélyebb stratégiai elemzésekkel.


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

A legfontosabb észrevétel az, hogy mivel csak akkor juthatunk pénznyereményhez, ha élünk a játék végén, ezért minden játékosnak egyetlen célja van: hogy túléljen. 
## Analízis
