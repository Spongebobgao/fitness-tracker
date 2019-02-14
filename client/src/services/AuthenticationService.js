import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

//  AuthenticationService.register({
//  email: 'testting@gmail.com'
//  password: '123456'
//  })
