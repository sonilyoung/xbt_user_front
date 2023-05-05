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

// 반입금지물품
import { Prohibited } from 'pages/prohibited';
import { LearningP } from 'pages/learning/LearningP';

import $ from 'jquery';

export const LearningC = (props) => {
    const { confirm } = Modal;
    const [ModalOpen, setModalOpen] = useState(false); // 반입금지물품 Modal창

    const [PrintModalOpen, setPrintModalOpen] = useState(false); // 학습 결과 정보 Modal창
    const [PassModalOpen, setPassModalOpen] = useState(false); // 합격 Modal창
    const [FailModalOpen, setFailModalOpen] = useState(false); // 불합격 Modal창
    const [CompleteModalOpen, setCompleteModalOpen] = useState(false); // 완료 Modal창

    const [copbtc01, setCopbtc01] = useState();
    const [copbtc02, setCopbtc02] = useState();
    const [copbtc03, setCopbtc03] = useState();
    const [answerSubmit, setAnswerSubmit] = useState();
    const [moveStop, setMoveStop] = useState('move');
    const [cut_time, setCut_time] = useState(5000);

    const [ImageCount, setImageCount] = useState('0'); // 출제 문항 카운트
    const [ImageTotal, setImageTotal] = useState('0'); // 출제 문항의 총수량

    const [state, setState] = useState({ seconds: 0, minutes: 0 });

    let is_learn02_play = false;
    //학습시작-컷 타입의 시작 버튼 누르면 실행
    const learn02_start = () => {
        let timer; //이미지가 보여지는 타이머
        let timeout; //시험종료를 위한 타이머
        let progressBar = $('#learn02_progress'); //남은시간 게이지
        let images = $('#learn02_img img'); //이미지 목록
        let $currentImage; //현재 움직이는 이미지

        let currentImageIndex = 0; //현재 보여지는 이미지 순서
        let start_time; //이미지가 보여지기 시작한 시간
        let stop_time; //일시정지 버튼을 누른 시간
        let status = 0; //일시정지 버튼 상태
        let learn_time = cut_time; //이미지를 보여줄 시간(ms, 1/1000초)
        let is_learn02_play = true;

        const intervalId = setInterval(() => {
            setState((prevState) => {
                const seconds = prevState.seconds + 1;
                const minutes = prevState.minutes + Math.floor(seconds / 60);
                return { seconds: seconds % 60, minutes };
            });
        }, 1000);

        // 출제 문항 총수량
        setImageTotal(images.length);
        setImageCount(currentImageIndex + 1);

        //남은시간 표시
        $('#learn02_progress').show();
        $('#learn02_bimg').show();

        //시작 버튼 비활성화
        //브라우저에 따라 정상작동 되지 않는 경우가 있어
        //시작 기능이 있는 버튼을 숨기고, 기능이 없는 버튼 노출
        $('#learn02_start').hide();
        $('#learn02_start_on').show();
        $('#close_second_modal').hide();
        $('#close_second_modal_on').show();

        //이미지를 지정된 시간만 노출 후 다음 이미지로 변경
        function displayNextImage() {
            start_time = Date.now();
            paused_time = 0;
            $(images[currentImageIndex]).hide();
            currentImageIndex++;
            setImageCount(currentImageIndex + 1);
            if (currentImageIndex === images.length) {
                clearTimeout(timer);
                clearTimeout(timeout);
                clearInterval(intervalId);
                alert('시험이 종료되었습니다.');
                progressBar.stop();
                progressBar.css({ width: '0%' });
                $('#learn02_bimg').hide();
                $('#close_second_modal').show();
                $('#close_second_modal_on').hide();
                is_learn02_play = false;
                // 합격, 불합격 모달창 띄움 Strart
                setPassModalOpen(true);
                setFailModalOpen(true);
                // 합격, 불합격 모달창 띄움 End
            } else {
                $(images[currentImageIndex]).show();
                $('#learn02_bimg').attr('src', $(images[currentImageIndex]).data('thum'));
                updateProgressBar(learn_time);
                timer = setTimeout(displayNextImage, learn_time);
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    $(images[currentImageIndex]).hide();
                    currentImageIndex++;
                    setImageCount(currentImageIndex + 1);
                    if (currentImageIndex === images.length) {
                        clearTimeout(timer);
                        clearInterval(intervalId);
                        alert('시험이 종료되었습니다.');
                        progressBar.stop();
                        progressBar.css({ width: '0%' });
                        $('#learn02_bimg').hide();
                        $('#close_second_modal').show();
                        $('#close_second_modal_on').hide();
                        is_learn02_play = false;
                        // 합격, 불합격 모달창 띄움 Strart
                        setPassModalOpen(true);
                        setFailModalOpen(true);
                        // 합격, 불합격 모달창 띄움 End
                    } else {
                        $(images[currentImageIndex]).show();
                        updateProgressBar(learn_time);
                        timer = setTimeout(displayNextImage, learn_time);
                    }
                }, learn_time);
            }
        }

        //일시정지
        function pause() {
            clearTimeout(timer);
            clearTimeout(timeout);
            var progressBar = $('#learn02_progress');
            progressBar.stop();
            stop_time = Date.now();
        }

        //다시시작
        var paused_time = 0;
        function resume() {
            var remaining_time = learn_time - (stop_time - start_time) + paused_time;
            timer = setTimeout(displayNextImage, remaining_time);
            clearTimeout(timeout);
            updateProgressBar(remaining_time, true);
            paused_time += Date.now() - stop_time;
        }

        //남은시간 게이지
        function updateProgressBar(duration, resume = false) {
            progressBar.stop();
            if (!resume) progressBar.css({ width: '100%' });
            progressBar.animate({ width: '0%' }, duration, 'linear');
        }

        //일시정지버튼을 눌렀을 때 처리
        $('#learn02_stop').click(function () {
            if (is_learn02_play) {
                if (status === 0) {
                    pause();
                    status = 1;
                    $('#learn02_stop').addClass('lnbtc_btnon');
                } else {
                    resume();
                    status = 0;
                    $('#learn02_stop').removeClass('lnbtc_btnon');
                }
            }
        });

        //Pass, Open, Prohibited 눌렀을 때 다음 이미지 보이게
        function learn02_btn() {
            if (is_learn02_play) {
                $(images[currentImageIndex]).hide();
                currentImageIndex++;

                start_time = Date.now();
                paused_time = 0;
                $('#learn02_bimg').attr('src', $(images[currentImageIndex]).data('thum'));

                if (currentImageIndex === images.length) {
                    clearTimeout(timer);
                    clearTimeout(timeout);
                    clearInterval(intervalId);
                    alert('시험이 종료되었습니다.');
                    progressBar.stop();
                    $('#learn02_bimg').hide();
                    $('#close_second_modal').show();
                    $('#close_second_modal_on').hide();
                    progressBar.css({ width: '0%' });
                    is_learn02_play = false;
                    // 합격, 불합격 모달창 띄움 Strart
                    setPassModalOpen(true);
                    setFailModalOpen(true);
                    // 합격, 불합격 모달창 띄움 End
                } else {
                    setImageCount(currentImageIndex + 1);
                    // Show the next image and restart the timer
                    $(images[currentImageIndex]).show();
                    updateProgressBar(learn_time);
                    clearTimeout(timer);
                    clearTimeout(timeout);
                    status = 0;
                    $('#learn02_stop').removeClass('lnbtc_btnon');
                    timer = setTimeout(displayNextImage, learn_time);
                }
            }
        }

        //<====================
        //각각 버튼 눌렀을 때 처리할 부분
        //다음 이미지로 넘어가는 기능만 구현
        $('#learn02_pass').click(function () {
            learn02_btn();
        });

        $('#learn02_open').click(function () {
            learn02_btn();
        });

        $('#learn02_prohibited').click(function () {
            learn02_btn();
        });
        //====================>

        $(images).hide();
        $(images[currentImageIndex]).show();
        updateProgressBar(learn_time);
        timer = setTimeout(displayNextImage, learn_time);
        start_time = Date.now();
        paused_time = 0;
        $('#learn02_bimg').click(function () {
            var image_src = $(this).attr('src');
            $currentImage = $(images[currentImageIndex]);
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
                                <h2 className="conname pr30">홍길동</h2>
                                <button type="button" className="conbtn01" onClick={() => Prohibitedinfo_Modal()}>
                                    반입금지물품
                                </button>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- learnct02 --> */}
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
                                <button className="learnbtn btn_start" id="learn02_start" type="button" onClick={learn02_start}>
                                    시작
                                </button>
                                <button className="learnbtn btn_end" id="learn02_start_on" type="button">
                                    시작
                                </button>
                                <button
                                    id="close_second_modal"
                                    data-mact="close"
                                    data-minfo="second-modal"
                                    style={{ marginLeft: '23px' }}
                                    className="modal_btn learnbtn btn_start"
                                    onClick={ModalClose}
                                >
                                    종료
                                </button>
                                <button
                                    id="close_second_modal_on"
                                    data-mact="close"
                                    data-minfo="second-modal"
                                    style={{ display: 'none' }}
                                    className="modal_btn learnbtn btn_end"
                                    onClick={ModalClose}
                                >
                                    종료
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- learnc_img --> */}
                <div className="learnc_img" id="learn02_img">
                    <div id="learn02_progress"></div>
                    <img src={learning_01} data-thum={learning_0101} className="image" alt="" />
                    <img src={learning_02} data-thum={learning_0201} className="image" alt="" />
                    <img src={learning_03} data-thum={learning_0301} className="image" alt="" />
                    <img src={learning_04} data-thum={learning_0401} className="image" alt="" />
                    <img src={learning_05} data-thum={learning_0501} className="image" alt="" />
                </div>
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
                                    id="learn02_pass"
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
                                    id="learn02_open"
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
                                    id="learn02_prohibited"
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
                        <button className="lnbtc_btn stop" id="learn02_stop" type="button">
                            <span>
                                <img src={stope} alt="" />
                            </span>
                            <p>Stop</p>
                        </button>
                    </div>
                    {/* <!-- learnbtc06 --> */}
                    <div className="learnbtc06">
                        <img src={learning_01_1} id="learn02_bimg" style={{ display: 'none' }} alt="" />
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
                        <p>학습이 끝났습니다. 수고하셨습니다.</p>
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
