/*import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/components/login/login'
import homePage from '@/components/homePage/homePage'//
import Calender from '@/components/homePage/calendar/calendar'//日历
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,
      children:[
        {
          path: '/',
          name: 'Calender',
          component: Calender,
        },
      ]
    },
  ]
})*/

//=====分模块开发路由=====
import Vue from 'vue'
import Router from 'vue-router'
import loginRouter from "./login";
import homePageRouter from "./homePage";

Vue.use(Router);

export default new Router({
  routes: [
    //总合子路由
    ...loginRouter,
    ...homePageRouter,
  ]
})




