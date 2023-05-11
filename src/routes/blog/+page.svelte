<main>
    <h1>Super blog</h1>
    <a class="btn" href="/blog/casino1">Casino update 1</a>
    <a class="btn-2" href="/blog/casino2">Casino update 2</a>
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
        top: 25%;

        width: 200px;
        height: 40px;
        color: black;
        background-color: #F7773B;
        text-decoration: none;
        border-radius: 5px;
        margin-right: 5px;

        user-select: none;
    }
    .btn:hover, .btn-2:hover {
        background-color: #ED5A39;
        color: black;
    }

    .btn-2 {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 40%;

        width: 200px;
        height: 40px;
        color: black;
        background-color: #F7773B;
        text-decoration: none;
        border-radius: 5px;
        margin-right: 5px;

        user-select: none;
    }
   
</style>