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
import { mapState,mapActions } from 'vuex'

export default {
  name: "EventList",
  props: ['page'],
  components: { EventCard },
  data() {
    return {
    perPage: 2
    }
  },
  computed: {
    ...mapState(['event','user']),
    totalEvent() {
      return this.$store.state.totalEvent
    },
    hasNextPage(){
      let totalPage = Math.ceil(this.totalEvent/ this.perPage)
      return totalPage > this.page
    }
  },
  methods: {
    ...mapActions('event',['fetchEvents'])
  },
  beforeMount() {
    this.fetchEvents({perPage: this.perPage , page: this.page})
        .catch(e => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: {error: e }
          })
        })
  },
  beforeRouteUpdate() {
    return this.fetchEvents({perPage: this.perPage , page: this.page})
        .catch(e => {
          return({
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
.page-link{
  padding: 0 10px;
}
</style>