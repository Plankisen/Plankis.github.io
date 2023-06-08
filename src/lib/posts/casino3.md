---
title: Tjena
date: "2023-06-07"
---

# CASINO LAST UPDATE

Nu är jag i princip klar med projektet. Jag har finslipat en massa saker som fått spelen att faktiskt fungera och inte enkelt bli förstörda. Detta är en lista av några förbättringar jag har gjort som inte fanns tidigare.

* Nu kan man inte klicka på deal medans ett blackjack game är pågående och man kan inte klicka på hit eller stand medans ett game inte är pågående. Detta finns även på crash fast för crash knapparna.
* Blackjack och crash har nu "proceed" knappar efter varje game så att man kan spela igen utan att ladda om sidan.
* Knapparna är nu mer stylish med click effects, hover effects och riktig bakgrund. Även stylingen generellt är bättre.
* Nu kan man faktiskt vinna pengar från crash och slots vilket man inte kunde göra förut.
* En knapp på home page som man kan klicka på för att få +$1 så att man faktiskt har något att gambla med.

Jag tog dock bort roulette eftersom att jag inte hade tillräckligt mycket tid.

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
---
Detta är lite kod och förklaringar som beskriver hur mitt crash spel fungerar
```js
const symbols = [
    { id: 0, symbol: "Coal.webp", payout: 90, weight: 10 },
    { id: 1, symbol: "Copper.png", payout: 180, weight: 8 },
    { id: 2, symbol: "Iron.webp", payout: 400, weight: 6 },
    { id: 3, symbol: "Silver.png", payout: 800, weight: 4 },
    { id: 4, symbol: "Gold.webp", payout: 1600, weight: 3 },
    { id: 5, symbol: "Mithril.png", payout: 3200, weight: 2 },
    { id: 6, symbol: "Adamantite.png", payout: 6400, weight: 1 },
    { id: 7, symbol: "Runite.png", payout: 12800, weight: 0.5 }
  ]
  const initialSlots = [0, 1, 2]
  let slots = initialSlots.map(() => weightedRandom())
```
^^ Här deklareras värden som till exempel hur mycket man ska vinna om man får 3 i rad av en viss ore och hur stor sannolikhet det är att en viss ore rullas deklareras med weight.

```js
async function spin() {
    if (spinning) return
    if (money < 10) {
      alert("You're out of money!")
      return
    }
    spinning = true
  
    const shuffleDuration = 1000
    const startTime = Date.now()
    while (Date.now() - startTime < shuffleDuration) {
      slots = initialSlots.map(() => weightedRandom())
      await delay(100)
    }

    slots = initialSlots.map(() => weightedRandom())
    checkWin()
    spinning = false
    }
  
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
```
^^ Här är funktionaliteten för när man snurrar slots maskinen. Först så blir man förhindrad från att snurra den om den redan snurrar eller om man inte har tillräckligt mycket pengar. Sedan byts symbolerna varje 100 ms i 1000 ms så att det ser ut som att symbolerna typ snurrar. Sedan blir resultatet random beroende på hur mycket weight de olika symbolerna har och det kollas om man vann med hjälp av de 2 funktionerna nedan.

```js
function weightedRandom() {
      const totalWeight = symbols.reduce((sum, symbol) => sum + symbol.weight, 0)
      let random = Math.random() * totalWeight
      
      for (const symbol of symbols) {
        random -= symbol.weight
        if (random <= 0) {
          return symbol.id
        }
      }
    }
  
function checkWin() {
  const [symbol1, symbol2, symbol3] = slots
  
  if (symbol1 === symbol2 && symbol2 === symbol3) {
    const payout = symbols[symbol1].payout
    money += payout
    money -= 10
    saveCurrencyCount()
  } else {
    money -= 10
    saveCurrencyCount()
  }
}
```
weightedRandom är funktionen som bestämmer sannolikheten för en symbol att visa sig beroende på sin weight och checkWin kollar om man vunnit genom att helt enkelt kolla om den första, andra och tredje symbolen är lika.

---
Jag hade lite trubbel med att balansera oddsen på crash och slots. På crash bestämde jag mig för att sätta en chans på 1/175 att den kraschar varje gång multiplikatorn går upp med 0.01. Slots fixade jag rätt bra genom att göra så att varje klick på spin snurrade 50000 gånger och ändrade weight och payout värdena så att man över tid vann nästan lika mycket som man förlorade. Såklart så förlorar man lite mer än man vinner eftersom att det är ett casino.

---
Sammanfattningsvis så har jag helt enkelt finslipat projektet. Jag hade funktionalitet för spelen sedan förra bloggen men inte någon okej styling, fungerande vinster, local saving eller något som förhindrar folk från att förstöra spelen genom att till exempel klicka på hit knappen innan deal knappen. Allt detta har jag fixat även om jag hade kunnat gjort bättre styling så finns det grundläggande så att det ser okej ut. Så här ser mina sidor ut efter att jag fixat allt detta.
<img src="/home2.png">
^^ Här ser man den nya +1$ knappen.
<img src="/crash2.png">
^^ Här ser man den nya stylingen och när man startar ett game så försvinner start game knappen tills man avslutat rundan.
<img src="/slots2.png">
^^ Här kan man också se den nya stylingen.
<img src="/blackjack2.png">
^^ Här kan man inte se så mycket skillnad eftersom att all ändring ligger i funktionaliteten som jag pratade om tidigare.