/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Col, Row, Button, Select, Space, Modal } from 'antd';

import sample01 from '../../images/practice/sample01.png';
import sample02 from '../../images/practice/sample02.png';
import sample03 from '../../images/practice/sample03.png';
import sample04 from '../../images/practice/sample04.png';

import learnc_ic01_01 from '../../images/learning/learnc_ic01_01.png';
import learnc_ic01_02 from '../../images/learning/learnc_ic01_02.png';
import learnc_ic01_03 from '../../images/learning/learnc_ic01_03.png';
import learnc_ic01_04 from '../../images/learning/learnc_ic01_04.png';

import learnc_ic02_01 from '../../images/learning/learnc_ic02_01.png';
import learnc_ic02_02 from '../../images/learning/learnc_ic02_02.png';
import learnc_ic02_03 from '../../images/learning/learnc_ic02_03.png';
import learnc_ic02_04 from '../../images/learning/learnc_ic02_04.png';

import glas_plus from '../../images/learning/glas_plus.png';
import transform from '../../images/learning/transform.png';
import glas_minus from '../../images/learning/glas_minus.png';
import restoration from '../../images/learning/restoration.png';

// 반입금지물품
import { Prohibited } from 'pages/prohibited';
import '../../css/main.css';

export const Practice = (props) => {
    const { confirm } = Modal;
    const [ModalOpen, setModalOpen] = useState(false); // 반입금지물품 Modal창
    const [selectOption, setSelectOption] = useState('0'); // 옵션 셀렉트
    const [btabcho, setBtabcho] = useState('0');
    const [stabcho, setStabcho] = useState('0');
    const [copbtc01, setCopbtc01] = useState();
    const [copbtc02, setCopbtc02] = useState();
    const [copbtc03, setCopbtc03] = useState();

    const [optionVal, setOptionVal] = useState('0');

    const handleChange = (value) => {
        setOptionVal(value);
        console.log(`selected ${value}`);
    };

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

    // 대분류 물품 선택
    const btablecho = (Bflag) => {
        setBtabcho(Bflag);
    };

    // 중분류 물품 선택
    const stablecho = (Sflag) => {
        setStabcho(Sflag);
    };

    const copbtc01_Cho = (cop01flag) => {
        setCopbtc01(cop01flag);
    };

    const copbtc02_Cho = (cop02flag) => {
        setCopbtc02(cop02flag);
    };

    const copbtc03_Cho = (cop03flag) => {
        setCopbtc03(cop03flag);
    };

    const ModalClose = () => {
        props.ModalClose();
    };
    return (
        <>
            <div className="xbt_content">
                {/* <!-- xbt_top --> */}
                <div className="xbt_top">
                    {/* <!-- xbttop02 --> */}
                    <div className="xbttop02">
                        <ul>
                            <li>
                                <h1 className="contit">물품연습</h1>
                            </li>
                            <li>
                                <h2 className="conname tr">홍길동</h2>
                                <button
                                    id="close-first-modal"
                                    data-mact="close"
                                    data-minfo="first-modal"
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
                <div className="xbt_con practice_con mt15">
                    <div className="practice_left">
                        {/* <!-- cop_con --> */}
                        <div className="cop_con conbox_sty conbox_pd01">
                            {/* <!-- 물품 타이틀 표 --> */}
                            <div className="con_table cop_table">
                                <table className="table">
                                    <tr>
                                        <th>No.</th>
                                        <th>물품</th>
                                        <th>개봉여부</th>
                                        <th>통과여부</th>
                                    </tr>
                                </table>
                            </div>
                            {/* <!-- 물품 내용 표 --> */}
                            <div className="con_table cop_table height200 scrollbar">
                                <table className="table">
                                    <tr className={btabcho === '0' ? 'on' : ''} onClick={() => btablecho('0')}>
                                        <td>1</td>
                                        <td>총기류</td>
                                        <td>Unopened</td>
                                        <td>Prohibition</td>
                                    </tr>
                                    <tr className={btabcho === '1' ? 'on' : ''} onClick={() => btablecho('1')}>
                                        <td>2</td>
                                        <td>폭발물류</td>
                                        <td>Unopened</td>
                                        <td>Prohibition</td>
                                    </tr>
                                    <tr className={btabcho === '2' ? 'on' : ''} onClick={() => btablecho('2')}>
                                        <td>3</td>
                                        <td>실탄류</td>
                                        <td>Opened</td>
                                        <td>Restricted</td>
                                    </tr>
                                    <tr className={btabcho === '3' ? 'on' : ''} onClick={() => btablecho('3')}>
                                        <td>4</td>
                                        <td>도검류</td>
                                        <td>Opened</td>
                                        <td>Restricted</td>
                                    </tr>
                                    <tr className={btabcho === '4' ? 'on' : ''} onClick={() => btablecho('4')}>
                                        <td>5</td>
                                        <td>일반 무기류</td>
                                        <td>Opened</td>
                                        <td>Restricted</td>
                                    </tr>
                                    <tr className={btabcho === '5' ? 'on' : ''} onClick={() => btablecho('5')}>
                                        <td>6</td>
                                        <td>위장무기류</td>
                                        <td>Opened</td>
                                        <td>Restricted</td>
                                    </tr>
                                    <tr className={btabcho === '6' ? 'on' : ''} onClick={() => btablecho('6')}>
                                        <td>7</td>
                                        <td>공구/생활용품류</td>
                                        <td>Opened</td>
                                        <td>Restricted</td>
                                    </tr>
                                    <tr className={btabcho === '7' ? 'on' : ''} onClick={() => btablecho('7')}>
                                        <td>8</td>
                                        <td>인화성물질류</td>
                                        <td>Opened</td>
                                        <td>Restricted</td>
                                    </tr>
                                    <tr className={btabcho === '8' ? 'on' : ''} onClick={() => btablecho('8')}>
                                        <td>9</td>
                                        <td>위험물질류</td>
                                        <td>Opened</td>
                                        <td>Restricted</td>
                                    </tr>
                                    <tr className={btabcho === '9' ? 'on' : ''} onClick={() => btablecho('9')}>
                                        <td>10</td>
                                        <td>액체, 겔 물품</td>
                                        <td>Opened</td>
                                        <td>Restricted</td>
                                    </tr>
                                </table>
                            </div>
                            {/* <!-- 물품명칭 타이틀 표 --> */}
                            <div className="con_table cop_table">
                                <table className="table">
                                    <tr>
                                        <th className="t_blue">No.</th>
                                        <th className="t_blue">물품명칭</th>
                                    </tr>
                                </table>
                            </div>
                            {/* <!-- 물품명칭 내용 표 --> */}
                            <div className="con_table cop_table height160 scrollbar">
                                <table className="table">
                                    <tr className={stabcho === '0' ? 'on' : ''} onClick={() => stablecho('0')}>
                                        <td>1</td>
                                        <td>소총 1</td>
                                    </tr>
                                    <tr className={stabcho === '1' ? 'on' : ''} onClick={() => stablecho('1')}>
                                        <td>2</td>
                                        <td>소총 2</td>
                                    </tr>
                                    <tr className={stabcho === '2' ? 'on' : ''} onClick={() => stablecho('2')}>
                                        <td>3</td>
                                        <td>권총 1</td>
                                    </tr>
                                    <tr className={stabcho === '3' ? 'on' : ''} onClick={() => stablecho('3')}>
                                        <td>4</td>
                                        <td>권총 2</td>
                                    </tr>
                                    <tr className={stabcho === '4' ? 'on' : ''} onClick={() => stablecho('4')}>
                                        <td>5</td>
                                        <td>권총 3</td>
                                    </tr>
                                    <tr className={stabcho === '5' ? 'on' : ''} onClick={() => stablecho('5')}>
                                        <td>6</td>
                                        <td>권총 4</td>
                                    </tr>
                                </table>
                            </div>
                            {/* <!-- //물품명칭 내용 표 --> */}
                        </div>
                        {/* <!-- cop_con --> */}
                        <div className="cop_con conbox_sty conbox_pd01">
                            <div className="cop_con_tlist">
                                <div>
                                    <p className="number">2100</p>
                                </div>
                                <div>
                                    <p className="products">총기류</p>
                                </div>
                                <div>
                                    <p className="release">Unopened / Restricted</p>
                                </div>
                                <div>
                                    <p className="name">소총</p>
                                </div>
                            </div>
                            <div className="cop_con_btn">
                                <button className="back">이전</button>
                                <button className="next">다음</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- practice_right --> */}
                    <div className="practice_right">
                        {/* <!-- 옵션--> */}
                        <div className="practice_select">
                            <Select
                                defaultValue={`${optionVal}˚`}
                                style={{
                                    marginTop: '-3px',
                                    width: '142px'
                                }}
                                bordered={false}
                                onChange={handleChange}
                                options={[
                                    {
                                        label: '0˚',
                                        value: '0'
                                    },
                                    {
                                        label: '12˚',
                                        value: '12'
                                    },
                                    {
                                        label: '24˚',
                                        value: '24'
                                    },
                                    {
                                        label: '36˚',
                                        value: '36'
                                    },
                                    {
                                        label: '48˚',
                                        value: '48'
                                    },
                                    {
                                        label: '60˚',
                                        value: '60'
                                    },
                                    {
                                        label: '72˚',
                                        value: '72'
                                    },
                                    {
                                        label: '84˚',
                                        value: '84'
                                    },
                                    {
                                        label: '96˚',
                                        value: '96'
                                    },
                                    {
                                        label: '108˚',
                                        value: '108'
                                    },
                                    {
                                        label: '120˚',
                                        value: '120'
                                    },
                                    {
                                        label: '132˚',
                                        value: '132'
                                    },
                                    {
                                        label: '144˚',
                                        value: '144'
                                    },
                                    {
                                        label: '156˚',
                                        value: '156'
                                    },
                                    {
                                        label: '168˚',
                                        value: '168'
                                    },
                                    {
                                        label: '180˚',
                                        value: '180'
                                    },
                                    {
                                        label: '192˚',
                                        value: '192'
                                    },
                                    {
                                        label: '204˚',
                                        value: '204'
                                    },
                                    {
                                        label: '216˚',
                                        value: '216'
                                    },
                                    {
                                        label: '228˚',
                                        value: '228'
                                    },
                                    {
                                        label: '240˚',
                                        value: '240'
                                    },
                                    {
                                        label: '252˚',
                                        value: '252'
                                    },
                                    {
                                        label: '264˚',
                                        value: '264'
                                    },
                                    {
                                        label: '276˚',
                                        value: '276'
                                    },
                                    {
                                        label: '288˚',
                                        value: '288'
                                    },
                                    {
                                        label: '300˚',
                                        value: '300'
                                    },
                                    {
                                        label: '312˚',
                                        value: '312'
                                    },
                                    {
                                        label: '324˚',
                                        value: '324'
                                    },
                                    {
                                        label: '336˚',
                                        value: '336'
                                    },
                                    {
                                        label: '348˚',
                                        value: '348'
                                    }
                                ]}
                            />
                            {/* <button className="label">옵션선택</button>
                            <ul className="pra_optionList">
                                <li className="pra_item">#옵션선택 A</li>
                                <li className="pra_item">#옵션선택 B</li>
                                <li className="pra_item">#옵션선택 C</li>
                                <li className="pra_item">#옵션선택 D</li>
                            </ul> */}
                        </div>
                        {/* <!-- //옵션 --> */}

                        <div className="angle">
                            <div className="real">
                                <p>Real</p>
                                <img src={sample01} alt="" />
                            </div>
                            <div className="dimension">
                                <p>3D</p>
                                <img src={sample02} alt="" />
                            </div>
                            <div className="front">
                                <p>Front</p>
                                <img src={sample03} alt="" />
                            </div>
                            <div className="side">
                                <p>Side</p>
                                <img src={sample04} alt="" />
                            </div>
                        </div>
                        {/* <!-- practice_bot --> */}
                        <div className="practice_bot">
                            <div className="practice_btcon">
                                {/* <!-- copbtc01 --> */}
                                <div className="copbtc01">
                                    <ul>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('0')} className={copbtc01 === '0' ? 'on' : ''}>
                                                <img src={learnc_ic01_01} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('1')} className={copbtc01 === '1' ? 'on' : ''}>
                                                <img src={learnc_ic01_02} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('2')} className={copbtc01 === '2' ? 'on' : ''}>
                                                <img src={learnc_ic01_03} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('3')} className={copbtc01 === '3' ? 'on' : ''}>
                                                <img src={learnc_ic01_04} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('4')} className={copbtc01 === '4' ? 'on' : ''}>
                                                <img src={learnc_ic02_01} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('5')} className={copbtc01 === '5' ? 'on' : ''}>
                                                <img src={learnc_ic02_02} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('6')} className={copbtc01 === '6' ? 'on' : ''}>
                                                <img src={learnc_ic02_03} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc01_Cho('7')} className={copbtc01 === '7' ? 'on' : ''}>
                                                <img src={learnc_ic02_04} alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- copbtc02 --> */}
                                <div className="copbtc02">
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
                                {/* <!-- copbtc03 --> */}
                                <div className="copbtc03">
                                    <ul>
                                        <li>
                                            <a href="#" onClick={() => copbtc03_Cho('0')} className={copbtc03 === '0' ? 'on' : ''}>
                                                <img src={glas_plus} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc03_Cho('1')} className={copbtc03 === '1' ? 'on' : ''}>
                                                <img src={transform} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc03_Cho('2')} className={copbtc03 === '2' ? 'on' : ''}>
                                                <img src={glas_minus} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={() => copbtc03_Cho('3')} className={copbtc03 === '3' ? 'on' : ''}>
                                                <img src={restoration} alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
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
                onCancel={handleCancel}
                width={950}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <Prohibited />
            </Modal>
            {/* 반입금지물품 모달 창 End */}
        </>
    );
};
