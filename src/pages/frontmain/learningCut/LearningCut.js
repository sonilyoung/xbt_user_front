/* eslint-disable*/
import React, { useState, useEffect, Component ,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';
import 'assets/css/imgtrs.css';

import {Navi} from '../Navi';
import {Copy} from '../Copy';

// ================================|| 데모이미지 ||================================ //
//정면이미지
import t_learning_01 from 'assets/images/demo/X05231-101.jpg';
import t_learning_02 from 'assets/images/demo/X05228-101.jpg';
import t_learning_03 from 'assets/images/demo/X05227-101.jpg';
import t_learning_04 from 'assets/images/demo/X05182-101.jpg';
import t_learning_05 from 'assets/images/demo/X05180-101.jpg';

//측면이미지
import t_learning_01_1 from 'assets/images/demo/X05231-201.jpg';
import t_learning_02_1 from 'assets/images/demo/X05228-201.jpg';
import t_learning_03_1 from 'assets/images/demo/X05227-201.jpg';
import t_learning_04_1 from 'assets/images/demo/X05182-201.jpg';
import t_learning_05_1 from 'assets/images/demo/X05180-201.jpg';


// ================================|| 하단 이미지 컨트롤 변경 적용 ||================================ //
//================================이미지1
//컬러
//컬러유기물강조
//컬러무기물강조
//컬러반전
import t_color_01_1 from 'assets/images/demo/X05231-101.jpg';
import t_color_02_1 from 'assets/images/demo/X05231-102.jpg';
import t_color_03_1 from 'assets/images/demo/X05231-103.jpg';
import t_color_04_1 from 'assets/images/demo/X05231-104.jpg';

//흑백
//흑백유기물강조
//흑백무기물강조
//흑백반전
import t_bcolor_01_1 from 'assets/images/demo/X05231-111.jpg';
import t_bcolor_02_1 from 'assets/images/demo/X05231-112.jpg';
import t_bcolor_03_1 from 'assets/images/demo/X05231-113.jpg';
import t_bcolor_04_1 from 'assets/images/demo/X05231-114.jpg';

//채도
import t_scolor_01_1 from 'assets/images/demo/X05231-115.jpg';
import t_scolor_02_1 from 'assets/images/demo/X05231-116.jpg';
import t_scolor_03_1 from 'assets/images/demo/X05231-117.jpg';
import t_scolor_04_1 from 'assets/images/demo/X05231-118.jpg';
import t_scolor_05_1 from 'assets/images/demo/X05231-119.jpg';
import t_scolor_06_1 from 'assets/images/demo/X05231-120.jpg';

//================================측면이미지
//컬러
//컬러유기물강조
//컬러무기물강조
//컬러반전
import t_side_color_01_1 from 'assets/images/demo/X05231-201.jpg';
import t_side_color_02_1 from 'assets/images/demo/X05231-202.jpg';
import t_side_color_03_1 from 'assets/images/demo/X05231-203.jpg';
import t_side_color_04_1 from 'assets/images/demo/X05231-204.jpg';

//흑백
//흑백유기물강조
//흑백무기물강조
//흑백반전
import t_side_bwcolor_01_1 from 'assets/images/demo/X05231-211.jpg';
import t_side_bwcolor_02_1 from 'assets/images/demo/X05231-212.jpg';
import t_side_bwcolor_03_1 from 'assets/images/demo/X05231-213.jpg';
import t_side_bwcolor_04_1 from 'assets/images/demo/X05231-214.jpg';

//채도
import t_side_scolor_01_1 from 'assets/images/demo/X05231-215.jpg';
import t_side_scolor_02_1 from 'assets/images/demo/X05231-216.jpg';
import t_side_scolor_03_1 from 'assets/images/demo/X05231-217.jpg';
import t_side_scolor_04_1 from 'assets/images/demo/X05231-218.jpg';
import t_side_scolor_05_1 from 'assets/images/demo/X05231-219.jpg';
import t_side_scolor_06_1 from 'assets/images/demo/X05231-220.jpg';
//================================이미지1

//================================이미지2
//컬러
//컬러유기물강조
//컬러무기물강조
//컬러반전
import t_color_01_2 from 'assets/images/demo/X05228-101.jpg';
import t_color_02_2 from 'assets/images/demo/X05228-102.jpg';
import t_color_03_2 from 'assets/images/demo/X05228-103.jpg';
import t_color_04_2 from 'assets/images/demo/X05228-104.jpg';

//흑백
//흑백유기물강조
//흑백무기물강조
//흑백반전
import t_bcolor_01_2 from 'assets/images/demo/X05228-111.jpg';
import t_bcolor_02_2 from 'assets/images/demo/X05228-112.jpg';
import t_bcolor_03_2 from 'assets/images/demo/X05228-113.jpg';
import t_bcolor_04_2 from 'assets/images/demo/X05228-114.jpg';

//채도
import t_scolor_01_2 from 'assets/images/demo/X05228-115.jpg';
import t_scolor_02_2 from 'assets/images/demo/X05228-116.jpg';
import t_scolor_03_2 from 'assets/images/demo/X05228-117.jpg';
import t_scolor_04_2 from 'assets/images/demo/X05228-118.jpg';
import t_scolor_05_2 from 'assets/images/demo/X05228-119.jpg';
import t_scolor_06_2 from 'assets/images/demo/X05228-120.jpg';

//================================측면이미지
//컬러
//컬러유기물강조
//컬러무기물강조
//컬러반전
import t_side_color_01_2 from 'assets/images/demo/X05228-201.jpg';
import t_side_color_02_2 from 'assets/images/demo/X05228-202.jpg';
import t_side_color_03_2 from 'assets/images/demo/X05228-203.jpg';
import t_side_color_04_2 from 'assets/images/demo/X05228-204.jpg';

//흑백
//흑백유기물강조
//흑백무기물강조
//흑백반전
import t_side_bwcolor_01_2 from 'assets/images/demo/X05228-211.jpg';
import t_side_bwcolor_02_2 from 'assets/images/demo/X05228-212.jpg';
import t_side_bwcolor_03_2 from 'assets/images/demo/X05228-213.jpg';
import t_side_bwcolor_04_2 from 'assets/images/demo/X05228-214.jpg';

//채도
import t_side_scolor_01_2 from 'assets/images/demo/X05228-215.jpg';
import t_side_scolor_02_2 from 'assets/images/demo/X05228-216.jpg';
import t_side_scolor_03_2 from 'assets/images/demo/X05228-217.jpg';
import t_side_scolor_04_2 from 'assets/images/demo/X05228-218.jpg';
import t_side_scolor_05_2 from 'assets/images/demo/X05228-219.jpg';
import t_side_scolor_06_2 from 'assets/images/demo/X05228-220.jpg';
//================================이미지2


//================================이미지3
//컬러
//컬러유기물강조
//컬러무기물강조
//컬러반전
import t_color_01_3 from 'assets/images/demo/X05227-101.jpg';
import t_color_02_3 from 'assets/images/demo/X05227-102.jpg';
import t_color_03_3 from 'assets/images/demo/X05227-103.jpg';
import t_color_04_3 from 'assets/images/demo/X05227-104.jpg';

//흑백
//흑백유기물강조
//흑백무기물강조
//흑백반전
import t_bcolor_01_3 from 'assets/images/demo/X05227-111.jpg';
import t_bcolor_02_3 from 'assets/images/demo/X05227-112.jpg';
import t_bcolor_03_3 from 'assets/images/demo/X05227-113.jpg';
import t_bcolor_04_3 from 'assets/images/demo/X05227-114.jpg';

//채도
import t_scolor_01_3 from 'assets/images/demo/X05227-115.jpg';
import t_scolor_02_3 from 'assets/images/demo/X05227-116.jpg';
import t_scolor_03_3 from 'assets/images/demo/X05227-117.jpg';
import t_scolor_04_3 from 'assets/images/demo/X05227-118.jpg';
import t_scolor_05_3 from 'assets/images/demo/X05227-119.jpg';
import t_scolor_06_3 from 'assets/images/demo/X05227-120.jpg';

//================================측면이미지
//컬러
//컬러유기물강조
//컬러무기물강조
//컬러반전
import t_side_color_01_3 from 'assets/images/demo/X05227-201.jpg';
import t_side_color_02_3 from 'assets/images/demo/X05227-202.jpg';
import t_side_color_03_3 from 'assets/images/demo/X05227-203.jpg';
import t_side_color_04_3 from 'assets/images/demo/X05227-204.jpg';

//흑백
//흑백유기물강조
//흑백무기물강조
//흑백반전
import t_side_bwcolor_01_3 from 'assets/images/demo/X05227-211.jpg';
import t_side_bwcolor_02_3 from 'assets/images/demo/X05227-212.jpg';
import t_side_bwcolor_03_3 from 'assets/images/demo/X05227-213.jpg';
import t_side_bwcolor_04_3 from 'assets/images/demo/X05227-214.jpg';

//채도
import t_side_scolor_01_3 from 'assets/images/demo/X05227-215.jpg';
import t_side_scolor_02_3 from 'assets/images/demo/X05227-216.jpg';
import t_side_scolor_03_3 from 'assets/images/demo/X05227-217.jpg';
import t_side_scolor_04_3 from 'assets/images/demo/X05227-218.jpg';
import t_side_scolor_05_3 from 'assets/images/demo/X05227-219.jpg';
import t_side_scolor_06_3 from 'assets/images/demo/X05227-220.jpg';
//================================이미지3


//================================이미지4
//컬러
//컬러유기물강조
//컬러무기물강조
//컬러반전
import t_color_01_4 from 'assets/images/demo/X05182-101.jpg';
import t_color_02_4 from 'assets/images/demo/X05182-102.jpg';
import t_color_03_4 from 'assets/images/demo/X05182-103.jpg';
import t_color_04_4 from 'assets/images/demo/X05182-104.jpg';

//흑백
//흑백유기물강조
//흑백무기물강조
//흑백반전
import t_bcolor_01_4 from 'assets/images/demo/X05182-111.jpg';
import t_bcolor_02_4 from 'assets/images/demo/X05182-112.jpg';
import t_bcolor_03_4 from 'assets/images/demo/X05182-113.jpg';
import t_bcolor_04_4 from 'assets/images/demo/X05182-114.jpg';

//채도
import t_scolor_01_4 from 'assets/images/demo/X05182-115.jpg';
import t_scolor_02_4 from 'assets/images/demo/X05182-116.jpg';
import t_scolor_03_4 from 'assets/images/demo/X05182-117.jpg';
import t_scolor_04_4 from 'assets/images/demo/X05182-118.jpg';
import t_scolor_05_4 from 'assets/images/demo/X05182-119.jpg';
import t_scolor_06_4 from 'assets/images/demo/X05182-120.jpg';

//================================측면이미지
//컬러
//컬러유기물강조
//컬러무기물강조
//컬러반전
import t_side_color_01_4 from 'assets/images/demo/X05182-201.jpg';
import t_side_color_02_4 from 'assets/images/demo/X05182-202.jpg';
import t_side_color_03_4 from 'assets/images/demo/X05182-203.jpg';
import t_side_color_04_4 from 'assets/images/demo/X05182-204.jpg';

//흑백
//흑백유기물강조
//흑백무기물강조
//흑백반전
import t_side_bwcolor_01_4 from 'assets/images/demo/X05182-211.jpg';
import t_side_bwcolor_02_4 from 'assets/images/demo/X05182-212.jpg';
import t_side_bwcolor_03_4 from 'assets/images/demo/X05182-213.jpg';
import t_side_bwcolor_04_4 from 'assets/images/demo/X05182-214.jpg';

//채도
import t_side_scolor_01_4 from 'assets/images/demo/X05182-215.jpg';
import t_side_scolor_02_4 from 'assets/images/demo/X05182-216.jpg';
import t_side_scolor_03_4 from 'assets/images/demo/X05182-217.jpg';
import t_side_scolor_04_4 from 'assets/images/demo/X05182-218.jpg';
import t_side_scolor_05_4 from 'assets/images/demo/X05182-219.jpg';
import t_side_scolor_06_4 from 'assets/images/demo/X05182-220.jpg';
//================================이미지4



//================================이미지5
//컬러
//컬러유기물강조
//컬러무기물강조
//컬러반전
import t_color_01_5 from 'assets/images/demo/X05180-101.jpg';
import t_color_02_5 from 'assets/images/demo/X05180-102.jpg';
import t_color_03_5 from 'assets/images/demo/X05180-103.jpg';
import t_color_04_5 from 'assets/images/demo/X05180-104.jpg';

//흑백
//흑백유기물강조
//흑백무기물강조
//흑백반전
import t_bcolor_01_5 from 'assets/images/demo/X05180-111.jpg';
import t_bcolor_02_5 from 'assets/images/demo/X05180-112.jpg';
import t_bcolor_03_5 from 'assets/images/demo/X05180-113.jpg';
import t_bcolor_04_5 from 'assets/images/demo/X05180-114.jpg';

//채도
import t_scolor_01_5 from 'assets/images/demo/X05180-115.jpg';
import t_scolor_02_5 from 'assets/images/demo/X05180-116.jpg';
import t_scolor_03_5 from 'assets/images/demo/X05180-117.jpg';
import t_scolor_04_5 from 'assets/images/demo/X05180-118.jpg';
import t_scolor_05_5 from 'assets/images/demo/X05180-119.jpg';
import t_scolor_06_5 from 'assets/images/demo/X05180-120.jpg';

//================================측면이미지
//컬러
//컬러유기물강조
//컬러무기물강조
//컬러반전
import t_side_color_01_5 from 'assets/images/demo/X05180-201.jpg';
import t_side_color_02_5 from 'assets/images/demo/X05180-202.jpg';
import t_side_color_03_5 from 'assets/images/demo/X05180-203.jpg';
import t_side_color_04_5 from 'assets/images/demo/X05180-204.jpg';

//흑백
//흑백유기물강조
//흑백무기물강조
//흑백반전
import t_side_bwcolor_01_5 from 'assets/images/demo/X05180-211.jpg';
import t_side_bwcolor_02_5 from 'assets/images/demo/X05180-212.jpg';
import t_side_bwcolor_03_5 from 'assets/images/demo/X05180-213.jpg';
import t_side_bwcolor_04_5 from 'assets/images/demo/X05180-214.jpg';

//채도
import t_side_scolor_01_5 from 'assets/images/demo/X05180-215.jpg';
import t_side_scolor_02_5 from 'assets/images/demo/X05180-216.jpg';
import t_side_scolor_03_5 from 'assets/images/demo/X05180-217.jpg';
import t_side_scolor_04_5 from 'assets/images/demo/X05180-218.jpg';
import t_side_scolor_05_5 from 'assets/images/demo/X05180-219.jpg';
import t_side_scolor_06_5 from 'assets/images/demo/X05180-220.jpg';
//================================이미지5


// ================================|| 아이콘 ||================================ //
//xbt아이콘
import learnc_ic01_01 from 'assets/images/learning/learnc_ic01_01.png';
import learnc_ic01_02 from 'assets/images/learning/learnc_ic01_02.png';
import learnc_ic01_03 from 'assets/images/learning/learnc_ic01_03.png';
import learnc_ic01_04 from 'assets/images/learning/learnc_ic01_04.png';

import learnc_ic02_01 from 'assets/images/learning/learnc_ic02_01.png';
import learnc_ic02_02 from 'assets/images/learning/learnc_ic02_02.png';
import learnc_ic02_03 from 'assets/images/learning/learnc_ic02_03.png';
import learnc_ic02_04 from 'assets/images/learning/learnc_ic02_04.png';

import glas_plus from 'assets/images/learning/glas_plus.png';
import transform from 'assets/images/learning/transform.png';
import glas_minus from 'assets/images/learning/glas_minus.png';
import restoration from 'assets/images/learning/restoration.png';
import pass from 'assets/images/learning/pass.png';
import open from 'assets/images/learning/open.png';
import prohibited from 'assets/images/learning/prohibited.png';
import stop from 'assets/images/learning/stop.png';
import { PracticeList } from '../practice/PracticeList';

// ================================|| 학습 ||================================ //
export const LearningCut = () =>{
    
    const navigate = useNavigate();
    const [problremCnt, setProblremCnt] = useState(1);//문제출제수
    const [startLearning, setStartLearning] = useState(true);
    const [imgSlideDisplay, setImgSlideDisplay] = useState('block');//슬라이드이미지
    const [imgDisplay, setImgDisplay] = useState('none');//확대축소이미지 css
    const [targetImg, setTargetImg] = useState([]);//확대축소이미지
    const [currentImage, setCurrentImage] = useState();//현재이미지
    //const [currentTransImage, setCurrentTransImage] = useState();//현재변경이미지
    const [tranTry, setTranTry] = useState(true);//현재이미지
    const [nowSelect, setNowSelect] = useState();//현재선택된 아이콘
    const [learningEnd, setLearningEnd] = useState(false);//학습완료 팝업
    

    const learningImages = [
        {
            "learningImages" : t_learning_01,
            "learningThumImages" : t_learning_01_1
        },
        {
            "learningImages" : t_learning_02,
            "learningThumImages" : t_learning_02_1
        },
        {
            "learningImages" : t_learning_03,
            "learningThumImages" : t_learning_03_1
        },
        {
            "learningImages" : t_learning_04,
            "learningThumImages" : t_learning_04_1
        },
        {
            "learningImages" : t_learning_05,
            "learningThumImages" : t_learning_05_1 
        },  
    ]

    //슬라이드이미지
    const [imageList, setImageList] = useState(learningImages);

    //측면이미지(썸네일)
    const [thumImg, setThumImg] = useState(imageList[0].learningThumImages);


    //하단아이콘유틸에 따라 변경되는 이미지유형
    const transimages = [
        {
            "color": t_color_01_1,//컬러
            "colorUforce" : t_color_02_1,//컬러유기물강조
            "colorMforce" : t_color_03_1,//컬러무기물강조
            "colorRevers" : t_color_04_1,//컬러반전
            "colorSaturation1": t_scolor_01_1,//컬러채도
            "colorSaturation2": t_scolor_02_1,//컬러채도
            "colorSaturation3": t_scolor_03_1,//컬러채도
            "colorSaturation4": t_scolor_04_1,//컬러채도
            "colorSaturation5": t_scolor_05_1,//컬러채도
            "colorSaturation6": t_scolor_06_1,//컬러채도
            "blackWhite" : t_side_bwcolor_01_1,//흑백
            "blackWhiteUforce" : t_side_bwcolor_02_1,//흑백유기물강조
            "blackWhiteMforce" : t_side_bwcolor_03_1,//흑백무기물강조
            "blackWhiteRevers" : t_side_bwcolor_04_1,//흑백반전
            "blackWhiteSaturation1": t_side_scolor_01_1,//흑백채도	
            "blackWhiteSaturation2": t_side_scolor_02_1,//흑백채도	
            "blackWhiteSaturation3": t_side_scolor_03_1,//흑백채도	
            "blackWhiteSaturation4": t_side_scolor_04_1,//흑백채도	
            "blackWhiteSaturation5": t_side_scolor_05_1,//흑백채도	
            "blackWhiteSaturation6": t_side_scolor_06_1//흑백채도	
        },
        {
            "color": t_color_01_2,//컬러
            "colorUforce" : t_color_02_2,//컬러유기물강조
            "colorMforce" : t_color_03_2,//컬러무기물강조
            "colorRevers" : t_color_04_2,//컬러반전
            "colorSaturation1": t_scolor_01_2,//컬러채도
            "colorSaturation2": t_scolor_02_2,//컬러채도
            "colorSaturation3": t_scolor_03_2,//컬러채도
            "colorSaturation4": t_scolor_04_2,//컬러채도
            "colorSaturation5": t_scolor_05_2,//컬러채도
            "colorSaturation6": t_scolor_06_2,//컬러채도
            "blackWhite" : t_side_bwcolor_01_2,//흑백
            "blackWhiteUforce" : t_side_bwcolor_02_2,//흑백유기물강조
            "blackWhiteMforce" : t_side_bwcolor_03_2,//흑백무기물강조
            "blackWhiteRevers" : t_side_bwcolor_04_2,//흑백반전
            "blackWhiteSaturation1": t_side_scolor_01_2,//흑백채도	
            "blackWhiteSaturation2": t_side_scolor_02_2,//흑백채도	
            "blackWhiteSaturation3": t_side_scolor_03_2,//흑백채도	
            "blackWhiteSaturation4": t_side_scolor_04_2,//흑백채도	
            "blackWhiteSaturation5": t_side_scolor_05_2,//흑백채도	
            "blackWhiteSaturation6": t_side_scolor_06_2//흑백채도	
        },
        {
            "color": t_color_01_3,//컬러
            "colorUforce" : t_color_02_3,//컬러유기물강조
            "colorMforce" : t_color_03_3,//컬러무기물강조
            "colorRevers" : t_color_04_3,//컬러반전
            "colorSaturation1": t_scolor_01_3,//컬러채도
            "colorSaturation2": t_scolor_02_3,//컬러채도
            "colorSaturation3": t_scolor_03_3,//컬러채도
            "colorSaturation4": t_scolor_04_3,//컬러채도
            "colorSaturation5": t_scolor_05_3,//컬러채도
            "colorSaturation6": t_scolor_06_3,//컬러채도
            "blackWhite" : t_side_bwcolor_01_3,//흑백
            "blackWhiteUforce" : t_side_bwcolor_02_3,//흑백유기물강조
            "blackWhiteMforce" : t_side_bwcolor_03_3,//흑백무기물강조
            "blackWhiteRevers" : t_side_bwcolor_04_3,//흑백반전
            "blackWhiteSaturation1": t_side_scolor_01_3,//흑백채도	
            "blackWhiteSaturation2": t_side_scolor_02_3,//흑백채도	
            "blackWhiteSaturation3": t_side_scolor_03_3,//흑백채도	
            "blackWhiteSaturation4": t_side_scolor_04_3,//흑백채도	
            "blackWhiteSaturation5": t_side_scolor_05_3,//흑백채도	
            "blackWhiteSaturation6": t_side_scolor_06_3//흑백채도	
        },
        {
            "color": t_color_01_4,//컬러
            "colorUforce" : t_color_02_4,//컬러유기물강조
            "colorMforce" : t_color_03_4,//컬러무기물강조
            "colorRevers" : t_color_04_4,//컬러반전
            "colorSaturation1": t_scolor_01_4,//컬러채도
            "colorSaturation2": t_scolor_02_4,//컬러채도
            "colorSaturation3": t_scolor_03_4,//컬러채도
            "colorSaturation4": t_scolor_04_4,//컬러채도
            "colorSaturation5": t_scolor_05_4,//컬러채도
            "colorSaturation6": t_scolor_06_4,//컬러채도
            "blackWhite" : t_side_bwcolor_01_4,//흑백
            "blackWhiteUforce" : t_side_bwcolor_02_4,//흑백유기물강조
            "blackWhiteMforce" : t_side_bwcolor_03_4,//흑백무기물강조
            "blackWhiteRevers" : t_side_bwcolor_04_4,//흑백반전
            "blackWhiteSaturation1": t_side_scolor_01_4,//흑백채도	
            "blackWhiteSaturation2": t_side_scolor_02_4,//흑백채도	
            "blackWhiteSaturation3": t_side_scolor_03_4,//흑백채도	
            "blackWhiteSaturation4": t_side_scolor_04_4,//흑백채도	
            "blackWhiteSaturation5": t_side_scolor_05_4,//흑백채도	
            "blackWhiteSaturation6": t_side_scolor_06_4//흑백채도	
        },
        {
            "color": t_color_01_5,//컬러
            "colorUforce" : t_color_02_5,//컬러유기물강조
            "colorMforce" : t_color_03_5,//컬러무기물강조
            "colorRevers" : t_color_04_5,//컬러반전
            "colorSaturation1": t_scolor_01_5,//컬러채도
            "colorSaturation2": t_scolor_02_5,//컬러채도
            "colorSaturation3": t_scolor_03_5,//컬러채도
            "colorSaturation4": t_scolor_04_5,//컬러채도
            "colorSaturation5": t_scolor_05_5,//컬러채도
            "colorSaturation6": t_scolor_06_5,//컬러채도
            "blackWhite" : t_side_bwcolor_01_5,//흑백
            "blackWhiteUforce" : t_side_bwcolor_02_5,//흑백유기물강조
            "blackWhiteMforce" : t_side_bwcolor_03_5,//흑백무기물강조
            "blackWhiteRevers" : t_side_bwcolor_04_5,//흑백반전
            "blackWhiteSaturation1": t_side_scolor_01_5,//흑백채도	
            "blackWhiteSaturation2": t_side_scolor_02_5,//흑백채도	
            "blackWhiteSaturation3": t_side_scolor_03_5,//흑백채도	
            "blackWhiteSaturation4": t_side_scolor_04_5,//흑백채도	
            "blackWhiteSaturation5": t_side_scolor_05_5,//흑백채도	
            "blackWhiteSaturation6": t_side_scolor_06_5//흑백채도	
        },                                
    ]    

    //팝업창 컨트롤
    const [paracticeShow, setParacticeShow] = useState(false);
    //팝업창 컨트롤
    const displayn = (e) =>{
        setParacticeShow(e);
    }
    

    //타이머셋팅
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const increment = useRef();

    const handleStart = () => {
        setIsActive(!isActive);
        {
          !isActive ?
          (increment.current = setInterval(() => {
            setTimer((timer) => timer + 1)
          }, 1000 ))
          :
          (clearInterval(increment.current))
        }
    }

    const handleReset = () => {
        clearInterval(increment.current);
        setIsActive(false);
        setTimer(0);
    }    

    //분
    const formatMinuite = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
        return `${getMinutes}`;
    }    

    //초
    const formatSeconds = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
        return `${getSeconds}`;
    }    

    const showImgControl=(e)=>{
        if(e==='Y'){//확대축소 영역 show
            setImgDisplay('block');
            setImgSlideDisplay('none');
        }else{
            setImgDisplay('none');
            setImgSlideDisplay('block');
        }

    }



    useEffect(()=>{    
        handleReset();//시간초기화
        setImageList(learningImages);//이미지초기화
        setThumImg(imageList[0].learningThumImages);//썸네일초기화                    

        let slide_speed = 5; //이동 거리(px)
        let slide_time = 10; //이동 시간(ms, 1/1000초)
        let cut_time = 3000; //컷 시간

        let time_out;				//이미지가 움직임 예약
        let animation;				//이미지가 움직이는 상태 저장
        let position;				//이미지와 스크롤바 이동
        let $currentImage;			//현재 움직이는 이미지
        let is_learn01_play = false;
        
        /*
            버튼에 modal_btn 클래스 넣으면 작동
            data-mact="open"  open, close 
            data-minfo="first-modal" 오픈시킬 창아이디 			
        */
        const modals = document.querySelectorAll('.modal_btn');

        modals.forEach(function (modal) {
            modal.addEventListener("click", modal_popup_open, false);
        });

        function modal_popup_open() {
            let tar_act = this.getAttribute('data-mact');
            let tar = this.getAttribute('data-minfo');
            if (tar_act == "open") {
                //const tar_class = this.getAttribute('data-mclass');
                document.getElementById(tar).style.display = "block";

                if (typeof sly_exe === "function") {
                    //alert("sss");
                    //sly_exe();
                } 

                // 첫번째 모달창 가운데 정렬
                let firstModal = document.querySelector("#" + tar + " .modal");
                let modalWidth = firstModal.offsetWidth;
                //alert(modalWidth);
                let modalHeight = firstModal.offsetHeight;
                firstModal.style.left = `calc(50% - ${modalWidth / 2}px)`;
                //firstModal.style.left = `calc(50% - ${modalWidth}px)`;
                firstModal.style.top = `calc(50% - ${modalHeight / 2}px)`;
                //alert(modalWidth);
            }
            if (tar_act == "close") {
                document.getElementById(tar).style.display = "none";
            }
        }  

        $("#second-modal").show();
        // 첫번째 모달창 가운데 정렬
        let firstModal = document.querySelector("#second-modal .modal");
        let modalWidth = firstModal.offsetWidth;
        //alert(modalWidth);
        let modalHeight = firstModal.offsetHeight;
        firstModal.style.left = `calc(50% - ${modalWidth / 2}px)`;
        //firstModal.style.left = `calc(50% - ${modalWidth}px)`;
        firstModal.style.top = `calc(50% - ${modalHeight / 2}px)`;
        

 
        let timer;							//이미지가 보여지는 타이머
        let timeout;						//시험종료를 위한 타이머
        let progressBar = $('#learn02_progress'); //남은시간 게이지
        let images = $('#learn02_img img');	//이미지 목록
        let is_learn02_play = false;
    
        $("#close-second-modal").click(function(){
            if(is_learn02_play){
                $(images).hide();
                clearTimeout(timer); 
                clearTimeout(timeout); 
                //alert("시험이 종료되었습니다.");
                setLearningEnd(true);
                progressBar.stop();
                progressBar.css({width: '0%'});
                is_learn02_play = false;
                $("#learn02_bimg").hide();
            }else{
                setLearningEnd(true);
            }
        });
    
        //학습시작-컷 타입의 시작 버튼 누르면 실행
        $("#learn02_start").click(function() {
            let currentImageIndex = 0;			//현재 보여지는 이미지 순서
            let start_time;						//이미지가 보여지기 시작한 시간
            let stop_time;						//일시정지 버튼을 누른 시간
            let status = 0;						//일시정지 버튼 상태
            let learn_time = 5000; 				//이미지를 보여줄 시간(ms, 1/1000초)
            is_learn02_play = true;
    
            handleStart();//타이머
            setStartLearning(true);

            //남은시간 표시
            $("#learn02_progress").show();
            $("#learn02_bimg").show();
    
            //시작 버튼 비활성화
            //브라우저에 따라 정상작동 되지 않는 경우가 있어
            //시작 기능이 있는 버튼을 숨기고, 기능이 없는 버튼 노출
            $("#learn02_start").hide();
            $("#learn02_start_on").show();
    
            setCurrentImage(currentImageIndex);//현재이미지순서를 기록
            //setCurrentTransImage(imageList[current_image].learningImages);
            console.log('컷방식:', imageList[currentImageIndex].learningThumImages);
            setThumImg(imageList[currentImageIndex].learningThumImages);//썸네일이미지변경
            setTargetImg(images[currentImageIndex].src);//이미지확대축소 셋팅            
    
            //이미지를 지정된 시간만 노출 후 다음 이미지로 변경
            function displayNextImage() {

                setCurrentImage(currentImageIndex);//현재이미지순서를 기록
                //setCurrentTransImage(imageList[current_image].learningImages);
                setThumImg(imageList[currentImageIndex].learningThumImages);//썸네일이미지변경
                setTargetImg(images[currentImageIndex].src);//이미지확대축소 셋팅    
                
                start_time = Date.now();paused_time = 0;
                $(images[currentImageIndex]).hide();
                currentImageIndex++;
                if (currentImageIndex === images.length) {
                    setLearningEnd(true);
                    handleReset();                    
                    clearTimeout(timer); 
                    clearTimeout(timeout); 
                    //alert("시험이 종료되었습니다.");
                    setLearningEnd(true);
                    progressBar.stop();
                    progressBar.css({width: '0%'});
                    $("#learn02_bimg").hide();
                    is_learn02_play = false;
                } else {
                    $(images[currentImageIndex]).show();
                    $("#learn02_bimg").attr("src",$(images[currentImageIndex]).data('thum'));
                    updateProgressBar(learn_time);
                    timer = setTimeout(displayNextImage, learn_time);
                    clearTimeout(timeout); 
                    timeout = setTimeout(function() {
                        $(images[currentImageIndex]).hide();
                        currentImageIndex++;
                        if (currentImageIndex === images.length) {
                            clearTimeout(timer); 
                            //alert("시험이 종료되었습니다.");
                            setLearningEnd(true);
                            progressBar.stop();
                            progressBar.css({width: '0%'});
                            $("#learn02_bimg").hide();
                            is_learn02_play = false;
                        } else {
                            $(images[currentImageIndex]).show();
                            updateProgressBar(learn_time);
                            timer = setTimeout(displayNextImage, learn_time);
                        }
                    }, learn_time);
                }
            }
            
            //일시정지
            function pause() {
                clearTimeout(timer);
                clearTimeout(timeout);
                let progressBar = $('#learn02_progress');
                progressBar.stop();
                stop_time = Date.now();
            }
            //다시시작
            let paused_time = 0;
            function resume() {
                let remaining_time = learn_time - (stop_time - start_time) + paused_time;
                timer = setTimeout(displayNextImage, remaining_time);
                clearTimeout(timeout); 
                updateProgressBar(remaining_time, true);
                paused_time += Date.now() - stop_time;
            }
        
            //남은시간 게이지
            function updateProgressBar(duration, resume = false) {
                progressBar.stop();
                if(!resume) progressBar.css({width: '100%'});
                progressBar.animate({width: '0%'}, duration, 'linear');
            }
        
            //일시정지버튼을 눌렀을 때 처리
            $('#learn02_stop').click(function() {
                if(is_learn02_play){
                    if (status === 0) {
                        pause();
                        status=1;
                        $("#learn02_stop").addClass("lnbtc_btnon");
                    } else {
                        resume();
                        status=0;
                        $("#learn02_stop").removeClass("lnbtc_btnon");
                    }
                }
            });
    
            
            //Pass, Open, Prohibited 눌렀을 때 다음 이미지 보이게
            function learn02_btn(){
                if(is_learn02_play){
                    $(images[currentImageIndex]).hide();
                    currentImageIndex++;
                    start_time = Date.now();paused_time = 0;
                    $("#learn02_bimg").attr("src",$(images[currentImageIndex]).data('thum'));
            
                    if (currentImageIndex === images.length) {
                        clearTimeout(timer);
                        clearTimeout(timeout);
                        //alert("시험이 종료되었습니다.");
                        setLearningEnd(true);
                        progressBar.stop();
                        $("#learn02_bimg").hide();
                        progressBar.css({width: '0%'});
                        is_learn02_play = false;
                    } else {
                        // Show the next image and restart the timer
                        $(images[currentImageIndex]).show();
                        updateProgressBar(learn_time);
                        clearTimeout(timer);
                        clearTimeout(timeout);
                        status=0;
                        $("#learn02_stop").removeClass("lnbtc_btnon");
                        timer = setTimeout(displayNextImage, learn_time);

                        //문제출제수
                        let problrems = currentImageIndex+1;
                        setProblremCnt(problrems);                          
                    }
                }
            }
        
            //<====================
            //각각 버튼 눌렀을 때 처리할 부분
            //다음 이미지로 넘어가는 기능만 구현
            $("#learn02_pass").click(function() {
                learn02_btn();
            });
    
            $("#learn02_open").click(function() {
                learn02_btn();
            });
    
            $("#learn02_prohibited").click(function() {
                learn02_btn();
            });
            //====================>
        
            $(images).hide();
            $(images[currentImageIndex]).show();
            updateProgressBar(learn_time);
            timer = setTimeout(displayNextImage, learn_time);
            start_time = Date.now();
            paused_time = 0;
            $("#learn02_bimg").click(function(){
                let image_src = $(this).attr("src");
                $currentImage = $(images[currentImageIndex]);
                $(this).attr("src",$currentImage.attr('src'));
                $currentImage.attr("src",image_src);
                showImgControl('N');
            });
        });        

        console.log("useEffect!!!!!");
    },[]);


    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();

    //확대
    const targetZoomIn = () => {
        if (inputRef1.current) {
          inputRef1.current.dispatchEvent(new Event('click', { bubbles: true }));
        }
    }

    //축소
    const targetZoomOut = () => {
        if (inputRef2.current) {
          inputRef2.current.dispatchEvent(new Event('click', { bubbles: true }));
        }
    }

    //리셋
    const targetZoomReset = () => {
        if (inputRef3.current) {
          inputRef3.current.dispatchEvent(new Event('click', { bubbles: true }));
        }
    }    

    //이미지위치변경
    const targetReplaceImg = () => {
        if (inputRef4.current) {
            inputRef4.current.dispatchEvent(new Event('click', { bubbles: true }));
        }
    }    

    //하단 이미지컨트롤 아이콘 통합
    const imgTransControl = (e) =>{

        console.log('currentImage:', currentImage);
        setNowSelect(e);//현재선택된 아이콘

        if(e==='color1'){//컬러
            learningImages[currentImage].learningImages = transimages[currentImage].color;
            setImageList(learningImages);
        }else if(e==='color2'){//컬러유기물강조
            //console.log(imgRef.current);
            //imgRef.current = transimages[currentImage].colorUforce;
            //setTranTry(false);
            //setCurrentTransImage(transimages[currentImage].colorUforce);
            learningImages[currentImage].learningImages = transimages[currentImage].colorUforce;
            setImageList(learningImages);
        }else if(e==='color3'){//컬러무기물강조
            learningImages[currentImage].learningImages = transimages[currentImage].colorMforce;
            setImageList(learningImages);
        }else if(e==='color4'){//컬러반전
            learningImages[currentImage].learningImages = transimages[currentImage].colorRevers;
            setImageList(learningImages);
        }else if(e==='cd1'){//컬러채도1
            learningImages[currentImage].learningImages = transimages[currentImage].colorSaturation1;
            setImageList(learningImages);
        }else if(e==='cd2'){//컬러채도2
            learningImages[currentImage].learningImages = transimages[currentImage].colorSaturation2;
            setImageList(learningImages);
        }else if(e==='cd3'){//컬러채도3
            learningImages[currentImage].learningImages = transimages[currentImage].colorSaturation3;
            setImageList(learningImages);
        }else if(e==='cd4'){//컬러채도4
            learningImages[currentImage].learningImages = transimages[currentImage].colorSaturation4;
            setImageList(learningImages);
        }else if(e==='cd5'){//컬러채도5
            learningImages[currentImage].learningImages = transimages[currentImage].colorSaturation5;
            setImageList(learningImages);
        }else if(e==='cd6'){//컬러채도6
            learningImages[currentImage].learningImages = transimages[currentImage].colorSaturation6;
            setImageList(learningImages);            
        }else if(e==='blackWhite1'){//흑백
            learningImages[currentImage].learningImages = transimages[currentImage].blackWhite;
            setImageList(learningImages);
        }else if(e==='blackWhite2'){//흑백유기물강조
            learningImages[currentImage].learningImages = transimages[currentImage].blackWhiteUforce;
            setImageList(learningImages);
        }else if(e==='blackWhite3'){//흑백무기물강조
            learningImages[currentImage].learningImages = transimages[currentImage].blackWhiteMforce;
            setImageList(learningImages);
        }else if(e==='blackWhite4'){//흑백반전
            learningImages[currentImage].learningImages = transimages[currentImage].blackWhiteRevers;
            setImageList(learningImages);
        }else if(e==='cd7'){//흑백채도1
            learningImages[currentImage].learningImages = transimages[currentImage].blackWhiteSaturation1;
            setImageList(learningImages);
        }else if(e==='cd8'){//흑백채도2
            learningImages[currentImage].learningImages = transimages[currentImage].blackWhiteSaturation2;
            setImageList(learningImages);
        }else if(e==='cd9'){//흑백채도3
            learningImages[currentImage].learningImages = transimages[currentImage].blackWhiteSaturation3;
            setImageList(learningImages);
        }else if(e==='cd10'){//흑백채도4
            learningImages[currentImage].learningImages = transimages[currentImage].blackWhiteSaturation4;
            setImageList(learningImages);
        }else if(e==='cd11'){//흑백채도5
            learningImages[currentImage].learningImages = transimages[currentImage].blackWhiteSaturation5;
            setImageList(learningImages);
        }else if(e==='cd12'){//흑백채도6
            learningImages[currentImage].learningImages = transimages[currentImage].blackWhiteSaturation6;
            setImageList(learningImages);
        }
    }

    //메인페이지 이동
    const onMovePage = () =>{
        navigate("/main");            
    }

    return(
        <>

            {/* wrap */}
            <div id="wrap" className="mbg">
                {/* wlayer */}
                <div id="wlayer">

                    {/* 네비넣는곳 시작*/}
                    <Navi/>
                    {/* 네비넣는곳 끝*/}

                    {/* mcontent */}
                    <div className="mcontent">


                        {/* 학습시작-컷 타입 */}
                        <div id="second-modal" className="modal-wrapper modal_blur">
                            <div className="modal xbt_md">
                                {/* learn_con */}
                                <div className="learn_con">
                                    {/* xbt_top */}
                                    <div className="xbt_top">
                                        {/* learnct01 */}
                                        <div className="learnct01">
                                            <ul>
                                                <li>
                                                    <h1 className="contit">학습</h1>
                                                </li>
                                                <li>
                                                    <h3>X-ray 판독 초급 2023 - 1차</h3>
                                                </li>
                                                <li>
                                                    <h2 className="conname pr30">홍길동</h2>
                                                    <button type="button" onClick={()=>setParacticeShow(true)} className="conbtn01">반입금지물품</button>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* learnct02 */}
                                        <div className="learnct02">
                                            <ul>
                                                <li className="learntit_con">
                                                    <div className="learntit">OR Normal</div>
                                                    <div className="learntit">Front</div>
                                                    <div className="learntit">레벨 : 1</div>
                                                </li>
                                                <li className="learnct02_center">
                                                    <div className="question">문항 <span>{problremCnt}/5</span></div>
                                                    <div className="question_box">
                                                        <dl>
                                                            <dd className="qsbox">{formatMinuite()}</dd>
                                                            <dd className="qsb_pd">:</dd>
                                                            <dd className="qsbox">{formatSeconds()}</dd>
                                                        </dl>
                                                    </div>
                                                </li>
                                                <li>
                                                    <button className="learnbtn btn_start" id="learn02_start" type="button">시작</button>
                                                    <button className="learnbtn btn_end" id="learn02_start_on" type="button">시작</button>
                                                    <button id="close-second-modal" data-mact="close" data-minfo="second-modal" className="modal_btn learnbtn btn_end">종료</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* learnc_img 컷방식*/}
                                    <div className="learnc_img" id="learn02_img" style={{height:"520px", display:imgSlideDisplay}}>
                                        <div id="learn02_progress"></div>
                                        {
                                            imageList.map((target, index) => ([
                                                <img src={target.learningImages} data-thum={target.learningThumImages} className="image" alt="image" />
                                            ]))
                                        }                                                                     
                                    </div>

                                    <div className="learnc_img_sub" id="learn02_img_sub" style={{ textAlign:"center !important", width: "100%", height: "520px", display:imgDisplay}}>
                                        <TransformWrapper
                                            initialScale={1}
                                            minScale= {0.5}
                                            maxScale= {10}                                            
                                            initialPositionX={200}
                                            initialPositionY={100}
                                            alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
                                            centerZoomedOut={true}
                                            //limitToBounds={true}
                                            >
                                            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                                <React.Fragment>

                                                <div className="tools" style={{visibility:"hidden"}}>
                                                    <button ref={inputRef1} onClick={() => zoomIn()}>+</button>
                                                    <button ref={inputRef2} onClick={() => zoomOut()}>-</button>
                                                    <button ref={inputRef3} onClick={() => resetTransform()}>x</button>
                                                </div>
                                                <TransformComponent>
                                                    <img src={targetImg} className="image" alt="image" style={{ width: "100%", height: "100%" }}/>
                                                </TransformComponent>
                                                </React.Fragment>
                                            )}
                                        </TransformWrapper>    
                                    </div>               

                                </div>
                                {/* learn_bottom */}
                                <div className="learn_bottom">
                                    {/* learn_btcon */}
                                    <div className="learn_btcon">
                                        {/* learnbtc01 이미지컨트롤 아이콘 영역*/}
                                        {/* learnbtc01 이미지컨트롤 아이콘 영역*/}
                                        <div className="learnbtc01">
                                            <ul>
                                                <li><a href="#" onClick={()=>{showImgControl('N');imgTransControl('color1')}}><img src={learnc_ic01_01} alt=""/></a></li>
                                                <li><a href="#" onClick={()=>{showImgControl('N');imgTransControl('color2')}}><img src={learnc_ic01_02} alt=""/></a></li>
                                                <li><a href="#" onClick={()=>{showImgControl('N');imgTransControl('color3')}}><img src={learnc_ic01_03} alt=""/></a></li>
                                                <li><a href="#" onClick={()=>{showImgControl('N');imgTransControl('color4')}}><img src={learnc_ic01_04} alt=""/></a></li>
                                                <li><a href="#" onClick={()=>{showImgControl('N');imgTransControl('blackWhite1')}}><img src={learnc_ic02_01} alt=""/></a></li>
                                                <li><a href="#" onClick={()=>{showImgControl('N');imgTransControl('blackWhite2')}}><img src={learnc_ic02_02} alt=""/></a></li>
                                                <li><a href="#" onClick={()=>{showImgControl('N');imgTransControl('blackWhite3')}}><img src={learnc_ic02_03} alt=""/></a></li>
                                                <li><a href="#" onClick={()=>{showImgControl('N');imgTransControl('blackWhite4')}}><img src={learnc_ic02_04} alt=""/></a></li>
                                            </ul>
                                        </div>
                                        {/* learnbtc02 이미지 채도 아이콘 영역*/}
                                        <div className="learnbtc02">
                                            <ul>
                                                <li><a href="#" className={nowSelect==='cd1' ? 'on' : ''} onClick={()=>{showImgControl('N');imgTransControl('cd1')}}><span className="brig_ic01_01"></span></a></li>
                                                <li><a href="#" className={nowSelect==='cd2' ? 'on' : ''} onClick={()=>{showImgControl('N');imgTransControl('cd2')}}><span className="brig_ic01_02"></span></a></li>
                                                <li><a href="#" className={nowSelect==='cd3' ? 'on' : ''} onClick={()=>{showImgControl('N');imgTransControl('cd3')}}><span className="brig_ic01_03"></span></a></li>
                                                <li><a href="#" className={nowSelect==='cd4' ? 'on' : ''} onClick={()=>{showImgControl('N');imgTransControl('cd4')}}><span className="brig_ic01_04"></span></a></li>
                                                <li><a href="#" className={nowSelect==='cd5' ? 'on' : ''} onClick={()=>{showImgControl('N');imgTransControl('cd5')}}><span className="brig_ic01_05"></span></a></li>
                                                <li><a href="#" className={nowSelect==='cd6' ? 'on' : ''} onClick={()=>{showImgControl('N');imgTransControl('cd6')}}><span className="brig_ic01_06"></span></a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="#" className={nowSelect==='cd7' ? 'on' : ''} onClick={()=>{showImgControl('N');imgTransControl('cd7')}}><span className="brig_ic02_01"></span></a></li>
                                                <li><a href="#" className={nowSelect==='cd8' ? 'on' : ''} onClick={()=>{showImgControl('N');imgTransControl('cd8')}}><span className="brig_ic02_02"></span></a></li>
                                                <li><a href="#" className={nowSelect==='cd9' ? 'on' : ''} onClick={()=>{showImgControl('N');imgTransControl('cd9')}}><span className="brig_ic02_03"></span></a></li>
                                                <li><a href="#" className={nowSelect==='cd10' ? 'on' : ''} onClick={()=>{showImgControl('N');imgTransControl('cd10')}}><span className="brig_ic02_04"></span></a></li>
                                                <li><a href="#" className={nowSelect==='cd11' ? 'on' : ''} onClick={()=>{showImgControl('N');imgTransControl('cd11')}}><span className="brig_ic02_05"></span></a></li>
                                                <li><a href="#" className={nowSelect==='cd12' ? 'on' : ''} onClick={()=>{showImgControl('N');imgTransControl('cd12')}}><span className="brig_ic02_06"></span></a></li>
                                            </ul>
                                        </div>
                                        {/* learnbtc03 */}
                                        <div className="learnbtc03">
                                            <ul>
                                                <li><a href="#" onClick={()=>{showImgControl('Y');targetZoomIn()}}><img src={glas_plus} alt="이미지 확대"/></a></li>
                                                <li><a href="#" onClick={()=>{targetReplaceImg()}}><img src={transform} alt="이미지 반전"/></a></li>
                                                <li><a href="#" onClick={()=>{showImgControl('Y');targetZoomOut()}}><img src={glas_minus} alt="이미지 축소"/></a></li>
                                                <li><a href="#" onClick={()=>{showImgControl('Y');targetZoomReset()}}><img src={restoration} alt="이미지 reset"/></a></li>
                                            </ul>
                                        </div>
                                        {/* learnbtc04 */}
                                        <div className="learnbtc04">
                                            <ul>
                                                <li>
                                                    <button className="lnbtc_btn lnbtc_btnon next" id="learn02_pass" type="button">
                                                        <span><img src={pass} alt=""/></span>
                                                        <p>Pass</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="lnbtc_btn lnbtc_btnon" id="learn02_open" type="button">
                                                        <span><img src={open} alt=""/></span>
                                                        <p>Open</p>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="lnbtc_btn lnbtc_btnon" id="learn02_prohibited" type="button">
                                                        <span><img src={prohibited} alt=""/></span>
                                                        <p>Prohibited</p>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* learnbtc05 */}
                                        <div className="learnbtc05">
                                            <button className="lnbtc_btn stop" id="learn02_stop" type="button">
                                                <span><img src={stop} alt=""/></span>
                                                <p>Stop</p>
                                            </button>
                                        </div>
                                        {/* learnbtc06 측면이미지 */}
                                        <div className="learnbtc06" >
                                            <img src={thumImg} ref={inputRef4} id="learn02_bimg" style={{display:"none"}} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 완료 */}
                        {learningEnd && (<div id="eig-modal" className="modal-wrapper modal_blind" style={{display: "block"}}>
                            <div className="modal learn_scwd">
                            <div className="scwd_txt01">
                                        <h1>
                                            학습을 마쳤습니다.
                                        </h1>
                                    </div>
                                    <div className="scwd_txt02">
                                        <p>학습이 끝났습니다. 수고하셨습니다.</p>
                                    </div>
                                <button id="open-six-modal" onClick={()=>{setLearningEnd(false);navigate("/main")}} data-mact="open" data-minfo="six-modal" className="modal_btn conbtn01">확인</button>
                                <button id="close-eig-modal" onClick={()=>{setLearningEnd(false);navigate("/main")}} data-mact="close" data-minfo="eig-modal" className="modal_btn close_btn02"></button>
                            </div>
                        </div>
                        )} 

                        {paracticeShow && <PracticeList displayy = {paracticeShow} displayn = {displayn}/>}
                    </div>
                </div>
                <Copy/>
            </div>     

        </>
    );
};