<script>
  import Card from "./Card.svelte";

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
</script>

<main class="main">
  <div class="header">
    <h5>Player</h5>
    <h5>Score</h5>
  </div>
  {#each players as player}
    <Card {player} />
  {/each}
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
</style>
