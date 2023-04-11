/* eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
export const Navi = () => {
    const [logoutProcess, setLogoutProcess] = useState(false);
    const navigate = useNavigate();

    const onMovePage = () =>{
        navigate("/main");
    }

    return (
        <>
            <div className="tgnb">
                <h1><a href="#" onClick={()=>onMovePage()}>X-ray Security <span>Training</span></a></h1>
                <nav className="util">
                    <a href="#" onClick={()=>setLogoutProcess(true)}>{/*로그아웃*/}Log out</a>
                </nav>
            </div>     

            {logoutProcess && (<div id="eig-modal" className="modal-wrapper modal_blind" style={{display: "block"}}>
                <div className="modal learn_scwd">
                <div className="scwd_txt01">
                            <h1>
                                {/*로그아웃*/}
                                Log out
                            </h1>
                        </div>
                        <div className="scwd_txt02">
                            {/*<p>로그아웃 하시겠습니까?</p>*/}
                            <p>Are you sure you want to log out?</p>
                        </div>
                    <button id="open-six-modal" onClick={()=>{setLogoutProcess(false);navigate("/")}} data-mact="open" data-minfo="six-modal" className="modal_btn conbtn01">확인</button>
                    <button id="close-eig-modal" onClick={()=>{setLogoutProcess(false);navigate("/")}} data-mact="close" data-minfo="eig-modal" className="modal_btn close_btn02"></button>
                </div>
            </div>
            )}                   
        </>
    );
};