/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import $ from 'jquery';
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

    const [choiceGoods, setChoiceGoods] = useState(''); // 가방 선택

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

    // let images = $('#learn02_img img'); //이미지 목록
    // let $currentImage; //현재 움직이는 이미지
    // var start_count = 0;
    // let currentImageIndex = 0; //현재 보여지는 이미지 순서

    // // 측면 이미지 클릭시 처리
    // $('#learn02_bimg').click(function () {
    //     var image_src = $(this).attr('src');
    //     $currentImage = $(images[currentImageIndex]);
    //     $(this).attr('src', $currentImage.attr('src'));
    //     $currentImage.attr('src', image_src);
    // });

    // // 의사색체 버튼 클릭
    // $('#color_group101').click(function () {
    //     if ($(this)[0].id == 'color_group101') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '101');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '201');
    //     }
    // });

    // $('#color_group102').click(function () {
    //     if ($(this)[0].id == 'color_group102') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '102');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '202');
    //     }
    // });

    // $('#color_group103').click(function () {
    //     if ($(this)[0].id == 'color_group103') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '103');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '203');
    //     }
    // });

    // $('#color_group104').click(function () {
    //     if ($(this)[0].id == 'color_group104') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '104');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '204');
    //     }
    // });

    // $('#color_group105').click(function () {
    //     if ($(this)[0].id == 'color_group105') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '105');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '205');
    //     }
    // });

    // $('#color_group106').click(function () {
    //     if ($(this)[0].id == 'color_group106') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '106');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '206');
    //     }
    // });

    // $('#color_group107').click(function () {
    //     if ($(this)[0].id == 'color_group107') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '107');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '207');
    //     }
    // });

    // $('#color_group108').click(function () {
    //     if ($(this)[0].id == 'color_group108') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '108');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '208');
    //     }
    // });

    // $('#color_group109').click(function () {
    //     if ($(this)[0].id == 'color_group109') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '109');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '209');
    //     }
    // });

    // $('#color_group110').click(function () {
    //     if ($(this)[0].id == 'color_group110') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '110');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '210');
    //     }
    // });

    // $('#color_group111').click(function () {
    //     if ($(this)[0].id == 'color_group111') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '111');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '211');
    //     }
    // });

    // $('#color_group112').click(function () {
    //     if ($(this)[0].id == 'color_group112') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '112');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '212');
    //     }
    // });

    // $('#color_group113').click(function () {
    //     if ($(this)[0].id == 'color_group113') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '113');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '213');
    //     }
    // });

    // $('#color_group114').click(function () {
    //     if ($(this)[0].id == 'color_group114') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '114');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '214');
    //     }
    // });

    // $('#color_group115').click(function () {
    //     if ($(this)[0].id == 'color_group115') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '115');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '215');
    //     }
    // });

    // $('#color_group116').click(function () {
    //     if ($(this)[0].id == 'color_group116') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '116');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '216');
    //     }
    // });

    // $('#color_group117').click(function () {
    //     if ($(this)[0].id == 'color_group117') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '117');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '217');
    //     }
    // });

    // $('#color_group118').click(function () {
    //     if ($(this)[0].id == 'color_group118') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '118');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '218');
    //     }
    // });

    // $('#color_group119').click(function () {
    //     if ($(this)[0].id == 'color_group119') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '119');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '219');
    //     }
    // });

    // $('#color_group120').click(function () {
    //     if ($(this)[0].id == 'color_group120') {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '120');
    //     } else {
    //         imagesrcApi($(images[currentImageIndex]).data('value'), '220');
    //     }
    // });

    // async function imagesrcApi(bagScanId, command) {
    //     try {
    //         const SelectImgResponse = await SelectImgApi({
    //             bagScanId: bagScanId,
    //             command: command
    //         }); // 비동기 함수 호출

    //         if (command === '101') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColor; //정면컬러 101
    //         } else if (command === '102') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorMineral; //정면무기물 102
    //         } else if (command === '103') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorOrganism; //정면유기물 103
    //         } else if (command === '104') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorReversal; //정면반전 104
    //         } else if (command === '105') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorBwRate1; //정면채도 105
    //         } else if (command === '106') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorBwRate2; //정면채도 106
    //         } else if (command === '107') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorBwRate3; //정면채도 107
    //         } else if (command === '108') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorBwRate4; //정면채도 108
    //         } else if (command === '109') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorBwRate5; //정면채도 109
    //         } else if (command === '110') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorBwRate6; //정면채도 110
    //         } else if (command === '111') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBw; //정면흑백 111
    //         } else if (command === '112') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwMineral; //정면흑백무기물 112
    //         } else if (command === '113') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwOrganism; //정면흑백유기물 113
    //         } else if (command === '114') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwReversal; //정면흑백반전 114
    //         } else if (command === '115') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwBwRate1; //정면흑백채도 115
    //         } else if (command === '116') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwBwRate2; //정면흑백채도 116
    //         } else if (command === '117') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwBwRate3; //정면흑백채도 117
    //         } else if (command === '118') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwBwRate4; // 정면흑백채도118
    //         } else if (command === '119') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwBwRate5; //정면흑백채도 119
    //         } else if (command === '120') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwBwRate6; //정면흑백채도 120
    //         } else if (command === '201') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColor; //측면컬러 201
    //         } else if (command === '202') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorMineral; //측면무기물 202
    //         } else if (command === '203') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorOrganism; //측면유기물 203
    //         } else if (command === '204') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorReversal; //측면반전 204
    //         } else if (command === '205') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorBwRate1; //측면채도 205
    //         } else if (command === '206') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorBwRate2; //측면채도206
    //         } else if (command === '207') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorBwRate3; //측면채도207
    //         } else if (command === '208') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorBwRate4; //측면채도208
    //         } else if (command === '209') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorBwRate5; //측면채도209
    //         } else if (command === '210') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorBwRate6; //측면채도210
    //         } else if (command === '211') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBw; //측면흑백211
    //         } else if (command === '212') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwMinerals; //측면흑백무기물212
    //         } else if (command === '213') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwOrganism; //측면흑백유기물213
    //         } else if (command === '214') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwReversal; //측면흑백반전214
    //         } else if (command === '215') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwBwRate1; //측면흑백채도215
    //         } else if (command === '216') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwBwRate2; //측면흑백채도216
    //         } else if (command === '217') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwBwRate3; //측면흑백채도217
    //         } else if (command === '218') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwBwRate4; //측면흑백채도218
    //         } else if (command === '219') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwBwRate5; //측면흑백채도219
    //         } else if (command === '220') {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwBwRate6; //측면흑백채도220
    //         } else {
    //             var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColor; //정면컬러 101
    //         }
    //         $currentImage = $(images[currentImageIndex]);
    //         $(this).attr('src', $currentImage.attr('src'));
    //         $currentImage.attr('src', 'data:image/png;base64,' + image_src);
    //     } catch (error) {}
    // }

    // // 이미지 클릭시 preview 이벤트
    // $(images[currentImageIndex]).click(function (e) {
    //     PreviewCall(e.target.src);
    // });

    // var scale = 1;
    // var isFlipped = false;
    // var originalWidth = $(images[currentImageIndex]).width();

    // // 확대
    // $('#color_glas_plus').click(async function () {
    //     scale += 0.1;
    //     $(images[currentImageIndex]).css('transform', 'scaleX(' + (isFlipped ? -1 : 1) + ') scale(' + scale + ')');
    // });

    // // 좌우 반전
    // $('#color_transform').click(async function () {
    //     isFlipped = !isFlipped;
    //     $(images[currentImageIndex]).css('transform', 'scaleX(' + (isFlipped ? -1 : 1) + ') scale(' + scale + ')');
    // });

    // // 축소
    // $('#color_glas_minus').click(async function () {
    //     scale -= 0.1;
    //     $(images[currentImageIndex]).css('transform', 'scaleX(' + (isFlipped ? -1 : 1) + ') scale(' + scale + ')');
    // });

    // // 복원
    // $('#color_restoration').click(async function () {
    //     scale = 1;
    //     isFlipped = false;
    //     $(images[currentImageIndex]).css('transform', 'scaleX(1) scale(1)');
    //     $(images[currentImageIndex]).width(originalWidth);
    // });

    // var mouseX = 0;
    // var mouseY = 0;
    // var isDragging = false;
    // var startLeft = 0;
    // var startTop = 0;

    // $(images[currentImageIndex]).mousedown(function (e) {
    //     isDragging = true;
    //     mouseX = e.pageX;
    //     mouseY = e.pageY;
    //     startLeft = parseInt($(images[currentImageIndex]).css('left')) || 0;
    //     startTop = parseInt($(images[currentImageIndex]).css('top')) || 0;
    // });

    // $(document).mouseup(function (e) {
    //     isDragging = false;
    // });

    // $(document).mousemove(function (e) {
    //     if (isDragging) {
    //         var x = e.pageX - mouseX;
    //         var y = e.pageY - mouseY;
    //         var newLeft = startLeft + x;
    //         var newTop = startTop + y;
    //         $(images[currentImageIndex]).css('left', newLeft + 'px');
    //         $(images[currentImageIndex]).css('top', newTop + 'px');
    //     }
    // });

    const copbtc01_Cho = (ImgColorCode) => {
        setCopbtc01(ImgColorCode);
        setCopbtc02();
        setCopbtc03();
    };

    const copbtc02_Cho = (ImgColorCode) => {
        setCopbtc02(ImgColorCode);
        setCopbtc01();
        setCopbtc03();
    };

    const copbtc03_Cho = (ImgColorCode) => {
        setCopbtc01();
        setCopbtc02();
        setCopbtc03(ImgColorCode);
    };

    // 가방 선택
    const handChoiceGoods = (choice) => {
        setChoiceGoods(choice);
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
                                        {learningCompleteData?.learningProblemList?.map((t, i) => {
                                            return (
                                                <tr className={choiceGoods === i ? 'on' : ''} key={i} onClick={() => handChoiceGoods(i)}>
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
