<script>
  import Navbar from "./Navbar.svelte";
  import Main from "./Main.svelte";
</script>

<div class="container">
  <Navbar />
  <Main />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
