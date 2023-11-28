<script>
export default {
    props: {
        name: {
            type: String,
            default: "John Doe"
        },
        food: {
            type: String,
            default: "Cheeseburger"
        }
    }
}
</script>

<template>
    <h1> User: {{name}} </h1>
    <p> Fav food: {{food}} </p>
</template>