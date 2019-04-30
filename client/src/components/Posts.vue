<template>
    <v-flex xs6 offset-xs3 row>
      <panel title="Posts" v-if="$store.state.isUserLoggedIn">
        <v-btn v-if="$store.state.user.id == $route.params.id"
        @click="addPost"
          slot="action"
          class="teal"
          light
          absolute
          right
          middle
          outline>
          <v-icon dark>edit
          </v-icon>
          Add Post
        </v-btn>
          <ul style="font-size:20px;text-align: left;">
            <li
              v-for="(post, index) in posts"
              v-bind:key="post.id"
              v-on:check="deleteRecord"
              >{{post.postRecord}}
              <v-btn
                @click="deleteRecord(index)"
                dark
                light
                small
                middle
                color="#80CBC4"
                fab>
                <v-icon>clear </v-icon>
                </v-btn>
               <ul style="font-size:10px; list-style-type:none; text-align: right">
                 <li>{{post.date=post.updatedAt.split('.')[0].split('T')[0]}}
                    {{post.time=post.updatedAt.split('.')[0].split('T')[1]}}
                  </li>
                </ul>
               <hr>
            </li>
          </ul>
      </panel>
    </v-flex>
</template>

<script>
import PostService from '@/services/PostService'
export default {
  name: 'posts',
  data () {
    return {
      posts: {
        id: null,
        postRecord: null,
        userId: null,
        updatedAt: null,
        date: null,
        time: null
      }
    }
  },
  methods: {
    addPost () {
      console.log('add post')
      const id = this.$store.state.user.id
      this.$router.push(`/posts/${id}/create`)
    },
    async deleteRecord (index) {
      console.log('deleteRecord')
      try {
        const post = {'id': this.posts[index].id, 'userId': this.$store.state.user.id}
        await PostService.deleteRecord(post)
        this.posts.splice(index, 1)
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    this.posts = (await PostService.getPost(this.$route.params.id)).data
  }
}
</script>
