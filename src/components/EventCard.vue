
<template>
  <router-link :to="{ name: 'EventShow',  params:{ id: event.id } }">
    <div class="event-card">
      <span>@ {{event.time}} on {{event.date}}</span>
      <h3> {{event.title}} </h3>
    </div>
  </router-link>
</template>

<script>

export default {
  props: {
    event: Object
  },
  name: "EventCard",
};
</script>

<style scoped lang="scss">
.event-card{
  width: 100%;
  padding: 20px;
  border: 1px solid;
  margin-bottom: 30px;
  @include hover-box;

  span{
    font-size: 1.25em;
  }

  h3{
    margin-top: 10px;
  }
}
</style>