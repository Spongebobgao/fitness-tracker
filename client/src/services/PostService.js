import Api from '@/services/Api'

export default {
  getPost (id) { // get one
    return Api().get(`/posts/${id}`)
  },
  addPost (post) {
    return Api().post(`/posts/${post.userId}/create`, post)
  },
  deleteRecord (post) {
    return Api().delete(`/posts/${post.userId}`, {data: post})
  }
}
