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
    <input
      placeholder="Name"
      type="text"
      name=""
      id=""
      bind:value={player.name}
    />
    <input
      placeholder="Score"
      type="number"
      name=""
      id=""
      bind:value={player.score}
    />
    <button type="submit" class="add-btn">Add</button>
  </form>
</div>

<style>
  .newPlayer {
    display: flex;
    justify-content: center;
  }
  .newPlayer > form {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
    text-align: center;
  }
  .add-btn {
    color: white;
    background-color: rgb(44, 43, 145);
  }
</style>
