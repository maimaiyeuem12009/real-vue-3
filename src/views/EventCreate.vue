<template>
  <div class="event-create">
    <h1>Create an Event</h1>
    <form @submit.prevent="sendForm()">
      <BaseSelect v-model="event.category"
        label="Select a category"
        :options="categories"
      />

      <h3>Name and Describe your event</h3>
      <BaseInput
        v-model="event.title"
        label="Title"
        type="text"
      />

      <BaseInput
          v-model="event.description"
          label="Description"
          type="password"
      />

      <BaseInput
          v-model="event.location"
          label="Location"
          type="text"
      />

      <h3>Are pet allowed</h3>
      <BaseRadioGroup
        v-model="event.pets"
        name="pets"
        :options="petOptions"
        :vertical=false
      />


      <h3>Extra</h3>
      <BaseCheckBox
        v-model="event.extras.catering"
        label="Catering"
      />

      <BaseCheckBox
          v-model="event.extras.music"
          label="Live music"
      />
      <BaseButton label="Submit" type="submit"/>
    </form>
    <p>{{event}}</p>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseCheckBox from "@/components/BaseCheckBox";
import BaseRadioGroup from "@/components/BaseRadioGroup";
import axios from "axios";
export default {
  name: "EventCreate]",
  components: {BaseRadioGroup, BaseCheckBox, BaseInput},
  data () {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      },
      petOptions: [
        {label:'Yes', value:1},
        {label:'No', value:0}
      ]
    }
  },
  methods: {
    sendForm() {
      console.log("etf")
    }
  }
};
</script>

<style scoped lang="scss">
.event-create{
  -ms-text-align-last: left;
  text-align-last: left;

  h1{
    margin-bottom: 20px;
  }

  h3{
    margin-top: 10px;
    margin-bottom: 20px;
  }
}
</style>