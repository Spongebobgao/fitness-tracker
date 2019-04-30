<template>
<div>
  <v-layout>
      <v-flex xs6 offset-xs3>
       <panel title="About Me" v-if="$store.state.isUserLoggedIn">
         <v-text-field
            label="userId"
            required
            :rules="[required]"
            v-model="profile.userId"
            readonly>
          </v-text-field>
          <br>
        <v-text-field
            label="FirstName"
            required
            :rules="[required]"
            v-model="profile.firstName"
            clearable>
          </v-text-field>
          <br>
        <v-text-field
          label="LastName"
          required
          :rules="[required]"
          v-model="profile.lastName"
          clearable>
        </v-text-field>
        <br>
          <br>
          <v-text-field
            label="Birthday"
            required
            :rules="[required]"
            v-model="profile.birthday"
            clearable>
          </v-text-field>
          <br>
           <v-alert v-if="error"
            :value="true"
            color="error"
            icon="warning"
            outline>
            {{ error }}
           </v-alert>
            <br>
          <v-btn dark class = "teal" @click="save">
            Update</v-btn>
            <v-btn dark class = "teal" @click="cancle">
            Cancel</v-btn>
          </panel>
      </v-flex>
  </v-layout>
</div>
</template>

<script>
import ProfileService from '@/services/ProfileService'
export default {
  name: 'edit',
  data () {
    return {
      profile: {
        userId: null,
        firstName: null,
        lastName: null,
        birthday: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.profile)
        .every(key => !!this.profile[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      const userId = this.profile.userId
      try {
        await ProfileService.update(this.profile)
        this.$router.push(`/profile/${userId}`)
      } catch (err) {
        console.log(err)
      }
    },
    cancle () {
      const userId = this.profile.userId
      this.$router.push(`/profile/${userId}`)
    }
  },
  async mounted () {
    try {
      const userId = this.$store.state.user.id
      this.profile = (await ProfileService.getProfile(userId)).data
      this.profile.birthday = this.profile.birthday.split('T')[0]
    } catch (err) {
      console.log(err)
    }
  }
}

</script>

<style>

</style>
