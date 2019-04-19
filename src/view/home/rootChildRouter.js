import Ygrw from '@/view/home/greatalum'
import Xxgk from '@/view/home/xxgk/xxgk'
import Dsinfo from '@/view/home/xxgk/dsinfo'
import YgrwInfo from '@/view/home/greataluminfo'
import NewsInfo from '@/view/home/newsinfo'
import NewsList from '@/view/home/newslist'
const AllRouters =[
  {
    path: '/home/ygrw',
    name: 'greatalum',
    component: Ygrw
  },{
    path: '/home/ygrw/ygrwinfo/:id',
    name: 'greataluminfo',
    component: YgrwInfo,
    props: true
  },
  {
    path: '/xxgk/xxgk',
    name: 'xxgk',
    component: Xxgk
  },
  {
    path: '/xxgk/dsh/dsinfo/:id',
    name: 'dsinfo',
    component: Dsinfo,
    props: true
  },
  {
    path: '/home/newslist',
    name: 'newslist',
    component: NewsList,
    props: true
  },
  {
    path: '/home/newsinfo/:id',
    name: 'newsinfo',
    component: NewsInfo,
    props: true
  }
];
export default [...AllRouters] 