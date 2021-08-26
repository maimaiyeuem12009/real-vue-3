<template>
  <div id="nav">
    <router-link class="link" :to="{ name: 'EventList' }">List</router-link> |
    <router-link class="link" :to="{ name: 'EventCreate' }">Create</router-link> |
    <router-link class="link" :to="{ name: 'EventShow',  params:{ id: 123 } }">Show</router-link>
  </div>
  <router-view />

</template>

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
#nav{
  font-size: 1.953em;

  .link {
    font-weight: 400;
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
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

</style>
