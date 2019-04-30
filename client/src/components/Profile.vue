<template>
    <v-flex xs6 offset-xs3>
      <panel title="About Me">
        <v-btn to="profile/edit"
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
          v-for="profile in profiles" :key="profile.id"
           class="profile" headline>
            <v-layout>
              <v-flex xs6>
                <div calss="profile" >
                  First Name: {{ profile.firstName }}
                  </div>
                  <div calss="profile">
                  Last Name: {{ profile.lastName }}
                  </div>
                  <div calss="profile">
                  Age: {{ profile.age }}
                  </div>
                  <div calss="profile">
                  Birthday: {{ profile.birthday }}
                  </div>
              </v-flex>
            </v-layout>
          </div>
      </panel>
    </v-flex>
</template>

<script>
import ProfileService from '@/services/ProfileService'
export default {
  data () {
    return {
      profiles: {
      }
    }
  },
  async mounted () {
    this.profiles = (await ProfileService.index()).data
  }
  /* watch: {
    '$route.query.search': {
      immediate: true,
      async handler (userId) {
        this.profile = (await ProfileService.index(userId)).data
      }
    }
  } */
}

</script>
<style>
.profile {
  height: 100px
}
</style>
