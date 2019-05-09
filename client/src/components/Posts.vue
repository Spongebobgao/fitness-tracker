<template>
<v-layout>
    <v-flex xs6 offset-xs3 v-if="$store.state.user.id == $route.params.id">
      <panel title="Posts" >
        <v-btn
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
              style="position:relative"
              v-for="(myPost, index) in myPosts"
              v-bind:key="myPost.id"
              v-on:check="deleteRecord"
              >{{myPost.postRecord}}
              <v-btn
                @click="deleteRecord(index)"
                dark
                light
                small
                absolute
                right
                color="#80CBC4"
                >
                <v-icon>clear </v-icon>
                </v-btn>
               <ul style="font-size:10px; list-style-type:none; text-align: right">
                 <li>{{myPost.date=myPost.updatedAt.split('.')[0].split('T')[0]}}
                    {{myPost.time=myPost.updatedAt.split('.')[0].split('T')[1]}}
                  </li>
                </ul>
               <hr>
            </li>
          </ul>
      </panel>
    </v-flex>
    <v-flex xs6 offset-xs3 v-else>
      <panel title="Posts" >
          <ul style="font-size:20px;text-align: left;">
            <li
              v-for="post in posts"
              v-bind:key="post.id"
              >{{post.postRecord}}
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
</v-layout>
</template>

<script>
import PostService from '@/services/PostService'
export default {
  name: 'posts',
  data () {
    return {
      myPosts: {
        id: null,
        postRecord: null,
        userId: null,
        updatedAt: null,
        date: null,
        time: null
      },
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
      const id = this.$store.state.user.id
      this.$router.push(`/posts/${id}/create`)
    },
    async deleteRecord (index) {
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
    this.myPosts = (await PostService.getPost(this.$store.state.user.id)).data
  }
}
</script>
