<template>
  <h4>There was an error </h4>
  <p>{{error}}</p>
</template>

<script>
export default {
  name: "ErrorDisplay",
  props: {
    error: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>