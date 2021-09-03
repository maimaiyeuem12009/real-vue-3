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
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
  props: ["id"],
  name: "Layout",
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const event = computed (() =>store.state.event)
    const fetchEvent = (payload) => store.dispatch('event/fetchEvent',payload)
    fetchEvent(props.id)
        .catch( () => {
          router.push({
            name: '404Resource',
            params: { resource: 'Event' }
          })
        })
    return {event: event.value}
  }
}
</script>

<style scoped>

</style>