<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    emits: ['change-name'],
}
</script>

<template>
    <h1> User: {{user.name}} </h1>
    <p> Fav food: {{user.food}} </p>
    <button @click="$emit('change-name')">Change Name</button>
</template>