<template>
  <div v-if="event" class="event-show">
    <h1 class="event-title">Ngu Lắm Giang ạ</h1>

  </div>
</template>

<script>
import EvenService from "@/service/EvenService";

export default {
  props: ["id"],
  name: "EventShow",
  data() {
    return{
      event: null
    }
  },
  created() {
    EvenService.getEvent(this.id).then(response => {
      this.event = response.data
    }).catch(e => {
      console.log(e)
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