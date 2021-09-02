<template>
  <div class="event-create">
    <h1>Create an Event</h1>
    <form @submit.prevent="sendForm()">
      <BaseSelect v-model="this.category"
        label="Select a category"
        :options="categories"
      />
      <fieldset>
        <legend>Name and Describe your event</legend>
        <BaseInput
            v-model="title"
            label="Title"
            type="text"
            :error="error"
        />

        <BaseInput
            v-model="event.description"
            label="Description"
            type="text"
        />

        <BaseInput
            v-model="event.location"
            label="Location"
            type="text"
        />
      </fieldset>

      <fieldset>
        <legend>Are pet allowed</legend>
        <BaseRadioGroup
        v-model="event.pets"
        name="pets"
        :options="petOptions"
        :vertical=false
        />
      </fieldset>

      <fieldset>
        <legend>Extra</legend>
        <BaseCheckBox
            v-model="event.extras.catering"
            label="Catering"
        />
        <BaseCheckBox
            v-model="event.extras.music"
            label="Live music"
        />
      </fieldset>



      <BaseButton label="Submit" type="submit"/>
    </form>
    {{title}}
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseCheckBox from "@/components/BaseCheckBox";
import BaseRadioGroup from "@/components/BaseRadioGroup";
import {v4 as uuidv4} from 'uuid'
import { mapState, mapActions } from 'vuex'
import {useField} from 'vee-validate'
/* eslint-disable */

export default {
  name: "EventCreate]",
  setup() {
    const event_title = useField('title', function(value) {
      if (!value) return 'This field is required'
      return true
    })
    console.log(event_title)
    return {title:event_title.value, error: event_title.errorMessage}
  },
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
      ],
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions('event',['createEvent']),
    sendForm() {
      const date = new Date(Date.now())
      const event = {
        ...this.event,
        id : uuidv4(),
        title: this.title,
        organizer: this.user.userInfo.name,
        date : date.toDateString(),
        time : [date.getHours(),date.getMinutes()].join(':')
      }
      this.createEvent(event)
      .then(() => {
        this.$router.push({
          name: 'EventShow',
          params: {id: event.id }
        })
        .catch(e => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: {error: e }
          })
        })
      })
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

  legend{
    font-size: 1.953em;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: left;
    font-weight: 500;
  }
}
</style>