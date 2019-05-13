const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const PostController = require('./controllers/PostController')
const ProfileController = require('./controllers/ProfileController')
const FriendController = require('./controllers/FriendController')
const YoutubeController = require('./controllers/YoutubeController')
module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
  app.post('/login',
    AuthenticationController.login
  )
  app.post('/create/:id',
    ProfileController.create
  )
  app.get('/searchUser',
    ProfileController.getUserName
  )
  app.get('/profile/:id',
    ProfileController.getProfile
  )
  app.get('/myFriends/:id',
    FriendController.getAll
  )
  app.delete('/myFriends/:id',
    FriendController.delete
  )
  app.get('/search',
    ProfileController.showAll
  )
  app.post('/profile/:id',
    FriendController.create
  )
  app.put('/profile/:id/edit',
    ProfileController.put
  )
  app.get('/posts/:id',
    PostController.getPost
  )
  app.delete('/posts/:id',
    PostController.delete
  )
  app.post('/posts/:id/create',
    PostController.create
  )
  app.get('/youtubes/:id',
    YoutubeController.getVideos
  )
  app.post('/addvideo/:id',
    YoutubeController.addVideo
  )
  app.delete('/youtubes/:id',
    YoutubeController.deleteVideo
  )
}
