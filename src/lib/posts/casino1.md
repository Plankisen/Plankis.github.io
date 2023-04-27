#  CASINO FIRST UPDATE

Så jag har basically använt ChatGPT för att göra simpla versioner av olika features sedan ändrat koden ChatGPT gav mig
tills den såg ut som jag ville ha den. Detta är en lista av features som jag nu har gjort.

* Simpelt home page
<img src="/home.png">
* Fungerande Navbar/Sidebar
<img src="/home_sidebar.png">
* Simpel crash funktionalitet
<img src="/crash.png">
* Simpel slots funktionalitet
<img src="/slots.png">
* Ett ganska bra gjort blackjack spel men behövs lite mer styling
<img src="/blackjack.png">

Inte mycket intressant hände under denna period, inga specifika problem som jag har löst, så detta är lite kod som visar hur min sidebar fungerar och hur den far ut och in beroende på om man håller sin mus längst vänstra sidan av hemsidan eller inte.

```js

  export let items = [
    { title: 'Home', icon: '🏠', link: '/home' },
    { title: 'Crash', icon: '💥', link: '/crash' },
    { title: 'Slots', icon: '🎰', link: '/slots' },
    { title: 'Blackjack', icon: '🃏', link: '/blackjack' },
    { title: 'Roulette', icon: '🎡', link: '/roulette' },
  ];

  let activeIndex = 0;

  function setActive(index) {
    activeIndex = index;
  }

  let showSidebar = false;

  function toggleSidebar() {
    showSidebar = !showSidebar;
  }

  function handleMouseEnter() {
    showSidebar = true;
  }

  function handleMouseLeave() {
    setTimeout(() => {
      showSidebar = false;
    }, 300);
  }

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
```