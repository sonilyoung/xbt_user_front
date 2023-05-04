/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Space, Modal } from 'antd';
import 'antd/dist/antd.css';

import lrncomp_img01 from '../../images/learning/lrncomp_img01.jpg';
import lrncomp_img02 from '../../images/learning/lrncomp_img02.png';

import learnc_0101 from '../../images/learning/learnc_ic01_01.png';
import learnc_0102 from '../../images/learning/learnc_ic01_02.png';
import learnc_0103 from '../../images/learning/learnc_ic01_03.png';
import learnc_0104 from '../../images/learning/learnc_ic01_04.png';
import learnc_0201 from '../../images/learning/learnc_ic02_01.png';
import learnc_0202 from '../../images/learning/learnc_ic02_02.png';
import learnc_0203 from '../../images/learning/learnc_ic02_03.png';
import learnc_0204 from '../../images/learning/learnc_ic02_04.png';

import glas_plus from '../../images/learning/glas_plus.png';
import transform from '../../images/learning/transform.png';
import glas_minus from '../../images/learning/glas_minus.png';
import restoration from '../../images/learning/restoration.png';

import x_img from '../../images/learning/x.png';
import o_img from '../../images/learning/o.png';

import learning_bimg01 from '../../images/learning/learning_bimg01.jpg';

// 반입금지물품 페이지
import { Prohibited } from 'pages/prohibited';

