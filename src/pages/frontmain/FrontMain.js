/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Table, Form, Row, Col, Modal } from 'antd';
import { Typography } from '@mui/material';

// Notice 이미지
import main_plus from '../../images/main/plus.png';

// X-ray 메뉴 이미지
import xrayrd_01 from '../../images/main/xrayrd_ic01.png';
import xrayrd_02 from '../../images/main/xrayrd_ic02.png';
import xrayrd_03 from '../../images/main/xrayrd_ic03.png';

// learning 메뉴 이미지
import learn_01 from '../../images/main/learn_ic01.png';
import learn_02 from '../../images/main/learn_ic02.png';
import learn_03 from '../../images/main/learn_ic03.png';

// actual cases 메뉴 이미지
import actual_01 from '../../images/main/actual_ic01.png';
import actual_02 from '../../images/main/actual_ic02.png';
import actual_03 from '../../images/main/actual_ic03.png';
import actual_04 from '../../images/main/actual_ic04.png';

// theory 메뉴 이미지
import theory_01 from '../../images/main/theory_ic01.png';
import theory_02 from '../../images/main/theory_ic02.png';
import theory_03 from '../../images/main/theory_ic03.png';

// 교육정보
import { EduInfo } from 'pages/eduinfo';
// Notice
import { NoticeList } from 'pages/notice';
// 물품연습
import { Practice } from 'pages/practice';
// 학습
import { LearningS } from 'pages/learning/LearningS'; // 슬라이드 방식
import { LearningC } from 'pages/learning/LearningC'; // 컷 방식

