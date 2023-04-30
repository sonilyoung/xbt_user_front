/* eslint-disable no-unused-vars */
// project import
import MainLayout from 'layout/MainLayout';

// 메인 대시보드
import { FrontMain } from 'pages/frontmain';
import { EduInfo } from 'pages/eduinfo';
import { Learning } from 'pages/learning';
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            // 메인
            path: '/',
            element: <FrontMain />
        },
        {
            // 메인
            path: 'frontmain',
            element: <FrontMain />
        },
        {
            // 메인
            path: 'eduinfo',
            element: <EduInfo />
        },
        {
            // 학습
            path: 'learning',
            element: <Learning />
        }
    ]
};

export default MainRoutes;
