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

Vue.use(Router)

export default new Router({
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
    }
  ]
})
/* this.router.beforeEach((to, from, next) => {
  console.log({ to, from })
  const publicRoutes = ['root', 'login', 'register']
  if (!publicRoutes.includes(to.name) && this.$store.state.user.id == null) {
    this.$store.redirectRoute = {
      name: to.name, path: to.path, params: to.params, query: to.query, hash: to.hash
    }
    return next('login')
  }
  next()
}) */
