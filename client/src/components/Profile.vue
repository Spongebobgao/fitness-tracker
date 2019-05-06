<template>
<v-layout>
    <v-flex xs6 offset-xs3 v-if="$store.state.user.id == $route.params.id">
      <panel title="Info">
        <v-btn @click="navigateTo"
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
          <div
           headline>
            <v-layout>
              <v-flex >
              <v-text-field
            label="First Name"
            :value="myProfile.firstName"
            readonly>
          </v-text-field>
          <br>
         <v-text-field
            label="Last Name"
            :value="myProfile.lastName"
            readonly>
          </v-text-field>
          <br>
          <v-text-field
            label="Birthday"
            :value="myProfile.birthday"
            readonly>
          </v-text-field>
          <br>
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
    <v-flex xs6 offset-xs3 v-else>
      <panel title="Info">
        <v-btn v-if="!checkIfIsFriend"
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
            :value="friendProfile.firstName"
            readonly>
          </v-text-field>
          <br>
         <v-text-field
            label="Last Name"
            :value="friendProfile.lastName"
            readonly>
          </v-text-field>
          <br>
          <v-text-field
            label="Birthday"
            :value="friendProfile.birthday"
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
      myProfile: {
        firstName: null,
        lastName: null,
        birthday: null
      },
      friendProfile: {
        firstName: null,
        lastName: null,
        birthday: null
      },
      friendId: [],
      checkIfIsFriend: true
    }
  },
  async beforeCreate () {
    this.friendId = (await FriendService.getAll(this.$store.state.user.id)).data.map(friend => friend.userId)
    this.checkIfIsFriend = this.friendId.includes(parseInt(this.$route.params.id))
    this.myProfile = (await ProfileService.getProfile(this.$store.state.user.id)).data
    this.myProfile.birthday = this.myProfile.birthday.split('T')[0]
    this.friendProfile = (await ProfileService.getProfile(this.$route.params.id)).data
    this.friendProfile.birthday = this.friendProfile.birthday.split('T')[0]
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
  }
}

</script>
<style>
[v-cloak] {
  display: none;
}
</style>
