<template>
  <div id="nav">
    <router-link class="nav-link" to='/'>Home</router-link>
    <router-link class="nav-link" to='/add-city'>Add City</router-link>
  </div>
 <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav{
  display: inline-flex;
}
</style>