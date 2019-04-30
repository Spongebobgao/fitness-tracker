<template>
<panel>
  <v-btn
      slot="action"
      samll
      absolute
      middle
      left
      flat>
      Search
      <v-icon>search
      </v-icon>
    </v-btn>
  <v-text-field
    label="Search by first name."
    v-model="search"
    clearable>
  </v-text-field>
</panel>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: `search`
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style>

</style>
