const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
  app.post('/login',
    AuthenticationController.login
  )
  app.get('/search',
    AuthenticationController.search
  )
  app.delete('/delete',
    AuthenticationController.delete
  )
}