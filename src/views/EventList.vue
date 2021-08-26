<template>
  <div>
    <h1>List Event</h1>
    <div class="event-wrapper">
      <EventCard v-for="event in events"
                 :event="event"
                 :key="event.id"/>
    </div>

  </div>
</template>

<script>
import EventCard from "../components/EventCard"
export default {
  name: "EventList",
  components: { EventCard },
  computed: {
    events() {
      return this.$store.state.events
    }
  },
  created() {
    this.$store.dispatch('fetchEvents')
        .catch(e => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: {error: e }
          })
        })
  }
}
</script>

<style scoped>
h1{
  margin-bottom: 20px;
}
</style>