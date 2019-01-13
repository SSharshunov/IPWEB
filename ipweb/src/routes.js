import WelcomePage from './scenes/WelcomePage';
import NotFound from './components/NotFound';
import NotAuthorized from './components/NotAuthorized';
import Awb from './scenes/Awb';

const routes = [ {
    path: '/home',
    exact: true,
    privated: true,
    component: WelcomePage
}, {
    path: '/configureAWB',
    exact: true,
    privated: false,
    component: Awb
}, {
    path: '/unauthorized',
    exact: true,
    privated: false,
    component: NotAuthorized
}, {
    path: '*',
    privated: false,
    component: NotFound
} ];

export default routes;