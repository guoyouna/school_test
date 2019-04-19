import index from './index';
import list from './activelist';
const AllRouters =[
    {
        name: 'active',
        path: '/active',
        props: true,
        component: index
    },{
        name: 'active.list',
        path: '/active/list/:id',
        props: true,
        component: list
    }
    ]
export default [...AllRouters]