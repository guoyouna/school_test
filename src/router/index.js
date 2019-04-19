import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Home from '@/view/index'
import Ygrw from '@/view/home/greatalum'
import Xxgk from '@/view/home/xxgk/xxgk'
import Dsinfo from '@/view/home/xxgk/dsinfo'
import YgrwInfo from '@/view/home/greataluminfo'
import NewsInfo from '@/view/home/newsinfo'
import NewsList from '@/view/home/newslist'
import AlumniCircle from '@/view/Alumn-circle/alumnicircle'
import FriendDynamic from '@/view/Alumn-circle/friendDynamic'
import Report from '@/view/Alumn-circle/report'
import Job from '@/view/job/job'
import MyJob from '@/view/job/myjob'
import Service from '@/view/service/service'
import JobInfo from '@/view/job/jobinfo'
import Login from '@/view/login/logins'
import Register from '@/view/login/register'
import ChoseIdentity from '@/view/login/choseidentity'
import reg_indentity1 from '@/view/login/reg_indentity1'
import reg_indentity2 from '@/view/login/reg_indentity2'
import reg_success from '@/view/login/reg_success'
import forget_pwd from '@/view/login/forget_pwd'
import AddActivity from '@/view/activity/addactivity'

Vue.use(Router)

var childrenRouters =[];
function importAll(r){
  r.keys().forEach(key => {
    let item = r(key).default;
    if(Array.isArray(item)){
      childrenRouters.push(...item);
    }
    else{
      childrenRouters.push(item);
    }
  });
}
importAll(require.context('../view',true,/rootChildRouter.js$/))
export default new Router({
  routes: [
    ...childrenRouters,
    // {
    //   path: '/',
    //   name: 'App',
    //   component: App,
    //   children:[...childrenRouters]
    // },
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/logins',
      name: 'logins',
      component: Login
    },
    {
      path:'/logins/forget_pwd',
      name: 'forget_pwd',
      component:forget_pwd,

    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      children:[
        {
            path:'/register/reg_id1',
            component:reg_indentity1,
        },
        {
            path:'/register/reg_id2',
            component:reg_indentity2,
        },
        {
            path:'/register/reg_success',
            component:reg_success,
        }]
      },
    {
      path: '/choseidentity',
      name: 'choseidentity',
      component: ChoseIdentity
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/service/myjob',
      name: 'myjob',
      component: MyJob
    },
    {
      path: '/service/job',
      name: 'job',
      component: Job
    },
    {
      path: '/service/addactivity',
      name: 'addactivity',
      component: AddActivity
    },
    {
      path: '/job/jobinfo',
      name: 'jobinfo',
      component: JobInfo
    },
    {
      path: '/alumnicircle',
      name: 'alumnicircle',
      component: FriendDynamic
    },
   
    {
      path: '/alumnicircle/report',
      name: 'Report',
      component: Report
    }
  ]
})
