<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="https://www.nmims.edu/images/sports-banner.jpg"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Fitness Tracker!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
