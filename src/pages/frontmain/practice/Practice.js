/* eslint-disable*/
import React, { useState, useEffect, Component ,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PracticeList } from './PracticeList';
import $ from 'jquery';
import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';
import {Navi} from '../Navi';
import {Copy} from '../Copy';


export const Practice = () => {
    //const [selected] = useState([]);
    const navigate = useNavigate();

    //팝업창 컨트롤
    const [paracticeShow, setParacticeShow] = useState(false);
    //팝업창 컨트롤
    const displayn = (e) =>{
        setParacticeShow(e);
    }


    //메인페이지 이동
    const onMovePage = () =>{
        navigate("/main");            
    }

    useEffect(()=>{  
        $("#first-modal").show();
        // 첫번째 모달창 가운데 정렬
        let firstModal = document.querySelector("#first-modal .modal");
        let modalWidth = firstModal.offsetWidth;
        //alert(modalWidth);
        let modalHeight = firstModal.offsetHeight;
        firstModal.style.left = `calc(50% - ${modalWidth / 2}px)`;
        //firstModal.style.left = `calc(50% - ${modalWidth}px)`;
        firstModal.style.top = `calc(50% - ${modalHeight / 2}px)`;

        /*
            버튼에 modal_btn 클래스 넣으면 작동
            data-mact="open"  open, close 
            data-minfo="first-modal" 오픈시킬 창아이디 			
        */
        const modals = document.querySelectorAll('.modal_btn');

        modals.forEach(function (modal) {
            modal.addEventListener("click", modal_popup_open, false);
        });

        function modal_popup_open() {
            let tar_act = this.getAttribute('data-mact');
            let tar = this.getAttribute('data-minfo');
            if (tar_act == "open") {
                //const tar_class = this.getAttribute('data-mclass');
                document.getElementById(tar).style.display = "block";

                if (typeof sly_exe === "function") {
                    //alert("sss");
                    //sly_exe();
                } 

                // 첫번째 모달창 가운데 정렬
                let firstModal = document.querySelector("#" + tar + " .modal");
                let modalWidth = firstModal.offsetWidth;
                //alert(modalWidth);
                let modalHeight = firstModal.offsetHeight;
                firstModal.style.left = `calc(50% - ${modalWidth / 2}px)`;
                //firstModal.style.left = `calc(50% - ${modalWidth}px)`;
                firstModal.style.top = `calc(50% - ${modalHeight / 2}px)`;
                //alert(modalWidth);
            }
            if (tar_act == "close") {
                document.getElementById(tar).style.display = "none";
            }
        }          
    },[]);


    return (
        <>
            {/* wrap */}
            <div id="wrap" className="mbg">
                {/* wlayer */}
                <div id="wlayer">

                    <Navi/>

                    {/* mcontent */}
                    <div className="mcontent">
                        <div id="first-modal" className="modal-wrapper modal_blur">
                            <div className="modal xbt_md">
                                {/* xbt_content */}
                                <div className="xbt_content">
                                    {/* xbt_top */}
                                    <div className="xbt_top">
                                        {/* xbttop02 */}
                                        <div className="xbttop02">
                                            <ul>
                                                <li>
                                                    <h1 className="contit">물품연습</h1>
                                                </li>
                                                <li>
                                                    <h2 className="conname tr">홍길동</h2>
                                                    <button id="close-first-modal" onClick={()=>onMovePage()} data-mact="close" data-minfo="first-modal" className="modal_btn conbtn01 conbtn_pd01">종료</button>
                                                    <button type="button" onClick={()=>setParacticeShow(true)} className="conbtn01">반입금지물품</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* xbt_con */}
                                    <div className="xbt_con practice_con mt15">
                                        <div className="practice_left">
                                            {/* cop_con */}
                                            <div className="cop_con conbox_sty conbox_pd01">
                                                {/* 물품 타이틀 표 */}
                                                <div className="con_table cop_table">
                                                    <table className="table">
                                                        <colgroup>
                                                            <col width="*"/>
                                                            <col width="30%"/>
                                                            <col width="30%"/>
                                                            <col width="30%"/>
                                                        </colgroup>
                                                        <thead>
                                                            <tr>
                                                                <th>No.</th>
                                                                <th>물품</th>
                                                                <th>개봉여부</th>
                                                                <th>통과여부</th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                {/* 물품 내용 표 */}
                                                <div className="con_table cop_table height200 scrollbar">
                                                    <table className="table">
                                                        <colgroup>
                                                            <col width="*"/>
                                                            <col width="30%"/>
                                                            <col width="30%"/>
                                                            <col width="30%"/>
                                                        </colgroup>
                                                        <tbody>
                                                            <tr className="on">
                                                                <td>1</td>
                                                                <td>총기류</td>
                                                                <td>Unopened</td>
                                                                <td>Prohibition</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>폭발물류</td>
                                                                <td>Unopened</td>
                                                                <td>Prohibition</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>실탄류</td>
                                                                <td>Opened</td>
                                                                <td>Restricted</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>도검류</td>
                                                                <td>Opened</td>
                                                                <td>Restricted</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>일반 무기류</td>
                                                                <td>Opened</td>
                                                                <td>Restricted</td>
                                                            </tr>
                                                            <tr>
                                                                <td>6</td>
                                                                <td>위장무기류</td>
                                                                <td>Opened</td>
                                                                <td>Restricted</td>
                                                            </tr>
                                                            <tr>
                                                                <td>7</td>
                                                                <td>공구/생활용품류</td>
                                                                <td>Opened</td>
                                                                <td>Restricted</td>
                                                            </tr>
                                                            <tr>
                                                                <td>8</td>
                                                                <td>인화성물질류</td>
                                                                <td>Opened</td>
                                                                <td>Restricted</td>
                                                            </tr>
                                                            <tr>
                                                                <td>9</td>
                                                                <td>위험물질류</td>
                                                                <td>Opened</td>
                                                                <td>Restricted</td>
                                                            </tr>
                                                            <tr>
                                                                <td>10</td>
                                                                <td>액체, 겔 물품</td>
                                                                <td>Opened</td>
                                                                <td>Restricted</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* 물품명칭 타이틀 표 */}
                                                <div className="con_table cop_table">
                                                    <table className="table">
                                                        <colgroup>
                                                            <col width="10%"/>
                                                            <col width="*"/>
                                                        </colgroup>
                                                        <thead>
                                                            <tr>
                                                                <th className="t_blue">No.</th>
                                                                <th className="t_blue">물품명칭</th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                {/* 물품명칭 내용 표 */}
                                                <div className="con_table cop_table height160 scrollbar">
                                                    <table className="table">
                                                        <colgroup>
                                                            <col width="10%"/>
                                                            <col width="*"/>
                                                        </colgroup>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>소총 1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>소총 2</td>
                                                            </tr>
                                                            <tr className="on">
                                                                <td>3</td>
                                                                <td>권총 1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>권총 2</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>권총 3</td>
                                                            </tr>
                                                            <tr>
                                                                <td>6</td>
                                                                <td>권총 4</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* //물품명칭 내용 표 */}
                                            </div>
                                            {/* cop_con */}
                                            <div className="cop_con conbox_sty conbox_pd01">
                                                <div className="cop_con_tlist">
                                                    <div>
                                                        <p className="number">2100</p>
                                                    </div>
                                                    <div>
                                                        <p className="products">총기류</p>
                                                    </div>
                                                    <div>
                                                        <p className="release">Unopened / Restricted</p>
                                                    </div>
                                                    <div>
                                                        <p className="name">소총</p>
                                                    </div>
                                                </div>
                                                <div className="cop_con_btn">
                                                    <button className="back">이전</button>
                                                    <button className="next">다음</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* practice_right */}
                                        <div className="practice_right">
                                            {/* 옵션*/}
                                            <div className="practice_select">
                                                <button className="label">옵션선택</button>
                                                <ul className="pra_optionList">
                                                    <li className="pra_item">#옵션선택 A</li>
                                                    <li className="pra_item">#옵션선택 B</li>
                                                    <li className="pra_item">#옵션선택 C</li>
                                                    <li className="pra_item">#옵션선택 D</li>
                                                </ul>
                                            </div>
                                            {/* //옵션 */}

                                            <div className="angle">
                                                <div className="real">
                                                    <p>Real</p>
                                                    <img src={require('assets/images/practice/sample01.png')} alt=""/>
                                                </div>
                                                <div className="dimension">
                                                    <p>3D</p>
                                                    <img src={require('assets/images/practice/sample02.png')} alt=""/>
                                                </div>
                                                <div className="front">
                                                    <p>Front</p>
                                                    <img src={require('assets/images/practice/sample03.png')} alt=""/>
                                                </div>
                                                <div className="side">
                                                    <p>Side</p>
                                                    <img src={require('assets/images/practice/sample04.png')} alt=""/>
                                                </div>
                                            </div>
                                            {/* practice_bot */}
                                            <div className="practice_bot">
                                                <div className="practice_btcon">
                                                    {/* copbtc01 */}
                                                    <div className="copbtc01">
                                                        <ul>
                                                            <li><a href="#" className="on"><img src={require('assets/images/learning/learnc_ic01_01.png')} alt=""/></a></li>
                                                            <li><a href="#"><img src={require('assets/images/learning/learnc_ic01_02.png')} alt=""/></a></li>
                                                            <li><a href="#"><img src={require('assets/images/learning/learnc_ic01_03.png')} alt=""/></a></li>
                                                            <li><a href="#"><img src={require('assets/images/learning/learnc_ic01_04.png')} alt=""/></a></li>
                                                            <li><a href="#"><img src={require('assets/images/learning/learnc_ic02_01.png')} alt=""/></a></li>
                                                            <li><a href="#"><img src={require('assets/images/learning/learnc_ic02_02.png')} alt=""/></a></li>
                                                            <li><a href="#"><img src={require('assets/images/learning/learnc_ic02_03.png')} alt=""/></a></li>
                                                            <li><a href="#"><img src={require('assets/images/learning/learnc_ic02_04.png')} alt=""/></a></li>
                                                        </ul>
                                                    </div>
                                                    {/* copbtc02 */}
                                                    <div className="copbtc02">
                                                        <ul>
                                                            <li><a href="#" className="on"><span className="brig_ic01_01"></span></a></li>
                                                            <li><a href="#"><span className="brig_ic01_02"></span></a></li>
                                                            <li><a href="#"><span className="brig_ic01_03"></span></a></li>
                                                            <li><a href="#"><span className="brig_ic01_04"></span></a></li>
                                                            <li><a href="#"><span className="brig_ic01_05"></span></a></li>
                                                            <li><a href="#"><span className="brig_ic01_06"></span></a></li>
                                                        </ul>
                                                        <ul>
                                                            <li><a href="#"><span className="brig_ic02_01"></span></a></li>
                                                            <li><a href="#"><span className="brig_ic02_02"></span></a></li>
                                                            <li><a href="#"><span className="brig_ic02_03"></span></a></li>
                                                            <li><a href="#"><span className="brig_ic02_04"></span></a></li>
                                                            <li><a href="#"><span className="brig_ic02_05"></span></a></li>
                                                            <li><a href="#"><span className="brig_ic02_06"></span></a></li>
                                                        </ul>
                                                    </div>
                                                    {/* copbtc03 */}
                                                    <div className="copbtc03">
                                                        <ul>
                                                            <li><a href="#" className="on"><img src={require('assets/images/learning/glas_plus.png')} alt=""/></a></li>
                                                            <li><a href="#"><img src={require('assets/images/learning/transform.png')} alt=""/></a></li>
                                                            <li><a href="#"><img src={require('assets/images/learning/glas_minus.png')} alt=""/></a></li>
                                                            <li><a href="#"><img src={require('assets/images/learning/restoration.png')} alt=""/></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {paracticeShow && <PracticeList displayy = {paracticeShow} displayn = {displayn}/>}
                        
                    </div>
                </div>

                <Copy/>

            </div>           
        </>
    );
};