import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Booking from '../pages/Booking';
import Admin from '../pages/Admin';
import { DefaultLayout } from '../components/Layout';
import AddFilm from '../pages/AddFilm';
import Film from '../pages/Film/film';
import Login from '../pages/Login';
import Gegister from '../pages/Gegister';

//khong dang nhap van vao duoc
const publicRouters = [
    { path: '/', Component: Home, layout: DefaultLayout },
    { path: '/detail', Component: Detail, layout: DefaultLayout },
    { path: '/booking', Component: Booking, layout: DefaultLayout },
    { path: '/admin/film', Component: Film, layout: Admin },
    { path: '/admin', Component: Admin, layout: null },
    { path: '/admin/addfilm', Component: AddFilm, layout: Admin },
    { path: '/login', Component: Login, layout: null },
    { path: '/gegister', Component: Gegister, layout: null },
];

//phai dang nhap moi vao dc
const privateRouters = [];

export { publicRouters, privateRouters };
