/* eslint-disable*/
import React, { useState, useEffect, Component ,useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import $ from 'jquery';
import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import glas_plus from 'assets/images/learning/glas_plus.png';
import transform from 'assets/images/learning/transform.png';
import glas_minus from 'assets/images/learning/glas_minus.png';
import restoration from 'assets/images/learning/restoration.png';
import {Navi} from './Navi';
import {Copy} from './Copy';

export const ZoominOut = ({targetImg, displayn}) => {
    //const [selected] = useState([]);
    const navigate = useNavigate();
    const [paracticeShow, setParacticeShow] = useState(true);
    const [nowSelect, setNowSelect] = useState();//현재선택된 아이콘
    console.log("targetImg:", targetImg);

    const handleClose = () =>{
        displayn(false);    
    }

    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();   
    
    //확대
    const targetZoomIn = () => {
        if (inputRef1.current) {
          inputRef1.current.dispatchEvent(new Event('click', { bubbles: true }));
        }
    }

    //축소
    const targetZoomOut = () => {
        if (inputRef2.current) {
          inputRef2.current.dispatchEvent(new Event('click', { bubbles: true }));
        }
    }

    //리셋
    const targetZoomReset = () => {
        if (inputRef3.current) {
          inputRef3.current.dispatchEvent(new Event('click', { bubbles: true }));
        }
    }        

    const nowSelectControl = (e) =>{
        setNowSelect(e);//현재선택된 아이콘
    }


    useEffect(()=>{  
            $("#zoom_modal").show();
            // 첫번째 모달창 가운데 정렬
            let firstModal = document.querySelector("#zoom_modal .modal");
            let modalWidth = firstModal.offsetWidth;
            //alert(modalWidth);
            let modalHeight = firstModal.offsetHeight;
            firstModal.style.left = `calc(50% - ${modalWidth / 2}px)`;
            //firstModal.style.left = `calc(50% - ${modalWidth}px)`;
            firstModal.style.top = `calc(25% - ${modalHeight / 2}px)`;
    
            /*
                버튼에 modal_btn 클래스 넣으면 작동
                data-mact="open"  open, close 
                data-minfo="zoom_modal" 오픈시킬 창아이디 			
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
                    firstModal.style.top = `calc(25% - ${modalHeight / 2}px)`;
                    //alert(modalWidth);
                }
            }   
       
    },[]);


    return (
        <>
            <div id="zoom_modal" className="modal-wrapper modal_blur">
                <div className="modal zoom_md">
                    {/* xbt_content */}
                    <div className="xbt_content banItems_content">
                        {/* xbt_top */}
                        <div className="xbt_top">
                            {/* xbttop02 */}
                            <div className="xbttop02">
                                <ul>
                                    <li>
                                        <h1 className="contit_pop">Zoom in / Zoom out</h1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* xbt_con */}
                        <div className="xbt_con">
                            {/* 물품 내용 표 */}
                                <TransformWrapper
                                    initialScale={1}
                                    minScale= {0.5}
                                    maxScale= {10}                                            
                                    initialPositionX={0}
                                    initialPositionY={0}
                                    alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
                                    centerZoomedOut={true}
                                    //limitToBounds={true}
                                    >
                                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                        <React.Fragment>

                                        <div className="tools" style={{visibility:"hidden"}}>
                                            <button ref={inputRef1} onClick={() => zoomIn()}>+</button>
                                            <button ref={inputRef2} onClick={() => zoomOut()}>-</button>
                                            <button ref={inputRef3} onClick={() => resetTransform()}>x</button>
                                        </div>
                                        <TransformComponent>
                                        <div style={{width: "700px", height: "700px"}} >
                                            <img src={targetImg} className="image" alt="image" style={{ width: "100%", height: "100%" }}/>
                                        </div>
                                        </TransformComponent>
                                        </React.Fragment>
                                    )}
                                </TransformWrapper>                                                  

                                {/* learn_bottom */}
                                <div className="zoom_learn_bottom">
                                    {/* learn_btcon */}
                                    <div className="zoom_btcon">
                                        {/* learnbtc01 이미지컨트롤 아이콘 영역*/}
                                        {/* learnbtc01 이미지컨트롤 아이콘 영역*/}
                                        <div className="zoombtc01">
                                            <ul>
                                                <li><a href="#" className={nowSelect==='img1' ? 'on' : ''} onClick={()=>{nowSelectControl('img1');targetZoomIn()}}><img src={glas_plus} alt="이미지 확대"/></a></li>
                                                <li><a href="#" className={nowSelect==='img3' ? 'on' : ''} onClick={()=>{nowSelectControl('img3');targetZoomOut()}}><img src={glas_minus} alt="이미지 축소"/></a></li>
                                                <li><a href="#" className={nowSelect==='img4' ? 'on' : ''} onClick={()=>{nowSelectControl('img4');targetZoomReset()}}><img src={restoration} alt="이미지 reset"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            {/* //물품 내용 표 */}								
                        </div>
                        <button id="close-zoom_modal" onClick={()=>handleClose()} data-mact="close" data-minfo="zoom_modal" className="modal_btn close_btn"></button>
                    </div>
                </div>
            </div>     
        </>
    );
};