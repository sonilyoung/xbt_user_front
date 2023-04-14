/* eslint-disable */
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {Score01} from './Score01';
import {Score02} from './Score02';
import {Score03} from './Score03';

import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';
import 'assets/css/frontMain.css';
import 'assets/css/main.css';
import {Navi} from '../Navi';
import {Copy} from '../Copy';
import {Loading} from '../Loading';

export const FrontMain = () => {
    const [loading, setLoading] = useState(false);
    const [mContents, setMcontents] = useState(false);//메인팝업창
    const [selectMenu, setSelectMenu] = useState();//메뉴선택상태
    const [scoreContens, setScoreContens] = useState();//화면
    const navigate = useNavigate();


    //학습페이지 이동
    const movePage = (e) =>{
        if(e==='Learning'){//학습페이지
            navigate("/Learning");            
        }else if(e==='practice'){
            navigate("/practice");            
        }
    }    

    useEffect(()=>{
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
    },[])


    return (
        <>
            {/* wrap */}
            <div id="wrap" className="mbg mbg_none">
                
                <Navi/>

                {/* wlayer */}
                <div id="wlayer">
                    {/* mcontent */}
                    <div className="mcontent">
                        {/* main_con */}
                        <div className="main_con">
                            {/* main_left */}
                            <div className="main_left">
                                {/* main_info */}
                                <div className="main_info">
                                    <div className="minfo_top">
                                        {/*<p>X-ray 판독 초급 2023 - 1차</p>
                                        <h3>홍길동</h3>*/}

                                        <p>X-ray Screening Beginner 2023 - 1st</p>
                                        <h3>David Fincher</h3>
                                        
                                    </div>
                                    {/*<button id="open-one-md" onClick={()=>{setMcontents(true);setSelectMenu('score01')}} data-mact="open" data-minfo="one-md" className="edu_btn modal_btn">교육정보</button>*/}
                                    <button id="open-one-md" onClick={()=>{setMcontents(true);setSelectMenu('score01')}} data-mact="open" data-minfo="one-md" className="edu_btn modal_btn">Training Information</button>
                                </div>
                                {/* mnotice */}
                                <div className="mnotice">
                                    {/* nnc_top */}
                                    <div className="nnc_top">
                                        <h1>Notice</h1>
                                        <button id="open-two-md" data-mact="open" data-minfo="two-md" className="nnct_plus modal_btn">
                                            <img src={require('assets/images/main/plus.png')} alt=""/>
                                        </button>
                                    </div>
                                    {/* notice_list */}
                                    <ul className="notice_list">
                                        <li>
                                            <button id="open-two-md" data-mact="open" data-minfo="two-md" className="modal_btn">
                                                {/*<p className="tit">데이터 점검으로 인한 접속제한</p>*/}
                                                <p className="tit">System access is temporarily restricted due to data check</p>
                                                <p className="date">2022-09-18</p>
                                            </button>
                                        </li>
                                        <li>
                                            <button id="open-two-md" data-mact="open" data-minfo="two-md" className="modal_btn">
                                                {/*<p className="tit">개인정보 보호를 위해 PC 로그</p>*/}
                                                <p className="tit">In order for privacy, PC login</p>
                                                <p className="date">2022-09-18</p>
                                            </button>
                                        </li>
                                        <li>
                                            <button id="open-two-md" data-mact="open" data-minfo="two-md" className="modal_btn">
                                                {/*<p className="tit">교육생 데스트 일정 공지</p>*/}
                                                <p className="tit">Notice of trainee test schedule</p>
                                                <p className="date">2022-09-10</p>
                                            </button>
                                        </li>
                                        <li>
                                            <button id="open-two-md" data-mact="open" data-minfo="two-md" className="modal_btn">
                                                {/*<p className="tit">9월 교육 일정 안내</p>*/}
                                                <p className="tit">Notice of training schedule for Sep</p>
                                                <p className="date">2022-08-23</p>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* main_right */}
                            <div className="main_right">
                                {/* mr_con */}
                                <div className="mr_con">
                                    {/* mrcon_tit */}
                                    <div className="mrcon_tit">
                                        <h1>
                                            X-ray <span>Reading</span>
                                        </h1>
                                    </div>
                                    {/* mrcon_tit */}
                                    <div className="mrcon_ic">
                                        <ul>
                                            <li>
                                                <button id="open-two-md" onClick={()=>movePage('practice')}  data-mact="open" data-minfo="two-md">
                                                    <div className="circle">
                                                        <img src={require('assets/images/main/xrayrd_ic01.png')} alt=""/>
                                                    </div>
                                                    {/*<p>물품연습</p>*/}
                                                    <p>Item practice</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button id="open-two-md" onClick={()=>movePage('Learning')} data-mact="open" data-minfo="two-md">
                                                    <div className="circle">
                                                        <img src={require('assets/images/main/xrayrd_ic02.png')} alt=""/>
                                                    </div>
                                                    {/*<p>학습</p>*/}
                                                    <p>Learning</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button id="open-two-md" data-mact="open" data-minfo="two-md">
                                                    <div className="circle">
                                                        <img src={require('assets/images/main/xrayrd_ic03.png')} alt=""/>
                                                    </div>
                                                    {/*<p>AI 강화학습</p>*/}
                                                    <p>AI Reinforcement Learning</p>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* mr_con */}
                                <div className="mr_con">
                                    {/* mrcon_tit */}
                                    <div className="mrcon_tit">
                                        <h1>
                                            Learning
                                        </h1>
                                    </div>
                                    {/* mrcon_tit */}
                                    <div className="mrcon_ic">
                                        <ul>
                                            <li>
                                                <button id="open-two-md" data-mact="open" data-minfo="two-md">
                                                    <div className="circle">
                                                        <img src={require('assets/images/main/learn_ic01.png')} alt=""/>
                                                    </div>
                                                    {/* <p>오답문제 풀이</p>*/}
                                                    <p>Solving for wrong answered problems</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button id="open-two-md" data-mact="open" data-minfo="two-md">
                                                    <div className="circle">
                                                        <img src={require('assets/images/main/learn_ic02.png')} alt=""/>
                                                    </div>
                                                    {/*<p>반입금지 물품연습</p>*/}
                                                    <p>Prohibited item practice</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button id="open-two-md" data-mact="open" data-minfo="two-md">
                                                    <div className="circle">
                                                        <img src={require('assets/images/main/learn_ic03.png')} alt=""/>
                                                    </div>
                                                    {/*<p>평가</p>*/}
                                                    <p>Evaluation</p>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* mr_con */}
                                <div className="mr_con">
                                    {/* mrcon_tit */}
                                    <div className="mrcon_tit">
                                        <h1>
                                            Actual <span>Cases</span>
                                        </h1>
                                    </div>
                                    {/* mrcon_tit */}
                                    <div className="mrcon_ic">
                                        <ul>
                                            <li>
                                                <button id="open-two-md" data-mact="open" data-minfo="two-md">
                                                    <div className="circle">
                                                        <img src={require('assets/images/main/actual_ic01.png')} alt=""/>
                                                    </div>
                                                    {/*<p>실제 사례</p>*/}
                                                    <p>Real case</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button id="open-two-md" data-mact="open" data-minfo="two-md">
                                                    <div className="circle">
                                                        <img src={require('assets/images/main/actual_ic02.png')} alt=""/>
                                                    </div>
                                                    {/*<p>물품분류변경</p>*/}
                                                    <p>Item classification change</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button id="open-two-md" data-mact="open" data-minfo="two-md">
                                                    <div className="circle">
                                                        <img src={require('assets/images/main/actual_ic03.png')} alt=""/>
                                                    </div>
                                                    {/*<p>물품분류연습</p>*/}
                                                    <p>Item classification practice</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button id="open-two-md" data-mact="open" data-minfo="two-md">
                                                    <div className="circle">
                                                        <img src={require('assets/images/main/actual_ic04.png')} alt=""/>
                                                    </div>
                                                    {/*<p>물품분류평가</p>*/}
                                                    <p>Item classification evaluation</p>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* mr_con */}
                                <div className="mr_con">
                                    {/* mrcon_tit */}
                                    <div className="mrcon_tit">
                                        <h1>
                                            Theory
                                        </h1>
                                    </div>
                                    {/* mrcon_tit */}
                                    <div className="mrcon_ic">
                                        <ul>
                                            <li>
                                                <button id="open-two-md" data-mact="open" data-minfo="two-md">
                                                    <div className="circle">
                                                        <img src={require('assets/images/main/theory_ic01.png')} alt=""/>
                                                    </div>
                                                    {/*<p>이론 I</p>*/}
                                                    <p>Theory I</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button id="open-two-md" data-mact="open" data-minfo="two-md">
                                                    <div className="circle">
                                                        <img src={require('assets/images/main/xrayrd_ic01.png')} alt=""/>
                                                    </div>
                                                    {/*<p>이론 II</p>*/}
                                                    <p>Theory II</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button id="open-two-md" data-mact="open" data-minfo="two-md">
                                                    <div className="circle">
                                                        <img src={require('assets/images/main/xrayrd_ic01.png')} alt=""/>
                                                    </div>
                                                    {/*<p>설문조사</p>*/}
                                                    <p>Survey</p>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="one-md" className="modal-wrapper modal_blur">
                            <div className="modal xbt_md">
                                {/* xbt_content */}
                                <div className="xbt_content">
                                    {/* xbt_top */}
                                    <div className="xbt_top">
                                        {/* xbttop02 */}
                                        <div className="xbttop01">
                                            <ul>
                                                <li>
                                                    {/*<h1 className="contit">교육정보</h1> */}
                                                    <h1 className="contit">Training Information</h1>
                                                </li>
                                                <li>
                                                    {/*탭 메뉴 */}
                                                    <div id="layer_menu">
                                                        <ul>
                                                            {/*
                                                            <li><button type="button" onClick={()=>setSelectMenu('score01')} data-filename="score01" className={selectMenu==='score01' ? 'on': ''}>학습점수조회</button></li>
                                                            <li><button type="button" onClick={()=>setSelectMenu('score02')} data-filename="score02" className={selectMenu==='score02' ? 'on': ''}>교육평가조회</button></li>
                                                            <li><button type="button" onClick={()=>setSelectMenu('score03')} data-filename="score03" className={selectMenu==='score03' ? 'on': ''}>오답조회</button></li>
                                                            */}

                                                            <li><button type="button" onClick={()=>setSelectMenu('score01')} data-filename="score01" className={selectMenu==='score01' ? 'on': ''}>Learning score inquiry</button></li>
                                                            <li><button type="button" onClick={()=>setSelectMenu('score02')} data-filename="score02" className={selectMenu==='score02' ? 'on': ''}>Training evaluation inquiry</button></li>
                                                            <li><button type="button" onClick={()=>setSelectMenu('score03')} data-filename="score03" className={selectMenu==='score03' ? 'on': ''}>Wrong answers inquiry</button></li>                                                            
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                            {/* score_img */}
                                            <div className="score_img conbox_sty conbox_pd01 mt20">
                                                <div id="tab_div">
                                                    {
                                                        selectMenu === 'score01' ? <Score01/>
                                                        : selectMenu === 'score02' ? <Score02/>
                                                        : selectMenu === 'score03' ? <Score03/>
                                                        : ''
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <button id="close-one-md" onClick={()=>setMcontents(false)} data-mact="close" data-minfo="one-md" class="modal_btn close_btn"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="two-md" className="modal-wrapper modal_blur">
                        <div className="modal notice_md">
                            {/* xbt_content */}
                            <div className="xbt_content">
                                {/* xbt_top */}
                                <div className="xbt_top">
                                    <div className="md_notice">
                                        {/* mdnc_top */}
                                        <div className="mdnc_top">
                                            <h1>Notice</h1>
                                        </div>
                                        {/* bbslist */}
                                        <table className="bbslist">
                                            <caption className="screen-hide"></caption>
                                            <colgroup>
                                                <col style={{width: "15%"}}/>
                                                <col style={{width: "70%"}}/>
                                                <col style={{width: "15%"}}/>
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th scope="col">No.</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="num">
                                                        1
                                                    </td>
                                                    <td className="al-Left">
                                                        <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                            {/*데이터 점검으로 인한 접속제한*/}
                                                            System access is temporarily restricted due to data check
                                                        </button>
                                                    </td>
                                                    <td className="Date">
                                                        2023-03-18
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="num">
                                                        2
                                                    </td>
                                                    <td className="al-Left">
                                                        <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                            {/*개인정보 보호를 위해 PC 로그*/}
                                                            In order for privacy, PC login
                                                        </button>
                                                    </td>
                                                    <td className="Date">
                                                        2023-03-15
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="num">
                                                        3
                                                    </td>
                                                    <td className="al-Left">
                                                        <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                            {/*교육생 데스트 일정 공지*/}
                                                            Notice of trainee test schedule
                                                        </button>
                                                    </td>
                                                    <td className="Date">
                                                        2023-03-14
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="num">
                                                        4
                                                    </td>
                                                    <td className="al-Left">
                                                        <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                            {/*9월 교육 일정 안내*/}
                                                            Notice of training schedule for Sep.
                                                        </button>
                                                    </td>
                                                    <td className="Date">
                                                        2023-03-14
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="num">
                                                        5
                                                    </td>
                                                    <td className="al-Left">
                                                        <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                            {/*공지사항 테스트 입력*/}
                                                            Input test of notice.
                                                        </button>
                                                    </td>
                                                    <td className="Date">
                                                        2023-03-14
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="num">
                                                        6
                                                    </td>
                                                    <td className="al-Left">
                                                        <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                            {/*AI 판독평가 관련 자료*/}
                                                            AI reading evaluation data.
                                                        </button>
                                                    </td>
                                                    <td className="Date">
                                                        2023-03-11
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="num">
                                                        7
                                                    </td>
                                                    <td className="al-Left">
                                                        <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                            {/*2023년 교육생 교육일정 안내 정보*/}
                                                            Information on 2023 training schedule.
                                                        </button>
                                                    </td>
                                                    <td className="Date">
                                                        2023-03-10
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="num">
                                                        8
                                                    </td>
                                                    <td className="al-Left">
                                                        <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                            {/*테스트 공지사항 입니다.*/}
                                                            Test notice.
                                                        </button>
                                                    </td>
                                                    <td className="Date">
                                                        2023-03-06
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="num">
                                                        9
                                                    </td>
                                                    <td className="al-Left">
                                                        <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                            {/*사이트 점검으로 인해 접속이 제한됨을 알려드립니다.*/}
                                                            System access is temporarily restricted due to site check.
                                                        </button>
                                                    </td>
                                                    <td className="Date">
                                                        2023-03-03
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="num">
                                                        10
                                                    </td>
                                                    <td className="al-Left">
                                                        <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                            {/*교육 테스트 입니다.*/}
                                                            This is training test.
                                                        </button>
                                                    </td>
                                                    <td className="Date">
                                                        2023-03-01
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* bbs_pagi */}
                                        <div className="bbs_pagi">
                                            <ul>
                                                <li><a href="#" className="page_prev"><span><img src="assets/images/main/larrow.svg" alt=""/></span></a></li>
                                                <li className="active"><a href="#" className="page_current"><span>1</span></a></li>
                                                <li><a href="#"><span>2</span></a></li>
                                                <li><a href="#"><span>3</span></a></li>
                                                <li><a href="#"><span>4</span></a></li>
                                                <li><a href="#"><span>5</span></a></li>
                                                <li><a href="#" className="page_next"><span><img src="assets/images/main/rarrow.svg" alt=""/></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button id="close-two-md" data-mact="close" data-minfo="two-md" className="modal_btn close_btn"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="thr-md" className="modal-wrapper modal_blur">
                        <div className="modal noticerw_md">
                            {/* xbt_content */}
                            <div className="xbt_content">
                                {/* xbt_top */}
                                <div className="xbt_top">
                                    {/* mdnc_top */}
                                    <div className="mdnc_top">
                                        <h1>Notice</h1>
                                    </div>
                                    <button id="close-thr-md" data-mact="close" data-minfo="thr-md" className="modal_btn close_btn"></button>
                                </div>
                                <div className="con_table noticerw_sr scrollbar height360">
                                    {/* noticerw_top */}
                                    <div className="noticerw_top">
                                        {/*<h1>9월 교육일정 안내</h1>*/}
                                        <h1>Training schedule for September</h1>
                                        <span>2023-03-14</span>
                                    </div>
                                    {/* noticerw_con */}
                                    <div className="noticerw_con">
                                        <p>
                                            {/*안녕하세요! 00000 본부입니다.<br/>
                                            9월 교육 일정 아래와 같이 안내해드리니 참조 부탁드립니다.<br/><br/>
                                            9월 교육일정<br/><br/>
                                            1. 신입교육일정<br/>
                                            일시 : 2023년 9월 00일 ~ 9월 00일(30일간, 매일 오전 9시)<br/>
                                            장소 : 00회관 00본부<br/>
                                            교육내용 : 000에 따른 0000 와 0000에 대한 신입교육<br/>
                                            문의 :  000-0000-0000 (담당자: 홍길동)<br/><br/>
                                                내용 더 들어 갈꺼임*/}

                                            Greetings, this is OOOOO Division.<br/>
                                            Please refer to following training schedule for September<br/><br/>
                                            Training schedule for September<br/><br/>
                                            Training schedule for new trainee<br/>
                                            Date: Sep. 00, 2023~Sep, 00, 2023(30 days, ~9;00am)<br/>
                                            Location: 00 building, 00 division<br/>
                                            Training contens: Training for new trainee in accordance with a and B<br/>
                                            Contact: 000-0000-0000 (pic: Hong gil-dong)


                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Copy/>
            </div>
            {loading &&(<Loading/>)}
        </>
    );
};