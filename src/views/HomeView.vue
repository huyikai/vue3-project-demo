<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue';
const test = ref(123);
console.log(test.value1);
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
