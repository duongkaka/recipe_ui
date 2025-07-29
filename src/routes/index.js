// Layouts
import { HeaderOnly } from '~/layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import MyProfile from '~/pages/MyProfile';
import MyPosts from '~/pages/MyProfile/ProfileItem/MyPosts';
import MySavePosts from '~/pages/MyProfile/ProfileItem/MySavePosts';
import MyInfo from '~/pages/MyProfile/ProfileItem/MyInfo';
import Login from '~/pages/Login';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/myProfile', component: MyProfile, layout: HeaderOnly },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    { path: '/myProfile/myInfo', component: MyInfo, layout: HeaderOnly },
    { path: '/myProfile/myPosts', component: MyPosts, layout: HeaderOnly },
    { path: '/myProfile/mySavePosts', component: MySavePosts, layout: HeaderOnly },
    { path: '/login', component: Login, layout: null },
    { path: '/logout', component: Login, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
