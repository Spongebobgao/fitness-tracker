<template>
  <v-layout>
      <v-flex xs4 offset-xs1>
       <panel title="Basic Info" v-if="$store.state.isUserLoggedIn">
        <h1 style="font-size:30px;text-align: left;"
            >First Name: {{profile.firstName}}
          </h1>
          <br>
        <h1 style="font-size:30px;text-align: left;"
            >Last Name: {{profile.lastName}}
          </h1>
          <br>
          <h1 style="font-size:30px;text-align: left;"
            >Birthday: {{profile.birthday}}
          </h1>
          <br>
          </panel>
      </v-flex>
      <v-flex xs5 offset-xs1 class="ml-2" >
          <panel title="Posts" v-if="$store.state.isUserLoggedIn">
        <ul style="font-size:20px;text-align: left;">
            <li
              v-for="post in posts"
              :key="post.id"
              >{{post.postRecord}}
               <ul style="font-size:10px; list-style-type:none; text-align: right">
                 <li>{{post.date=post.updatedAt.split('.')[0].split('T')[0]}}
                    {{post.time=post.updatedAt.split('.')[0].split('T')[1]}}
                  </li>
                </ul>
               <hr>
            </li>
          </ul>
            <br>
            </panel>
      </v-flex>
  </v-layout>
</template>

<script>
import PostService from '@/services/PostService'
import ProfileService from '@/services/ProfileService'
export default {
  data () {
    return {
      posts: {
        id: null,
        userId: null,
        postRecord: null
      },
      profile: {
        firstName: null,
        lastName: null
      },
      error: null
    }
  },
  async mounted () {
    this.posts = (await PostService.getPost(this.$route.params.id)).data
    this.profile = (await ProfileService.getProfile(this.$route.params.id)).data
    this.profile.birthday = this.profile.birthday.split('T')[0]
  }
}

</script>

<style>

</style>
