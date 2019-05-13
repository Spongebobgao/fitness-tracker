<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class = "white elevation-2">
        <v-toolbar flat dense class="teal" dark>
          <v-toolbar-title>Create Exercise Post</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="User Id"
            required
            multiline
            :rules="[required]"
            v-model="post.userId"
            readonly>
          </v-text-field>
          <br>
        <v-textarea
            label="Exercise"
            required
            :rules="[required]"
            v-model="post.postRecord"
            clearable>
          </v-textarea>
            <br>
          <v-btn dark class = "teal" @click="createPost">
            Create Post</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import PostService from '@/services/PostService'
import toastr from 'toastr'
export default {
  name: 'creatPost',
  data () {
    return {
      post: {
        userId: this.$store.state.user.id,
        postRecord: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async createPost () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.post)
        .every(key => !!this.post[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in the required fields.'
        toastr.error(this.error)
        return
      }
      try {
        await PostService.addPost(this.post)
        this.$router.push({
          name: 'posts',
          params: {
            userId: this.$store.state.user.id
          }
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
