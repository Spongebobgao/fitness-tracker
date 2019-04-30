<template>
    <v-toolbar fixed class = "teal" dark>
      <v-toolbar-title flat >
        <span
          class="home"
          @click="navigateTo({name: 'root'})">
          FitnessTracker
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <h1 v-if="$store.state.isUserLoggedIn">
        Welcome {{ profile.firstName }} {{ profile.lastName }}!
      </h1>
      <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="teal"
          v-on="on"
          fab>
        <v-icon>more_vert</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile>
          <v-btn flat
          small
          v-if="$store.state.isUserLoggedIn"
          @click="myPost">
          Posts
          </v-btn>
           <v-btn flat
          small
          v-if="$store.state.isUserLoggedIn"
          @click="myVideos">
          Videos
          </v-btn>
          <v-btn flat small
          v-if="$store.state.isUserLoggedIn"
          @click="navigate">
          Me
          </v-btn>
          <v-btn flat small
          v-if="$store.state.isUserLoggedIn"
          @click="myFriend">
          MyFriend
          </v-btn>
        <v-btn flat small
          v-if="!$store.state.isUserLoggedIn"
          @click="navigateTo({name: 'login'})">
            Log In
          </v-btn>
          <v-btn flat small
          v-if="!$store.state.isUserLoggedIn"
          @click="navigateTo({name: 'register'})"><!-- can use v-router link too -->
            Sign Up
          </v-btn>
          <v-btn flat small
          v-if="$store.state.isUserLoggedIn"
          @click="logout"><!-- can use v-router link too -->
            Log Out
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import ProfileService from '@/services/ProfileService'
export default {
  data () {
    return {
      profile: {
        firstName: null,
        lastName: null
      }
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    navigate () {
      const id = this.$store.state.user.id
      this.$router.push(`/profile/${id}`)
    },
    myFriend () {
      const id = this.$store.state.user.id
      this.$router.push(`/myFriends/${id}`)
    },
    myPost () {
      const id = this.$store.state.user.id
      this.$router.push(`/posts/${id}`)
    },
    myVideos () {
      const id = this.$store.state.user.id
      this.$router.push(`/youtubes/${id}`)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({ name: 'root' })
    }
  },
  async mounted () {
    this.profile = (await ProfileService.getProfile(this.$route.params.id)).data
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
