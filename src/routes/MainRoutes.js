/* eslint-disable no-unused-vars */
// project import
import MainLayout from 'layout/MainLayout';

// 메인 대시보드
import { Login } from 'pages/frontmain/Login';
import { FrontMain } from 'pages/frontmain/FrontMain';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            // 데시보드
            path: '/',
            element: <Login />
        },
        {
            // 데시보드
            path: '/main',
            element: <FrontMain />
        }
    ]
};

export default MainRoutes;
