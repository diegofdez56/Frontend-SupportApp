<script setup>
</script>

<template>
  <form id="list-request" class="mt-5">
    <div class="mb-3" id="section">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3" id="section">
      <label for="exampleInputPassword1" class="form-label">Subject</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3" id="section">
      <label for="exampleFormControlTextarea1" class="form-label">Desciption</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="form-group mb-3" id="section">
      <label for="fecha">Date:</label>
      <input type="date" id="fecha" v-model="fecha" required />
    </div>
    <button type="submit" class="btn btn-info" id="section">Edit</button>
  </form>
</template>

<style scoped lang="scss">

  #list-request {
    width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #section {
      width: 250px;
    }
  }
</style>
