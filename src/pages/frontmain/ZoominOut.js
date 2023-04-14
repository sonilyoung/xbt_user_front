/* eslint-disable*/
import React, { useState, useEffect, Component ,useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import $ from 'jquery';
import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';
import {Navi} from './Navi';
import {Copy} from './Copy';

export const ZoominOut = ({targetImg, displayn}) => {
    //const [selected] = useState([]);
    const navigate = useNavigate();
    const [paracticeShow, setParacticeShow] = useState(true);

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

    useEffect(()=>{  
            $("#practice-modal").show();
            // 첫번째 모달창 가운데 정렬
            let firstModal = document.querySelector("#practice-modal .modal");
            let modalWidth = firstModal.offsetWidth;
            //alert(modalWidth);
            let modalHeight = firstModal.offsetHeight;
            firstModal.style.left = `calc(50% - ${modalWidth / 2}px)`;
            //firstModal.style.left = `calc(50% - ${modalWidth}px)`;
            firstModal.style.top = `calc(50% - ${modalHeight / 2}px)`;
    
            /*
                버튼에 modal_btn 클래스 넣으면 작동
                data-mact="open"  open, close 
                data-minfo="practice-modal" 오픈시킬 창아이디 			
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
            }   
       
    },[]);


    return (
        <>
            <div id="practice-modal" className="modal-wrapper modal_blur">
                <div className="modal xbt_md">
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
                            <div className="banItems_table scrollbar">
                                <table className="table">
                                    <colgroup>
                                        <col width="100%"/>
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td>
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

                                                        <div className="tools" style={{visibility:"block"}}>
                                                            <button ref={inputRef1} onClick={() => zoomIn()}>+</button>
                                                            <button ref={inputRef2} onClick={() => zoomOut()}>-</button>
                                                            <button ref={inputRef3} onClick={() => resetTransform()}>x</button>
                                                        </div>
                                                        <TransformComponent>
                                                            <img src={targetImg} className="image" alt="image" style={{ width: "100%", height: "100%" }}/>
                                                        </TransformComponent>
                                                        </React.Fragment>
                                                    )}
                                                </TransformWrapper>                                                  
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            {/* //물품 내용 표 */}								
                        </div>
                        <button id="close-practice-modal" onClick={()=>handleClose()} data-mact="close" data-minfo="practice-modal" className="modal_btn close_btn"></button>
                    </div>
                </div>
            </div>     
        </>
    );
};