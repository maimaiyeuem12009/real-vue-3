<template>
  <p class="event-description">Edit Event</p>
</template>

<script>
import { ref } from 'vue'
import { onBeforeRouteLeave} from 'vue-router'
export default {
  name: "EventEdit",
  props: ["event"],
  setup() {
    const unsavedChanged = ref(false)
    onBeforeRouteLeave(() => {
      if (unsavedChanged.value) {
        const answer = window.confirm(
            'Do you really want to leave? You have unsaved changes!'
        )
        if (!answer) {
          return false
        }
      }
    })
  },
}
</script>

<style scoped lang="scss">


</style>