import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../views/Index'
import List from '../views/List'
import Detail from '../views/Detail'
import Relation from '../views/Relation'
import Analysis from '../views/Analysis'
import ProductDetail from '../views/detail/ProductDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/relation',
      name: 'Relation',
      component: Relation
    },
    {
      path: '/analysis',
      name: 'Analysis',
      component: Analysis
    },
    {
      path: '/productDetail',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
