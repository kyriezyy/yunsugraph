import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Detail from '@/views/Detail';
import demo from '@/components/demo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo,
    },
  ],
});
