<template>
  <div class="radio">
    <div class="radio-wrapper">
      <input
          type="radio"
          :checked="modelValue === value"
          value="0"
          name="pets"
          @change="$emit('update:modelValue',value)"
          v-bind="$attrs"
          :id="uuid"
      >
      <div class="checkmark"></div>

    </div>
    <label v-if="label" :for="uuid">{{label}}</label>
  </div>

</template>

<script>
import UniqueID from "@/features/UniqueID";
export default {
  name: "BaseRadio",
  props: {
    label: {
      type:String,
      default: ''
    },
    modelValue: {
      type: [String,Number],
      default: ''
    },
    value: {
      type: [String,Number],
      required: true
    },

  },
  setup () {
    const uuid = UniqueID().getID()
    return {
      uuid
    }
  }
}
</script>

<style scoped lang="scss">
.radio{
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;


  .radio-wrapper{
    height: 20px;
    width: 20px;
    position: relative;
    input{
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      border: 1px solid black;
      width: 100%;
      height: 100%;
      margin: 0;


      &:checked ~ .checkmark{
        content: "";
        width: 80%;
        height: 80%;
        top: 10%;
        left: 10%;
        background-color: #111111;
        position: absolute;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;

      }
    }
  }


  label{
    padding-left: 10px;
    font-size: 1.56em;

  }
}

</style>