import React, { useState, useEffect } from 'react';
/* eslint-disable*/
import { Link } from 'react-router-dom';
import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';

const [isOpened, setIsOpened] = useState(false);

function toggle() {
    setIsOpened(wasOpened => !wasOpened);
}

const login = () =>{
    setIsOpened(true);
}

// ================================|| LOGIN ||================================ //

export const LoginMain = () => {

    return(
        <>
            <body>
                <div id="wrap" class="mbg">
                    <div id="wlayer">
                        <div class="mcontent">
                            <div class="login_con">
                                <h3>X-RAY 보안 훈련 시스템 교육생 전용</h3>
                                <h1>X-ray Security Training</h1>
                                <p>
                                    X-ray 보안 시스템 훈련을 통해 보안 전문 역량을 강화할 수 있도록<br/>
                                    체계적인 교육훈련 프로그램을 제공합니다.
                                </p>

                                {isOpened && (
                                    <div id="first-modal" class="modal-wrapper modal_blur">
                                        <div class="modal md_width1">
                                            <h3 class="login_txt">X-ray 보안 훈련 시스템 교육생 전용</h3>
                                            <h1 class="login_tit">X-ray Security Training<span>trainee</span></h1>
                                            <div class="language">
                                                <a class="kor">한국어
                                                    <span class="arrow"><img src="../../assets/images/login/arrow_lower.svg" alt=""/></span>
                                                </a>
                                                <ul>
                                                    <li class="selected">
                                                        <a class="kor">한국어
                                                            <span class="arrow"><img src="../images/login/arrow_up.svg" alt=""/></span>
                                                        </a>
                                                    </li>
                                                    <li><a href="" class="eng">English</a></li>
                                                    <li><a href="" class="jp">日本語</a></li>
                                                    <li><a href="" class="cn">汉语</a></li>
                                                </ul>
                                            </div>
                                            <div class="login_box">
                                                <div class="form-group id">
                                                    <input type="text" name="id" class="form-input border-animation set-1" placeholder="아이디" maxlength="16"/>
                                                </div>
                                                <div class="form-group pw">
                                                    <input type="password" name="pwd" class="form-input border-animation set-1" placeholder="비밀번호" maxlength="32"/>
                                                </div>
                                            </div>
                                            <button id="open-second-modal" data-mact="open" data-minfo="second-modal" class="modal_btn blue_btn wide_btn">로그인</button>
                                            <button id="close-first-modal" data-mact="close"  data-minfo="first-modal" class="modal_btn close_btn"></button>
                                        </div>
                                    </div>
                                )}

                                <div id="second-modal" class="modal-wrapper modal_blind">
                                    <div class="modal md_width2">
                                        <div class="img">
                                            <img src="../images/login/success.svg" alt=""/>
                                        </div>
                                        <p class="login_txt">로그인 성공!<b/></p>
                                        <button id="open-second-modal" data-mact="open" data-minfo="th-modal" class="modal_btn blue_btn small_btn">확인</button>
                                        <button id="close-second-modal" data-mact="close"  data-minfo="second-modal" class="modal_btn close_btn"></button>
                                    </div>
                                </div>
                                <div id="th-modal" class="modal-wrapper modal_blind">
                                    <div class="modal md_width2">
                                        <div class="img">
                                            <img src="../images/login/fail.svg" alt=""/>
                                        </div>
                                        <p class="login_txt">로그인에 실패하였습니다.</p>
                                        <button id="close-second-modal" data-mact="close" data-minfo="th-modal" class="modal_btn blue_btn small_btn">확인</button>
                                        <button id="close-second-modal" data-mact="close"  data-minfo="th-modal" class="modal_btn close_btn"></button>
                                    </div>
                                </div>
                                <button id="open-first-modal" onClick={()=>login()}  data-mact="open" data-minfo="first-modal"    class="login_btn modal_btn">로그인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>            
        </>
    )
};