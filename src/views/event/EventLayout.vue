<template>
  <div v-if="event" class="event-show">
    <h1 class="event-title">{{ event.title }}</h1>
    <p class="event-dare">{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <div class="nav nav-event">
      <router-link :to="{ name: 'EventShow'}">Detail</router-link>
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="event"/>
  </div>
</template>

<script>
export default {
  props: ["id"],
  name: "Layout",
  computed: {
    event() {
      return this.$store.state.event
    },
  },
  created() {
    this.$store.dispatch('fetchEvent',this.id)
        .catch( () => {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'Event' }
          })
        })
  }
}
</script>

<style scoped>

</style>