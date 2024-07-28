<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Navbar from '../components/WelcomeItem.vue'
</script>

<template>
  <main>
    <Navbar />
    <HelloWorld />
  </main>
</template>

<style scoped lang="scss">

main {
  height: 100%;
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
