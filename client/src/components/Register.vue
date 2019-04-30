<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class = "white elevation-2">
        <v-toolbar flat dense class="teal" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email"
            clearable>
          </v-text-field>
          <br>
          <v-text-field
            label="Password"
            v-model="password"
            type= 'password'
            hint="At least 8 characters"
            counter
            clearable>
          </v-text-field>
          <br>
          <div class = "teal lighten-5" v-html = "error" />
          <br>
          <v-btn dark class = "teal" @click="register">
            Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      this.error = null
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        console.log(response)
        const id = response.data.user.id
        this.$router.push(`middle/${id}`)
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
