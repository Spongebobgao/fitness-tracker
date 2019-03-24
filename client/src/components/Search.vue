<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class = "white elevation-2">
        <v-toolbar flat dense class="teal" dark>
          <v-toolbar-title>Search</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email"
            clearable>
          </v-text-field>
          <br>
          <div class = "teal lighten-5" v-html = "error" />
          <br>
          <v-btn dark class = "teal" @click="search">
            Search</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      error: null
    }
  },
  methods: {
    async search () {
      this.error = null
      try {
        await AuthenticationService.search({
          email: this.email
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>
<style scoped>
.error {
  color:rgb(4, 80, 75)

}
</style>
