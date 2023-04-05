/* eslint-disable */
import React, { useState, useEffect } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import {Score01} from './Score01';
import {Score02} from './Score02';
import {Score03} from './Score03';

import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';
import 'assets/css/tab.css';


export const FrontMain = () => {

    const [mContents, setMcontents] = useState(false);//메인팝업창
    const [selectMenu, setSelectMenu] = useState('score01');//메뉴선택상태
    const [scoreContens, setScoreContens] = useState();//화면
    const navigate = useNavigate();

    const handleContens =(e)=>{
        console.log("컨텐츠 확인", e);
    }

    //메인페이지 이동
    const moveMainPage = () =>{
        navigate("/Learning");            
    }    

    return (
        <>
        <div id="wrap" className="mbg">
            <div id="wlayer">
                {/* navi.html */}
                {/* mcontent */}
                
                <div className="mcontent">
                    {mContents &&(
                        <div id="first-modal" className="modal-wrapper modal_blur" style={{display:'block'}}>
                            <div className="modal xbt_md" style={{left: 'calc(50% - 816px)' ,top: 'calc(50% - 383px)'}}>
                                {/* xbt_content */}
                                <div className="xbt_content">
                                    {/*xbt_top*/}
                                    <div className="xbt_top">

                                        {/* xbttop02*/}
                                        <div className="xbttop01">
                                            <ul>
                                                <li>
                                                    <h1 className="contit">교육정보</h1>
                                                </li>
                                                <li>
                                                    {/* 탭 메뉴*/}
                                                    <div id="layer_menu">
                                                        <ul>
                                                            <li><button type="button" onClick={()=>{handleContens('score01');setSelectMenu('score01');}} data-filename="score01" className={selectMenu==='score01' ? 'on': ''}>학습점수조회</button></li>
                                                            <li><button type="button" onClick={()=>{handleContens('score02');setSelectMenu('score02');}} data-filename="score02" className={selectMenu==='score02' ? 'on': ''}>교육평가조회</button></li>
                                                            <li><button type="button" onClick={()=>{handleContens('score03');setSelectMenu('score03');}} data-filename="score03" className={selectMenu==='score03' ? 'on': ''}>오답조회</button></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>

                                            {/* score_img*/}
                                            <div className="score_img conbox_sty conbox_pd01 mt20">
                                                <div id="tab_div">
                                                    {
                                                        selectMenu === 'score01' ? <Score01/>
                                                        : selectMenu === 'score02' ? <Score02/>
                                                        : selectMenu === 'score03' ? <Score03/>
                                                        : ''
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <button id="close-second-modal" onClick={()=>setMcontents(false)} data-mact="close"  data-minfo="first-modal" className="modal_btn close_btn"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <button id="open-first-modal" onClick={()=>setMcontents(true)} data-mact="open" data-minfo="first-modal" className="login_btn modal_btn">학습정보 - 학습 점수 조회</button>
                    
                    <button id="open-first-modal" onClick={()=>moveMainPage()} style={{marginLeft:"20px"}} data-mact="open" data-minfo="first-modal" className="login_btn modal_btn">학습</button>
                </div>
                

            </div>

            {/*copylight*/}

        </div>
        </>
    );
};
