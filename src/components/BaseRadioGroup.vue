<template>
  <div class="radio-group"
    v-bind:class="{'vertical':vertical}"
  >
    <BaseRadio
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
      :name="name"
      :modelValue="modelValue"
      @update:modelValue=";$emit('update:modelValue',$event)"
    />
  </div>
</template>

<script>
import BaseRadio from "@/components/BaseRadio";
export default {
  name: "BaseRadioGroup",
  components: {BaseRadio},
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    modelValue:{
      type: [String,Number],
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
.radio-group{
  display: flex;
  margin-bottom: 20px;
}
.vertical{
  flex-direction: column;
}


</style>