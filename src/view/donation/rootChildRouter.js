import list from './donationlist';
import record from './donationRecord';
import Details from './donationDetails';
import Thank from './donationThank';

const AllRouters =[
    {
        name: 'donation.list',
        path: '/donation/list',
        props: true,
        component: list
    },{
        name: 'donation.record',
        path: '/donation/record',
        props: true,
        component: record
    }
    ,{
        name: 'donation.details',
        path: '/donation/details',
        props: true,
        component: Details
    }
    ,{
        name: 'donation.thank',
        path: '/donation/thank',
        props: true,
        component: Thank
    }]
export default [...AllRouters]