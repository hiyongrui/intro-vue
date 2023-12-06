<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps(["name"]);
console.log(route.params);
console.log(props);
</script>

<template>
  <main>
    <h1>{{ name }}</h1>
  </main>
</template>

<style></style>
