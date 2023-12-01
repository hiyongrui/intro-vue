<script setup>
import UserCard from "./UserCard.vue";
import { reactive, defineProps } from "vue";

const state = reactive({
  userList: [],
});

async function fetchUsers() {
  console.log("fetching user...");
  const response = await fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
  return response;
}

state.userList = await fetchUsers();

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
      <UserCard v-for="user in state.userList" :key="user.id" :user="user" />
    </ul>
    <!-- <pre>
        {{ userList }}
    </pre> -->
  </main>
</template>

<style>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
}

main h1 {
  margin-top: 10vh;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
}

input[type="email"] {
  padding: 0.5rem;
  margin-bottom: 30px;
}

button {
  border: 1px solid green;
  padding: 10px;
  color: green;
  background-color: rgb(213, 255, 213);
  cursor: pointer;
}
</style>
