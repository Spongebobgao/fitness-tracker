<template>
  <v-card>
    <v-card-title class="headline font-weight-regular teal white--text">Search</v-card-title>
    <v-card-text>
      <v-subheader class="pa-0">Who are you looking for?</v-subheader>
      <v-autocomplete
        v-model="profiles"
        :items="profiles.firstName"
        :label="`Please enter the name`"
        persistent-hint
        prepend-icon="face"
      >
        <template v-slot:append-outer>
          <v-slide-x-reverse-transition
            mode="out-in"
          >
          </v-slide-x-reverse-transition>
        </template>
      </v-autocomplete>
    </v-card-text>
  </v-card>
</template>

<script>
import ProfileService from '@/services/ProfileService'
export default {
  data () {
    return {
      profiles: {
        firstName: '',
        lastName: ''
      }
    }
  },
  async mounted () {
    this.profiles = (await ProfileService.getUserName()).data
    this.profiles.firstName = this.profiles.map(person => person.firstName + ' ' + person.lastName)
  }
}
</script>

<style>

</style>
