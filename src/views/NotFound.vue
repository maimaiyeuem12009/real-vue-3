<template>
  <h4>Your {{ resource}} is not here</h4>
  <div class="back-btn">
    <BaseButton label="Go Back" @click="goBack"/>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
export default {
  name: "NotFound",
  props: {
    resource: {
      type: String,
      default: "page"
    }
  },
  components: {BaseButton},
  methods: {
    goBack() {
      if (this.page === 'page'){
        this.$router.go(-1)
      } else {
        this.$router.go(-2)
      }
    }
  }
}
</script>

<style scoped>
.back-btn{
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>