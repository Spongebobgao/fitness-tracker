<template>
<v-flex xs6 offset-xs3>
  <panel title="Exercise Videos">
  <youtube
  :youtubeId="videos.youtubeId"
  :player-width="400"
  :player-height="300">
  </youtube>
  </panel>
</v-flex>
</template>

<script>
import YoutubeService from '@/services/YoutubeService'
export default {
  data () {
    return {
      videos: {
        youtubeId: null
      },
      error: null
    }
  },
  async mounted () {
    this.videos = (await YoutubeService.getVideos(this.$route.params.id)).data
    this.videos.youtubeId = this.videos[0].youtubeId
    console.log('youuuuuuuuuuuuuuuuuuuuu')
    console.log(this.videos[0].youtubeId)
  }
}

</script>

<style>

</style>
