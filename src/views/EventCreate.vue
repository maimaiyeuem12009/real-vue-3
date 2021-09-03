<template>
  <div class="event-create">
    <h1>Create an Event</h1>
    <form @submit.prevent="sendForm()">
      <BaseSelect v-model="category"
        label="Select a category"
        :options="categories"
        :error="categoryError"
      />
      <fieldset>
        <legend>Name and Describe your event</legend>
        <BaseInput
            v-model="title"
            label="Title"
            type="text"
            :error="titleError"
        />

        <BaseInput
            v-model="description"
            label="Description"
            type="text"
            :error="descriptionError"
        />

        <BaseInput
            v-model="location"
            label="Location"
            type="text"
            :error="locationError"
        />
      </fieldset>

      <fieldset>
        <legend>Are pet allowed</legend>
        <BaseRadioGroup
        v-model="pets"
        name="pets"
        :options="petOptions"
        :vertical=false
        />
      </fieldset>

      <fieldset>
        <legend>Extra</legend>
        <BaseCheckBox
            v-model="catering"
            label="Catering"
        />
        <BaseCheckBox
            v-model="music"
            label="Live music"
        />
      </fieldset>



      <BaseButton label="Submit" type="submit"/>
    </form>
    title: {{title}}<br/>
    pets: {{pets}}<br/>
    catering: {{catering}}<br/>
    music: {{music}}<br/>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid'
import {useField, useForm } from 'vee-validate'
import {computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'


export default {
  name: "EventCreate",
  setup() {
    const categories = ref(['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'])
    const petOptions= ref([{label:'Yes', value:1},  {label:'No', value:0}])
    let [catering,music,pets] = [false,false,1].map((a) => ref(a))

    const router = useRouter()
    const store = useStore()
    const user = computed (() => store.state.user)
    const createEvent = (payload) => store.dispatch('event/createEvent',payload)

    const validations = {
      category: value => {
        if (value !== 'housing') return 'This field is required'
        return true
      },
      title: value => {
        if (!value) return 'This field is required'
        return true
      },
      description: value => {
        if (!value) return 'This field is required'
        return true
      },
      location: value => {
        if (!value) return 'This field is required'
        return true
      },
    }
    useForm({validationSchema: validations})

    const {value: category, errorMessage: categoryError} = useField('category')
    const {value: title, errorMessage: titleError} = useField('title')
    const {value: description, errorMessage: descriptionError} = useField('description')
    const {value: location, errorMessage: locationError} = useField('location')

    const sendForm = () => {
      const date = new Date(Date.now())
      const event = {
        category: category.value,
        title: title.value,
        description: description.value,
        location: location.value,
        pets:pets.value,
        id : uuidv4(),
        extras: {
          catering: catering.value,
          music: music.value
        },
        organizer: user.value.userInfo.name,
        date : date.toDateString(),
        time : [date.getHours(),date.getMinutes()].join(':')
      }
      createEvent(event)
          .then(() => {router.push({ name: 'EventShow', params: {id: event.id }})})
          .catch(e => {router.push({ name: 'ErrorDisplay', params: {error: e }})})
    }

    return {
      title,titleError,
      category,categoryError,
      description,descriptionError,
      location,locationError,
      categories: categories.value,
      petOptions: petOptions.value,
      user: user.value,
      pets: pets.value,
      catering: catering.value,
      music: music.value,
      sendForm
    }
  },
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