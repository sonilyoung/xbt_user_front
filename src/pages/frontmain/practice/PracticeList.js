/* eslint-disable*/
import React, { useState, useEffect, Component ,useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import $ from 'jquery';
import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';
import {Navi} from '../Navi';
import {Copy} from '../Copy';
import gun from 'assets/images/practice/gun.svg';
import bomb from 'assets/images/practice/bomb.svg';
import ammunition from 'assets/images/practice/ammunition.svg';
import sword from 'assets/images/practice/sword.svg';
import weapon from 'assets/images/practice/weapon.svg';
import camouflage_weapon from 'assets/images/practice/camouflage_weapon.svg';
import tool from 'assets/images/practice/tool.svg';
import flammable_sub from 'assets/images/practice/flammable_sub.svg';
import danger_substances from 'assets/images/practice/danger_substances.svg';
import liquid from 'assets/images/practice/liquid.svg';

export const PracticeList = ({displayy, displayn}) => {
    //const [selected] = useState([]);
    const navigate = useNavigate();
    const [paracticeShow, setParacticeShow] = useState(true);

    console.log("props:", displayy);

    const handleClose = () =>{
        displayn(false);    
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
                                        {/*<h1 className="contit_pop">반입금지물품</h1>*/}
                                        <h1 className="contit_pop">End / prohibited item</h1>
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
                                        <col width="10%"/>
                                        <col width="15%"/>
                                        <col width="60%"/>
                                        <col width="15%"/>
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td><span><img src={gun} alt=""/></span></td>
                                            {/* <th>총기류</th>*/}
                                            <td>Firearms</td>
                                            {/*<td>총기류 (권총, 소총, 기타 총기부품), 가스총, 장난감총 등</td>*/}
                                            <td>Firearms (pistols, rifles, other firearm parts), gas guns, toy guns, etc.</td>
                                            {/* <td>미개봉 / 금지</td>*/}
                                            <td>unopened / prohibited</td>
                                            
                                        </tr>
                                        <tr>
                                            <td><span><img src={bomb} alt=""/></span></td>
                                            {/* <th>폭발물류</th>*/}
                                            <td>Explosives</td>
                                            {/*<td>폭약, 사제폭발물, 도화선, 도폭선, 점화장치, 뇌관, 신호탄, 수류탄, 연막탄 등</td>*/}
                                            <td>Explosives, homemade explosives, fuses, detonation wires, ignition devices, detonators, signal flares, grenades, smoke bombs, etc.</td>
                                            {/* <td>미개봉 / 금지</td>*/}
                                            <td>unopened / prohibited</td>
                                        </tr>
                                        <tr>
                                            <td><span><img src={ammunition} alt=""/></span></td>
                                            {/* <th>실탄류</th>*/}
                                            <td>ammunitions</td>
                                            {/*<td>총탄류(권총탄, 소총탄), 탄창, 산탄, 납탄, BB탄 등</td>*/}
                                            <td>Bullets (pistol bullets, rifle bullets), magazines, shotgun bullets, lead bullets, BB bullets, etc.</td>
                                            {/* <td>개봉 / 제한</td>*/}
                                            <td>opened / restricted</td>
                                        </tr>
                                        <tr>
                                            <td><span><img src={sword} alt=""/></span></td>
                                            {/* <th>도검류</th>*/}
                                            <td>Knifes and swords</td>
                                            {/*<td>카터칼, 맥가이버칼,과도, 테일키트, 박스칼 등</td>*/}
                                            <td>Carter knives, MacGyver knives, knives, tail kits, box knives, etc.</td>
                                            {/* <td>개봉 / 제한</td>*/}
                                            <td>opened / restricted</td>
                                        </tr>
                                        <tr>
                                            <td><span><img src={weapon} alt=""/></span></td>
                                            {/* <th>일반 무기류</th>*/}
                                            <td>General weapons</td>
                                            {/*<td>전자충격기, 호신용 스프레이, 다트, 수갑, 곤봉, 표창, 쌍절곤, 목검, 둔기 등</td>*/}
                                            <td>Electroshock weapons, self-defense sprays, darts, handcuffs, clubs, throwing stars, nunchucks, wooden swords, blunt weapons, etc.</td>
                                            {/* <td>개봉 / 제한</td>*/}
                                            <td>opened / restricted</td>
                                        </tr>
                                        <tr>
                                            <td><span><img src={camouflage_weapon} alt=""/></span></td>
                                            {/* <th>위장무기류</th>*/}
                                            <td>Camouflage weapon</td>
                                            {/*<td>혁대칼, 립스틱칼, 라이터칼, 지팡이칼, 카드칼, 목걸이위장칼 등</td>*/}
                                            <td>Belt knife, lipstick knife, lighter knife, cane knife, card knife, necklace camouflage knife, etc.</td>
                                            {/* <td>개봉 / 제한</td>*/}
                                            <td>opened / restricted</td>
                                        </tr>
                                        <tr>
                                            <td><span><img src={tool} alt=""/></span></td>
                                            {/* <th>공구/생활용품류</th>*/}
                                            <td>Tools / supplies category</td>
                                            {/*<td>망치, 톱, 톱날, 줄, 드라이버, 송곳, 가위 등 (기준 초과시)</td>*/}
                                            <td>Hammer, saw, saw blade, file, screwdriver, awl, scissors, etc. (if excess)</td>
                                            {/* <td>개봉 / 제한</td>*/}
                                            <td>opened / restricted</td>
                                        </tr>
                                        <tr>
                                            <td><span><img src={flammable_sub} alt=""/></span></td>
                                            {/* <th>인화성물질류</th>*/}
                                            <td>Inflammable substances</td>
                                            {/*<td>라이터가스&기름, 신너, 접착제(본드), 캠핑가스, 폭죽 등</td>*/}
                                            <td>Lighter gas, oil, thinner, adhesive (bond), camping gas, fireworks, etc.</td>
                                            {/* <td>개봉 / 제한</td>*/}
                                            <td>opened / restricted</td>
                                        </tr>
                                        <tr>
                                            <td><span><img src={danger_substances} alt=""/></span></td>
                                            {/* <th>위험물질류</th>*/}
                                            <td>Hazardous materials</td>
                                            {/*<td>독극물, 염산, 황산, 습식건전지, 부식제, 수은, 살충제 등</td>*/}
                                            <td>Toxic, hydrochloric acid, sulfuric acid, wet batteries, caustics, mercury, pesticides, etc.</td>
                                            {/* <td>미개봉 / 금지</td>*/}
                                            <td>unopened / prohibited</td>
                                        </tr>
                                        <tr>
                                            <td><span><img src={liquid} alt=""/></span></td>
                                            {/* <th>액체, 겔 물품</th>*/}
                                            <td>Liquids, gel-type item</td>
                                            {/*<td>개별용기당 100ml를 초과하는 액체,겔 물품(화장품, 샴푸, 고추장, 된장 등)</td>*/}
                                            <td>Liquids such as cosmetics, shampoo, gochujang, dwenjang etc. which exceeds 100ml per each container</td>
                                            {/* <td>개봉 / 제한</td>*/}
                                            <td>opened / restricted</td>
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