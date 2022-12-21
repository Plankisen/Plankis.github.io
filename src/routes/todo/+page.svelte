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
    <input type="text" placeholder="what to do?" bind:value={input}>
    <button on:click = {pushInput}>+</button>

<ul>
    {#each todo as name, i}
        <li> {name} 
        <button on:click = {deleteThing(name)}>-</button>
        </li>
    {/each}
</ul>
</div>

<style>
    h1{
        text-align: center;
        font-size: 250%;
    }
    div{
        margin: auto;
        width: 14%;
        padding: 0px;
    }
</style>