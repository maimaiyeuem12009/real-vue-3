<template>
  <p class="event-description">{{ event.description }}</p>
</template>

<script>


export default {
  props: ["event"],
  name: "EventShow",
};
</script>

<style lang="scss">
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
.nav-event{
  font-size: 1.25em;
  margin: 20px 0;
  a{
    font-weight: 400;
    margin-right: 10px;
  }
}

</style>