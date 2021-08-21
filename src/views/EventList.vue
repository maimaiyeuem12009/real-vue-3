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
import EvenService from "@/service/EvenService";
export default {
  name: "EventList",
  components: { EventCard },
  data() {
    return {
      events: null
    }
  },
  created() {
    EvenService.getEvents().then(response => {
      this.events = response.data
    }).catch(e => {
      console.log(e)
    })
  }
}
</script>

<style scoped>
h1{
  margin-bottom: 20px;
}
</style>