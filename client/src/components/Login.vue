<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class = "white elevation-2">
        <v-toolbar flat dense class="teal" dark>
          <v-toolbar-title>Login</v-toolbar-title>
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
            clearable>
          </v-text-field>
          <br>
          <v-btn dark class = "teal" @click="login">
            Login</v-btn>
        </div>
        <router-link class="link" to='register'>No account? Register now!</router-link>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
import toastr from 'toastr'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      this.error = null
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        if (this.$store.state.redirectRoute) {
          toastr.success('You;ve successfully logged in!')
          this.$router.push({
            name: this.$store.state.redirectRoute.name,
            params: {
              id: this.$store.state.redirectRoute.params.id
            }
          })
        } else {
          toastr.success('You;ve successfully logged in!')
          this.$router.push({
            name: 'posts',
            params: {
              id: this.$store.state.user.id
            }
          })
        }
      } catch (error) {
        this.error = error.response.data.error
        toastr.error(this.error)
      }
    }
  }
}
</script>
<style scoped>
.error {
  color:rgb(4, 80, 75)
}
.link {
  color:rgb(4, 80, 75)
}
</style>
