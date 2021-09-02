<template>
  <div class="input-wrapper">
    <label :for="uuid">{{label}}</label>
    <input
        class="field"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        :id="uuid"
        :aria-describedby="error ? `${uuid}-error` :  null"
        :aria-invalid="error ? true : false"
    >
    <p
      v-if="error"
      class="error-message"
      :id="`${uuid}-error`"
      aria-live="assertive"
    >
      {{error}}
    </p>
  </div>
</template>

<script>
import { v1 as uuidv1 } from 'uuid'
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    error: {
      type: String,
      default: ''
    }
  },
  setup () {
    const uuid = uuidv1()
    return {
      uuid
    }
  }
}
</script>

<style scoped lang="scss">
.input-wrapper{
  text-align: left;
  margin-bottom: 45px;


  label{
    font-size: 1.564em;
    margin-bottom: 0px;
    display: block;
  }
  input{
    width: 100%;
    border: none;
    padding-top: 10px;
    height: 50px;
    border-bottom: 5px solid;
    font-size: 1.953em;
  }
}

</style>