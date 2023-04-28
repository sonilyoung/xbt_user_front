/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Space, Modal } from 'antd';
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import './eduinfo.css';
export const EduInfo = () => {
    return (
        <>
            <div id="one-md" className="modal-wrapper modal_blur">
                <div className="modal xbt_md">
                    {/* <!-- xbt_content --> */}
                    <div className="xbt_content">
                        {/* <!-- xbt_top --> */}
                        <div className="xbt_top">
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
                                                    <button type="button" data-filename="score01" className="on">
                                                        학습점수조회
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" data-filename="score02">
                                                        교육평가조회
                                                    </button>
                                                </li>
                                                <li>
                                                    <button type="button" data-filename="score03">
                                                        오답조회
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                {/* <!-- score_img --> */}
                                <div className="score_img conbox_sty conbox_pd01 mt20">
                                    <div id="tab_div" style={{ display: 'block' }}></div>
                                </div>
                            </div>
                            <button id="close-one-md" data-mact="close" data-minfo="one-md" className="modal_btn close_btn"></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
