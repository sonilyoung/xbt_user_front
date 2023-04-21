/* eslint-disable*/
import React, { useState, useEffect, Component ,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
//import { PracticeList } from './PracticeList';
import $ from 'jquery';
import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';
import 'assets/css/imgtrs.css';
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
import pass from 'assets/images/practice/pass.svg';
import failed from 'assets/images/practice/failed.svg';


export const ItemPractice = () => {
    const navigate = useNavigate();
    const [selectCondition1, setSelectCondition1] = useState('');
    const [selectCondition2, setSelectCondition2] = useState('');
    const [selectCondition3, setSelectCondition3] = useState('');
    const [selectCondition4, setSelectCondition4] = useState('');
    const [selectCondition5, setSelectCondition5] = useState('');
    const [selectCondition6, setSelectCondition6] = useState('');
    const [selectCondition7, setSelectCondition7] = useState('');
    const [selectCondition8, setSelectCondition8] = useState('');
    const [selectCondition9, setSelectCondition9] = useState('');
    const [selectCondition10, setSelectCondition10] = useState('');


    useEffect(()=>{  
        $("#first-modal").show();
        // 첫번째 모달창 가운데 정렬
        let firstModal = document.querySelector("#first-modal .modal");
        let modalWidth = firstModal.offsetWidth;
        //alert(modalWidth);
        let modalHeight = firstModal.offsetHeight;
        firstModal.style.left = `calc(50% - ${modalWidth/2}px)`;
        //firstModal.style.left = `calc(50% - ${modalWidth}px)`;
        firstModal.style.top = `calc(50% - ${modalHeight/2}px)`;

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
                firstModal.style.left = `calc(50% - ${modalWidth/2}px)`;
                //firstModal.style.left = `calc(50% - ${modalWidth}px)`;
                firstModal.style.top = `calc(50 % - ${modalHeight/2}px)`;
                //alert(modalWidth);
            }
            if (tar_act == "close") {
                //document.getElementById(tar).style.display = "none";
                navigate("/main");
            }
        }       
        
        
		$(".label").on("click", function () {
			if($(this).parents( "div.practice_test_select" ).hasClass("active") == true) {
				$( "div.practice_test_select" ).removeClass("active");
				
			}else{
				$( "div.practice_test_select" ).removeClass("active");
				$(this).parents( "div.practice_test_select" ).addClass("active");
			}
			let parent_height = $(this).parents("table").height();
			let this_content = $(this).parents( "div.practice_test_select" ).position();
			let this_position = parent_height-this_content.top;
			let min_position = $(this).next("ul").height();
			if( min_position > this_position){
				$(this).next("ul").addClass("reverse_optionList");
			}
		});
		$(".pra_item").on("click", function () {
			let target = $(this).parents( "div.practice_test_select" );
			target.children( ".label" ).addClass("label_on");
			target.children( ".label" ).text($(this).text());
			target.removeClass("active");
		});     

    },[]);

    const handleCondition =(menu, selmenu)=>{
        if(menu===1){
            if(selmenu===1){
                setSelectCondition1('pass');
            }else{
                setSelectCondition1('fail');
            }
        }else if(menu===2){
            if(selmenu===1){
                setSelectCondition2('pass');
            }else{
                setSelectCondition2('fail');
            }
        }else if(menu===3){
            if(selmenu===3){
                setSelectCondition3('pass');
            }else{
                setSelectCondition3('fail');
            }
        }else if(menu===4){
            if(selmenu===3){
                setSelectCondition4('pass');
            }else{
                setSelectCondition4('fail');
            }
        }else if(menu===5){
            if(selmenu===3){
                setSelectCondition5('pass');
            }else{
                setSelectCondition5('fail');
            }
        }else if(menu===6){
            if(selmenu===3){
                setSelectCondition6('pass');
            }else{
                setSelectCondition6('fail');
            }
        }else if(menu===7){
            if(selmenu===3){
                setSelectCondition7('pass');
            }else{
                setSelectCondition7('fail');
            }
        }else if(menu===8){
            if(selmenu===3){
                setSelectCondition8('pass');
            }else{
                setSelectCondition8('fail');
            }
        }else if(menu===9){
            if(selmenu===1){
                setSelectCondition9('pass');
            }else{
                setSelectCondition9('fail');
            }
        }else if(menu===10){
            if(selmenu===4){
                setSelectCondition10('pass');
            }else{
                setSelectCondition10('fail');
            }
        }
    }    


    return (
        <>
            {/* wrap */}
            <div id="wrap" className="mbg">
                {/* wlayer */}
                <div id="wlayer">
                    <Navi/>

                    <div className="mcontent">
                        <div id="first-modal" className="modal-wrapper modal_blur">
                            <div className="modal xbt_md">
                                {/*xbt_content */}
                                <div className="xbt_content banItems_content">
                                    {/*xbt_top */}
                                    <div className="xbt_top">
                                        {/*xbttop02 */}
                                        <div className="xbttop02">
                                            <ul>
                                                <li>
                                                    <h1 className="contit">Prohibited item practice</h1>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*xbt_con */}
                                    <div className="xbt_con">
                                        {/*물품 타이틀 표 */}
                                        <div className="banItems_table">
                                            <table className="table">
                                                <colgroup>
                                                    <col width="10%"/>
                                                    <col width="15%"/>
                                                    <col width="50%"/>
                                                    <col width="15%"/>
                                                    <col width="10%"/>
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th>Image</th>
                                                        <th className="t_left">Article Category</th>
                                                        <th className="t_left">Article Explanation</th>
                                                        <th>Action</th>
                                                        <th>Right Answer</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                        {/*//물품 타이틀 표 */}	
                                        {/*물품 내용 표 */}
                                        <div className="banItems_table scrollbar">
                                            <table className="table">
                                                <colgroup>
                                                    <col width="10%"/>
                                                    <col width="15%"/>
                                                    <col width="50%"/>
                                                    <col width="15%"/>
                                                    <col width="10%"/>
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <td><span><img src={gun} alt=""/></span></td>
                                                        {/* <th>총기류</th>*/}
                                                        <th>Firearms</th>
                                                        {/*<td>총기류 (권총, 소총, 기타 총기부품), 가스총, 장난감총 등</td>*/}
                                                        <td>Firearms (pistols, rifles, other firearm parts), gas guns, toy guns, etc.</td>
                                                        <td>
                                                            {/*옵션*/}
                                                            <div className="practice_test_select">
                                                                <button className="label">Option</button>
                                                                <ul className="pra_optionList">
                                                                    <li className="pra_item" onClick={()=>handleCondition(1,1)} >unopened/prohibited</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(1,2)} >unopened/pass</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(1,3)} >opened/restricted</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(1,4)} >opened/pass</li>
                                                                </ul>
                                                            </div>
                                                            
                                                        </td>
                                                        <td>
                                                            {
                                                                selectCondition1==='pass' ? 
                                                                <span><img src={pass} alt=""/></span>
                                                                :
                                                                (selectCondition1==='fail' ? <span><img src={failed} alt=""/></span> : '')
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span><img src={bomb} alt=""/></span></td>
                                                        {/* <th>폭발물류</th>*/}
                                                        <th>Explosives</th>
                                                        {/*<td>폭약, 사제폭발물, 도화선, 도폭선, 점화장치, 뇌관, 신호탄, 수류탄, 연막탄 등</td>*/}
                                                        <td>Explosives, homemade explosives, fuses, detonation wires, ignition devices, detonators, signal flares, grenades, smoke bombs, etc.</td>
                                                        <td>
                                                            {/*옵션*/}
                                                            <div className="practice_test_select">
                                                                <button className="label">Option</button>
                                                                <ul className="pra_optionList">
                                                                    <li className="pra_item" onClick={()=>handleCondition(2,1)} >unopened/prohibited</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(2,2)} >unopened/pass</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(2,3)} >opened/restricted</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(2,4)} >opened/pass</li>
                                                                </ul>
                                                            </div>
                                                            
                                                        </td>
                                                        <td>
                                                            {
                                                                selectCondition2==='pass' ? 
                                                                <span><img src={pass} alt=""/></span>
                                                                :
                                                                (selectCondition2==='fail' ? <span><img src={failed} alt=""/></span> : '')
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span><img src={ammunition} alt=""/></span></td>
                                                        {/* <th>실탄류</th>*/}
                                                        <th>ammunitions</th>
                                                        {/*<td>총탄류(권총탄, 소총탄), 탄창, 산탄, 납탄, BB탄 등</td>*/}
                                                        <td>Bullets (pistol bullets, rifle bullets), magazines, shotgun bullets, lead bullets, BB bullets, etc.</td>
                                                        <td>
                                                            {/*옵션*/}
                                                            <div className="practice_test_select">
                                                                <button className="label">Option</button>
                                                                <ul className="pra_optionList">
                                                                    <li className="pra_item" onClick={()=>handleCondition(3,1)} >unopened/prohibited</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(3,2)} >unopened/pass</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(3,3)} >opened/restricted</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(3,4)} >opened/pass</li>
                                                                </ul>
                                                            </div>
                                                            
                                                        </td>
                                                        <td>
                                                            {
                                                                selectCondition3==='pass' ? 
                                                                <span><img src={pass} alt=""/></span>
                                                                :
                                                                (selectCondition3==='fail' ? <span><img src={failed} alt=""/></span> : '')
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span><img src={sword} alt=""/></span></td>
                                                        {/* <th>도검류</th>*/}
                                                        <th>Knifes and swords</th>
                                                        {/*<td>카터칼, 맥가이버칼,과도, 테일키트, 박스칼 등</td>*/}
                                                        <td>Carter knives, MacGyver knives, knives, tail kits, box knives, etc.</td>
                                                        <td>
                                                            {/*옵션*/}
                                                            <div className="practice_test_select">
                                                                <button className="label">Option</button>
                                                                <ul className="pra_optionList">
                                                                    <li className="pra_item" onClick={()=>handleCondition(4,1)} >unopened/prohibited</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(4,2)} >unopened/pass</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(4,3)} >opened/restricted</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(4,4)} >opened/pass</li>
                                                                </ul>
                                                            </div>
                                                            
                                                        </td>
                                                        <td>
                                                            {
                                                                selectCondition4==='pass' ? 
                                                                <span><img src={pass} alt=""/></span>
                                                                :
                                                                (selectCondition4==='fail' ? <span><img src={failed} alt=""/></span> : '')
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span><img src={weapon} alt=""/></span></td>
                                                        {/* <th>일반 무기류</th>*/}
                                                        <th>General weapons</th>
                                                        {/*<td>전자충격기, 호신용 스프레이, 다트, 수갑, 곤봉, 표창, 쌍절곤, 목검, 둔기 등</td>*/}
                                                        <td>Electroshock weapons, self-defense sprays, darts, handcuffs, clubs, throwing stars, nunchucks, wooden swords, blunt weapons, etc.</td>
                                                        <td>
                                                            {/*옵션*/}
                                                            <div className="practice_test_select">
                                                                <button className="label">Option</button>
                                                                <ul className="pra_optionList">
                                                                    <li className="pra_item" onClick={()=>handleCondition(5,1)} >unopened/prohibited</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(5,2)} >unopened/pass</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(5,3)} >opened/restricted</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(5,4)} >opened/pass</li>
                                                                </ul>
                                                            </div>
                                                            
                                                        </td>
                                                        <td>
                                                            {
                                                                selectCondition5==='pass' ? 
                                                                <span><img src={pass} alt=""/></span>
                                                                :
                                                                (selectCondition5==='fail' ? <span><img src={failed} alt=""/></span> : '')
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span><img src={camouflage_weapon} alt=""/></span></td>
                                                        {/* <th>위장무기류</th>*/}
                                                        <th>Camouflage weapon</th>
                                                        {/*<td>혁대칼, 립스틱칼, 라이터칼, 지팡이칼, 카드칼, 목걸이위장칼 등</td>*/}
                                                        <td>Belt knife, lipstick knife, lighter knife, cane knife, card knife, necklace camouflage knife, etc.</td>
                                                        <td>
                                                            {/*옵션*/}
                                                            <div className="practice_test_select">
                                                                <button className="label">Option</button>
                                                                <ul className="pra_optionList">
                                                                    <li className="pra_item" onClick={()=>handleCondition(6,1)} >unopened/prohibited</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(6,2)} >unopened/pass</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(6,3)} >opened/restricted</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(6,4)} >opened/pass</li>
                                                                </ul>
                                                            </div>
                                                            
                                                        </td>
                                                        <td>
                                                            {
                                                                selectCondition6==='pass' ? 
                                                                <span><img src={pass} alt=""/></span>
                                                                :
                                                                (selectCondition6==='fail' ? <span><img src={failed} alt=""/></span> : '')
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span><img src={tool} alt=""/></span></td>
                                                        {/* <th>공구/생활용품류</th>*/}
                                                        <th>Tools/supplies category</th>
                                                        {/*<td>망치, 톱, 톱날, 줄, 드라이버, 송곳, 가위 등 (기준 초과시)</td>*/}
                                                        <td>Hammer, saw, saw blade, file, screwdriver, awl, scissors, etc. (if excess)</td>
                                                        <td>
                                                            {/*옵션*/}
                                                            <div className="practice_test_select">
                                                                <button className="label">Option</button>
                                                                <ul className="pra_optionList">
                                                                    <li className="pra_item" onClick={()=>handleCondition(7,1)} >unopened/prohibited</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(7,2)} >unopened/pass</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(7,3)} >opened/restricted</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(7,4)} >opened/pass</li>
                                                                </ul>
                                                            </div>
                                                            
                                                        </td>
                                                        <td>
                                                            {
                                                                selectCondition7==='pass' ? 
                                                                <span><img src={pass} alt=""/></span>
                                                                :
                                                                (selectCondition7==='fail' ? <span><img src={failed} alt=""/></span> : '')
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span><img src={flammable_sub} alt=""/></span></td>
                                                        {/* <th>인화성물질류</th>*/}
                                                        <th>Inflammable substances</th>
                                                        {/*<td>라이터가스&기름, 신너, 접착제(본드), 캠핑가스, 폭죽 등</td>*/}
                                                        <td>Lighter gas, oil, thinner, adhesive (bond), camping gas, fireworks, etc.</td>
                                                        <td>
                                                            {/*옵션*/}
                                                            <div className="practice_test_select">
                                                                <button className="label">Option</button>
                                                                <ul className="pra_optionList">
                                                                    <li className="pra_item" onClick={()=>handleCondition(8,1)} >unopened/prohibited</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(8,2)} >unopened/pass</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(8,3)} >opened/restricted</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(8,4)} >opened/pass</li>
                                                                </ul>
                                                            </div>
                                                            
                                                        </td>
                                                        <td>
                                                            {
                                                                selectCondition8==='pass' ? 
                                                                <span><img src={pass} alt=""/></span>
                                                                :
                                                                (selectCondition8==='fail' ? <span><img src={failed} alt=""/></span> : '')
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span><img src={danger_substances} alt=""/></span></td>
                                                        {/* <th>위험물질류</th>*/}
                                                        <th>Hazardous materials</th>
                                                        {/*<td>독극물, 염산, 황산, 습식건전지, 부식제, 수은, 살충제 등</td>*/}
                                                        <td>Toxic, hydrochloric acid, sulfuric acid, wet batteries, caustics, mercury, pesticides, etc.</td>
                                                        <td data-chk="2">
                                                            {/*옵션*/}
                                                            <div className="practice_test_select">
                                                                <button className="label">Option</button>
                                                                <ul className="pra_optionList">
                                                                    <li className="pra_item" onClick={()=>handleCondition(9,1)} >unopened/prohibited</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(9,2)} >unopened/pass</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(9,3)} >opened/restricted</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(9,4)} >opened/pass</li>
                                                                </ul>
                                                            </div>
                                                            
                                                        </td>
                                                        <td>
                                                            {
                                                                selectCondition9==='pass' ? 
                                                                <span><img src={pass} alt=""/></span>
                                                                :
                                                                (selectCondition9==='fail' ? <span><img src={failed} alt=""/></span> : '')
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><span><img src={liquid} alt=""/></span></td>
                                                        {/* <th>액체, 겔 물품</th>*/}
                                                        <th>Liquids, gel-type item</th>
                                                        {/*<td>개별용기당 100ml를 초과하는 액체,겔 물품(화장품, 샴푸, 고추장, 된장 등)</td>*/}
                                                        <td>Liquids such as cosmetics, shampoo, gochujang, dwenjang etc. which exceeds 100ml per each container</td>
                                                        <td data-chk="2">
                                                            {/*옵션*/}
                                                            <div className="practice_test_select">
                                                                <button className="label">Option</button>
                                                                <ul className="pra_optionList">
                                                                    <li className="pra_item" onClick={()=>handleCondition(10,1)} >unopened/prohibited</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(10,2)} >unopened/pass</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(10,3)} >opened/restricted</li>
                                                                    <li className="pra_item" onClick={()=>handleCondition(10,4)} >opened/pass</li>
                                                                </ul>
                                                            </div>
                                                            
                                                        </td>
                                                        <td>
                                                            {
                                                                selectCondition10==='pass' ? 
                                                                <span><img src={pass} alt=""/></span>
                                                                :
                                                                (selectCondition10==='fail' ? <span><img src={failed} alt=""/></span> : '')
                                                            }
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        {/*//물품 내용 표 */}								
                                    </div>
                                    <button id="close-first-modal" data-mact="close" data-minfo="first-modal" className="modal_btn close_btn"></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Copy/>
            </div>           
        </>
    );
};