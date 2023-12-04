<script setup>
import UserCard from "./UserCard.vue";
import { defineProps } from "vue";
import { userList } from "../composables/useUserStore";

async function fetchUsers() {
  console.log("fetching user...");
  const response = await fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
  return response;
}

userList.value = await fetchUsers();

defineProps({
  title: {
    type: String,
    default: "Users",
  },
});

defineEmits(["update-user-list"]);
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <ul>
      <UserCard v-for="user in userList" :key="`user-${user.id}`" :user="user" />
    </ul>
    <!-- <pre>
        {{ userList }}
    </pre> -->
  </main>
</template>

<style>

</style>
