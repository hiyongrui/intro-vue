<script setup>
import BaseCounter from "@/components/BaseCounter.vue";
import UserCard from "@/components/UserCard.vue";
import { ref, watch } from "vue";
import { useCount } from "@/composables/countStore";
import { useRouter } from "vue-router";

const colorPreference = ref("white");

const countStore = useCount();

const router = useRouter();

watch(countStore.globalCount, (val) => {
  if (val > 1200) {
    // navigate user to pokemon page
    router.push("/pokemon");
  }
});
</script>

<template>
  <div class="wrapper">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/pokedex">Pokedex</router-link>
    </nav>
    <h2>{{ countStore.globalCount }}</h2>
    <router-view />
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
