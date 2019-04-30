<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
       <NameSearchPanel v-if="$store.state.isUserLoggedIn"/>
         <SearchResultPanel v-if="$store.state.isUserLoggedIn" class="mt-2"/>
    </v-flex>
    </v-layout>
</template>

<script>
import NameSearchPanel from './NameSearch'
import SearchResultPanel from './SearchResult'
import ProfileService from '@/services/ProfileService'
export default {
  components: {
    NameSearchPanel,
    SearchResultPanel
  },
  data () {
    return {
      profiles: null
    }
  },
  methods: {
    async mounted () {
      this.profile = (await ProfileService.showAll()).data
    }
  }
}
</script>

<style scoped>

</style>
