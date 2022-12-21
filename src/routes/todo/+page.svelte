<script>
    import "@picocss/pico"
    let input = "";
    let todo = [];
    function pushInput(){
        todo.push(input);
        todo = todo;
    }
    
    function deleteThing(obj){
        let index = todo.indexOf(obj)
        todo.splice(index, 1);
        todo = todo;
    }
    </script>
    
    <h1>Todo</h1>
    
    <div>
        <div class="input">
        <input type="text" placeholder="what to do?" bind:value={input}>
        <button on:click = {pushInput}>+</button>
        </div>
    <ul>
        <div class="output">
        {#each todo as name, i}
            <li> {name} 
            <button on:click = {deleteThing(name)}>-</button>
            </li>
        {/each}
        </div>
    </ul>
    </div>
    
    <style>
        h1{
            text-align: center;
            font-size: 250%;
        }
        .input{
            display: flex;
            flex-direction: row;
            margin: auto;
            width: 25%;
            padding: 0px;
        }
        .output{
            display: flex;
            flex-direction: column;
            margin: auto;
            width: 100%;
            padding: 0px;
        }
        .output li {
            display: flex;
            flex-direction: row;
            margin: auto;
        }
        button{
            width: 20%;
        }
    </style>