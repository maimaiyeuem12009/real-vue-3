<template>
  <label :for="uuid">Select a category</label>
  <div class="option-box">
    <select
        :value="modelValue"
        v-bind="{
        ...$attrs,
        onChange: ($event) => {$emit('update:modelValue', $event.target.value)}
      }"
        :id="uuid"
    >
    <option
        v-for="(option,index) in options"
        :value="option"
        :key="index"
        :selected="option === modelValue"
    >{{option}}</option>
    </select>
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
  name: "BaseSelect",
  props:{
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
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
label {
  font-size: 1.562em;
  margin-bottom: 20px;
  display: block;
}
.option-box{
  position: relative;
  margin-bottom: 20px;

  select {
    height: 50px;
    font-size: 1.953em;
    width: 100%;
    border: 2px solid;
    border-bottom: 5px solid black;
    padding-left: 10px;
  }

  &::before {
    content: "▼";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: scaleX(1.5) translateY(-50%);
    font-size: 30px;
    color: #111;
    background-color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }
}

</style>