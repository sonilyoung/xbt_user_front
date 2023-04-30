/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

import larrow from '../../images/main/larrow.svg';
import rarrow from '../../images/main/rarrow.svg';

import { NoticeView } from 'pages/notice';

import '../../css/main.css';

export const NoticeList = () => {
    const { confirm } = Modal;
    const [ndModalOpen, setNdModalOpen] = useState(false); // Notice Detail Modal창

    const [ndLoading, setNdLoading] = useState(false);

    // Notice View Modal 이벤트처리 Start
    const NoticeView_Modal = () => {
        setNdModalOpen(true);
        setNdLoading(true);
    };

    const ndhandleOk = () => {
        setNdModalOpen(false);
    };

    const ndhandleCancel = () => {
        setNdModalOpen(false);
    };
    // Notice View Modal 이벤트처리 End

    return (
        <>
            <div className="xbt_content">
                <div className="xbt_top">
                    <div className="md_notice">
                        <div className="mdnc_top">
                            <h1>Notice</h1>
                        </div>
                        <table className="bbslist">
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">제목</th>
                                <th scope="col">일자</th>
                            </tr>
                            <tr>
                                <td className="num">1</td>
                                <td className="al-Left">
                                    <button
                                        id="open-thr-md"
                                        data-mact="open"
                                        data-minfo="thr-md"
                                        className="modal_btn"
                                        onClick={() => NoticeView_Modal()}
                                    >
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
                        </table>
                        <div className="bbs_pagi">
                            <ul>
                                <li>
                                    <a href="#" className="page_prev">
                                        <span>
                                            <img src={larrow} alt="" />
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
                                            <img src={rarrow} alt="" />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button id="close-two-md" data-mact="close" data-minfo="two-md" className="modal_btn close_btn"></button>
                </div>
            </div>
            {/* Notice 상세정보 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={ndModalOpen}
                onOk={ndhandleOk}
                onCancel={ndhandleCancel}
                width={680}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <NoticeView />
            </Modal>
            {/* Notice 상세정보 모달 창 End */}
        </>
    );
};
