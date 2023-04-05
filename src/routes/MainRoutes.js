/* eslint-disable no-unused-vars */
// project import
import MainLayout from 'layout/MainLayout';

// 메인 대시보드
import { Login } from 'pages/frontmain/Login';
import { FrontMain } from 'pages/frontmain/FrontMain';
import { Learning } from 'pages/frontmain/Learning';
import { StopWatch } from 'pages/frontmain/StopWatch';
import { ImageSize } from 'pages/frontmain/ImageSize';
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            // 로그인
            path: '/',
            element: <Login />
        },
        {
            // 메인화면
            path: '/main',
            element: <FrontMain />
        },
        {
            // 학습
            path: '/learning',
            element: <Learning />
        },
        {
            // 테스트
            path: '/test',
            element: <StopWatch />
        },
        {
            // 테스트
            path: '/ImageSize',
            element: <ImageSize />
        }
    ]
};

export default MainRoutes;
