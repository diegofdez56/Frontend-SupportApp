<script setup>
import Editrequest from "../components/EditRequest.vue"
</script>

<template>
  <main>
    <Editrequest />
  </main>
</template>

<style scoped lang="scss">

main {
  height: 100vh;
  background: radial-gradient(#116E8D, #093043);
 }

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>