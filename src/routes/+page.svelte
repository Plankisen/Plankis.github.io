<script>
import "@picocss/pico"
  let clicks = 0;
  let clickMultiplier = 1;
  function click() {
      clicks += clickMultiplier;
  }
  let upgradeCost = 50;
  function upgrade(){
      if(clicks >= upgradeCost){
          clickMultiplier *= 2;
          clicks -= upgradeCost;
          upgradeCost *= 3;
      }
  }
</script>


<h1>Welcome to PEEPO CLICKER</h1>
<p>Peepos: {clicks}</p>
<div class = "buttons">
  <div>
  <input class = "peepoButton" type = "image" alt = "Peepo" src = "peepo.jpg" on:click = {click}>
  </div>
  <div class = "button">
  <button on:click = {upgrade}>
  2x Peepos: Cost {upgradeCost}
  </button>
  </div>
</div>



<style>
  h1{
      text-align: center;
  }
  p{
      text-align: center;
      font-size: 150%;
  }
  .peepoButton{
      height: 100%;
      width: 20%;
  }
  .buttons{
      display: inline;
      align-items: center;
  }
  .buttons .button{
      margin-top: -100px;
      margin-bottom: -100px;
  }
  div {
      place-content: center center;
      margin: 0;
      padding: 0;
      height: 300px;
      width: 100%;
      display: flex;
      overflow: hidden;
      place-items: center center;
      
  }
</style>