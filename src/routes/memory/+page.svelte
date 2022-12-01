<script>
    let cards = [];
    for (let i = 0; i < 6; i++){
        for (let index = 0; index < 2; index++) {
        cards.push({
            id: index + i * 2, // TODO: unique ids per card card
            img: `https://picsum.photos/${index + i * 2+100}/200`, // TODO: unique images per card card
            flipped: false,  // TODO: think
            completed: false,
        });
    cards = cards.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
        }
    }

    let flipcount = 0;
    let lastcard = null;
    function flip(card) {   
        if (card.flipped) return   
        if (flipcount > 1) {

        alert("chill") 
        return
      }
      // flip card over if two cards are not already flipped    
      card.flipped = true
      flipcount += 1
      if (lastcard != null){
        if (lastcard.img == card.img){
            lastcard.completed = true
            card.completed = true
            lastcard = null
            flipcount = 0
        }
        else{
            lastcard = null
            setTimeout(() => {
            // flip over cards that have not been marked as "completed"
            cards.forEach((card) => {
              card.flipped = card.completed;
            });
            flipcount = 0;
            cards = cards;
          }, 2000);
        }
      }
      else{
        lastcard = card
      }
      cards = cards
  
      // TODO: and card is already not flipped

    }
  </script>
  
  <main>
    <div class="row">
      {#each cards as card, i}
        <div
          on:click={() => {
            flip(card);
          }}
          on:keypress={() => {
            flip(card);
          }}
          class:flipped={card.flipped}
          class="card"
        >
          <img class="front" src={card.img} alt="" />
          <img class="back" src="back.webp" alt="" />
        </div>
      {/each}
    </div>
  </main>
  
  <style>
    main {
      margin-top: 50px;
      display: flex;
      place-content: center;
      place-items: center;
    }
  
    .row {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(4, 100px);
    }
  
    .card {
      border: 1px solid black;
      cursor: pointer;
      transition: transform 1s;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
    }
  
    .card.flipped {
      transform: rotateY(180deg);
    }
  
    .card .back {
      transform: rotateY(0deg);
    }
  
    .card .front {
      transform: rotateY(180deg);
    }
  
    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      position: absolute;
    }
  </style>