export const LearningP = (props) => {
    const { confirm } = Modal;
    const [ModalOpen, setModalOpen] = useState(false); // 반입금지물품 Modal창

    const [copbtc01, setCopbtc01] = useState();
    const [copbtc02, setCopbtc02] = useState();
    const [copbtc03, setCopbtc03] = useState();

    // 반입금지물품 Modal 이벤트처리 Start
    const Prohibitedinfo_Modal = () => {
        setModalOpen(true);
    };

    const handleOk = () => {
        setModalOpen(false);
    };

    const handleCancel = () => {
        setModalOpen(false);
    };
    // 반입금지물품 Modal 이벤트처리 End

    // 종료 처리
    const ModalClose = () => {
        props.ModalClose();
    };

    return (
        <>
            <div className="xbt_content">
                {/* <!-- xbt_top --> */}
                <div className="xbt_top">
                    {/* <!-- learnct01 --> */}
                    <div className="learnct01">
                        <ul>
                            <li>
                                <h1 className="contit">학습</h1>
                            </li>
                            <li>
                                <h3>X-ray 판독 초급 2023 - 1차</h3>
                            </li>
                            <li>
                                <h2 className="conname">홍길동</h2>
                                <button
                                    id="close-th-modal"
                                    data-mact="close"
                                    data-minfo="th-modal"
                                    className="modal_btn conbtn01 conbtn_pd01"
                                    onClick={ModalClose}
                                >
                                    종료
                                </button>
                                <button type="button" className="conbtn01" onClick={() => Prohibitedinfo_Modal()}>
                                    반입금지물품
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- xbt_con --> */}
                <div className="xbt_con mt20 learn_comp">
                    {/* <!-- lrncomp_left --> */}
                    <div className="lrncomp_left">
                        {/* <!-- lrncompl_top --> */}
                        <div className="lrncompl_top conbox_sty">
                            {/* <!-- lrncompl_tit --> */}
                            <div className="lrncompl_tit">
                                <h3>미개봉 / 금지</h3>
                            </div>
                            <div className="lrncompl_img">
                                <img src={lrncomp_img01} alt="" style={{ width: '70%' }} />
                            </div>
                        </div>
                        {/* <!-- lrncompl_bot --> */}
                        <div className="lrncompl_bot">
                            <div className="learn_btcon">
                                {/* <!-- learnbtc01 --> */}
                                <div className="learnbtc01">
                                    <ul>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('0')} className={copbtc01 === '0' ? 'on' : ''}>
                                                <img src={learnc_0101} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('1')} className={copbtc01 === '1' ? 'on' : ''}>
                                                <img src={learnc_0102} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('2')} className={copbtc01 === '2' ? 'on' : ''}>
                                                <img src={learnc_0103} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('3')} className={copbtc01 === '3' ? 'on' : ''}>
                                                <img src={learnc_0104} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('4')} className={copbtc01 === '4' ? 'on' : ''}>
                                                <img src={learnc_0201} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('5')} className={copbtc01 === '5' ? 'on' : ''}>
                                                <img src={learnc_0202} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('6')} className={copbtc01 === '6' ? 'on' : ''}>
                                                <img src={learnc_0203} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('7')} className={copbtc01 === '7' ? 'on' : ''}>
                                                <img src={learnc_0204} alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- learnbtc02 --> */}
                                <div className="learnbtc02 lrn_sbrig">
                                    <ul>
                                        <li>
                                            <a href="#" onClick={() => copbtc02_Cho('0')} className={copbtc02 === '0' ? 'on' : ''}>
                                                <span className="brig_ic01_01"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc02_Cho('1')} className={copbtc02 === '1' ? 'on' : ''}>
                                                <span className="brig_ic01_02"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc02_Cho('2')} className={copbtc02 === '2' ? 'on' : ''}>
                                                <span className="brig_ic01_03"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc02_Cho('3')} className={copbtc02 === '3' ? 'on' : ''}>
                                                <span className="brig_ic01_04"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc02_Cho('4')} className={copbtc02 === '4' ? 'on' : ''}>
                                                <span className="brig_ic01_05"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc02_Cho('5')} className={copbtc02 === '5' ? 'on' : ''}>
                                                <span className="brig_ic01_06"></span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <a href="#" onClick={() => copbtc02_Cho('6')} className={copbtc02 === '6' ? 'on' : ''}>
                                                <span className="brig_ic02_01"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc02_Cho('7')} className={copbtc02 === '7' ? 'on' : ''}>
                                                <span className="brig_ic02_02"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc02_Cho('8')} className={copbtc02 === '8' ? 'on' : ''}>
                                                <span className="brig_ic02_03"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc02_Cho('9')} className={copbtc02 === '9' ? 'on' : ''}>
                                                <span className="brig_ic02_04"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc02_Cho('10')} className={copbtc02 === '10' ? 'on' : ''}>
                                                <span className="brig_ic02_05"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc02_Cho('11')} className={copbtc02 === '11' ? 'on' : ''}>
                                                <span className="brig_ic02_06"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- learnbtc03 --> */}
                                <div className="learnbtc03">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src={glas_plus} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={transform} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={glas_minus} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={restoration} alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- learnbtc06 --> */}
                                <div className="learnbtc06">
                                    <img src={learning_bimg01} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- lrncomp_right --> */}
                    <div className="lrncomp_right">
                        {/* <!-- lrncompr_con01 --> */}
                        <div className="lrncompr_con01 conbox_sty conbox_pd01">
                            <div className="con_table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>가방번호</th>
                                            <th>정답</th>
                                            <th>입력</th>
                                            <th>정답여부</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="con_table height120 scrollbar">
                                <table className="table">
                                    <tbody>
                                        <tr className="on">
                                            <td>1</td>
                                            <td>X00175</td>
                                            <td>미개봉 / 금지</td>
                                            <td>개봉 / 통과</td>
                                            <td>
                                                <img src={x_img} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>X00221</td>
                                            <td>미개봉 / 금지</td>
                                            <td>개봉 / 통과</td>
                                            <td>
                                                <img src={x_img} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>X00992</td>
                                            <td>개봉 / 제한</td>
                                            <td>개봉 / 제한</td>
                                            <td>
                                                <img src={o_img} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>X01124</td>
                                            <td>개봉 / 제한</td>
                                            <td>미개봉 / 통과</td>
                                            <td>
                                                <img src={x_img} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>X00175</td>
                                            <td>미개봉 / 금지</td>
                                            <td>개봉 / 통과</td>
                                            <td>
                                                <img src={x_img} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>X00221</td>
                                            <td>미개봉 / 금지</td>
                                            <td>개봉 / 통과</td>
                                            <td>
                                                <img src={x_img} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>X00992</td>
                                            <td>개봉 / 제한</td>
                                            <td>개봉 / 제한</td>
                                            <td>
                                                <img src={o_img} alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>X01124</td>
                                            <td>개봉 / 제한</td>
                                            <td>미개봉 / 통과</td>
                                            <td>
                                                <img src={x_img} alt="" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <!-- lrncompr_con02 --> */}
                        <div className="lrncompr_con02 conbox_sty conbox_pd01">
                            <img src={lrncomp_img02} alt="" style={{ width: '50%' }} />
                        </div>
                        {/* <!-- lrncompr_con03 --> */}
                        <div className="lrncompr_con03 conbox_sty conbox_pd01">
                            <div className="con_table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>물품명</th>
                                            <th>개봉여부</th>
                                            <th>통과여부</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="con_table height110 scrollbar">
                                <table className="table">
                                    <tbody>
                                        <tr className="on">
                                            <td>1</td>
                                            <td>머리 클립형 나이프</td>
                                            <td>Opened</td>
                                            <td>Restricte</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>노트북가방</td>
                                            <td>Unopened</td>
                                            <td>Pass</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>스템플러 심</td>
                                            <td>Unopened</td>
                                            <td>Pass</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>눈썹칼</td>
                                            <td>Unopened</td>
                                            <td>Pass</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>팬티</td>
                                            <td>Unopened</td>
                                            <td>Pass</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>머리 클립형 나이프</td>
                                            <td>Opened</td>
                                            <td>Restricte</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>노트북가방</td>
                                            <td>Unopened</td>
                                            <td>Pass</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>스템플러 심</td>
                                            <td>Unopened</td>
                                            <td>Pass</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>눈썹칼</td>
                                            <td>Unopened</td>
                                            <td>Pass</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>팬티</td>
                                            <td>Unopened</td>
                                            <td>Pass</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 반입금지물품 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={ModalOpen}
                onOk={handleOk}
                closable={false}
                // onCancel={handleCancel}
                width={950}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <Prohibited ModalClose={handleCancel} />
            </Modal>
            {/* 반입금지물품 모달 창 End */}
        </>
    );
};
