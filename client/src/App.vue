<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid>
          <page-header />
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
    <!-- img src="./assets/logo.png"> -->
  </div>
</template>
<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
@import '../node_modules/toastr/build/toastr.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
