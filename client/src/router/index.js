import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
// import UserSearch from '@/components/User/UserSearch'
import Profile from '@/components/Profile'
import Posts from '@/components/Posts'
import CreatePost from '@/components/CreatePost'
// import NameSearch from '@/components/NameSearch'
import SearchUser from '@/components/SearchUser'
import EditProfile from '@/components/EditProfile'
import RegisterDone from '@/components/RegisterDone'
import CreateProfile from '@/components/CreateProfile'

import MyFriends from '@/components/MyFriends'
import FriendPage from '@/components/FriendPage'
import Youtube from '@/components/Youtube'
import AddVideo from '@/components/AddVideo'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/middle/:id',
      name: 'middle',
      component: RegisterDone
    },
    {
      path: '/create/:id',
      name: 'create',
      component: CreateProfile
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/search',
      name: 'search',
      component: SearchUser
    },
    {
      path: '/myFriends/:id',
      name: 'myFriends',
      component: MyFriends
    },
    {
      path: '/posts/:id',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/:id/create',
      name: 'createPost',
      component: CreatePost
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile
    },
    {
      path: '/profile/:id/edit',
      name: 'edit',
      component: EditProfile
    },
    {
      path: '/friendPage/:id',
      name: 'friendPage',
      component: FriendPage
    },
    {
      path: '/youtubes/:id',
      name: 'youtube',
      component: Youtube
    },
    {
      path: '/addvideo/:id',
      name: 'addVideo',
      component: AddVideo
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicRoutes = ['root', 'login', 'register']
  if (!publicRoutes.includes(to.name) && !store.state.user) {
    const redirectRoute = {
      name: to.name,
      params: {
        id: to.params.id
      }
    }
    store.dispatch('setRedirectRoute', redirectRoute)
    return next('login')
  }
  next()
})
export default router
