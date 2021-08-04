<script>
  import Card from "./Card.svelte";
  import NewPlayer from "./NewPlayer.svelte";

  let players = [
    {
      name: "Alice",
      score: 10,
    },
    {
      name: "Bob",
      score: 28,
    },
    {
      name: "Cathy",
      score: 9,
    },
  ];

  const addPlayer = (e) => {
    const newPlayer = e.detail;
    players = [...players, newPlayer];
  };

  const deletePlayer = (e) => {
    players = players.filter((playerItem) => playerItem.name !== e.detail);
  };
</script>

<main class="main">
  <NewPlayer on:addPlayer={addPlayer} />
  <div class="header">
    <h5>Player</h5>
    <h5>Score</h5>
  </div>
  {#if players.length === 0}
    <p class="noPlayers">No Players</p>
  {:else}
    {#each players as player}
      <Card {player} on:deletePlayer={deletePlayer} />
    {/each}
  {/if}
</main>

<style>
  .main {
    width: 100%;
    min-height: 100vh;
    border: 1px solid rgb(216, 216, 216);
  }
  @media only screen and (min-width: 768px) {
    .main {
      width: 50%;
    }
  }
  .header {
    display: flex;
    padding: 10px;
    margin: 8px;
    border-bottom: 2.5px solid grey;
  }
  .header > h5 {
    width: 40%;
    text-align: center;
  }
  .noPlayers {
    text-align: center;
  }
</style>
