<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class = "white elevation-2">
        <v-toolbar flat dense class="teal" dark>
          <v-toolbar-title>Add Video</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="User Id"
            v-model="video.userId"
            readonly>
          </v-text-field>
          <br>
        <v-text-field
            label="Youtube Id"
            required
            :rules="[required]"
            v-model="video.youtubeId"
            clearable>
          </v-text-field>
          <br>
          <v-text-field
            label="Video Name"
            required
            :rules="[required]"
            v-model="video.youtubeName"
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
          <v-btn dark class = "teal" @click="addVideo">
            Add video</v-btn>
          <v-btn dark class = "teal" @click="cancle">
            Cancle</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import YoutubeService from '@/services/YoutubeService'
export default {
  name: 'addVideo',
  data () {
    return {
      video: {
        userId: this.$store.state.user.id,
        youtubeId: null,
        youtubeName: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async addVideo () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.video)
        .every(key => !!this.video[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in the required fields.'
        return
      }
      try {
        await YoutubeService.addVideo(this.video)
        this.$router.push({
          name: 'youtube',
          params: {
            userId: this.$store.state.user.id
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    cancle () {
      this.$router.push(`/youtubes/${this.$store.state.user.id}`)
    }
  }
}

</script>

<style>

</style>
