// Page
import Home from '~/page/Ｈome';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
// Lay out
import HeaderOnly from '~/components/Layout/HeaderOnly';
import Search from '~/page/Search';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: HeaderOnly },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

//Private Routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };
