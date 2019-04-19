import Alumni from './alumni'
import AlumniXyl from './xyl'
import Classmate from './classmate'
import Major from './major'
import Search from './search'
const AllRouters =[
    {
        path: '/alumni',
        name: 'alumni',
        component: Alumni
      } ,{
        path: '/alumni/yxl',
        name: 'xyl',
        component: AlumniXyl,
        
      },{
        path: '/alumni/yxl/major/:id',
        name: 'major',
        component: Major,
        props: true
      },
      {
        path: '/alumni/yxl/major/:mid/:sid',
        name: 'classmate',
        component: Classmate,
        props: true
      },
      {
        path: '/alumni/search',
        name: 'search',
        component: Search,
        props: true
      }
    ]
export default [...AllRouters]