<template>
  <p class="event-description">Edit Event</p>
</template>

<script>
export default {
  name: "EventEdit",
  props: ["event"],
  data() {
    return {
      unsavedChanged: false
    }
  },
  beforeRouteLeave(  ){
    if (this.unsavedChanged) {
      const answer = window.confirm(
          'Do you really want to leave? You have unsaved changes!'
      )
      if (!answer) {
        return false
      }
    }
  }
}
</script>

<style scoped lang="scss">


</style>