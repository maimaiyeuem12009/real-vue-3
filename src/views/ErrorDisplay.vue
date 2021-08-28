<template>
  <h4>There was an error </h4>
  <p>{{error}}</p>
</template>

<script>
import BaseButton from "@/components/BaseButton";
export default {
  name: "ErrorDisplay",
  components: {BaseButton},
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