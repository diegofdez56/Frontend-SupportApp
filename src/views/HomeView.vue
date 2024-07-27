<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <h1 class="mb-5">¡Welcome to SupportApp!</h1>
    <TheWelcome />
  </main>
</template>

<style scoped lang="scss">
 main {
  height: 100vh;
  background: radial-gradient(#116E8D, #093043);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
  }
 }
</style>