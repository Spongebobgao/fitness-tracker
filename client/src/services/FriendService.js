import Api from '@/services/Api'

export default {
  getAll (id) { // get all friends
    return Api().get(`/myFriends/${id}`)
  },
  create (friend) {
    return Api().post(`/profile/${friend.userId}`, friend)
  },
  delete (friend) {
    return Api().delete(`/myFriends/${friend.userId}`, { data: friend })
  }
}
