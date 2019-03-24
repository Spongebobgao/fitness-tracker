<template>
    <v-toolbar fixed class = "teal">

      <v-toolbar-title flat dark >
        <span
          class="home"
          @click="navigateTo({name: 'root'})">
        FitnessTracker
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn flat dark
      @click="navigateTo({name: 'search'})">
      Search
      </v-btn>

      <v-btn flat dark
        @click="navigateTo({name: 'login'})">
          Log In
        </v-btn>
        <v-btn flat dark
        @click="navigateTo({name: 'register'})"><!-- can use v-router link too -->
          Sign Up
        </v-btn>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
.home {
  cursor: pointer;
}

.home:hover{
  color:darkslategrey
}
</style>
