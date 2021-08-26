<template>
  <div class="check-box" :for="uuid">
    <input
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        class="field"
        :id="uuid"
    >
    <label v-if="label">{{label}}</label>
  </div>
</template>

<script>
import UniqueID from "@/features/UniqueID";
export default {
  name: "BaseCheckBox",
  props: {
    label:{
      type: String,
      default: ''
    },
    modelValue:{
      type: Boolean,
      default: false
    }
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
.check-box{
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  input{
    height: 20px;
    width: 20px;
    border: 2px solid;
  }
  input:checked{
    background-color: #000000;
    height: 20px;
    width: 20px;
    border: 2px solid;
  }
  label{
    font-size: 1.56em;
    padding-left: 10px;
  }
}
</style>