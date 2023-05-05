/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Space, Modal } from 'antd';
import 'antd/dist/antd.css';

import learning_01 from '../../images/learning/learning_01.jpg';
import learning_02 from '../../images/learning/learning_02.jpg';
import learning_03 from '../../images/learning/learning_03.jpg';
import learning_04 from '../../images/learning/learning_04.jpg';
import learning_05 from '../../images/learning/learning_05.jpg';
import learning_0101 from '../../images/learning/learning_01_1.jpg';
import learning_0201 from '../../images/learning/learning_02_1.jpg';
import learning_0301 from '../../images/learning/learning_03_1.jpg';
import learning_0401 from '../../images/learning/learning_04_1.jpg';
import learning_0501 from '../../images/learning/learning_05_1.jpg';
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

import $ from 'jquery';

export const WrongAnswerS = (props) => {
    const { confirm } = Modal;
    const [ModalOpen, setModalOpen] = useState(false); // 반입금지물품 Modal창
    const [PrintModalOpen, setPrintModalOpen] = useState(false); // 오답문제풀이 결과 정보 Modal창
    const [PassModalOpen, setPassModalOpen] = useState(false); // 합격 Modal창
    const [FailModalOpen, setFailModalOpen] = useState(false); // 불합격 Modal창
    const [CompleteModalOpen, setCompleteModalOpen] = useState(false); // 완료 Modal창

    const [copbtc01, setCopbtc01] = useState();
    const [copbtc02, setCopbtc02] = useState();
    const [copbtc03, setCopbtc03] = useState();
    const [answerSubmit, setAnswerSubmit] = useState();
    const [learnStart, setLearnStart] = useState('N');
    const [moveStop, setMoveStop] = useState('move');

    const [slide_speed, setSlide_speed] = useState(5);
    const [slide_time, setSlide_time] = useState(10);

    const [ImageCount, setImageCount] = useState('0'); // 출제 문항 카운트
    const [ImageTotal, setImageTotal] = useState('0'); // 출제 문항의 총수량

    const [state, setState] = useState({ seconds: 0, minutes: 0 });

    let time_out; //이미지가 움직임 예약
    let animation; //이미지가 움직이는 상태 저장
    let position; //이미지와 스크롤바 이동
    let $currentImage; //현재 움직이는 이미지
    let is_learn01_play = false;

    //오답문제풀이시작-슬라이더 타입의 시작 버튼 누르면 실행
    const learn01_start = () => {
        var containerWidth = $('#learn01_img').width(); //이미지가 움직일 공간 크기
        var isPaused = false; //일시정지 상태 저장
        var current_image = 0; //현재 움직이는 이미지가 몇번째인가
        var start_count = 0;

        var origin_img = [];
        var thum_img = [];
        $('#learn01_img img').each(function (i) {
            origin_img[i] = $(this);
            thum_img[i] = $(this).data('thum');
        });
        var images = origin_img; //이미지 목록(배열)
        var move_timer = slide_time; //움직이는 시간(ms, 1/1000초)
        var move_distance = slide_speed; //움직일 거리
        is_learn01_play = true;

        const intervalId = setInterval(() => {
            setState((prevState) => {
                const seconds = prevState.seconds + 1;
                const minutes = prevState.minutes + Math.floor(seconds / 60);
                return { seconds: seconds % 60, minutes };
            });
        }, 1000);

        // 출제 문항 총수량
        setImageTotal(images.length);

        //하단 바 초기화 작업
        //$("#myRange").removeAttr("disabled");
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
                //$currentImage.hide();
                current_image++;
            }

            // 현재 문항 수량
            if (start_count === images.length) {
                setImageCount(start_count);
            } else {
                setImageCount(start_count + 1);
            }

            //current_image++;
            if (current_image >= images.length) {
                alert('시험이 종료되었습니다.');
                clearTimeout(animation);
                clearTimeout(time_out);
                clearInterval(position);
                clearInterval(intervalId);
                $('#learn01_bimg').hide();
                $('#myRange').css('visibility', 'hidden');
                $('#close-first-modal').show();
                $('#close-first-modal_on').hide();
                is_learn01_play = false;
                // 합격, 불합격 모달창 띄움 Strart
                setPassModalOpen(true);
                setFailModalOpen(true);
                // 합격, 불합격 모달창 띄움 End
            } else {
                var $nextImage = $(images[current_image]);
                $nextImage.css('right', containerWidth);
                $('#learn01_bimg').attr('src', $nextImage.data('thum'));
                animation = $nextImage.animate({ left: '-=' + move_distance }, move_timer, function () {
                    time_out = setTimeout(image_position, move_timer);
                });
            }
            start_count++;
        }

        //이미지 이동 진행
        //이미지가 화면 밖으로 사라질 경우 resetImage() 호출
        //왼쪽에서 오른쪽으로 이동
        function image_position() {
            $currentImage = $(images[current_image]);
            var imageWidth = $currentImage.width();
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
        //오른쪽에서 왼쪽으로 이동
        // function image_position() {
        //     $currentImage = $(images[current_image]);
        //     var imageWidth = $currentImage.width();
        //     var image_left = $currentImage.position().left;

        //     console.log(containerWidth);
        //     if (image_left > containerWidth + 50) {
        //         // if (image_left < -(imageWidth + 50)) {
        //         clearInterval(animation);
        //         //current_image++;
        //         resetImage();
        //     } else {
        //         if (is_learn01_play) {
        //             animation = $currentImage.animate({ left: '+=' + move_distance }, move_timer, function () {
        //                 time_out = setTimeout(image_position, move_timer);
        //             });
        //         }
        //     }
        // }

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

        $('#learn01_open').click(function () {
            learn01_btn();
        });

        $('#learn01_prohibited').click(function () {
            learn01_btn();
        });
        //======================>

        $('#learn01_bimg').click(function () {
            var image_src = $(this).attr('src');
            $currentImage = $(images[current_image]);
            $(this).attr('src', $currentImage.attr('src'));
            $currentImage.attr('src', image_src);
        });
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
        setCompleteModalOpen(true);
    };

    // 불합격 Modal 이벤트 처리
    const FailhandleOk = () => {
        setFailModalOpen(false);
    };

    // 완료 Modal 이벤트 처리
    const CompletehandleOk = () => {
        setPrintModalOpen(true); // 정답확인 modal 창 닫기
        setCompleteModalOpen(false); // 완료 modal 창 닫기
        ModalClose(); // 학습 modal 창 닫기
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

    // 정답 처리
    const answerEvent = (flag) => {
        setAnswerSubmit(flag);
        console.log(flag);
    };

    // 슬라이드 Stop/Move 처리
    const MoveStopEvent = () => {
        if (moveStop == 'move') {
            setMoveStop('stop');
        } else {
            setMoveStop('move');
        }
        console.log(moveStop);
    };

    // 종료 처리
    const ModalClose = () => {
        props.ModalClose();
    };

    return (
        <>
            <div className="learn_con">
                <div className="xbt_top">
                    <div className="learnct01">
                        <ul>
                            <li>
                                <h1 className="contit">오답문제풀이</h1>
                            </li>
                            <li>
                                <h3>X-ray 판독 초급 2023 - 1차</h3>
                            </li>
                            <li>
                                <h2 className="conname pr30">홍길동</h2>
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
                                <div className="learntit">Front</div>
                                <div className="learntit">레벨 : 1</div>
                            </li>
                            <li className="learnct02_center">
                                <div className="question">
                                    문항{' '}
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
                    <img src={learning_01} data-thum={learning_0101} className="image" alt="" />
                    <img src={learning_02} data-thum={learning_0201} className="image" alt="" />
                    <img src={learning_03} data-thum={learning_0301} className="image" alt="" />
                    <img src={learning_04} data-thum={learning_0401} className="image" alt="" />
                    <img src={learning_05} data-thum={learning_0501} className="image" alt="" />
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
                    <div className="learnbtc02">
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
                    {/* <!-- learnbtc04 --> */}
                    <div className="learnbtc04">
                        <ul>
                            <li>
                                <button
                                    className="lnbtc_btn lnbtc_btnon next"
                                    id="learn01_pass"
                                    type="button"
                                    onClick={() => answerEvent('Pass')}
                                >
                                    <span>
                                        <img src={pass} alt="" />
                                    </span>
                                    <p>Pass</p>
                                </button>
                            </li>
                            <li>
                                <button
                                    className="lnbtc_btn lnbtc_btnon"
                                    id="learn01_open"
                                    type="button"
                                    onClick={() => answerEvent('Open')}
                                >
                                    <span>
                                        <img src={open} alt="" />
                                    </span>
                                    <p>Open</p>
                                </button>
                            </li>
                            <li>
                                <button
                                    className="lnbtc_btn lnbtc_btnon"
                                    id="learn01_prohibited"
                                    type="button"
                                    onClick={() => answerEvent('Prohibited')}
                                >
                                    <span>
                                        <img src={prohibited} alt="" />
                                    </span>
                                    <p>Prohibited</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- learnbtc05 --> */}
                    <div className="learnbtc05">
                        <button className="lnbtc_btn stop" id="learn01_stop" type="button" onClick={MoveStopEvent}>
                            <span>
                                <img src={stope} alt="" />
                            </span>
                            <p>Stop</p>
                        </button>
                    </div>
                    {/* <!-- learnbtc06 --> */}
                    <div className="learnbtc06">
                        <img src={learning_01_1} id="learn01_bimg" style={{ display: 'none' }} alt="" />
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
                <LearningP ModalClose={PrinthandleOk} />
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
                        <h1>평가를 마쳤습니다.</h1>
                    </div>
                    <div className="scwd_txt02">
                        <p>오답문제풀이가 끝났습니다. 수고하셨습니다.</p>
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
