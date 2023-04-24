<main>
    <h1>Super blog</h1>
    <a class="btn" href="/blog/casino1">Casino update 1</a>
</main>

<style>
    main {
        font-family: ubuntu;

        height: 100vh;
        width: 100vw;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        background-color: black;
        color: white;
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 30%;

        width: 200px;
        height: 40px;
        color: black;
        background-color: #F7773B;
        text-decoration: none;
        border-radius: 5px;
        margin-right: 5px;

        user-select: none;
    }
    .btn:hover {
        background-color: #ED5A39;
        color: black;
    }

   
</style>