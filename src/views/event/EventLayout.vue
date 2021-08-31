<template>
  <div v-if="event.currentEvent" class="event-show">
    <h1 class="event-title">{{ event.currentEvent.title }}</h1>
    <p class="event-dare">{{ event.currentEvent.time }} on {{ event.currentEvent.date }} @ {{ event.currentEvent.location }}</p>
    <div class="nav nav-event">
      <router-link :to="{ name: 'EventShow'}">Detail</router-link>
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="event.currentEvent"/>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  props: ["id"],
  name: "Layout",
  computed: {
    ...mapState(['event'])
  },
  methods: {
    ...mapActions('event',['fetchEvent'])
  },
  created() {
    this.fetchEvent(this.id)
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