export const FrontMain = () => {
    const { confirm } = Modal;
    const [form] = Form.useForm();
    const [ModalOpen, setModalOpen] = useState(false); // 메뉴 Modal창
    const [eiModalOpen, setEiModalOpen] = useState(false); // 교육정보 Modal창
    const [nlModalOpen, setNlModalOpen] = useState(false); // Notice List Modal창
    const [loading, setLoading] = useState(false);
    const [eiloading, setEiLoading] = useState(false);
    const [nlLoading, setNlLoading] = useState(false);
    const [menutitle, setMenutitle] = useState('');
    const [menuValue, setMenuValue] = useState('');
    // 메뉴 Modal 이벤트처리 Start
    const Menus_Modal = (MenuNumber) => {
        if (MenuNumber === '0') {
            setMenutitle('물품연습');
        } else if (MenuNumber === '11') {
            setMenutitle('학습-슬라이드');
        } else if (MenuNumber === '12') {
            setMenutitle('학습-컷');
        } else if (MenuNumber === '2') {
            setMenutitle('IA강화학습');
        } else if (MenuNumber === '3') {
            setMenutitle('오답문제 풀이');
        } else if (MenuNumber === '4') {
            setMenutitle('반입금지 물품연습');
        } else if (MenuNumber === '5') {
            setMenutitle('평가');
        } else if (MenuNumber === '6') {
            setMenutitle('실제 사례');
        } else if (MenuNumber === '7') {
            setMenutitle('물품분류변경');
        } else if (MenuNumber === '8') {
            setMenutitle('물품분류연습');
        } else if (MenuNumber === '9') {
            setMenutitle('물품분류평가');
        } else if (MenuNumber === '10') {
            setMenutitle('이론I');
        } else if (MenuNumber === '11') {
            setMenutitle('이론II');
        } else if (MenuNumber === '12') {
            setMenutitle('설문조사');
        }
        setMenuValue(MenuNumber);
        setModalOpen(true);
        setLoading(true);
    };

    const handleOk = () => {
        setModalOpen(false);
    };

    const handleCancel = () => {
        setModalOpen(false);
    };
    // 메뉴 Modal 이벤트처리 End

    // 교육정보 Modal 이벤트처리 Start
    const Eduinfo_Modal = () => {
        setEiModalOpen(true);
        setEiLoading(true);
    };

    const eihandleOk = () => {
        setEiModalOpen(false);
    };

    const eihandleCancel = () => {
        setEiModalOpen(false);
    };
    // 교육정보 Modal 이벤트처리 End

    // Notice List Modal 이벤트처리 Start
    const NoticeList_Modal = () => {
        setNlModalOpen(true);
        setNlLoading(true);
    };

    const nlhandleOk = () => {
        setNlModalOpen(false);
    };

    const nlhandleCancel = () => {
        setNlModalOpen(false);
    };
    // Notice List Modal 이벤트처리 End

    return (
        <>
            <div id="wrap" className="mbg mbg_none">
                <div className="tgnb">
                    <Typography variant="h1">
                        X-ray Security <span>Training</span>
                    </Typography>
                    <nav className="util">
                        <a href="#">로그아웃</a>
                    </nav>
                </div>
                <div id="wlayer">
                    <div className="mcontent">
                        <div className="main_con">
                            <div className="main_left">
                                <div className="main_info">
                                    <div className="minfo_top">
                                        <p>X-ray 판독 초급 2023 - 1차</p>
                                        <h3>홍길동</h3>
                                    </div>
                                    <button className="edu_btn modal_btn" onClick={() => Eduinfo_Modal()}>
                                        교육정보
                                    </button>
                                </div>
                                <div className="mnotice">
                                    <div className="nnc_top">
                                        <h1>Notice</h1>
                                        <button className="nnct_plus modal_btn" onClick={() => NoticeList_Modal()}>
                                            <img src={main_plus} alt="" />
                                        </button>
                                    </div>
                                    <ul className="notice_list">
                                        <li>
                                            <button className="modal_btn">
                                                <p className="tit">데이터 점검으로 인한 접속제한</p>
                                                <p className="date">2022-09-18</p>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="modal_btn">
                                                <p className="tit">개인정보 보호를 위해 PC 로그</p>
                                                <p className="date">2022-09-18</p>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="modal_btn">
                                                <p className="tit">교육생 데스트 일정 공지</p>
                                                <p className="date">2022-09-10</p>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="modal_btn">
                                                <p className="tit">9월 교육 일정 안내</p>
                                                <p className="date">2022-08-23</p>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="main_right">
                                <div className="mr_con">
                                    <div className="mrcon_tit">
                                        <Typography variant="h1">
                                            X-ray <span>Reading</span>
                                        </Typography>
                                    </div>
                                    <div className="mrcon_ic">
                                        <ul>
                                            <li>
                                                <button onClick={() => Menus_Modal('0')}>
                                                    <div className="circle">
                                                        <img src={xrayrd_01} alt="" />
                                                    </div>
                                                    <p>물품연습</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => Menus_Modal('11')}>
                                                    <div className="circle">
                                                        <img src={xrayrd_02} alt="" />
                                                    </div>
                                                    <p>학습(슬라이드)</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => Menus_Modal('12')}>
                                                    <div className="circle">
                                                        <img src={xrayrd_02} alt="" />
                                                    </div>
                                                    <p>학습(컷)</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => Menus_Modal('2')}>
                                                    <div className="circle">
                                                        <img src={xrayrd_03} alt="" />
                                                    </div>
                                                    <p>AI 강화학습</p>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mr_con">
                                    <div className="mrcon_tit">
                                        <Typography variant="h1">Learning</Typography>
                                    </div>
                                    <div className="mrcon_ic">
                                        <ul>
                                            <li>
                                                <button onClick={() => Menus_Modal('3')}>
                                                    <div className="circle">
                                                        <img src={learn_01} alt="" />
                                                    </div>
                                                    <p>오답문제 풀이</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => Menus_Modal('4')}>
                                                    <div className="circle">
                                                        <img src={learn_02} alt="" />
                                                    </div>
                                                    <p>반입금지 물품연습</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => Menus_Modal('5')}>
                                                    <div className="circle">
                                                        <img src={learn_03} alt="" />
                                                    </div>
                                                    <p>평가</p>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mr_con">
                                    <div className="mrcon_tit">
                                        <Typography variant="h1">
                                            Actual <span>Cases</span>
                                        </Typography>
                                    </div>
                                    <div className="mrcon_ic">
                                        <ul>
                                            <li>
                                                <button onClick={() => Menus_Modal('6')}>
                                                    <div className="circle">
                                                        <img src={actual_01} alt="" />
                                                    </div>
                                                    <p>실제 사례</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => Menus_Modal('7')}>
                                                    <div className="circle">
                                                        <img src={actual_02} alt="" />
                                                    </div>
                                                    <p>물품분류변경</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => Menus_Modal('8')}>
                                                    <div className="circle">
                                                        <img src={actual_03} alt="" />
                                                    </div>
                                                    <p>물품분류연습</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => Menus_Modal('9')}>
                                                    <div className="circle">
                                                        <img src={actual_04} alt="" />
                                                    </div>
                                                    <p>물품분류평가</p>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mr_con">
                                    <div className="mrcon_tit">
                                        <Typography variant="h1">Theory</Typography>
                                    </div>
                                    <div className="mrcon_ic">
                                        <ul>
                                            <li>
                                                <button onClick={() => Menus_Modal('10')}>
                                                    <div className="circle">
                                                        <img src={theory_01} alt="" />
                                                    </div>
                                                    <p>이론 I</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => Menus_Modal('11')}>
                                                    <div className="circle">
                                                        <img src={theory_02} alt="" />
                                                    </div>
                                                    <p>이론 II</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => Menus_Modal('12')}>
                                                    <div className="circle">
                                                        <img src={theory_03} alt="" />
                                                    </div>
                                                    <p>설문조사</p>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 메뉴 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={ModalOpen}
                onOk={handleOk}
                // onCancel={handleCancel}
                closable={false}
                width={'97%'}
                style={{
                    top: 0,
                    marginTop: 15,
                    zIndex: 999
                }}
                footer={[]}
            >
                {menuValue === '0' ? (
                    <Practice ModalClose={handleCancel} />
                ) : menuValue === '11' ? (
                    <LearningS ModalClose={handleCancel} />
                ) : menuValue === '12' ? (
                    <LearningC ModalClose={handleCancel} />
                ) : menuValue === '2' ? (
                    menutitle
                ) : menuValue === '3' ? (
                    menutitle
                ) : menuValue === '4' ? (
                    menutitle
                ) : menuValue === '5' ? (
                    menutitle
                ) : menuValue === '6' ? (
                    menutitle
                ) : menuValue === '7' ? (
                    menutitle
                ) : menuValue === '8' ? (
                    menutitle
                ) : menuValue === '9' ? (
                    menutitle
                ) : menuValue === '10' ? (
                    menutitle
                ) : menuValue === '11' ? (
                    menutitle
                ) : menuValue === '12' ? (
                    menutitle
                ) : (
                    ''
                )}
            </Modal>
            {/* 메뉴 모달 창 End */}

            {/* 교육정보 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={eiModalOpen}
                onOk={eihandleOk}
                // onCancel={eihandleCancel}
                closable={false}
                width={'82%'}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <EduInfo ModalClose={eihandleCancel} />
            </Modal>
            {/* 교육정보 모달 창 End */}

            {/* Notice List 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={nlModalOpen}
                onOk={nlhandleOk}
                // onCancel={nlhandleCancel}
                closable={false}
                width={800}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <NoticeList ModalClose={nlhandleCancel} />
            </Modal>
            {/* Notice List 모달 창 End */}
        </>
    );
};
