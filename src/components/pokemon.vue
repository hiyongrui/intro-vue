<script>
// https://pokeapi.co/api/v2/pokemon?limit=151
import { ref, computed, reactive } from "vue";

export default {
  async setup() {
    const regionName = ref("Kanto");
    console.log(regionName);

    const compositionAPI_Computed_RegionNameAllCaps = computed(() => regionName.value.toUpperCase());

    //reactive feels like option API data() function, if don't want to call it data() call it state(), example below, using this also mean don't have to .value unlike above
    const state = reactive({
      elementType: "lightning",
    });
    console.log(state);
    const compositionAPI_reactive_RegionNameAllCaps = computed(() => state.elementType.toUpperCase());

    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) => res.json());

    return {
      pokemon,
      regionName,
      compositionAPI_Computed_RegionNameAllCaps,
      compositionAPI_reactive_RegionNameAllCaps,
    };
  },
  methods: {
    changeRegionName() {
      this.regionName = "Hoenn";
    },
  },
  computed: {
    optionsAPI_Computed_RegionNameLowerCase() {
      return this.regionName.toLowerCase();
    },
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
  <h2>{{ regionName }}</h2>
  <h3>{{ compositionAPI_Computed_RegionNameAllCaps }}</h3>
  <h3>{{ compositionAPI_reactive_RegionName }}</h3>
  <h3>{{ optionsAPI_Computed_RegionNameLowerCase }}</h3>
  <button @click="changeRegionName">Change Region Name</button>
  <pre> {{ pokemon }}</pre>
</template>
