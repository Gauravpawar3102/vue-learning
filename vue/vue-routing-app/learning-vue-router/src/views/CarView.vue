<script setup>
import { useRoute } from 'vue-router';
import cars from '../data/cars.json';
import ContactView from './ContactView.vue';
const route = useRoute();

const car = cars.find((c) => c.id === parseInt(route.params.id));
</script>
<template>
  <div>
    <h1>Name: {{ car.name }}</h1>
    <h2>price: {{ car.price }}</h2>
    <h2>year: {{ car.year }}</h2>
  </div>
</template>
