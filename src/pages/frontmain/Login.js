/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';


import arrow_lower from 'assets/images/login/arrow_lower.svg';
import arrow_up from 'assets/images/login/arrow_up.svg';
import success from 'assets/images/login/success.svg';
import fail from 'assets/images/login/fail.svg';



// ================================|| LOGIN ||================================ //
export const Login = () => {
    const navigate = useNavigate();
    const [id] = useState("user");
    const [password] = useState("test");
    const[params, setParams] = useState({
        "id" : "",
        "password" : "",
    });
    
    const [isLanguage, setIsLanguage] = useState("eng");//언어선택
    const [isOpened, setIsOpened] = useState(false);//로그인팝업창
    const [loginOk, setLoginOk] = useState(false);//로그인성공
    const [loginFail, setLoginFail] = useState(false);//로그인실패
    const [lanSelect, setLanSelect] = useState("lan_select");//언어 slectbox class


    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
    
    const login = () =>{
        console.log('팝업');
        setIsOpened(true);
    }    

    const handleLogin = () =>{
        console.log("id:", params.id);
        console.log("password:", params.password);

        if(params.id!=='admin'){ //로그인실패
            setLoginFail(true);
            setLoginOk(false);
        }

        if(params.id==='admin' && params.password==='test'){ //로그인성공
            setLoginOk(true);
            setLoginFail(false);
        }else{
            setLoginFail(true);
            setLoginOk(false);
        }

    }

    //메인페이지 이동
    const moveMainPage = () =>{
        navigate("/main");            
    }

    const handleLangSelect = () =>{
        setLanSelect("lan_select active");
    }

    const handleLanguage = (e) =>{
        setLanSelect("lan_select");
        setIsLanguage(isLanguage => e);
        console.log('언어:', isLanguage);
    }

    return(
        <>
                <div id="wrap" className="mbg">
                    <div id="wlayer" class="login_layer">
                        <div className="mcontent">
                            <div className="login_con">
                                <h3>X-RAY 보안 훈련 시스템 교육생 전용</h3>
                                <h1>X-ray Security<br/>Training<br/><span>System</span></h1>
                                <p>
                                    X-ray 보안 시스템 훈련을 통해 보안 전문 역량을 강화할 수 있도록<br/>
                                    체계적인 교육훈련 프로그램을 제공합니다.
                                </p>
                                {isOpened && (
                                <div id="first-modal" className="modal-wrapper modal_blur">
                                    <div className="modal md_width1" style={{left: 'calc(50% - 280px)', top: 'calc(50% - 251px)'}}>
                                        <h3 className="login_txt">X-ray 보안 훈련 시스템 교육생 전용</h3>
                                        <h1 className="login_tit">X-ray Security Training<span>System</span></h1>
                                        <div className= {lanSelect}>
                                            <button onClick={()=>handleLangSelect()} className= {
                                                isLanguage === "kor" ? "label kor" 
                                                : isLanguage === "eng" ? "label eng" 
                                                : isLanguage === "jp" ? "label jp" 
                                                : isLanguage === "cn" ? "label cn" 
                                                : ''
                                            }> 
                                                {
                                                    isLanguage === "kor" ? "한국어"
                                                    :
                                                    isLanguage === "eng" ? "English"
                                                    :
                                                    isLanguage === "jp" ? "日本語"
                                                    :
                                                    isLanguage === "cn" ? "汉语"
                                                    :
                                                    ''
                                                }                                             
                                            </button>
                                            <ul className="lan_optionList">
                                                <li onClick={()=>handleLanguage("eng")} className = {"lan_item eng"}>
                                                    English
                                                </li>                                                
                                                <li onClick={()=>handleLanguage("kor")} className = {"lan_item kor"}>
                                                    한국어
                                                </li>
                                                <li onClick={()=>handleLanguage("jp")} className = {"lan_item jp"}>
                                                    日本語
                                                </li>
                                                <li onClick={()=>handleLanguage("cn")} className = {"lan_item cn"}>
                                                    汉语
                                                </li>
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
                                                <img src={success} alt=""/>
                                            </div>
                                            <p className="login_txt">로그인 성공!<b/></p>
                                            <button id="open-second-modal" onClick={()=>{setLoginOk(false);setIsOpened(false);moveMainPage();}}  data-mact="open" data-minfo="th-modal" className="modal_btn blue_btn small_btn">확인</button>
                                            <button id="close-second-modal" onClick={()=>{setLoginOk(false);setIsOpened(false);}}  data-mact="close"  data-minfo="second-modal" className="modal_btn close_btn"></button>
                                        </div>
                                    </div>
                                )}

                                {loginFail && (
                                    <div id="th-modal" className="modal-wrapper modal_blind">
                                        <div className="modal md_width2">
                                            <div className="img">
                                                <img src={fail} alt=""/>
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