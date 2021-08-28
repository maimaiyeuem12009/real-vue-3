<template>
  <div id="flashMessage" v-if="GStore.flashMessage">{{GStore.flashMessage}}</div>
  <div class="nav nav-main">
    <router-link class="link" :to="{ name: 'EventList' }">List</router-link> |
    <router-link class="link" :to="{ name: 'EventCreate' }">Create</router-link>
  </div>
  <router-view />

</template>
<script>
export default {
  inject: ['GStore']
}
</script>
<style lang="scss">
@import "css/main";
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 650px;
  margin: 0 auto;
  padding: 010px;
  @include test-box;
}
.nav-main{
  font-size: 1.953em;
  padding: 30px;
  a{
    font-weight: bold;
  }
}

.nav {

  .link {
    font-weight: 400;
  }
  a {
    color: #999;

    &.router-link-exact-active {
      color: #101010;
    }
  }
}

h1{
  font-size: 3.052em;
}
h2{
  font-size: 2.441em;
}
h3{
  font-size: 1.953em;
}
h4{
  font-size: 1.563em;
}
h5{
  font-size: 1.25em;
}
p{
  font-size: 1em;
}
h6{
  font-size: 0.8em;
}
.error-message{
  font-size: 1.25em;
  color: red;
  margin: 10px 0 10px;
}
@keyframes  yellowfade {
  from {
    background: yellow;
  }
  to{
    background: transparent;
  }
}
#flashMessage {
  -webkit-animation-name: yellowfade;
  -moz-animation-name: yellowfade;
  -o-animation-name: yellowfade;
  animation-name: yellowfade;
  animation-duration: 4s;
  font-size:1.25em;
}
</style>
