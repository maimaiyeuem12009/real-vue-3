<template>
  <p> Capacity: {{capacity}}</p>
  <p> spaceLeft: {{spaceLeft}}</p>
  <button @click="increaseCapacity">click here</button>
  <ul>
    <li v-for="(name, index) in attending"
        :key="index"
    >{{name}}</li>
  </ul>
</template>

<script>
export default {
  name: "Composition",
}

</script>

<style scoped>

</style>