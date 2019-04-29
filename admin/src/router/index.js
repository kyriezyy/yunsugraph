import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Base from '@/views/Base'
Vue.use(Router)

// home
import Home from '@/views/Index/Home'

import DataRouters from './data-router'
import GraphRouters from './graph-router'
import RobotRouters from './robot-router'
import ServiceRouters from './service-router'

let routers = [
  {
    path: '/',
    name: 'HelloWorld',
    component: Home
  }
]

routers = routers.concat(DataRouters)
                .concat(GraphRouters)
                .concat(RobotRouters)
                .concat(ServiceRouters)

                console.log(routers)

export default new Router({
  routes: [
    {
      path: '/',
      component: Base,
      children: routers
    }
  ]
})
