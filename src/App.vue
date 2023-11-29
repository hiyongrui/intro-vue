<script>
// https://pokeapi.co/api/v2/pokemon?limit=151
export default {
  data() {
    return {
      pokemon: [1, 2, 3],
    };
  },
  methods: {
    async fetchPokemon() {
      this.pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) => res.json());
    }
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
  }
}
</script>

<template>
  <h1>New app</h1>
  <pre> {{ pokemon }}</pre>
  <button @click="fetchPokemon">Fetch Pokemon</button>
</template>