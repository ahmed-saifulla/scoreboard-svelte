<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let player = {
    name: "",
    score: "",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch("addPlayer", player);
    player = {
      name: "",
      score: "",
    };
  };
</script>

<div class="newPlayer">
  <form on:submit={onSubmit}>
    <h6>New Player</h6>
    <input type="text" name="" id="" bind:value={player.name} />
    <input type="number" name="" id="" bind:value={player.score} />
    <button type="submit">Add</button>
  </form>
</div>

<style>
  .newPlayer {
    display: flex;
    justify-content: flex-end;
  }
  .newPlayer > form {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
    text-align: center;
  }
</style>
