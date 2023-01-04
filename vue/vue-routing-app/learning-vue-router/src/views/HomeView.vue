<script setup>
import cars from '../data/cars.json';
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="container">
    <!-- <h1>Cars</h1> -->
    <div v-for="car in cars" class="card-container" :key="car.id">
      <RouterLink :to="`/cars/${car.id}`" class="name">{{
        car.name
      }}</RouterLink>
      <!-- <div class="price">{{ car.price }}</div> -->
      <!-- <div class="launch year">{{ car.year }}</div> -->
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
.card-container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: skyblue;
}
.name {
  text-decoration: none;
  color: black;
}
</style>
