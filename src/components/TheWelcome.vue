<script setup>
  
</script>

<template>
  <form>
  <div class="mb-3" id="name">
    <label for="exampleInputUser" class="form-label">Username</label>
    <input type="User" class="form-control" id="exampleInputUser" aria-describedby="emailHelp">
  </div>
  <div class="mb-5" id="pass">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<style scoped lang="scss">
  form {
    background-color: white;
    width: 400px;
    height: 400px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #name, #pass {
      width: 300px;
    }

    button {
      width: 300px;
      background-color: #0AADD0;
    }
  }
</style>