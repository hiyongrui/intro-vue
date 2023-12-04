<script>
import { useCount } from "../composables/countStore";

export default {
  setup() {
    const countStore = useCount();

    return {
      countStore,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  emits: ["change-name"],
};
</script>

<template>
  <h1>User: {{ user.name }}</h1>

  <h2>new Counter</h2>
  <p>Global count: {{ countStore.globalCount }}</p>
  <p>Local count: {{ countStore.localCount }}</p>
  <button @click="countStore.incrementGlobalCount">Globals</button>
  <button @click="countStore.incrementLocalCount">Local</button>
  <hr />

  <p>Fav food: {{ user.food }}</p>
  <button @click="$emit('change-name')">Change Name</button>
</template>


<style scoped>
button {
  border: 10px solid green;
}
</style>