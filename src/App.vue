<script>
import Pokemon from "./components/pokemon.vue";

export default {
  components: {
    Pokemon,
  },
};
</script>

<template>
  <h1>New app</h1>
  <Suspense>
    <Pokemon />
    <template v-slot:fallback>Loading pokemon data...</template>
  </Suspense>
</template>
