<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<main>
    <article class="post">
        <svelte:component this={data.markdown}/>
    </article>
    <a href="/blog" class="btn">Return</a>
    <div></div>
</main>

<style>
    .post {
        margin: 5vh 0;
        background-color: #313335;
        width: 65%;
        min-height: 75vh;
        max-height: fit-content;
        border-radius: 25px;
        color: white;
        display: flex;
        flex-direction: column;
        padding: 25px;
        box-sizing: border-box;

        box-shadow: 6px 6px #1D1F21;

        z-index: 2;
    }
    
    main {
        font-family: ubuntu;

        width: 100vw;
        min-height: 100vh;
        max-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: rgb(29, 29, 29);
        z-index: 0;
    }

    .btn {
        text-decoration: none;
        background-color: #F7773B;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 80px;
        height: 40px;
        color: black;
        margin-bottom: 25px;
        border-radius: 10px;

        z-index: 2;
    }

    .btn:hover {
        background-color: #ED5A39;
    }

    :global(body){
        overflow-y: scroll;
    }

    div{
        background-color: black;
    }

    :global(p, li, h1){
        color: white;
    }

</style>