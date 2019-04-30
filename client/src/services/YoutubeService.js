import Api from '@/services/Api'

export default {
  getVideos (id) {
    return Api().get(`/youtubes/${id}`)
  }
}
