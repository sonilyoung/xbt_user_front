/* eslint-disable no-unused-vars */
// project import
import MainLayout from 'layout/MainLayout';

// 메인 대시보드
import { Login } from 'pages/frontmain/login/Login';
import { FrontMain } from 'pages/frontmain/main/FrontMain';
import { Practice } from 'pages/frontmain/practice/Practice';
import { ItemPractice } from 'pages/frontmain/itemPractice/ItemPractice';

import { Learning } from 'pages/frontmain/learning/Learning';
import { LearningCut } from 'pages/frontmain/learningCut/LearningCut';
import { LearningSlide } from 'pages/frontmain/learningSlide/LearningSlide';
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
            // 연습
            path: '/practice',
            element: <Practice />
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
            // 반입금지물품연습
            path: '/itemPractice',
            element: <ItemPractice />
        }
    ]
};

export default MainRoutes;
