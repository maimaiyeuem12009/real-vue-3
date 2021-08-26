<template>
  <button
    class="base-button"
    v-bind="$attrs"
  >
    {{label}}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    label: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style scoped lang="scss">
.base-button{
  font-size: 1.953em;
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  @include hover-box;
  margin: 10px 0 10px;
}

</style>