<template>
<v-flex>
  <div>
  <h1>Conguatulations! You've register successfully!<br>
   Your userId is {{ this.$route.params.id }}!<br>
  Please compelete your information!</h1>
  </div>
  <v-btn dark class = "teal" @click="navigateTo">
            Create Profile</v-btn>
</v-flex>
</template>

<script>
// import ProfileService from '@/services/ProfileService'
export default {
  name: 'middle',
  methods: {
    navigateTo () {
      const id = this.$route.params.id
      this.$router.push(`/create/${id}`)
    }
  }
}

</script>

<style>

</style>
