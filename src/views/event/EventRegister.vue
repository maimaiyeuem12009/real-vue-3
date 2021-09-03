<template>
  <p class="event-description">Event Register</p>
  <BaseButton @click="register">
    Register Me
  </BaseButton>
</template>

<script>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: "EventRegister",
  props: ["event"],
  setup(props) {
    let GStore = inject('GStore')
    const router = useRouter()
    const register = () => {
      GStore.flashMessage = 'You are successfully register for ' + props.event.title
      setTimeout(() => {
        GStore.flashMessage = ''
      }, 3000)
      router.push({name: 'EventShow', params: { id: props.event.id}})
    }
    return {register}
  },
}
</script>

<style scoped lang="scss">


</style>