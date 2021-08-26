<template>
  <div v-if="event" class="event-show">
    <h1 class="event-title">{{ event.title }}</h1>
    <p class="event-dare">{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p class="event-description">{{ event.description }}</p>
  </div>
</template>

<script>


export default {
  props: ["id"],
  name: "EventShow",
  computed: {
    event() {
      return this.$store.state.event
    }
  },
  created() {
    this.$store.dispatch('fetchEvent',this.id)
        .catch(e => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: {error: e }
          })
        })
  }
};
</script>

<style scoped lang="scss">
.event-show{
  padding: 20px;
  text-align: left;

  h1{
    margin-bottom: 5px;
  }

  .event-description{
    margin-top: 20px;
    font-size: 1.563em;
  }
}

</style>