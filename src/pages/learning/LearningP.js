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

// 학습자와 학습정보조회, 의사색체 이미지 조회, pass, open, (prohibited, resricted), 합격/불합격 여부
import { useSelectLearningCompleteMutation } from '../../hooks/api/LearningManagement/LearningManagement';

// 반입금지물품 페이지
import { Prohibited } from 'pages/prohibited';

export const LearningP = (props) => {
    const { confirm } = Modal;
    const [ModalOpen, setModalOpen] = useState(false); // 반입금지물품 Modal창

    const [copbtc01, setCopbtc01] = useState();
    const [copbtc02, setCopbtc02] = useState();
    const [copbtc03, setCopbtc03] = useState();
    const [loading, setLoading] = useState(false); // 로딩
    const [textFrontSide, setTextFrontSide] = useState('F'); // 정면/측면 선택 설정
    const [learnbagScanId, setLearnbagScanId] = useState([]); // 가방아이디

    // 학습완료 정답확인 Api
    const [LearningCompleteApi] = useSelectLearningCompleteMutation();
    const [learningCompleteData, setLearningCompleteData] = useState([]);

    // =====================================================================================
    // API 호출 Start
    // =====================================================================================
    // 학습완료 정답확인 Api Call
    const LearningComplete_ApiCall = async () => {
        const LearningCompleteResponse = await LearningCompleteApi({
            eduType: 'learn',
            languageCode: 'kor'
        });
        console.log(LearningCompleteResponse?.data?.RET_DATA);
        setLearningCompleteData(LearningCompleteResponse?.data?.RET_DATA);
        setLoading(false);
    };
    // =====================================================================================
    // API 호출 End
    // =====================================================================================

    const copbtc01_Cho = (ImgColorCode) => {
        setCopbtc01(ImgColorCode);
        if (textFrontSide === 'F') {
            ImgColorCode = '1' + ImgColorCode;
        } else {
            ImgColorCode = '2' + ImgColorCode;
        }
    };

    const copbtc02_Cho = (ImgColorCode) => {
        setCopbtc02(ImgColorCode);
        if (textFrontSide === 'F') {
            ImgColorCode = '1' + ImgColorCode;
        } else {
            ImgColorCode = '2' + ImgColorCode;
        }
    };

    const copbtc03_Cho = (ImgColorCode) => {
        setCopbtc03(ImgColorCode);
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

    // 종료 처리
    const ModalClose = () => {
        props.ModalClose2();
    };

    useEffect(() => {
        setLoading(true);
        LearningComplete_ApiCall();
    }, []);

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
                                <h3>{learningCompleteData?.moduleNm}</h3>
                            </li>
                            <li>
                                <h2 className="conname">{learningCompleteData?.userName}</h2>
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
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group101' : 'color_group201'}
                                                href="#"
                                                onClick={() => copbtc01_Cho('01', learnbagScanId)}
                                                className={copbtc01 === '01' ? 'on' : ''}
                                            >
                                                <img src={learnc_0101} alt="" data-value={textFrontSide === 'F' ? '101' : '201'} />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group102' : 'color_group202'}
                                                href="#"
                                                onClick={() => copbtc01_Cho('02', learnbagScanId)}
                                                className={copbtc01 === '02' ? 'on' : ''}
                                            >
                                                <img src={learnc_0102} alt="" data-value={textFrontSide === 'F' ? '102' : '202'} />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group103' : 'color_group203'}
                                                href="#"
                                                onClick={() => copbtc01_Cho('03', learnbagScanId)}
                                                className={copbtc01 === '03' ? 'on' : ''}
                                            >
                                                <img src={learnc_0103} alt="" data-value={textFrontSide === 'F' ? '103' : '203'} />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group104' : 'color_group204'}
                                                href="#"
                                                onClick={() => copbtc01_Cho('04', learnbagScanId)}
                                                className={copbtc01 === '04' ? 'on' : ''}
                                            >
                                                <img src={learnc_0104} alt="" data-value={textFrontSide === 'F' ? '104' : '204'} />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group111' : 'color_group211'}
                                                href="#"
                                                onClick={() => copbtc01_Cho('05', learnbagScanId)}
                                                className={copbtc01 === '05' ? 'on' : ''}
                                            >
                                                <img src={learnc_0201} alt="" data-value={textFrontSide === 'F' ? '111' : '211'} />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group112' : 'color_group212'}
                                                href="#"
                                                onClick={() => copbtc01_Cho('06', learnbagScanId)}
                                                className={copbtc01 === '06' ? 'on' : ''}
                                            >
                                                <img src={learnc_0202} alt="" data-value={textFrontSide === 'F' ? '112' : '212'} />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group113' : 'color_group213'}
                                                href="#"
                                                onClick={() => copbtc01_Cho('07', learnbagScanId)}
                                                className={copbtc01 === '07' ? 'on' : ''}
                                            >
                                                <img src={learnc_0203} alt="" data-value={textFrontSide === 'F' ? '113' : '213'} />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group114' : 'color_group214'}
                                                href="#"
                                                onClick={() => copbtc01_Cho('08', learnbagScanId)}
                                                className={copbtc01 === '08' ? 'on' : ''}
                                            >
                                                <img src={learnc_0204} alt="" data-value={textFrontSide === 'F' ? '114' : '214'} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- learnbtc02 --> */}
                                <div className="learnbtc02">
                                    <ul>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group105' : 'color_group205'}
                                                href="#"
                                                onClick={() => copbtc02_Cho('09', learnbagScanId)}
                                                className={copbtc02 === '09' ? 'on' : ''}
                                            >
                                                <span className="brig_ic01_01" data-value={textFrontSide === 'F' ? '105' : '205'}></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group106' : 'color_group206'}
                                                href="#"
                                                onClick={() => copbtc02_Cho('10', learnbagScanId)}
                                                className={copbtc02 === '10' ? 'on' : ''}
                                            >
                                                <span className="brig_ic01_02" data-value={textFrontSide === 'F' ? '106' : '206'}></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group107' : 'color_group207'}
                                                href="#"
                                                onClick={() => copbtc02_Cho('11', learnbagScanId)}
                                                className={copbtc02 === '11' ? 'on' : ''}
                                            >
                                                <span className="brig_ic01_03" data-value={textFrontSide === 'F' ? '107' : '207'}></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group108' : 'color_group208'}
                                                href="#"
                                                onClick={() => copbtc02_Cho('12', learnbagScanId)}
                                                className={copbtc02 === '12' ? 'on' : ''}
                                            >
                                                <span className="brig_ic01_04" data-value={textFrontSide === 'F' ? '108' : '208'}></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group109' : 'color_group209'}
                                                href="#"
                                                onClick={() => copbtc02_Cho('13', learnbagScanId)}
                                                className={copbtc02 === '13' ? 'on' : ''}
                                            >
                                                <span className="brig_ic01_05" data-value={textFrontSide === 'F' ? '109' : '209'}></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group110' : 'color_group210'}
                                                href="#"
                                                onClick={() => copbtc02_Cho('14', learnbagScanId)}
                                                className={copbtc02 === '14' ? 'on' : ''}
                                            >
                                                <span className="brig_ic01_06" data-value={textFrontSide === 'F' ? '110' : '210'}></span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group115' : 'color_group215'}
                                                href="#"
                                                onClick={() => copbtc02_Cho('15', learnbagScanId)}
                                                className={copbtc02 === '15' ? 'on' : ''}
                                            >
                                                <span className="brig_ic02_01" data-value={textFrontSide === 'F' ? '115' : '215'}></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group116' : 'color_group216'}
                                                href="#"
                                                onClick={() => copbtc02_Cho('16', learnbagScanId)}
                                                className={copbtc02 === '16' ? 'on' : ''}
                                            >
                                                <span className="brig_ic02_02" data-value={textFrontSide === 'F' ? '116' : '216'}></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group117' : 'color_group217'}
                                                href="#"
                                                onClick={() => copbtc02_Cho('17', learnbagScanId)}
                                                className={copbtc02 === '17' ? 'on' : ''}
                                            >
                                                <span className="brig_ic02_03" data-value={textFrontSide === 'F' ? '117' : '217'}></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group118' : 'color_group218'}
                                                href="#"
                                                onClick={() => copbtc02_Cho('18', learnbagScanId)}
                                                className={copbtc02 === '18' ? 'on' : ''}
                                            >
                                                <span className="brig_ic02_04" data-value={textFrontSide === 'F' ? '118' : '218'}></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group119' : 'color_group219'}
                                                href="#"
                                                onClick={() => copbtc02_Cho('19', learnbagScanId)}
                                                className={copbtc02 === '19' ? 'on' : ''}
                                            >
                                                <span className="brig_ic02_05" data-value={textFrontSide === 'F' ? '119' : '219'}></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                id={textFrontSide === 'F' ? 'color_group120' : 'color_group220'}
                                                href="#"
                                                onClick={() => copbtc02_Cho('20', learnbagScanId)}
                                                className={copbtc02 === '20' ? 'on' : ''}
                                            >
                                                <span className="brig_ic02_06" data-value={textFrontSide === 'F' ? '120' : '220'}></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- learnbtc03 --> */}
                                <div className="learnbtc03">
                                    <ul>
                                        {/* 확대 */}
                                        <li>
                                            <a
                                                href="#"
                                                id="color_glas_plus"
                                                onClick={() => copbtc03_Cho('0')}
                                                className={copbtc03 === '0' ? 'on' : ''}
                                            >
                                                <img src={glas_plus} alt="확대" title="확대" />
                                            </a>
                                        </li>
                                        {/* 반전 */}
                                        <li>
                                            <a
                                                href="#"
                                                id="color_transform"
                                                onClick={() => copbtc03_Cho('1')}
                                                className={copbtc03 === '1' ? 'on' : ''}
                                            >
                                                <img src={transform} alt="좌우반전" title="좌우반전" />
                                            </a>
                                        </li>
                                        {/* 축소 */}
                                        <li>
                                            <a
                                                href="#"
                                                id="color_glas_minus"
                                                onClick={() => copbtc03_Cho('2')}
                                                className={copbtc03 === '2' ? 'on' : ''}
                                            >
                                                <img src={glas_minus} alt="축소" title="축소" />
                                            </a>
                                        </li>
                                        {/* 복원 */}
                                        <li>
                                            <a
                                                href="#"
                                                id="color_restoration"
                                                onClick={() => copbtc03_Cho('3')}
                                                className={copbtc03 === '3' ? 'on' : ''}
                                            >
                                                <img src={restoration} alt="복원" title="복원" />
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
                                            <th style={{ width: '11%' }}>No</th>
                                            <th style={{ width: '21%' }}>가방번호</th>
                                            <th style={{ width: '21%' }}>정답</th>
                                            <th style={{ width: '21%' }}>입력</th>
                                            <th style={{ width: '21%' }}>정답여부</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="con_table height120 scrollbar">
                                <table className="table">
                                    <tbody>
                                        {learningCompleteData?.learningProblemList.map((t, i) => {
                                            return (
                                                <tr className="on" key={i}>
                                                    <td style={{ width: '11%' }}>{i + 1}</td>
                                                    <td style={{ width: '21%' }}>{t.bagScanId}</td>
                                                    <td style={{ width: '21%' }}>{t.actionDivName}</td>
                                                    <td style={{ width: '21%' }}>
                                                        {t.userActionDivName === null ? '-' : t.userActionDivName}
                                                    </td>
                                                    <td style={{ width: '21%' }}>
                                                        <img src={t.answerYn === 'N' ? x_img : o_img} alt="" />
                                                    </td>
                                                </tr>
                                            );
                                        })}
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
