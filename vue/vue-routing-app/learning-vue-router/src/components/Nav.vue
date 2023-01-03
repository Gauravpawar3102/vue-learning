<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container">
    <RouterLink id="nav-item" active-class="active" to="/">Home</RouterLink>
    <RouterLink id="nav-item" active-class="active" to="/about"
      >About</RouterLink
    >
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
#nav-item {
  text-decoration: none;
}
.active {
  font-weight: bold;
  color: brown;
}
</style>
