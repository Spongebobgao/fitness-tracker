import Api from '@/services/Api'

export default {
  getVideos (id) {
    return Api().get(`/youtubes/${id}`)
  },
  addVideo (video) {
    return Api().post(`/addvideo/${video.userId}`, video)
  },
  deleteVideo (video) {
    return Api().delete(`/youtubes/${video.userId}`, {data: video})
  }
}
