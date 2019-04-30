<template>
<v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Info">
        <v-btn v-if="$store.state.user.id == $route.params.id" @click="navigateTo"
          slot="action"
          class="teal"
          light
          absolute
          right
          middle
          outline
          >
      <v-icon dark>edit
          </v-icon>
          Edit
        </v-btn>
        <v-btn v-show="$store.state.user.id != $route.params.id && friendId !== $store.state.user.id"
          @click="addFriend"
          slot="action"
          class="teal"
          light
          absolute
          right
          middle
          outline
          >
      <v-icon dark>add_circle
          </v-icon>
          Add Friend
        </v-btn>
          <div
           headline>
            <v-layout>
              <v-flex >
              <v-text-field
            label="First Name"
            v-model="profile.firstName"
            readonly>
          </v-text-field>
          <br>
         <v-text-field
            label="Last Name"
            v-model="profile.lastName"
            readonly>
          </v-text-field>
          <br>
          <v-text-field
            label="Birthday"
            v-model="profile.birthday"
            readonly>
          </v-text-field>
          <br>
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
    </v-layout>
</template>

<script>
import ProfileService from '@/services/ProfileService'
import FriendService from '@/services/FriendService'
export default {
  name: 'profile',
  data () {
    return {
      profile: {
        firstName: null,
        lastName: null,
        birthday: null
      },
      friendId: null
    }
  },
  methods: {
    navigateTo () {
      const id = this.$store.state.user.id
      this.$router.push(`/profile/${id}/edit`)
    },
    async addFriend () {
      console.log('add friend')
      try {
        const friend1 = {'userId': this.$store.state.user.id, 'friendId': this.$route.params.id}
        const friend2 = {'userId': this.$route.params.id, 'friendId': this.$store.state.user.id}
        console.log('we are here')
        await FriendService.create(friend1)
        await FriendService.create(friend2)
        this.$router.push({
          name: 'myFriends',
          params: {
            id: this.$store.state.user.id
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    this.profile = (await ProfileService.getProfile(this.$route.params.id)).data
    this.profile.birthday = this.profile.birthday.split('T')[0]
    this.friend = (await FriendService.getAll(this.$route.params.id)).data
    this.friendId = this.friend[0].userId
    console.log('what')
    console.log(this.friendId)
  }
  /* watch: {
    '$route.query.search': {
      immediate: true,
      async handler (profileId) {
        this.profile = (await profileService.getProfile(profileId)).data
      }
    }
  } */
}

</script>
<style>

</style>
