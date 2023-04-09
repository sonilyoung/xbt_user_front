/* eslint-disable no-unused-vars */
// project import
import MainLayout from 'layout/MainLayout';

// 메인 대시보드
import { Login } from 'pages/frontmain/login/Login';
import { FrontMain } from 'pages/frontmain/main/FrontMain';
import { Learning } from 'pages/frontmain/learning/Learning';
import { LearningCut } from 'pages/frontmain/learningCut/LearningCut';
import { LearningSlide } from 'pages/frontmain/learningSlide/LearningSlide';
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
            // 학습슬라이드
            path: '/learning/slide',
            element: <LearningSlide />
        },
        {
            // 학습컷
            path: '/learning/cut',
            element: <LearningCut />
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
