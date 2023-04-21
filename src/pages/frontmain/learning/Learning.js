/* eslint-disable*/
import React, { useState, useEffect, Component ,useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import $ from 'jquery';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';
import 'assets/css/imgtrs.css';
import {Navi} from '../Navi';
import {Copy} from '../Copy';

// ================================|| 학습 ||================================ //
export const Learning = () =>{
    const navigate = useNavigate();
    
    //메인페이지 이동
    const onMovePage = (e) =>{

        if(e==='slide'){
            navigate("/learning/slide");
        }else{
            navigate("/learning/cut");
        }
                    
    }

    return(
        <>

            {/* wrap */}
            <div id="wrap" className="mbg">
                {/* wlayer */}
                <div id="wlayer">

                    {/* 네비넣는곳 시작*/}
                    <Navi/>
                    {/* 네비넣는곳 끝*/}

                    {/* mcontent */}
                    <div className="mcontent">
                        {/*<button id="open-first-modal" onClick={()=>onMovePage('slide')} data-mact="open" data-minfo="first-modal" className="login_btn modal_btn">학습시작-슬라이더 타입</button>
                        <button id="open-second-modal" onClick={()=>onMovePage('cut')} data-mact="open" data-minfo="second-modal" className="login_btn modal_btn" style={{marginLeft:"20px"}}>학습시작-컷 타입</button>*/}

                        <button id="open-second-modal" onClick={()=>onMovePage('cut')} data-mact="open" data-minfo="second-modal" className="login_btn modal_btn">Learning Start - Cut Type</button>
                        <button id="open-first-modal" onClick={()=>onMovePage('slide')} data-mact="open" data-minfo="first-modal" className="login_btn modal_btn" style={{marginLeft:"20px"}}>Learning Start - Slide Type</button>
                        

                        {/*<button id="open-th-modal" data-mact="open" data-minfo="th-modal" className="login_btn modal_btn" style={{marginLeft:"20px"}}>학습시작-완료</button>*/}
                        {/*<button id="open-fif-modal" data-mact="open" data-minfo="fif-modal" className="login_btn modal_btn" style={{marginLeft:"20px"}}>학습시작 - 합격/불합격/완료</button>*/}
                    </div>
                </div>
                <Copy/>
            </div>     

        </>
    );
};