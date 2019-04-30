<template>
      <panel title="">
        <v-flex xs6 offset-xs3>
          <v-layout>
            <ul>
           <li v-for="profile in profiles" :key="profile.userId">
               {{ profile.firstName}} {{ profile.lastName }}
               <v-btn @click="navigateTo(profile.userId)"
                  dark
                  light
                  small
                  middle
                  color="#80CBC4"
                  >View</v-btn>
           </li>
           </ul>
          </v-layout>
              </v-flex>

      </panel>
</template>

<script>
import ProfileService from '@/services/ProfileService'
// import FriendService from '@/services/FriendService'
export default {
  data () {
    return {
      profiles: {
        userId: null,
        firstName: '',
        lastName: ''
      }
    }
  },
  methods: {
    navigateTo (id) {
      this.$router.push({
        name: 'profile',
        params: {
          id: id
        }
      })
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.profiles = (await ProfileService.showAll(value)).data
      }
    }
  }
}
</script>

<style scoped>
</style>
