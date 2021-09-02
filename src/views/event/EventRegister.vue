<template>
  <p class="event-description">Event Register</p>
  <BaseButton @click="register">
    Register Me
  </BaseButton>
</template>

<script>
export default {
  name: "EventRegister",
  inject: ['GStore'],
  props: ["event"],
  methods: {
    register(){
      this.GStore.flashMessage = 'You are successfully register for ' + this.event.title
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      this.$router.push({
        name: 'EventShow',
        params: { id: this.event.id}
      })
    }
  }
}
</script>

<style scoped lang="scss">


</style>