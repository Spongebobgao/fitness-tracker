<template>
  <v-layout>
      <v-flex xs6 offset-xs3>
     <panel title="About Me" v-if="$store.state.isUserLoggedIn">
       <v-text-field
            label="User Id"
            required
            :rules="[required]"
            v-model="this.$route.params.id"
            readonly>
          </v-text-field>
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
          <v-text-field
            label="Age"
            required
            :rules="[required]"
            v-model="profile.age"
            clearable>
          </v-text-field>
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
          <v-btn dark class = "teal" @click="create">
            Create</v-btn>
          </panel>
      </v-flex>
  </v-layout>
</template>

<script>
import ProfileService from '@/services/ProfileService'
export default {
  name: 'create',
  data () {
    return {
      profile: {
        userId: this.$route.params.id,
        firstName: null,
        lastName: null,
        age: null,
        birthday: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.profile)
        .every(key => !!this.profile[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await ProfileService.create(this.profile)
        this.$router.push({
          name: 'profile'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}

</script>

<style>

</style>
