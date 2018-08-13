import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Login from '@/views/Login';
import Home from '@/views/Home';
Vue.use(Router);

export default new Router({
  routes: [
    {name: 'Login', path: '/login', component: Login},
    {name: 'home', path: '/', component: Home}
  ]
});
