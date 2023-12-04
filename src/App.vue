<script setup>
import BaseCounter from "./components/BaseCounter.vue";
import UserCard from "./components/UserCard.vue";
import { ref } from "vue";

const colorPreference = ref("white");
</script>

<template>
  <div class="wrapper">
    <h2>{{ colorPreference }}</h2>
    <input type="color" v-model="colorPreference" />
    <BaseCounter />
    <UserCard :user="{ name: 'Ben', food: 'Cheeseburger' }" />
  </div>
</template>

<style>
html {
  background-color: papayawhip;
}

.button {
  border: 10px solid red;
}

.wrapper {
  background-color: v-bind(colorPreference);
}
</style>
