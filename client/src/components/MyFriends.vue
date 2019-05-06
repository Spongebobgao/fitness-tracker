<template>
    <v-flex xs6 offset-xs3>
      <h1 v-if="$store.state.user.id != $route.params.id">
        You can only check your own friends.
      </h1>
      <panel title="My Friends" v-else>
        <v-btn @click="navigateTo"
          slot="action"
          class="teal"
          light
          absolute
          right
          middle
          >
          <v-icon big>add_circle_outline
          </v-icon>
        </v-btn>
          <div
           headline>
          <v-layout>
            <v-flex >
            <ul style="color:#004D40; font-size:20px; text-align: left">
             <li d-flex
                style="position:relative"
                v-for="(profile, index) in profiles"
                :key="profile.userId"
                >
                <v-btn v-on:click="goTo(profile.userId)" >
                  {{profile.firstName}} {{profile.lastName}}</v-btn>
                <v-btn
                    @click="deleteFriend(index)"
                    dark
                    light
                    small
                    absolute
                    right
                    color="#80CBC4"
                    fab>
                    <v-icon>clear </v-icon>
                    </v-btn>
                    <hr>
                    </li>
            </ul>
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
</template>

<script>
import FriendService from '@/services/FriendService'
// import ProfileService from '@/services/ProfileService'
export default {
  name: 'myFriends',
  data () {
    return {
      profiles: {
        userId: null,
        firstName: null,
        lastName: null
      },
      error: null
    }
  },
  methods: {
    navigateTo () {
      this.$router.push(`/search`)
    },
    goTo (id) {
      this.$router.push(`/friendPage/${id}`)
    },
    async deleteFriend (index) {
      console.log('deleteFriend')
      try {
        const friend = {'userId': this.$route.params.id, 'friendId': this.profiles[index].userId}
        await FriendService.delete(friend)
        this.profiles.splice(index, 1)
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    this.error = null
    this.profiles = (await FriendService.getAll(this.$route.params.id)).data
  }
}

</script>
<style>
ul li :hover {
  color: teal;
}
</style>
