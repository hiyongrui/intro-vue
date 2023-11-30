<script setup>
import BaseButton from "./BaseButton.vue";
import { ref, computed, reactive, defineProps, defineEmits } from "vue";

const regionName = ref("Kanto");
console.log(regionName);

const computed_RegionNameAllCaps = computed(() => regionName.value.toUpperCase());

//reactive feels like option API data() function, if don't want to call it data() call it state(), example below, using this also mean don't have to .value unlike above
const state = reactive({
  elementType: "lightning",
});
console.log(state);
const reactive_RegionNameAllCaps = computed(() => state.elementType.toUpperCase() + props.region);

const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) => res.json());

const changeRegionName = () => {
  regionName.value = "Hoenn";
  emits('change-region');
};

const props = defineProps({
  region: {
    type: String,
    default: "Kanto",
  },
});

const emits = defineEmits(['change-region']);

</script>

<template>
  <h2>{{ regionName }}</h2>
  <BaseButton />
  <h3>{{ computed_RegionNameAllCaps }}</h3>
  <h3>{{ reactive_RegionNameAllCaps }}</h3>
  <button @click="changeRegionName">Change Region Name</button>
  <pre> {{ pokemon }}</pre>
</template>
