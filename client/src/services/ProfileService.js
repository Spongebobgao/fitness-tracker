import Api from '@/services/Api'

export default {
  showAll (search) { // get all profile (firstName, lastName)
    return Api().get(`/search`, {
      params: {
        search: search
      }
    })
  },
  getProfile (id) { // get current user profile
    return Api().get(`/profile/${id}`)
  },
  create (profile) {
    return Api().post(`/create/${profile.userId}`, profile)
  },
  update (profile) {
    return Api().put(`/profile/${profile.userId}/edit`, profile)
  }
  /* search (firstName) {
    return Api().get('search', firstName)
  } */
}
