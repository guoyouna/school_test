import UserInfo from './userinfo';
import EditorUser from './editorUser';
import MySettings from './mysettings';
import updatePwd from './partice/UpdatePwd';

const AllRouters =[
    {
      path: '/userinfo',
      name: 'userinfo',
      component: UserInfo
    },
    {
      path: '/editorUser',
      name: 'editorUser',
      component: EditorUser
    },
    {
      path: '/mysettings',
      name: 'mysettings',
      component: MySettings
    },
    {
      path: '/updatePwd',
      name: 'updatePwd',
      component: updatePwd
    }]
export default [...AllRouters]