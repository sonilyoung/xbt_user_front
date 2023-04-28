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
import '../../css/main.css';

export const FrontMain = () => {
    const { confirm } = Modal;
    const [form] = Form.useForm();
    const [eiModalOpen, setEiModalOpen] = useState(false); // 교육정보 Modal창
    const [nlModalOpen, setNlModalOpen] = useState(false); // Notice List Modal창
    const [ndModalOpen, setNdModalOpen] = useState(false); // Notice Detail Modal창

    const [eiloading, setEiLoading] = useState(false);

    const Eduinfo_Modal = () => {
        setEiModalOpen(true);
        setEiLoading(true);
    };

    const eduinfohandleOk = () => {
        setEiModalOpen(false);
    };

    const eduinfohandleCancel = () => {
        setEiModalOpen(false);
    };

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
                                        <button className="nnct_plus modal_btn">
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
                                                <button>
                                                    <div className="circle">
                                                        <img src={xrayrd_01} alt="" />
                                                    </div>
                                                    <p>물품연습</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button>
                                                    <div className="circle">
                                                        <img src={xrayrd_02} alt="" />
                                                    </div>
                                                    <p>학습</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button>
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
                                                <button>
                                                    <div className="circle">
                                                        <img src={learn_01} alt="" />
                                                    </div>
                                                    <p>오답문제 풀이</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button>
                                                    <div className="circle">
                                                        <img src={learn_02} alt="" />
                                                    </div>
                                                    <p>반입금지 물품연습</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button>
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
                                                <button>
                                                    <div className="circle">
                                                        <img src={actual_01} alt="" />
                                                    </div>
                                                    <p>실제 사례</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button>
                                                    <div className="circle">
                                                        <img src={actual_02} alt="" />
                                                    </div>
                                                    <p>물품분류변경</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button>
                                                    <div className="circle">
                                                        <img src={actual_03} alt="" />
                                                    </div>
                                                    <p>물품분류연습</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button>
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
                                                <button>
                                                    <div className="circle">
                                                        <img src={theory_01} alt="" />
                                                    </div>
                                                    <p>이론 I</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button>
                                                    <div className="circle">
                                                        <img src={theory_02} alt="" />
                                                    </div>
                                                    <p>이론 II</p>
                                                </button>
                                            </li>
                                            <li>
                                                <button>
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

            {/* 교육정보 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={eiModalOpen}
                onOk={eduinfohandleOk}
                onCancel={eduinfohandleCancel}
                width={600}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <div>jhgjhgjhg</div>
            </Modal>
            {/* 교육정보 모달 창 End */}

            {/* Notice List 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={nlModalOpen}
                onOk={eduinfohandleOk}
                onCancel={eduinfohandleCancel}
                width={600}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <div id="two-md" className="modal-wrapper modal_blur">
                    <div className="modal notice_md">
                        {/* <!-- xbt_content --> */}
                        <div className="xbt_content">
                            {/* <!-- xbt_top --> */}
                            <div className="xbt_top">
                                <div className="md_notice">
                                    {/* <!-- mdnc_top --> */}
                                    <div className="mdnc_top">
                                        <h1>Notice</h1>
                                    </div>
                                    {/* <!-- bbslist --> */}
                                    <Table className="bbslist">
                                        <tr>
                                            <th scope="col">No.</th>
                                            <th scope="col">제목</th>
                                            <th scope="col">일자</th>
                                        </tr>
                                        <tr>
                                            <td className="num">1</td>
                                            <td className="al-Left">
                                                <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                    데이터 점검으로 인한 접속제한
                                                </button>
                                            </td>
                                            <td className="Date">2023-03-18</td>
                                        </tr>
                                        <tr>
                                            <td className="num">2</td>
                                            <td className="al-Left">
                                                <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                    개인정보 보호를 위해 PC 로그
                                                </button>
                                            </td>
                                            <td className="Date">2023-03-15</td>
                                        </tr>
                                        <tr>
                                            <td className="num">3</td>
                                            <td className="al-Left">
                                                <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                    교육생 데스트 일정 공지
                                                </button>
                                            </td>
                                            <td className="Date">2023-03-14</td>
                                        </tr>
                                        <tr>
                                            <td className="num">4</td>
                                            <td className="al-Left">
                                                <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                    9월 교육 일정 안내
                                                </button>
                                            </td>
                                            <td className="Date">2023-03-14</td>
                                        </tr>
                                        <tr>
                                            <td className="num">5</td>
                                            <td className="al-Left">
                                                <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                    공지사항 테스트 입력
                                                </button>
                                            </td>
                                            <td className="Date">2023-03-14</td>
                                        </tr>
                                        <tr>
                                            <td className="num">6</td>
                                            <td className="al-Left">
                                                <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                    AI 판독평가 관련 자료
                                                </button>
                                            </td>
                                            <td className="Date">2023-03-11</td>
                                        </tr>
                                        <tr>
                                            <td className="num">7</td>
                                            <td className="al-Left">
                                                <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                    2023년 교육생 교육일정 안내 정보
                                                </button>
                                            </td>
                                            <td className="Date">2023-03-10</td>
                                        </tr>
                                        <tr>
                                            <td className="num">8</td>
                                            <td className="al-Left">
                                                <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                    테스트 공지사항 입니다.
                                                </button>
                                            </td>
                                            <td className="Date">2023-03-06</td>
                                        </tr>
                                        <tr>
                                            <td className="num">9</td>
                                            <td className="al-Left">
                                                <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                    사이트 점검으로 인해 접속이 제한됨을 알려드립니다.
                                                </button>
                                            </td>
                                            <td className="Date">2023-03-03</td>
                                        </tr>
                                        <tr>
                                            <td className="num">10</td>
                                            <td className="al-Left">
                                                <button id="open-thr-md" data-mact="open" data-minfo="thr-md" className="modal_btn">
                                                    교육 테스트 입니다.
                                                </button>
                                            </td>
                                            <td className="Date">2023-03-01</td>
                                        </tr>
                                    </Table>
                                    {/* <!-- bbs_pagi --> */}
                                    <div className="bbs_pagi">
                                        <ul>
                                            <li>
                                                <a href="#" className="page_prev">
                                                    <span>
                                                        <img src="../images/main/larrow.svg" alt="" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="active">
                                                <a href="#" className="page_current">
                                                    <span>1</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>2</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>3</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>4</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>5</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="page_next">
                                                    <span>
                                                        <img src="../images/main/rarrow.svg" alt="" />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button id="close-two-md" data-mact="close" data-minfo="two-md" className="modal_btn close_btn"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            {/* Notice List 모달 창 End */}

            {/* Notice 상세정보 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={ndModalOpen}
                onOk={eduinfohandleOk}
                onCancel={eduinfohandleCancel}
                width={600}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <div id="thr-md" className="modal-wrapper modal_blur">
                    <div className="modal noticerw_md">
                        {/* <!-- xbt_content --> */}
                        <div className="xbt_content">
                            {/* <!-- xbt_top --> */}
                            <div className="xbt_top">
                                {/* <!-- mdnc_top --> */}
                                <div className="mdnc_top">
                                    <h1>Notice</h1>
                                </div>
                                <button id="close-thr-md" data-mact="close" data-minfo="thr-md" className="modal_btn close_btn"></button>
                            </div>
                            <div className="con_table noticerw_sr scrollbar height360">
                                {/* <!-- noticerw_top --> */}
                                <div className="noticerw_top">
                                    <h1>9월 교육일정 안내</h1>
                                    <span>2023-03-14</span>
                                </div>
                                {/* <!-- noticerw_con --> */}
                                <div className="noticerw_con">
                                    <p>
                                        안녕하세요! 00000 본부입니다.
                                        <br />
                                        9월 교육 일정 아래와 같이 안내해드리니 참조 부탁드립니다.
                                        <br />
                                        <br />
                                        9월 교육일정
                                        <br />
                                        <br />
                                        1. 신입교육일정
                                        <br />
                                        일시 : 2023년 9월 00일 ~ 9월 00일(30일간, 매일 오전 9시)
                                        <br />
                                        장소 : 00회관 00본부
                                        <br />
                                        교육내용 : 000에 따른 0000 와 0000에 대한 신입교육
                                        <br />
                                        문의 : 000-0000-0000 (담당자: 홍길동)
                                        <br />
                                        <br />
                                        내용 더 들어 갈꺼임
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            {/* Notice 상세정보 모달 창 End */}
        </>
    );
};
