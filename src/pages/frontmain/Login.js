/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';



// ================================|| LOGIN ||================================ //
export const Login = () => {

    const [id] = useState("user");
    const [password] = useState("test");
    const[params, setParams] = useState({
        "id" : "",
        "password" : "",
    });
    
    const [isOpened, setIsOpened] = useState(false);
    const [loginOk, setLoginOk] = useState(false);
    const [loginFail, setLoginFail] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    
    const login = () =>{
        setIsOpened(true);
    }    

    const handleLogin = () =>{
        console.log("id:", params.id);
        console.log("password:", params.password);

        if(params.id!=='admin'){
            setLoginFail(true);
        }

        if(params.password!=='test'){
            setLoginFail(true);
        }else{
            setLoginOk(true);
        }

    }

    return(
        <>
                <div id="wrap" className="mbg">
                    <div id="wlayer">
                        <div className="mcontent">
                            <div className="login_con">
                                <h3>X-RAY 보안 훈련 시스템 교육생 전용</h3>
                                <h1>X-ray Security Training</h1>
                                <p>
                                    X-ray 보안 시스템 훈련을 통해 보안 전문 역량을 강화할 수 있도록<br/>
                                    체계적인 교육훈련 프로그램을 제공합니다.
                                </p>
                                {isOpened && (
                                <div id="first-modal" className="modal-wrapper modal_blur">
                                    <div className="modal md_width1">
                                        <h3 className="login_txt">X-ray 보안 훈련 시스템 교육생 전용</h3>
                                        <h1 className="login_tit">X-ray Security Training<span>trainee</span></h1>
                                        <div className="language">
                                            <a className="kor">한국어
                                                <span className="arrow"><img src="../../assets/images/login/arrow_lower.svg" alt=""/></span>
                                            </a>
                                            <ul>
                                                <li className="selected">
                                                    <a className="kor">한국어
                                                        <span className="arrow"><img src="../images/login/arrow_up.svg" alt=""/></span>
                                                    </a>
                                                </li>
                                                <li><a href="" className="eng">English</a></li>
                                                <li><a href="" className="jp">日本語</a></li>
                                                <li><a href="" className="cn">汉语</a></li>
                                            </ul>
                                        </div>
                                        <div className="login_box">
                                            <div className="form-group id">
                                                <input type="text" name="id" className="form-input border-animation set-1" placeholder="아이디" 
                                                    onChange={(e) => setParams({ ...params, "id": e.target.value })}                                                
                                                />
                                            </div>
                                            <div className="form-group pw">
                                                <input type="password" name="pwd" className="form-input border-animation set-1" placeholder="비밀번호" 
                                                    onChange={(e) => setParams({ ...params, "password": e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <button id="open-second-modal" onClick={()=>handleLogin()} data-mact="open" data-minfo="second-modal" className="modal_btn blue_btn wide_btn">로그인</button>
                                        <button id="close-first-modal" onClick={()=>{setIsOpened(false);setParams(null)}}data-mact="close"  data-minfo="first-modal" className="modal_btn close_btn"></button>
                                    </div>
                                </div> 
                                )}

                                {loginOk && (
                                    <div id="second-modal" className="modal-wrapper modal_blind">
                                        <div className="modal md_width2">
                                            <div className="img">
                                                <img src="../images/login/success.svg" alt=""/>
                                            </div>
                                            <p className="login_txt">로그인 성공!<b/></p>
                                            <button id="open-second-modal" onClick={()=>setLoginOk(false)}  data-mact="open" data-minfo="th-modal" className="modal_btn blue_btn small_btn">확인</button>
                                            <button id="close-second-modal" onClick={()=>setLoginOk(false)}  data-mact="close"  data-minfo="second-modal" className="modal_btn close_btn"></button>
                                        </div>
                                    </div>
                                )}

                                {loginFail && (
                                    <div id="th-modal" className="modal-wrapper modal_blind">
                                        <div className="modal md_width2">
                                            <div className="img">
                                                <img src="../images/login/fail.svg" alt=""/>
                                            </div>
                                            <p className="login_txt">로그인에 실패하였습니다.</p>
                                            <button id="close-second-modal" onClick={()=>{setLoginFail(false);setParams(null)}}  data-mact="close" data-minfo="th-modal" className="modal_btn blue_btn small_btn">확인</button>
                                            <button id="close-second-modal" onClick={()=>setLoginFail(false)}  data-mact="close"  data-minfo="th-modal" className="modal_btn close_btn"></button>
                                        </div>
                                    </div>                                    
                                )}

                                <button id="open-first-modal" data-mact="open" data-minfo="first-modal"  onClick={()=>login()} className="login_btn modal_btn">로그인</button>
                            </div>
                        </div>
                    </div>

                    <div className="copyright">
                        <div className="copy_con">
                            ©2023 JUN, All rights reserved.
                        </div>
                    </div>                      
                </div>
                
              
        </>
    )
};