/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Space, Modal } from 'antd';
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

import tab_01 from '../../images/score/tab_img01.png';
import tab_02 from '../../images/score/tab_img02.png';
import tab_03 from '../../images/score/tab_img03.png';

import './eduinfo.css';

export const EduInfo = (props) => {
    const [scoreTabs, setScoreTabs] = useState('score01');

    const ModalClose = () => {
        props.ModalClose();
    };

    return (
        <>
            {/* <!-- xbttop02 --> */}
            <div className="xbttop01">
                <ul>
                    <li>
                        <h1 className="contit">교육정보</h1>
                    </li>
                    <li>
                        {/* <!--탭 메뉴 --> */}
                        <div id="layer_menu">
                            <ul>
                                <li>
                                    <button
                                        type="button"
                                        data-filename="score01"
                                        className={scoreTabs === 'score01' ? 'on' : ''}
                                        onClick={() => setScoreTabs('score01')}
                                    >
                                        학습점수조회
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        data-filename="score02"
                                        className={scoreTabs === 'score02' ? 'on' : ''}
                                        onClick={() => setScoreTabs('score02')}
                                    >
                                        교육평가조회
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        data-filename="score03"
                                        className={scoreTabs === 'score03' ? 'on' : ''}
                                        onClick={() => setScoreTabs('score03')}
                                    >
                                        오답조회
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="score_img conbox_sty conbox_pd01 mt20">
                    <div id="tab_div" style={{ display: 'block', marginTop: '50px' }}>
                        {scoreTabs === 'score01' ? (
                            <img src={tab_01} alt="" />
                        ) : scoreTabs === 'score02' ? (
                            <img src={tab_02} alt="" />
                        ) : (
                            <img src={tab_03} alt="" />
                        )}
                    </div>
                </div>
                <button
                    id="close-one-md"
                    data-mact="close"
                    data-minfo="one-md"
                    className="modal_btn close_btn"
                    style={{ marginTop: '20px', marginRight: '20px' }}
                    onClick={ModalClose}
                ></button>
            </div>
        </>
    );
};
