/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Table, Form, Row, Col, Modal } from 'antd';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useUserToken } from '../../hooks/core/UserToken';

// Notice 목록조회 API
import { useSelectNoticeListMutation, useSelectNoticeMutation } from '../../hooks/api/NoticeManagement/NoticeManagement';

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
import { NoticeList as NoticeListPlus } from 'pages/notice';

// 물품연습
import { Practice } from 'pages/practice';

// 학습
import { LearningS } from 'pages/learning/LearningS'; // 슬라이드 방식
import { LearningC } from 'pages/learning/LearningC'; // 컷 방식

// Ai강화학습
import { AiLearningS } from 'pages/ailearning/AiLearningS'; // 슬라이드 방식
import { AiLearningC } from 'pages/ailearning/AiLearningC'; // 컷 방식

// 오답문제풀이
import { WrongAnswerS } from 'pages/wronganswer/WrongAnswerS'; // 슬라이드 방식
import { WrongAnswerC } from 'pages/wronganswer/WrongAnswerC'; // 컷 방식

// 반입금지 물품연습
import { OXProhibited } from 'pages/oxprohibited';

// 평가
import { EvaluationS } from 'pages/evaluation/EvaluationS'; // 슬라이드 방식
import { EvaluationC } from 'pages/evaluation/EvaluationC'; // 컷 방식

