<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let player;
  let isEdit = false;
  const toggleIsEdit = () => {
    isEdit = !isEdit;
  };

  const deletePlayer = () => dispatch("deletePlayer", player.name);
</script>

<div class="card">
  <p>{player.name}</p>
  <p>{player.score}</p>
  {#if isEdit}
    <input type="text" bind:value={player.score} />
    <button on:click={toggleIsEdit}>Save</button>
  {:else}
    <button on:click={toggleIsEdit}>Edit</button>
  {/if}
  <button on:click={deletePlayer} class="delete-btn">X</button>
</div>

<style>
  .card {
    display: flex;
    justify-content: space-between;
    margin: 6px 20px;
    border-bottom: 1px solid grey;
    background-color: rgb(251, 251, 251);
    transition-duration: 0.04s;
  }

  .card:hover {
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    font-weight: 500;
  }

  .card > p {
    width: 40%;
    text-align: center;
  }

  .delete-btn {
    padding: 6px;
    margin: 0 6px;
    background-color: red;
    color: #fff;
  }

  .card input {
    max-width: 50px;
  }
</style>
