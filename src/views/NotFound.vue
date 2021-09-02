<template>
  <h4>Your {{ resource}} is not here</h4>
  <div class="back-btn">
    <BaseButton label="Go Back" @click="goBack"/>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import { useRouter } from 'vue-router'
export default {
  name: "NotFound",
  props: {
    resource: {
      type: String,
      default: "page"
    }
  },
  components: {BaseButton},
  setup(props) {
    const router =useRouter()
    function goBack() {
      if (props.resource === 'page'){
        router.go(-1)
      } else {
        router.go(-2)
      }
    }
    return  {goBack}
  },
}
</script>

<style scoped>
.back-btn{
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>