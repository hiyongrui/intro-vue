<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params.id);
</script>

<template>
  <h1>Pokemon #{{ route.params.id }}</h1>
</template>
