<template>
<v-flex xs6 offset-xs3>
  <panel title="Exercise Videos">
    <v-btn v-if="$store.state.user.id == $route.params.id"
        @click="addVideo"
          slot="action"
          class="teal"
          light
          absolute
          right
          middle
          outline>
          <v-icon dark>edit
          </v-icon>
          Add videos
        </v-btn>
        <ul>
          <li style="position: relative"
          v-for="(video, index) in videos"
          v-bind:key="video.youtubeId"
          v-on:check="deleteVideo">
          <v-btn
            @click="deleteVideo(index)"
            dark
            light
            small
            absolute
            right
            color="#80CBC4">
            <v-icon>clear </v-icon>
            </v-btn>
            {{video.youtubeName}}
          <youtube
          :video-id="video.youtubeId"
          :player-width="300"
          :player-height="200">
          </youtube>
          </li>
        </ul>
  </panel>
</v-flex>
</template>

<script>
import YoutubeService from '@/services/YoutubeService'
export default {
  data () {
    return {
      videos: {
        id: null,
        userId: null,
        youtubeName: null,
        youtubeId: null
      },
      error: null
    }
  },
  methods: {
    addVideo () {
      this.$router.push({
        name: 'addVideo',
        params: {
          id: this.$store.state.user.id
        }
      })
    },
    async deleteVideo (index) {
      try {
        const video = {'id': this.videos[index].id, 'userId': this.$store.state.user.id}
        await YoutubeService.deleteVideo(video)
        this.videos.splice(index, 1)
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    this.videos = (await YoutubeService.getVideos(this.$route.params.id)).data
  }
}

</script>

<style>

</style>
