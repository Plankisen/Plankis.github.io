<script>
  let money = 0
  let betAmount = 0
  let spinning = false

  export let items = [
    { title: 'Home', icon: '🏠', link: '/home' },
    { title: 'Crash', icon: '💥', link: '/crash' },
    { title: 'Slots', icon: '🎰', link: '/slots' },
    { title: 'Blackjack', icon: '🃏', link: '/blackjack' }
  ]

  let activeIndex = 0

  function setActive(index) {
    activeIndex = index
  }

  let showSidebar = false

  function toggleSidebar() {
    showSidebar = !showSidebar
  }

  function handleMouseEnter() {
    showSidebar = true
  }

  function handleMouseLeave() {
    setTimeout(() => {
      showSidebar = false
    }, 300)
  }

  let multiplier = 1
  let cashOutAmount = 0
  let crashPoint = 0
  let crashPoint2 = 0
  let gameEnded = false
  let gameActive = false
  let gameStarted = false
  let interval = 0
  
  const startGame = () => {
    if (money <= 0) {
      alert("You're out of money!")
      return
    }

    if (isNaN(betAmount) || betAmount <= 0 || betAmount > money) {
      alert("Invalid bet amount!")
      return
    } else {
      money -= betAmount
    }
    gameActive = true
    gameStarted = true
    crashPoint = Math.floor(Math.random() * 175)
    interval = setInterval(() => {
      crashPoint2 = Math.floor(Math.random() * 175)
      if (gameStarted) {
        multiplier += 0.01
      }
      checkCrash()
    }, 100)
  }
  
  const cashOut = () => {
    cashOutAmount = Math.floor(betAmount * multiplier)
    money += cashOutAmount
    gameEnded = true
    gameStarted = false
    clearInterval(interval)
  }
  
  const checkCrash = () => {
    if (crashPoint == crashPoint2) {
      cashOutAmount = 0
      gameEnded = true
      clearInterval(interval)
    }
  }

  const proceedCrash = () => {
    multiplier = 1
    cashOutAmount = 0
    gameEnded = false
    gameActive = false
    gameStarted = false
    betAmount = 0
  }

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
      } else {
        money -= 10
      }
    }
  
    let deck = [    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'  ]
    const suits = ['♠', '♡', '♢', '♣']
    const cardValues = {
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '10': 10,
      'J': 10,
      'Q': 10,
      'K': 10,
      'A': 11
    }
    
    let playerCards = []
    let dealerCards = []
    let playerScore = 0
    let dealerScore = 0
    let gameOver = false
    let gameStartedBL = false
  
    function deal() {
      if (gameStartedBL) return
      if (money <= 0) {
        alert("You're out of money!")
        return
      }
  
      if (isNaN(betAmount) || betAmount <= 0 || betAmount > money) {
        alert("Invalid bet amount!")
        return
      } else {
        money -= betAmount
      }
  
      playerCards = []
      dealerCards = []
      playerScore = 0
      dealerScore = 0
      gameOver = false
      gameStartedBL = true
  
      let shuffledDeck = shuffle([...deck])
  
      playerCards.push(getCard(shuffledDeck))
      dealerCards.push(getCard(shuffledDeck))
      playerCards.push(getCard(shuffledDeck))
      dealerCards.push(getCard(shuffledDeck))
  
      playerScore = calculateScore(playerCards)
      dealerScore = calculateScore(dealerCards)
    }
  
    function hit() {
      if (!gameStartedBL || gameOver) return
  
      playerCards.push(getCard([...deck]))
  
      playerScore = calculateScore(playerCards)
      playerCards = playerCards
      if (playerScore > 21) {
        gameOver = true
      }
    }
  
    function stand() {
      if (!gameStartedBL || gameOver) return
      
      while (dealerScore < 17) {
        dealerCards.push(getCard([...deck]))
        dealerScore = calculateScore(dealerCards)
        dealerCards = dealerCards
      }
      
      if (dealerScore > 21 || playerScore > dealerScore) {
        money += betAmount * 2
        gameOver = true
      } else {
        gameOver = true
      }
    }
  
    function getCard(deck) {
      let index = Math.floor(Math.random() * deck.length)
      return deck.splice(index, 1)[0]
    }
  
    function calculateScore(cards) {
      let score = 0
      let numAces = 0
      
      for (let card of cards) {
        let value = cardValues[card]
        score += value
        if (card === 'A') {
          numAces++
        }
      }
      
      while (score > 21 && numAces > 0) {
        score -= 10
        numAces--
      }
      
      return score
    }
  
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        const a1 = array[i]
        array[i] = array[j]
        array[j] = a1
      }
      return array
      }
    
    function proceedBlackjack() {
      gameOver = false
      gameStartedBL = false
      playerScore = 0
      dealerScore = 0
      playerCards = []
      dealerCards = []
      betAmount = 0
    }
  
  </script>
  
  <body>
    <div class="sidebar-wrapper" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
      {#if showSidebar}
        <div class="sidebar">
          {#each items as item, index}
            <div
              class="sidebar-item {index === activeIndex ? 'active' : ''}"
              on:click={() => setActive(index)}
            >
              <span class="sidebar-icon">{item.icon}</span>
              <span>{item.title}</span>
            </div>
          {/each}
        </div>
      {/if}
    </div>
    
    <div class="currency-counter">
      <h1 class="money-amount">${money}</h1>
    </div>
  
    {#if activeIndex === 0}
    <div class="home-text">
      <h1>Welcome to S.C.A.M casino!</h1>
      <h2 class="secondary-text">Here at S.C.A.M casino you can make your wildest dreams come true! All you need to do is gamble until you become a millionaire! You can start your journey by clicking the button below to gain +$1 to gamble with!</h2>
    </div>
    <button class="money-button" on:click={()=>{money += 1}}>+$1</button>
    <div class="linus-review">
      <img src="Linus.jpg" class="linus-img" alt="Review 1">
      <p>I love this website! I committed insurance fraud to keep gambling and nearly won! 5/5⭐</p>
    </div>
    {/if}
  
    {#if activeIndex === 1}
      <div class="crash-game">
        <h1>Crash Game</h1>
        {#if gameEnded}
          <p>Game ended! Your winnings: ${cashOutAmount}</p>
          <button class="proceed-crash" on:click={proceedCrash}>Proceed</button>
        {:else}
          <p>Multiplier: x{multiplier.toFixed(2)}</p>
          <input type="number" placeholder="Enter your bet" bind:value = {betAmount}>
          <button class="crash-buttons" on:click={cashOut}>Cash Out</button>
        {/if}
        {#if !gameActive}
          <button class="crash-buttons" on:click={startGame}>Start Game</button>
        {/if}
      </div>
    {/if}
  
    {#if activeIndex === 2}
      <div class="slots">
        {#each slots as symbolId}
        <img class="slot" src={symbols[symbolId].symbol} alt="Slot Symbol" />
        {/each}
        <button class="spin-button" on:click={spin}>Spin $10</button>
      </div>
    {/if}
  
    {#if activeIndex === 3}
      <div class="blackjack">
        {#if gameOver}
        {#if playerScore > 21}
        <p class="game-over">You busted! Dealer wins!</p>
        {:else if dealerScore > 21}
        <p class="game-over">Dealer busted! You win!</p>
        {:else if playerScore > dealerScore}
        <p class="game-over">You win!</p>
        {:else}
        <p class="game-over">Dealer wins!</p>
        {/if}
        <button class="proceed-blackjack" on:click={proceedBlackjack}>Proceed</button>
        {/if}
  
        {#if !gameOver}
        <button class="blackjack-button" on:click={deal}>Deal</button>
        <button class="blackjack-button" on:click={hit}>Hit</button>
        <button class="blackjack-button" on:click={stand}>Stand</button>
        <input class="bet-input" type="number" placeholder="Enter bet amount" bind:value={betAmount}>
        {/if}
  
        <div class="dealer">
          <h2>Dealer</h2>
          {#each dealerCards as card, i}
            {#if !gameOver}
              <div class="card">{i != 1 ? card : ""}</div>
            {:else}
              <div class="card">{card}</div>
            {/if}
          {/each}
          {#if gameOver}
          <p>Score: {dealerScore}</p>
          {/if}
        </div>
        <div class="player">
          <h2>Player</h2>
          {#each playerCards as card}
            <div class="card">{card}</div>
          {/each}
          <p>Score: {playerScore}</p>
        </div>
      </div>
    {/if}
  
  
  </body>
  
  <style>

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  
    body{
        display: flex;
        flex-direction: row;
    }
  
    .money-button {
      position: absolute;
      transform: translate(-50%, 0);
      left: 50%;
      top: 55%;
      background-color: #186fcc;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 30px;
      cursor: pointer;
      border-radius: 10px;
    }
  
    .money-button:active{
      transform: translate(-50%, 0) scale(0.9);
    }
  
    .money-button:hover {
      background-color: #2363a8;
    }
  
    .sidebar {
      display: flex;
      flex-direction: column;
      padding: 16px;
      border-radius: 8px;
      width: 200px;
      height: 100vh;
      justify-content: space-evenly;
      background-color: #111827;
    }
  
    .sidebar-item {
      display: flex;
      align-items: center;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .sidebar-item:hover {
      background-color: #192236;
    }
  
    .sidebar-item.active {
      background-color: #192236;
      font-weight: bold;
    }
  
    .sidebar-icon {
      margin-right: 8px;
      font-size: 1.5rem;
    }
  
    .sidebar-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 10px;
      height: 100%;
      z-index: 1;
      background-color: #111827;
      border-radius: 8px;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      overflow: hidden;
      transition: width 0.3s ease-in-out;
    }
  
    .sidebar-wrapper:hover {
      width: 200px;
    }
  
    span{
      color: lightcoral;
      font-family: sans-serif;
    }
  
    .home-text{
      display: flex;
      position: absolute;
      transform: translate(-50%, 0);
      left: 50%;
      top: 20%;
      font-size: 50px;
      font-family: JosefinSans;
      flex-direction: column;
      text-align: center;
    }
  
    .secondary-text{
      font-size: 25px;
    }
  
    .linus-review{
      position: absolute;
      top: 450px;
      left: 1100px;
      padding: 10px;
      width: 250px;
      font-family: JosefinSans;
    }
  
    .crash-game{
      position: absolute;
      display: flex;
      top: 25%;
      left: 50%;
      transform: translate(-50%, 0);
      text-align: center;
      margin-top: 50px;
      gap: 10px;
      flex-direction: column;
      transform: translate(-50%, 0) scale(1.4);
    }
  
    .crash-buttons {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 10px;
    }
  
    .crash-buttons:active{
      scale: 0.9;
    }
  
    .crash-buttons:hover {
      background-color: #0056b3;
    }
  
    .slots{
      display: flex;
      justify-content: center;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, 0);
    }
    
    .slot {
      width: 150px;
      height: 150px;
      padding: 10px;
      border-radius: 8px;
      margin: 0 5px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    }
  
    .spin-button {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      top: 130%;
      padding: 12px 24px;
      font-size: 18px;
      font-weight: bold;
      border-radius: 8px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .spin-button:hover {
      background-color: #45a049;
    }

    .spin-button:active {
      transform: translate(-50%, 0) scale(0.9);
    }
  
    .blackjack{
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
    }
  
    .card{
      border: 1px solid black;
      border-radius: 5px;
      height: 150px;
      width: 100px;
      margin: 5px;
      text-align: center;
      font-size: 36px;
      line-height: 150px;
    }
  
    .blackjack-button{
      margin: 5px;
      padding: 10px;
      font-size: 24px;
      border-radius: 5px;
      background-color: green;
      color: white;
      cursor: pointer;
    }
  
    .blackjack-button:hover{
      background-color: darkgreen;
    }

    .blackjack-button:active{
      scale: 0.9;
    }
  
    .game-over{
      font-size: 48px;
      margin: 10px;
    }
  
    .dealer{
      position: absolute;
      left: 150%;
    }
    
    .player{
      position: absolute;
      right: 150%;
    }
  
    .currency-counter{
      background-color: #111827;
      position: fixed;
      right: 0%;
      height: 7%;
      width: 12%;
      font-size: 200%;
      color: lightgreen;
      border-bottom-left-radius: 15px;
    }
    
    .money-amount{
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      font-family: JosefinSans;
      top: 6%;
    }
  
    .bet-input{
      position: absolute;
      top: 70px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    .proceed-blackjack{
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translate(-50%, 0);
    }

    .proceed-blackjack{
      margin: 5px;
      padding: 10px;
      font-size: 24px;
      border-radius: 5px;
      background-color: green;
      color: white;
      cursor: pointer;
    }
  
    .proceed-blackjack:hover{
      background-color: darkgreen;
    }

    .proceed-blackjack:active{
      transform: translate(-50%, 0) scale(0.9);
    }

    .proceed-crash{
      position: absolute;
      left: 50%;
      top: 130%;
      transform: translate(-50%, 0);
    }

    .proceed-crash {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 10px;
    }
  
    .proceed-crash:active{
      transform: translate(-50%, 0) scale(0.9);
    }
  
    .proceed-crash:hover {
      background-color: #0056b3;
    }

    @font-face{
          font-family: "JosefinSans";
          font-style: normal;
          src: url("/fonts/JosefinSans-VariableFont_wght.ttf");
      }
  </style>