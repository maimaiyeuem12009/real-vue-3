<template>
  <div class="input-wrapper">
    <label>{{label}}</label>
    <input
        class="field"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
    >
  </div>
</template>

<script>
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