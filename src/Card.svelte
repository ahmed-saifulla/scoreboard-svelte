<script>
</script>

<div class="card">
  <p>Card</p>
  <p>100.5</p>
  <input type="number" />
  <button>Edit</button>
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
</style>
