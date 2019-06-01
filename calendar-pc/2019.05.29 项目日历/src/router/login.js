import login from '@/components/login/login'
export default [
  {
    path: '/',
    name: 'login',
    component: login,
    redirect: '/login',//设置默认指向的路径
  },
  {
    path: '/login',//设置默认指向的路径指向的是下面的MyHome组件
    component: login,
    name: 'login'
  }
]
