# CASINO SECOND UPDATE

Sedan första inlägget har jag inte gjort så mycket annat än att fokusera på att fixa ett currency system till spelen.

<img src="/currency.png">

Det är ganska simpelt, man skriver hur mycket man vill betta och sedan spelar man och ser om man vinner.

Här är lite kod som visar lite hur det fungerar för blackjack.
```js
<script>
let money = 50
let betAmount = 0
</script>
<input class="bet-input" type="number" placeholder="Enter bet amount" bind:value={betAmount}>
 function deal() {
     if (money <= 0) {
      alert("You're out of money!");
      return;
    }

    if (isNaN(betAmount) || betAmount <= 0 || betAmount > money) {
      alert("Invalid bet amount!");
      return
    } else {
      money -= betAmount;
    }
    ...
 }
 function stand() {
    ...
    if (dealerScore > 21 || playerScore > dealerScore) {
        money += betAmount * 2;
        gameOver = true;
        } else {
        gameOver = true;
        }
    }
```