<script>
// https://pokeapi.co/api/v2/pokemon?limit=151
export default {
  async setup() {
    const regionName = "kanto";
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) => res.json());

    return {
      pokemon,
      regionName,
    };
  },
  // lifecycle hooks
  beforeCreate() {
    console.log("beforeCreate");
    console.log(this.pokemon);
  },
  created() {
    console.log("created");
    console.log(this.pokemon);
    // this.fetchPokemon();
    console.log(this.regionName);
  },
};
</script>

<template>
  <pre> {{ pokemon }}</pre>
</template>
