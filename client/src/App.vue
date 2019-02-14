<template>
  <div id="app">
    <img src="https://cdn.pixabay.com/photo/2019/01/09/07/08/dance-3922703_1280.jpg" style="width:256px;height:128px;">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
