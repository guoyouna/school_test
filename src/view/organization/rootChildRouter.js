import organization from './index';
import communityDetails from './communityDetails.vue'
const AllRouters =[
    {
        name: 'organization.list',
        path: '/organization/list',
        props: true,
        component: organization
    },
    {
        name: 'community.details',
        path: '/community/details/:id',
        props: true,
        component: communityDetails
    }]
export default [...AllRouters]