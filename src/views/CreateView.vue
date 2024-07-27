<script setup>
import Createrequest from "../components/CreateRequest.vue"
</script>

<template>
  <main>
    <h2 class="pt-5">Make your support request</h2>
    <Createrequest />
  </main>
</template>

<style scoped lang="scss">

main {
  height: 100vh;
  background: radial-gradient(#116E8D, #093043);
  text-align: center;

  h2 {
    color: white;
  }
 }

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
