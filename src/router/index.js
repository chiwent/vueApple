import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import Mac from '@/components/page/Mac'
import Pad from '@/components/page/Pad'
import Music from '@/components/page/Music'
// import Support from '@/components/pages/Support.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mac',
    name: 'Mac',
    component: Mac
  },
  {
    path: '/pad',
    name: 'Pad',
    component: Pad
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  }
    // {
    //   path: '/support',
    //   name: 'Support',
    //   component: Support
    // }
  ]
})
