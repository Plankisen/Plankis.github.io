---
title: Tjena
date: "2023-06-07"
---

# CASINO LAST UPDATE

Nu är jag i princip klar med projektet. Jag har finslipat en massa saker som fått spelen att faktiskt fungera och inte enkelt bli förstörda. Detta är en lista av några förbättringar jag har gjort som inte fanns tidigare.

* Nu kan man inte klicka på deal medans ett blackjack game är pågående och man kan inte klicka på hit eller stand medans ett game inte är pågående.
* Blackjack och crash har nu "proceed" knappar efter varje game så att man kan spela igen utan att ladda om sidan.
* Knapparna är nu mer stylish med click effects, hover effects och riktig bakgrund. Även stylingen generellt är bättre.
* Nu kan man faktiskt vinna pengar från crash och slots vilket man inte kunde göra förut.
* En knapp på "home page" som man kan klicka på för att få +$1 så att man faktiskt har något att gambla med.

Jag fixade även local saving på pengarna så att man slipper börja om varje gång man laddar om sidan.

```js
onMount(() => {
    const storedCount = window.localStorage.getItem('money');
    if (storedCount) {
      money = parseInt(storedCount, 10);
    }
  });

  function saveCurrencyCount() {
    window.localStorage.setItem('money', money.toString());
  }
```
Och efter varje gång som valuta värdet uppdateras så sparar man det med denna funktion.
```js
saveCurrencyCount()
```
