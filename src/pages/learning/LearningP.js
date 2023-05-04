/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Space, Modal } from 'antd';
import 'antd/dist/antd.css';

export const LearningP = (props) => {
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
                                >
                                    종료
                                </button>
                                <button type="button" className="conbtn01">
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
                                <img src="../images/learning/lrncomp_img01.jpg" alt="" />
                            </div>
                        </div>
                        {/* <!-- lrncompl_bot --> */}
                        <div className="lrncompl_bot">
                            <div className="learn_btcon">
                                {/* <!-- learnbtc01 --> */}
                                <div className="learnbtc01">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src="../images/learning/learnc_ic01_01.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../images/learning/learnc_ic01_02.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../images/learning/learnc_ic01_03.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../images/learning/learnc_ic01_04.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../images/learning/learnc_ic02_01.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../images/learning/learnc_ic02_02.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../images/learning/learnc_ic02_03.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../images/learning/learnc_ic02_04.png" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- learnbtc02 --> */}
                                <div className="learnbtc02 lrn_sbrig">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span className="brig_ic01_01"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="brig_ic01_02"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="brig_ic01_03"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="brig_ic01_04"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="brig_ic01_05"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="brig_ic01_06"></span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <span className="brig_ic02_01"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="brig_ic02_02"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="brig_ic02_03"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="brig_ic02_04"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span className="brig_ic02_05"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
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
                                                <img src="../images/learning/glas_plus.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../images/learning/transform.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../images/learning/glas_minus.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="../images/learning/restoration.png" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- learnbtc06 --> */}
                                <div className="learnbtc06">
                                    <img src="../images/learning/learning_bimg01.jpg" alt="" />
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
                            <div className="con_table height160 scrollbar">
                                <table className="table">
                                    <tbody>
                                        <tr className="on">
                                            <td>1</td>
                                            <td>X00175</td>
                                            <td>미개봉 / 금지</td>
                                            <td>개봉 / 통과</td>
                                            <td>
                                                <img src="../images/learning/x.png" alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>X00221</td>
                                            <td>미개봉 / 금지</td>
                                            <td>개봉 / 통과</td>
                                            <td>
                                                <img src="../images/learning/x.png" alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>X00992</td>
                                            <td>개봉 / 제한</td>
                                            <td>개봉 / 제한</td>
                                            <td>
                                                <img src="../images/learning/o.png" alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>X01124</td>
                                            <td>개봉 / 제한</td>
                                            <td>미개봉 / 통과</td>
                                            <td>
                                                <img src="../images/learning/x.png" alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>X00175</td>
                                            <td>미개봉 / 금지</td>
                                            <td>개봉 / 통과</td>
                                            <td>
                                                <img src="../images/learning/x.png" alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>X00221</td>
                                            <td>미개봉 / 금지</td>
                                            <td>개봉 / 통과</td>
                                            <td>
                                                <img src="../images/learning/x.png" alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>X00992</td>
                                            <td>개봉 / 제한</td>
                                            <td>개봉 / 제한</td>
                                            <td>
                                                <img src="../images/learning/o.png" alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>X01124</td>
                                            <td>개봉 / 제한</td>
                                            <td>미개봉 / 통과</td>
                                            <td>
                                                <img src="../images/learning/x.png" alt="" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* <!-- lrncompr_con02 --> */}
                        <div className="lrncompr_con02 conbox_sty conbox_pd01">
                            <img src="../images/learning/lrncomp_img02.png" alt="" />
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
                            <div className="con_table height175 scrollbar">
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
        </>
    );
};
