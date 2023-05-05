/* eslint-disable no-unused-vars */
import React from 'react';
import { Select, Space } from 'antd';

import gun from '../../images/practice/gun.svg';
import bomb from '../../images/practice/bomb.svg';
import ammunition from '../../images/practice/ammunition.svg';
import sword from '../../images/practice/sword.svg';
import weapon from '../../images/practice/weapon.svg';
import camouflage_weapon from '../../images/practice/camouflage_weapon.svg';
import tool from '../../images/practice/tool.svg';
import flammable_sub from '../../images/practice/flammable_sub.svg';
import danger_substances from '../../images/practice/danger_substances.svg';
import liquid from '../../images/practice/liquid.svg';

export const OXProhibited = (props) => {
    const OptionsSet = [
        {
            value: '0',
            label: '미개봉/금지'
        },
        {
            value: '1',
            label: '미개봉/통과'
        },
        {
            value: '2',
            label: '미개봉/제한'
        },
        {
            value: '3',
            label: '개봉/금지'
        },
        {
            value: '4',
            label: '개봉/통과'
        },
        {
            value: '5',
            label: '개봉/제한'
        }
    ];

    const StyleSet = {
        width: 180,
        color: '#98BBE0',
        borderRadius: 8
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const ModalClose = () => {
        props.ModalClose();
    };

    return (
        <>
            <div className="xbt_content banItems_content">
                {/* <!-- xbt_top --> */}
                <div className="xbt_top">
                    {/* <!-- xbttop02 --> */}
                    <div className="xbttop02">
                        <ul>
                            <li>
                                <h1 className="contit">반입금지물품연습</h1>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- xbt_con --> */}
                <div className="xbt_con">
                    {/* <!-- 물품 타이틀 표 --> */}
                    <div className="banItems_table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th style={{ width: '10%' }}>이미지</th>
                                    <th style={{ width: '15%' }} className="t_left">
                                        물품종류
                                    </th>
                                    <th style={{ width: '50%' }} className="t_left">
                                        물품설명
                                    </th>
                                    <th style={{ width: '15%' }}>Action</th>
                                    <th style={{ width: '10%' }}>정답여부</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    {/* <!-- //물품 타이틀 표 -->	 */}
                    {/* <!-- 물품 내용 표 --> */}
                    <div className="banItems_table scrollbar">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td style={{ width: '10%' }}>
                                        <span>
                                            <img src={gun} alt="" />
                                        </span>
                                    </td>
                                    <td style={{ width: '15%' }}>총기류</td>
                                    <td style={{ width: '50%' }}>총기류 (권총, 소총, 기타 총기부품), 가스총, 장난감총 등</td>
                                    <td style={{ width: '15%' }}>
                                        {/* <!-- 옵션--> */}
                                        <div className="practice_test_select">
                                            <Space wrap>
                                                <Select
                                                    defaultValue="#정답선택"
                                                    style={StyleSet}
                                                    onChange={handleChange}
                                                    options={OptionsSet}
                                                />
                                            </Space>
                                        </div>
                                        {/* <!-- //옵션 --> */}
                                    </td>
                                    <td style={{ width: '10%' }}>
                                        <span> </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '10%' }}>
                                        <span>
                                            <img src={bomb} alt="" />
                                        </span>
                                    </td>
                                    <th style={{ width: '15%' }}>폭발물류</th>
                                    <td style={{ width: '50%' }}>
                                        폭약, 사제폭발물, 도화선, 도폭선, 점화장치, 뇌관, 신호탄, 수류탄, 연막탄 등
                                    </td>
                                    <td style={{ width: '15%' }}>
                                        {/* <!-- 옵션--> */}
                                        <div className="practice_test_select">
                                            <Space wrap>
                                                <Select
                                                    defaultValue="#정답선택"
                                                    style={StyleSet}
                                                    onChange={handleChange}
                                                    options={OptionsSet}
                                                />
                                            </Space>
                                        </div>
                                        {/* <!-- //옵션 --> */}
                                    </td>
                                    <td style={{ width: '10%' }}>
                                        <span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <img src={ammunition} alt="" />
                                        </span>
                                    </td>
                                    <th>실탄류</th>
                                    <td>총탄류(권총탄, 소총탄), 탄창, 산탄, 납탄, BB탄 등</td>
                                    <td>
                                        {/* <!-- 옵션--> */}
                                        <div className="practice_test_select">
                                            <Space wrap>
                                                <Select
                                                    defaultValue="#정답선택"
                                                    style={StyleSet}
                                                    onChange={handleChange}
                                                    options={OptionsSet}
                                                />
                                            </Space>
                                        </div>
                                        {/* <!-- //옵션 --> */}
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <img src={sword} alt="" />
                                        </span>
                                    </td>
                                    <th>도검류</th>
                                    <td>카터칼, 맥가이버칼,과도, 테일키트, 박스칼 등</td>
                                    <td>
                                        {/* <!-- 옵션--> */}
                                        <div className="practice_test_select">
                                            <Space wrap>
                                                <Select
                                                    defaultValue="#정답선택"
                                                    style={StyleSet}
                                                    onChange={handleChange}
                                                    options={OptionsSet}
                                                />
                                            </Space>
                                        </div>
                                        {/* <!-- //옵션 --> */}
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <img src={weapon} alt="" />
                                        </span>
                                    </td>
                                    <th>일반 무기류</th>
                                    <td>전자충격기, 호신용 스프레이, 다트, 수갑, 곤봉, 표창, 쌍절곤, 목검, 둔기 등</td>
                                    <td>
                                        {/* <!-- 옵션--> */}
                                        <div className="practice_test_select">
                                            <Space wrap>
                                                <Select
                                                    defaultValue="#정답선택"
                                                    style={StyleSet}
                                                    onChange={handleChange}
                                                    options={OptionsSet}
                                                />
                                            </Space>
                                        </div>
                                        {/* <!-- //옵션 --> */}
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <img src={camouflage_weapon} alt="" />
                                        </span>
                                    </td>
                                    <th>위장무기류</th>
                                    <td>혁대칼, 립스틱칼, 라이터칼, 지팡이칼, 카드칼, 목걸이위장칼 등</td>
                                    <td>
                                        {/* <!-- 옵션--> */}
                                        <div className="practice_test_select">
                                            <Space wrap>
                                                <Select
                                                    defaultValue="#정답선택"
                                                    style={StyleSet}
                                                    onChange={handleChange}
                                                    options={OptionsSet}
                                                />
                                            </Space>
                                        </div>
                                        {/* <!-- //옵션 --> */}
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <img src={tool} alt="" />
                                        </span>
                                    </td>
                                    <th>공구/생활용품류</th>
                                    <td>망치, 톱, 톱날, 줄, 드라이버, 송곳, 가위 등 (기준 초과시)</td>
                                    <td>
                                        {/* <!-- 옵션--> */}
                                        <div className="practice_test_select">
                                            <Space wrap>
                                                <Select
                                                    defaultValue="#정답선택"
                                                    style={StyleSet}
                                                    onChange={handleChange}
                                                    options={OptionsSet}
                                                />
                                            </Space>
                                        </div>
                                        {/* <!-- //옵션 --> */}
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <img src={flammable_sub} alt="" />
                                        </span>
                                    </td>
                                    <th>인화성물질류</th>
                                    <td>라이터가스&기름, 신너, 접착제(본드), 캠핑가스, 폭죽 등</td>
                                    <td>
                                        {/* <!-- 옵션--> */}
                                        <div className="practice_test_select">
                                            <Space wrap>
                                                <Select
                                                    defaultValue="#정답선택"
                                                    style={StyleSet}
                                                    onChange={handleChange}
                                                    options={OptionsSet}
                                                />
                                            </Space>
                                        </div>
                                        {/* <!-- //옵션 --> */}
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <img src={danger_substances} alt="" />
                                        </span>
                                    </td>
                                    <th>위험물질류</th>
                                    <td>독극물, 염산, 황산, 습식건전지, 부식제, 수은, 살충제 등</td>
                                    <td data-chk="2">
                                        {/* <!-- 옵션--> */}
                                        <div className="practice_test_select">
                                            <Space wrap>
                                                <Select
                                                    defaultValue="#정답선택"
                                                    style={StyleSet}
                                                    onChange={handleChange}
                                                    options={OptionsSet}
                                                />
                                            </Space>
                                        </div>
                                        {/* <!-- //옵션 --> */}
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>
                                            <img src={liquid} alt="" />
                                        </span>
                                    </td>
                                    <th>액체, 겔 물품</th>
                                    <td>개별용기당 100ml를 초과하는 액체,겔 물품(화장품, 샴푸, 고추장, 된장 등)</td>
                                    <td data-chk="2">
                                        {/* <!-- 옵션--> */}
                                        <div className="practice_test_select">
                                            <Space wrap>
                                                <Select
                                                    defaultValue="#정답선택"
                                                    style={StyleSet}
                                                    onChange={handleChange}
                                                    options={OptionsSet}
                                                />
                                            </Space>
                                        </div>
                                        {/* <!-- //옵션 --> */}
                                    </td>
                                    <td>
                                        <span></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- //물품 내용 표 --> */}
                </div>
                <button
                    id="close-first-modal"
                    data-mact="close"
                    data-minfo="first-modal"
                    className="modal_btn close_btn"
                    onClick={ModalClose}
                ></button>
            </div>
        </>
    );
};