export const FrontMain = () => {
    const { confirm } = Modal;
    const [form] = Form.useForm();
    const navigate = useNavigate();

    // 로그인 토큰 정보
    const [userToken] = useUserToken();

    // Notice api 정보
    const [NoticeListApi] = useSelectNoticeListMutation();

    const [ModalOpen, setModalOpen] = useState(false); // 메뉴 Modal창
    const [eiModalOpen, setEiModalOpen] = useState(false); // 교육정보 Modal창
    const [nlModalOpen, setNlModalOpen] = useState(false); // Notice List Modal창

    const [noticeListApi, setNoticeListApi] = useState(); // Notice List 값

    const [loading, setLoading] = useState(false);
    const [eiloading, setEiLoading] = useState(false);
    const [nlLoading, setNlLoading] = useState(false);
    const [menutitle, setMenutitle] = useState('');
    const [menuValue, setMenuValue] = useState('');

    const Notice_ApiCall = async () => {
        const noticeResponse = await NoticeListApi({
            languageCode: 'kor'
        });

        setNoticeListApi(noticeResponse?.data?.RET_DATA);
    };

    // 메뉴 Modal 이벤트처리 Start
    const Menus_Modal = (MenuNumber) => {
        if (MenuNumber === '0') {
            setMenutitle('물품연습');
        } else if (MenuNumber === '11') {
            setMenutitle('학습-슬라이드');
        } else if (MenuNumber === '12') {
            setMenutitle('학습-컷');
        } else if (MenuNumber === '21') {
            setMenutitle('AI강화학습-슬라이드');
        } else if (MenuNumber === '22') {
            setMenutitle('AI강화학습-컷');
        } else if (MenuNumber === '31') {
            setMenutitle('오답문제 풀이-슬라이드');
        } else if (MenuNumber === '32') {
            setMenutitle('오답문제 풀이-컷');
        } else if (MenuNumber === '4') {
            setMenutitle('반입금지 물품연습');
        } else if (MenuNumber === '51') {
            setMenutitle('평가-슬라이드');
        } else if (MenuNumber === '52') {
            setMenutitle('평가-컷');
            // } else if (MenuNumber === '6') {
            //     setMenutitle('실제 사례');
            // } else if (MenuNumber === '7') {
            //     setMenutitle('물품분류변경');
            // } else if (MenuNumber === '8') {
            //     setMenutitle('물품분류연습');
            // } else if (MenuNumber === '9') {
            //     setMenutitle('물품분류평가');
            // } else if (MenuNumber === '10') {
            //     setMenutitle('이론I');
            // } else if (MenuNumber === '11') {
            //     setMenutitle('이론II');
            // } else if (MenuNumber === '12') {
            //     setMenutitle('설문조사');
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

    // 로그아웃 처리
    const LoginOut = () => {
        confirm({
            icon: <ExclamationCircleOutlined />,
            content: '로그아웃 하시겠습니까?',
            onOk() {
                userToken.setItem('');
                navigate('/login');
            },
            onCancel() {}
        });
    };

    useEffect(() => {
        Notice_ApiCall(); // api 호출
    }, []);

    return (
        <>
            <div id="wrap" className="mbg mbg_none">
                <div className="tgnb">
                    <Typography variant="h1">
                        X-ray Security <span>Training</span>
                    </Typography>
                    <nav className="util">
                        <a href="#" onClick={LoginOut}>
                            로그아웃
                        </a>
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
                                <div className="mr_con" style={{ padding: '98px 0' }}>
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
                                                <button onClick={() => Menus_Modal('21')}>
                                                    <div className="circle">
                                                        <img src={xrayrd_03} alt="" />
                                                    </div>
                                                    <p>AI 강화학습(슬라이드)</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => Menus_Modal('22')}>
                                                    <div className="circle">
                                                        <img src={xrayrd_03} alt="" />
                                                    </div>
                                                    <p>AI 강화학습(컷)</p>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mr_con" style={{ padding: '98px 0' }}>
                                    <div className="mrcon_tit">
                                        <Typography variant="h1">Learning</Typography>
                                    </div>
                                    <div className="mrcon_ic">
                                        <ul>
                                            <li>
                                                <button onClick={() => Menus_Modal('31')}>
                                                    <div className="circle">
                                                        <img src={learn_01} alt="" />
                                                    </div>
                                                    <p>오답문제 풀이(슬라이드)</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => Menus_Modal('32')}>
                                                    <div className="circle">
                                                        <img src={learn_01} alt="" />
                                                    </div>
                                                    <p>오답문제 풀이(컷)</p>
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
                                                <button onClick={() => Menus_Modal('51')}>
                                                    <div className="circle">
                                                        <img src={learn_03} alt="" />
                                                    </div>
                                                    <p>평가(슬라이드)</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button onClick={() => Menus_Modal('52')}>
                                                    <div className="circle">
                                                        <img src={learn_03} alt="" />
                                                    </div>
                                                    <p>평가(컷)</p>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* 
                                <div className="mr_con" style={{ padding: '46px 0' }}>
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
                                 */}
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
                width={menuValue === '4' ? '80%' : '97%'}
                style={{
                    top: 0,
                    bottom: 0,
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
                ) : menuValue === '21' ? (
                    <AiLearningS ModalClose={handleCancel} />
                ) : menuValue === '22' ? (
                    <AiLearningC ModalClose={handleCancel} />
                ) : menuValue === '31' ? (
                    <WrongAnswerS ModalClose={handleCancel} />
                ) : menuValue === '32' ? (
                    <WrongAnswerC ModalClose={handleCancel} />
                ) : menuValue === '4' ? (
                    <OXProhibited ModalClose={handleCancel} />
                ) : menuValue === '51' ? (
                    <EvaluationS ModalClose={handleCancel} />
                ) : menuValue === '52' ? (
                    <EvaluationC ModalClose={handleCancel} />
                ) : (
                    // ) : menuValue === '6' ? (
                    //     menutitle
                    // ) : menuValue === '7' ? (
                    //     menutitle
                    // ) : menuValue === '8' ? (
                    //     menutitle
                    // ) : menuValue === '9' ? (
                    //     menutitle
                    // ) : menuValue === '10' ? (
                    //     menutitle
                    // ) : menuValue === '11' ? (
                    //     menutitle
                    // ) : menuValue === '12' ? (
                    //     menutitle
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
                closable={false}
                width={850}
                style={{
                    top: 0,
                    bottom: 0,
                    marginTop: 40,
                    zIndex: 999
                }}
                footer={[]}
            >
                <NoticeListPlus ModalClose={nlhandleCancel} />
            </Modal>
            {/* Notice List 모달 창 End */}
        </>
    );
};
