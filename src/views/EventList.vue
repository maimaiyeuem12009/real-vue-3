<template>
  <div>
    <h1>List Event for {{user.userInfo.name}}</h1>
    <div class="event-wrapper">
      <EventCard v-for="event in event.events"
                 :event="event"
                 :key="event.id"/>
    </div>
    <router-link class="page-link"
        :to="{ name: 'EventList', query: { page: page -1 } }"
        rel="prev"
        v-if="page !== 1"
    >
      Previous
    </router-link>

    <router-link class="page-link"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
    >
      Next
    </router-link>

  </div>
</template>

<script>
import EventCard from "../components/EventCard"
import {computed, ref, onBeforeMount} from 'vue'
import { onBeforeRouteUpdate} from 'vue-router'
import { useStore } from 'vuex'

export default {
  name: "EventList",
  props: ['page'],
  components: { EventCard },
  setup(props) {
    const perPage = ref(2)
    const store = useStore()
    let [event, user] = ['event', 'user'].map( name => computed(() => store.state[name]))
    let hasNextPage = computed(() => {
      let totalPage = Math.ceil(event.value.totalEvent/ perPage.value)
      return totalPage > props.page
    })
    const fetchEvents = (payload) => store.dispatch('event/fetchEvents',payload)
    const mountOrUpdates = (payload, mount = true) => {
      fetchEvents(payload)
      .catch(e => {
        if (mount) {
          this.$router.push({
            name: 'ErrorDisplay',
            params: {error: e }
          })
        } else {
          return({
            name: 'ErrorDisplay',
            params: {error: e }
          })
        }
      })
    }
    onBeforeMount( () => mountOrUpdates({perPage: perPage.value,page: props.page}))
    onBeforeRouteUpdate( () => mountOrUpdates({perPage: perPage.value,page: props.page},false))
    return {
      perPage, event, user,hasNextPage
    }
  }
}
</script>

<style scoped>
h1{
  margin-bottom: 20px;
}
.page-link{
  padding: 0 10px;
}
</style>