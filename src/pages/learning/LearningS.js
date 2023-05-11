/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Space, Modal, Spin } from 'antd';
import 'antd/dist/antd.css';

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
import pass from '../../images/learning/pass.png';
import open from '../../images/learning/open.png';
import prohibited from '../../images/learning/prohibited.png';
import stope from '../../images/learning/stop.png';
import learning_01_1 from '../../images/learning/learning_01_1.jpg';
import pass_color from '../../images/learning/pass_color.png';
import fail_color from '../../images/learning/fail_color.png';

// 반입금지물품 페이지
import { Prohibited } from 'pages/prohibited';
import { LearningP } from 'pages/learning/LearningP';

// 학습자와 학습정보조회, 이미지 조회, pass, open, (prohibited, resricted)
import {
    useSelectLearningMutation,
    useSelectImgMutation,
    useUpdateLeanAnswerMutation,
    useEndLeaningMutation
} from '../../hooks/api/LearningManagement/LearningManagement';

import $ from 'jquery';

export const LearningS = (props) => {
    const { confirm } = Modal;

    const [ModalOpen, setModalOpen] = useState(false); // 반입금지물품 Modal창
    const [PrintModalOpen, setPrintModalOpen] = useState(false); // 학습 결과 정보 Modal창
    const [PassModalOpen, setPassModalOpen] = useState(false); // 합격 Modal창
    const [FailModalOpen, setFailModalOpen] = useState(false); // 불합격 Modal창
    const [CompleteModalOpen, setCompleteModalOpen] = useState(false); // 완료 Modal창

    const [copbtc01, setCopbtc01] = useState();
    const [copbtc02, setCopbtc02] = useState();
    const [copbtc03, setCopbtc03] = useState();
    const [answerType, setAnswerType] = useState('');
    const [moveStop, setMoveStop] = useState('move');

    const [learnbagScanId, setLearnbagScanId] = useState([]); // 가방아이디
    const [ImageCount, setImageCount] = useState('0'); // 출제 문항 카운트
    const [ImageTotal, setImageTotal] = useState('0'); // 출제 문항의 총수량

    const [textFrontSide, setTextFrontSide] = useState('F'); // 정면/측면 선택 설정
    const [state, setState] = useState({ seconds: 0, minutes: 0 }); // 카운트

    const [loading, setLoading] = useState(false);

    // 학습자와 학습정보조회 api 정보
    const [LearningApi] = useSelectLearningMutation();
    const [learningData, setLearningData] = useState([]);

    // 이미지조회 api 정보
    const [SelectImgApi] = useSelectImgMutation();

    // PASS, OPEN, (PROHIBITED, RESRICTED) 정답처리 api 정보
    const [UpdateLeanAnswerApi] = useUpdateLeanAnswerMutation();
    const [updateLeanAnswerData, setUpdateLeanAnswerData] = useState();

    // 학습완료 api 정보
    const [EndLeaningApi] = useEndLeaningMutation();
    const [endLeaningData, setEndLeaningData] = useState();

    // 학습자와 학습정보조회 Api Call
    const Learning_ApiCall = async () => {
        const LearningResponse = await LearningApi({
            eduType: 'learn'
        });
        setLearningData(LearningResponse?.data?.RET_DATA);
        setImageTotal(LearningResponse?.data?.RET_DATA.learningProblemList.length); // 총 문항 수
        setState({ seconds: 0, minutes: LearningResponse?.data?.RET_DATA?.timeLimit }); // 카운트
        setLoading(false);
    };

    // PASS, OPEN, (PROHIBITED, RESRICTED) 정답처리 Api Call
    const UpdateLeanAnswer_ApiCall = async (userActionDiv, bagScanId) => {
        const UpdateLeanAnswerResponse = await UpdateLeanAnswerApi({
            userActionDiv: userActionDiv, // 사용자가 선택한 정답
            eduType: 'learn',
            bagScanId: bagScanId //xray 가방스캔 아이디
        });
        //console.log(UpdateLeanAnswerResponse?.data?.RET_DATA);
        setUpdateLeanAnswerData(UpdateLeanAnswerResponse?.data?.RET_DATA);
    };

    // 학습완료 Api Call
    const EndLeaning_ApiCall = async () => {
        const EndLeaningResponse = await EndLeaningApi({
            eduType: 'learn'
        });
        //console.log(EndLeaningResponse?.data?.RET_DATA);
        setEndLeaningData(EndLeaningResponse?.data?.RET_DATA);
    };

    let time_out; //이미지가 움직임 예약
    let animation; //이미지가 움직이는 상태 저장
    let position; //이미지와 스크롤바 이동
    let $currentImage; //현재 움직이는 이미지
    let is_learn01_play = false;

    //학습시작-슬라이더 타입의 시작 버튼 누르면 실행
    const learn01_start = () => {
        var containerWidth = $('#learn01_img').width(); //이미지가 움직일 공간 크기
        var isPaused = false; //일시정지 상태 저장
        var current_image = 0; //현재 움직이는 이미지가 몇번째인가
        var start_count = 0;
        var imageslength = ImageTotal;

        var origin_img = [];
        var thum_img = [];
        var bag_id = [];
        $('#learn01_img img').each(function (i) {
            origin_img[i] = $(this);
            thum_img[i] = $(this).data('thum');
            bag_id[i] = $(this).data('value');
        });
        var images = origin_img; //이미지 목록(배열)
        var move_timer = learningData.slideSpeed; //움직이는 시간(ms, 1/1000초) (slide_time / learningData.timeLimit)
        var move_distance = learningData.slideSpeed; //움직일 거리 (slide_speed / learningData.slideSpeed)
        is_learn01_play = true;

        if (imageslength == 0) {
            Modal.warning({
                title: 'Warning',
                content: '출제된 문제가 없습니다.'
            });

            clearTimeout(animation);
            clearTimeout(time_out);
            clearInterval(position);
            $('#learn01_bimg').hide();
            $('#myRange').css('visibility', 'hidden');
            is_learn01_play = false;
        } else {
            const intervalId = setInterval(() => {
                setState((prevState) => {
                    let seconds = prevState.seconds - 1;
                    let minutes = prevState.minutes;

                    if (seconds < 0) {
                        seconds = 59;
                        minutes = minutes - 1;
                    }

                    if (minutes === 0 && seconds === 0) {
                        clearInterval(intervalId);
                        clearTimeout(animation);
                        clearTimeout(time_out);
                        clearInterval(position);
                        // clearInterval(intervalId);
                        $('#learn01_bimg').hide();
                        $('#myRange').css('visibility', 'hidden');

                        is_learn01_play = false;
                        setCompleteModalOpen(true);
                    }

                    return { seconds, minutes };
                });
            }, 1000);

            //하단 바 초기화 작업
            $('#myRange').attr('max', $('#learn01_img').width());
            $('#myRange').val($('#learn01_img').width());
            $('#myRange').css('visibility', 'visible');

            $('#learn01_bimg').show();

            //시작 버튼 비활성화
            //브라우저에 따라 정상작동 되지 않는 경우가 있어
            //시작 기능이 있는 버튼을 숨기고, 기능이 없는 버튼 노출
            $('#learn01_start').hide();
            $('#learn01_start_on').show();
            $('#close-first-modal').hide();
            $('#close-first-modal_on').show();

            //이미지를 유지한 상태로 이동 시작
            function moveImage() {
                $currentImage = $(images[current_image]);
                animation = $currentImage.animate({ left: '-=' + move_distance }, move_timer, function () {
                    time_out = setTimeout(image_position, move_timer);
                });
            }

            //기존 이미지 제거하고 이동 시작
            //마지막 이미지가 끝났을 경우 시험 종료
            function resetImage() {
                $currentImage = $(images[current_image]);
                if (start_count > 0) {
                    $currentImage.remove();
                    current_image++;
                }

                // 현재 문항 수량
                if (start_count === images.length) {
                    setImageCount(start_count);
                } else {
                    setImageCount(start_count + 1);
                }

                if (current_image >= images.length) {
                    setCompleteModalOpen(true);
                    clearTimeout(animation);
                    clearTimeout(time_out);
                    clearInterval(position);
                    clearInterval(intervalId);
                    $('#learn01_bimg').hide();
                    $('#myRange').css('visibility', 'hidden');

                    is_learn01_play = false;
                } else {
                    var $nextImage = $(images[current_image]);
                    $nextImage.css('right', containerWidth);
                    $('#learn01_bimg').attr('src', $nextImage.data('thum'));
                    animation = $nextImage.animate({ left: '-=' + move_distance }, move_timer, function () {
                        time_out = setTimeout(image_position, move_timer);
                    });
                }
                start_count++;
                setLearnbagScanId(bag_id[current_image]);
            }

            //이미지 이동 진행
            //이미지가 화면 밖으로 사라질 경우 resetImage() 호출
            //왼쪽에서 오른쪽으로 이동
            function image_position() {
                $currentImage = $(images[current_image]);
                var image_left = $currentImage.position().left;

                if (image_left > containerWidth + 50) {
                    clearInterval(animation);
                    resetImage();
                } else {
                    if (is_learn01_play) {
                        animation = $currentImage.animate({ left: '+=' + move_distance }, move_timer, function () {
                            time_out = setTimeout(image_position, move_timer);
                        });
                    }
                }
            }

            //하단 버튼과 이미지의 위치를 동기화
            function set_position() {
                $currentImage = $(images[current_image]);
                var imageWidth = $currentImage.width();
                var currentPosition = $currentImage.position().left + imageWidth / 2;
                $('#myRange').val(currentPosition);
            }
            resetImage();
            //moveImage();
            position = setInterval(set_position, 10);

            //하단 버튼을 드래그하여 이미지 위치 이동
            $('#myRange').on('input', function () {
                if (isPaused) {
                    position = $('#myRange').val();
                    $currentImage = $(images[current_image]);
                    var imageWidth = $currentImage.width();
                    var image_left = Number(position) - imageWidth / 2;
                    $currentImage.attr('style', 'left:' + image_left + 'px');
                }
            });

            //진행중일때 Stop 버튼을 누르면 일시정지
            //일시정지일때 Stop 버튼을 누르면 다시재생
            $('#learn01_stop').click(function () {
                if (is_learn01_play) {
                    if (!isPaused) {
                        isPaused = true;
                        $(images[current_image]).stop();
                        clearTimeout(animation);
                        clearTimeout(time_out);
                        clearInterval(position);
                        $('#learn01_stop').addClass('lnbtc_btnon');
                        $('#myRange').removeAttr('disabled');
                    } else {
                        isPaused = false;
                        moveImage();
                        $('#learn01_stop').removeClass('lnbtc_btnon');
                        position = setInterval(set_position, 10);
                        $('#myRange').attr('disabled', '');
                    }
                }
            });

            //Pass, Open, Prohibited 눌렀을 때 다음 이미지 보이게
            function learn01_btn() {
                if (is_learn01_play) {
                    isPaused = false;

                    // open 초기화 (RESRICTED -> PROHIBITED)
                    setAnswerType('');
                    $('#learn01_stop').removeClass('lnbtc_btnon');
                    $(images[current_image]).stop();
                    clearTimeout(animation);
                    clearTimeout(time_out);
                    clearInterval(position);
                    position = setInterval(set_position, 10);

                    $('#myRange').attr('disabled', '');
                    resetImage();
                }
            }

            //<====================
            //각각 버튼 눌렀을 때 처리할 부분
            //다음 이미지로 넘어가는 기능만 구현
            $('#learn01_pass').click(function () {
                learn01_btn();
            });

            $('#learn01_prohibited').click(function () {
                learn01_btn();
            });
            //======================>

            // 측면 이미지 클릭시 처리
            $('#learn01_bimg').click(function () {
                var image_src = $(this).attr('src');
                $currentImage = $(images[current_image]);
                $(this).attr('src', $currentImage.attr('src'));
                $currentImage.attr('src', image_src);
            });

            // 의사색체 버튼 클릭시 처리 정면
            ['101', '102', '103', '104', '111', '112', '113', '114', '201', '202', '203', '204', '211', '212', '213', '214'].forEach(
                (group) => {
                    $(`#color_group${group}`).click(async function () {
                        try {
                            const SelectImgResponse = await SelectImgApi({
                                bagScanId: bag_id[current_image],
                                command: group
                            }); // 비동기 함수 호출

                            if (group === '101') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColor; //정면컬러 101
                            } else if (group === '102') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorMineral; //정면무기물 102
                            } else if (group === '103') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorOrganism; //정면유기물 103
                            } else if (group === '104') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorReversal; //정면반전 104
                            } else if (group === '111') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBw; //정면흑백 111
                            } else if (group === '112') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwMineral; //정면흑백무기물 112
                            } else if (group === '113') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwOrganism; //정면흑백유기물 113
                            } else if (group === '114') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwReversal; //정면흑백반전 114
                            } else if (group === '201') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColor; //측면컬러 201
                            } else if (group === '202') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorMineral; //측면무기물 202
                            } else if (group === '203') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorOrganism; //측면유기물 203
                            } else if (group === '204') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorReversal; //측면반전 204
                            } else if (group === '211') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBw; //측면흑백211
                            } else if (group === '212') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwMinerals; //측면흑백무기물212
                            } else if (group === '213') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwOrganism; //측면흑백유기물213
                            } else if (group === '214') {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwReversal; //측면흑백반전214
                            } else {
                                var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColor; //정면컬러 101
                            }
                            $currentImage = $(images[current_image]);
                            $(this).attr('src', $currentImage.attr('src'));
                            $currentImage.attr('src', 'data:image/png;base64,' + image_src);
                        } catch (error) {}
                    });
                }
            );

            // 의사색체 버튼 클릭시 처리 측면
            [
                '105',
                '106',
                '107',
                '108',
                '109',
                '110',
                '115',
                '116',
                '117',
                '118',
                '119',
                '120',
                '205',
                '206',
                '207',
                '208',
                '209',
                '210',
                '215',
                '216',
                '217',
                '218',
                '219',
                '220'
            ].forEach((group) => {
                $(`#color_group${group}`).click(async function () {
                    try {
                        const SelectImgResponse = await SelectImgApi({
                            bagScanId: bag_id[current_image],
                            command: group
                        }); // 비동기 함수 호출

                        if (group === '105') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorBwRate1; //정면채도 105
                        } else if (group === '106') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorBwRate2; //정면채도 106
                        } else if (group === '107') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorBwRate3; //정면채도 107
                        } else if (group === '108') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorBwRate4; //정면채도 108
                        } else if (group === '109') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorBwRate5; //정면채도 109
                        } else if (group === '110') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorBwRate6; //정면채도 110
                        } else if (group === '115') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwBwRate1; //정면흑백채도 115
                        } else if (group === '116') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwBwRate2; //정면흑백채도 116
                        } else if (group === '117') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwBwRate3; //정면흑백채도 117
                        } else if (group === '118') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwBwRate4; // 정면흑백채도118
                        } else if (group === '119') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwBwRate5; //정면흑백채도 119
                        } else if (group === '120') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontBwBwRate6; //정면흑백채도 120
                        } else if (group === '205') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorBwRate1; //측면채도 205
                        } else if (group === '206') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorBwRate2; //측면채도206
                        } else if (group === '207') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorBwRate3; //측면채도207
                        } else if (group === '208') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorBwRate4; //측면채도208
                        } else if (group === '209') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorBwRate5; //측면채도209
                        } else if (group === '210') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgSideColorBwRate6; //측면채도210
                        } else if (group === '215') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwBwRate1; //측면흑백채도215
                        } else if (group === '216') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwBwRate2; //측면흑백채도216
                        } else if (group === '217') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwBwRate3; //측면흑백채도217
                        } else if (group === '218') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwBwRate4; //측면흑백채도218
                        } else if (group === '219') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwBwRate5; //측면흑백채도219
                        } else if (group === '220') {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgSideBwBwRate6; //측면흑백채도220
                        } else {
                            var image_src = SelectImgResponse?.data?.RET_DATA.imgFrontColorBwRate1; //정면컬러 101
                        }
                        $currentImage = $(images[current_image]);
                        $(this).attr('src', $currentImage.attr('src'));
                        $currentImage.attr('src', 'data:image/png;base64,' + image_src);
                    } catch (error) {}
                });
            });
        }
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

    const PrinthandleOk = () => {
        setPrintModalOpen(false);
    };

    // 합격 Modal 이벤트 처리
    const PasshandleOk = () => {
        setPassModalOpen(false);
    };

    // 불합격 Modal 이벤트 처리
    const FailhandleOk = () => {
        setFailModalOpen(false);
        setPrintModalOpen(true); // 정답확인 modal 창 열기
    };

    // 완료 Modal 이벤트 처리
    const CompletehandleOk = () => {
        setCompleteModalOpen(false); // 완료 modal 창 닫기
        setFailModalOpen(true);
        setPassModalOpen(true);
    };

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

    // 정답 처리
    const answerEvent = (userActionDiv, bagScanId) => {
        // PASS, OPEN, (PROHIBITED, RESRICTED) 정답처리
        UpdateLeanAnswer_ApiCall(userActionDiv, bagScanId);
    };

    // 슬라이드 Stop/Move 처리
    const MoveStopEvent = () => {
        if (moveStop == 'move') {
            setMoveStop('stop');
        } else {
            setMoveStop('move');
        }
    };

    // 종료 처리
    const ModalClose = () => {
        props.ModalClose();
    };

    // 강제종료 처리
    const LearningSModalClose = () => {
        props.ModalClose();
    };

    // 종료 처리2
    const ModalClose2 = () => {
        LearningSModalClose();
        setPrintModalOpen(false);
    };

    useEffect(() => {
        setLoading(true);
        Learning_ApiCall(); // 학습자와 학습정보조회 api 호출
        // EndLeaning_ApiCall(); // 합격, 불합격 api 호출
    }, []);

    return (
        <>
            <Spin spinning={loading}>
                <div className="learn_con">
                    <div className="xbt_top">
                        <div className="learnct01">
                            <ul>
                                <li>
                                    <h1 className="contit">학습(Slide)</h1>
                                </li>
                                <li>
                                    <h3>{learningData.moduleNm}</h3>
                                </li>
                                <li>
                                    <h2 className="conname pr30">{learningData.userName}</h2>
                                    <button type="button" className="conbtn01" onClick={() => Prohibitedinfo_Modal()}>
                                        반입금지물품
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="learnct02">
                            <ul>
                                <li className="learntit_con">
                                    <div className="learntit">OR Normal</div>
                                    <div className="learntit">
                                        {textFrontSide === 'F' ? 'Front' : 'Side'} {learnbagScanId}
                                    </div>
                                    <div className="learntit">레벨 : 1</div>
                                </li>
                                <li className="learnct02_center">
                                    <div className="question">
                                        문항
                                        <span>
                                            {ImageCount}/{ImageTotal}
                                        </span>
                                    </div>
                                    <div className="question_box">
                                        <dl>
                                            <dd className="qsbox">{state.minutes < 10 ? `0${state.minutes}` : state.minutes}</dd>
                                            <dd className="qsb_pd">:</dd>
                                            <dd className="qsbox">{state.seconds < 10 ? `0${state.seconds}` : state.seconds}</dd>
                                        </dl>
                                    </div>
                                </li>
                                <li>
                                    <button className="learnbtn btn_start" id="learn01_start" type="button" onClick={learn01_start}>
                                        시작
                                    </button>
                                    <button className="learnbtn btn_end" id="learn01_start_on" type="button">
                                        시작
                                    </button>
                                    <button
                                        id="close-first-modal"
                                        data-mact="close"
                                        data-minfo="first-modal"
                                        style={{ marginLeft: '23px' }}
                                        className="modal_btn learnbtn btn_start"
                                        onClick={ModalClose}
                                    >
                                        종료
                                    </button>
                                    <button
                                        id="close-first-modal_on"
                                        data-mact="close"
                                        data-minfo="first-modal"
                                        style={{ display: 'none' }}
                                        className="modal_btn learnbtn btn_end"
                                    >
                                        종료
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- learnc_img --> */}
                    <div className="learnc_img" id="learn01_img" style={{ height: '450px' }}>
                        {learningData?.learningProblemList?.map((imgs, i) => {
                            return (
                                <img
                                    key={i}
                                    src={'data:image/png;base64,' + imgs.imgFront}
                                    data-thum={'data:image/png;base64,' + imgs.imgSide}
                                    data-value={imgs.bagScanId}
                                    className="image"
                                    alt={imgs.bagScanId}
                                    title={imgs.bagScanId}
                                />
                            );
                        })}
                    </div>
                    <input type="range" name="" id="myRange" max="1000" disabled style={{ width: '100%', visibility: 'hidden' }} />
                </div>
                {/* <!-- learn_bottom --> */}
                <div className="learn_bottom">
                    {/* <!-- learn_btcon --> */}
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
                        {/* <!-- learnbtc03 확대, 축소, 반전, 복구 --> */}
                        <div className="learnbtc03">
                            <ul>
                                <li>
                                    <a href="#" id="color_group" onClick={() => copbtc03_Cho('0')} className={copbtc03 === '0' ? 'on' : ''}>
                                        <img src={glas_plus} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" id="color_group" onClick={() => copbtc03_Cho('1')} className={copbtc03 === '1' ? 'on' : ''}>
                                        <img src={transform} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" id="color_group" onClick={() => copbtc03_Cho('2')} className={copbtc03 === '2' ? 'on' : ''}>
                                        <img src={glas_minus} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" id="color_group" onClick={() => copbtc03_Cho('3')} className={copbtc03 === '3' ? 'on' : ''}>
                                        <img src={restoration} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- learnbtc04 --> */}
                        <div className="learnbtc04">
                            <ul>
                                <li>
                                    <button
                                        className="lnbtc_btn lnbtc_btnon next"
                                        id="learn01_pass"
                                        type="button"
                                        onClick={() => (answerType === 'OPEN' ? answerEvent('4', 'X00241') : answerEvent('2', 'X00241'))}
                                    >
                                        <span>
                                            <img src={pass} alt="" />
                                        </span>
                                        <p style={{ fontSize: '16px' }}>Pass</p>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="lnbtc_btn lnbtc_btnon"
                                        id="learn01_open"
                                        type="button"
                                        onClick={() => setAnswerType('OPEN')}
                                    >
                                        <span>
                                            <img src={open} alt="" />
                                        </span>
                                        <p style={{ fontSize: '16px' }}>Open</p>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="lnbtc_btn lnbtc_btnon"
                                        id="learn01_prohibited"
                                        type="button"
                                        onClick={() => (answerType === 'OPEN' ? answerEvent('1', 'X00241') : answerEvent('3', 'X00241'))}
                                    >
                                        <span>
                                            <img src={prohibited} alt="" />
                                        </span>
                                        <p style={{ fontSize: '16px' }}>{answerType === 'OPEN' ? 'Resricted' : 'Prohibited'}</p>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- learnbtc05 멈춤 이미지 --> */}
                        <div className="learnbtc05">
                            <button className="lnbtc_btn stop" id="learn01_stop" type="button" onClick={MoveStopEvent}>
                                <span>
                                    <img src={stope} alt="" />
                                </span>
                                <p>Stop</p>
                            </button>
                        </div>
                        {/* <!-- learnbtc06 측면 이미지 --> */}
                        <div className="learnbtc06">
                            <button onClick={() => (textFrontSide === 'S' ? setTextFrontSide('F') : setTextFrontSide('S'))}>
                                <img src={learning_01_1} id="learn01_bimg" style={{ display: 'none', height: '74px' }} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                {/*  */}
            </Spin>
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

            {/* 정답 확인 Start */}
            <Modal
                maskClosable={false}
                open={PrintModalOpen}
                onOk={PrinthandleOk}
                closable={false}
                // onCancel={handleCancel}
                width={'97%'}
                style={{
                    top: 15,
                    zIndex: 999
                }}
                footer={[]}
            >
                <LearningP ModalClose2={ModalClose2} />
            </Modal>
            {/* 정답 확인 End */}

            {/* 완료 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={CompleteModalOpen}
                onOk={CompletehandleOk}
                closable={false}
                // onCancel={handleCancel}
                width={590}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <div style={{ width: '542px', textAlign: 'center', padding: '50px 0px' }}>
                    <div className="scwd_txt01">
                        <h1>학습을 마쳤습니다.</h1>
                    </div>
                    <div className="scwd_txt02">
                        <p>수고하셨습니다.</p>
                    </div>
                    <button
                        id="open-six-modal"
                        data-mact="open"
                        data-minfo="six-modal"
                        className="modal_btn conbtn01"
                        onClick={CompletehandleOk}
                    >
                        확인
                    </button>
                    {/* <button id="close-eig-modal" data-mact="close" data-minfo="eig-modal" className="modal_btn close_btn02"></button> */}
                </div>
            </Modal>
            {/* 완료 모달 창 End */}

            {/* 합격 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={PassModalOpen}
                onOk={PasshandleOk}
                closable={false}
                // onCancel={handleCancel}
                width={590}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <div style={{ width: '542px', textAlign: 'center', padding: '50px 0px' }}>
                    <div className="img">
                        <img src={pass_color} alt="" />
                    </div>
                    <div className="scwd_txt01">
                        <h3>
                            X-ray 판독 초급 2023 - 1차 <span>평균 : 81</span>
                        </h3>
                    </div>
                    <div className="scwd_txt02">
                        <h1>
                            금지물품 통과로 <span className="scwd_pass">합격입니다.</span>
                        </h1>
                    </div>
                    <button
                        id="open-sev-modal"
                        data-mact="open"
                        data-minfo="sev-modal"
                        className="modal_btn conbtn01"
                        onClick={PasshandleOk}
                    >
                        확인
                    </button>
                    {/* <button id="close-six-modal" data-mact="close" data-minfo="six-modal" className="modal_btn close_btn02"></button> */}
                </div>
            </Modal>
            {/* 합격 모달 창 End */}

            {/* 불합격 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={FailModalOpen}
                onOk={FailhandleOk}
                closable={false}
                // onCancel={handleCancel}
                width={590}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <div style={{ width: '542px', textAlign: 'center', padding: '50px 0px' }}>
                    <div>
                        <img src={fail_color} alt="" />
                    </div>
                    <div className="scwd_txt01">
                        <h3>
                            X-ray 판독 초급 2023 - 1차 <span>평균 : 50</span>
                        </h3>
                    </div>
                    <div className="scwd_txt02">
                        <h1>
                            금지물품 통과로 <span className="scwd_fail">불합격입니다.</span>
                        </h1>
                    </div>
                    <button
                        id="open-eig-modal"
                        data-mact="open"
                        data-minfo="eig-modal"
                        className="modal_btn conbtn01"
                        onClick={FailhandleOk}
                    >
                        확인
                    </button>
                    {/* <button id="close-sev-modal" data-mact="close" data-minfo="sev-modal" className="modal_btn close_btn02"></button> */}
                </div>
            </Modal>
            {/* 불합격 모달 창 End */}
        </>
    );
};
