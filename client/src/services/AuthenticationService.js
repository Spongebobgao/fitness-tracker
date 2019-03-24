import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  search (credentials) {
    return Api().post('search', credentials)
  },
  delete (credentials) {
    return Api().post('delete', credentials)
  }
}

//  AuthenticationService.register({
//  email: 'testting@gmail.com'
//  password: '123456'
//  })
