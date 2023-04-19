/* eslint-disable*/
import React, { useState, useEffect, Component ,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PracticeList } from './PracticeList';
import $ from 'jquery';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import 'assets/css/content.css';
import 'assets/css/default.css';
import 'assets/css/login.css';
import 'assets/css/reset.css';
import 'assets/css/imgtrs.css';
import {Navi} from '../Navi';
import {Copy} from '../Copy';

// ================================|| 데모이미지 ||================================ //
//================================start 캔이미지
//캔이미지 
import t_practice_10_real from 'assets/images/demo/practice/can/real.gif'; //real
import t_practice_10_3d from 'assets/images/demo/practice/can/3d/101.gif';//3d
import t_practice_10_front from 'assets/images/practice/sample03.png';//front
import t_practice_10_side from 'assets/images/practice/sample04.png';//side

//이미지각도

//================================end 캔이미지

//정면이미지
import t_learning_01 from 'assets/images/demo/learning/X05231-101.jpg';
import t_learning_02 from 'assets/images/demo/learning/X05228-101.jpg';
import t_learning_03 from 'assets/images/demo/learning/X05227-101.jpg';
import t_learning_04 from 'assets/images/demo/learning/X05182-101.jpg';
import t_learning_05 from 'assets/images/demo/learning/X05180-101.jpg';

//측면이미지
import t_learning_01_1 from 'assets/images/demo/learning/X05231-201.jpg';
import t_learning_02_1 from 'assets/images/demo/learning/X05228-201.jpg';
import t_learning_03_1 from 'assets/images/demo/learning/X05227-201.jpg';
import t_learning_04_1 from 'assets/images/demo/learning/X05182-201.jpg';
import t_learning_05_1 from 'assets/images/demo/learning/X05180-201.jpg';









// ================================|| 하단 이미지 컨트롤 변경 적용 ||================================ //
//================================이미지1 
//컬러
//컬러유기물강조
//컬러무기물강조
//컬러반전
import t_color_01_1 from 'assets/images/demo/learning/X05231-101.jpg';
import t_color_02_1 from 'assets/images/demo/learning/X05231-102.jpg';
import t_color_03_1 from 'assets/images/demo/learning/X05231-103.jpg';
import t_color_04_1 from 'assets/images/demo/learning/X05231-104.jpg';

//컬러채도
import t_scolor_01_1 from 'assets/images/demo/learning/X05231-105.jpg';
import t_scolor_02_1 from 'assets/images/demo/learning/X05231-106.jpg';
import t_scolor_03_1 from 'assets/images/demo/learning/X05231-107.jpg';
import t_scolor_04_1 from 'assets/images/demo/learning/X05231-108.jpg';
import t_scolor_05_1 from 'assets/images/demo/learning/X05231-109.jpg';
import t_scolor_06_1 from 'assets/images/demo/learning/X05231-110.jpg';

//흑백
//흑백유기물강조
//흑백무기물강조
//흑백반전
import t_bwcolor_01_1 from 'assets/images/demo/learning/X05231-111.jpg';
import t_bwcolor_02_1 from 'assets/images/demo/learning/X05231-112.jpg';
import t_bwcolor_03_1 from 'assets/images/demo/learning/X05231-113.jpg';
import t_bwcolor_04_1 from 'assets/images/demo/learning/X05231-114.jpg';

//흑백채도
import t_sbwcolor_01_1 from 'assets/images/demo/learning/X05231-115.jpg';
import t_sbwcolor_02_1 from 'assets/images/demo/learning/X05231-116.jpg';
import t_sbwcolor_03_1 from 'assets/images/demo/learning/X05231-117.jpg';
import t_sbwcolor_04_1 from 'assets/images/demo/learning/X05231-118.jpg';
import t_sbwcolor_05_1 from 'assets/images/demo/learning/X05231-119.jpg';
import t_sbwcolor_06_1 from 'assets/images/demo/learning/X05231-120.jpg';












//================================측면이미지
//컬러
//컬러유기물강조
//컬러무기물강조
//컬러반전
import t_side_color_01_1 from 'assets/images/demo/learning/X05231-201.jpg';
import t_side_color_02_1 from 'assets/images/demo/learning/X05231-202.jpg';
import t_side_color_03_1 from 'assets/images/demo/learning/X05231-203.jpg';
import t_side_color_04_1 from 'assets/images/demo/learning/X05231-204.jpg';

//컬러채도
import t_side_scolor_01_1 from 'assets/images/demo/learning/X05231-205.jpg';
import t_side_scolor_02_1 from 'assets/images/demo/learning/X05231-206.jpg';
import t_side_scolor_03_1 from 'assets/images/demo/learning/X05231-207.jpg';
import t_side_scolor_04_1 from 'assets/images/demo/learning/X05231-208.jpg';
import t_side_scolor_05_1 from 'assets/images/demo/learning/X05231-209.jpg';
import t_side_scolor_06_1 from 'assets/images/demo/learning/X05231-210.jpg';

//흑백
//흑백유기물강조
//흑백무기물강조
//흑백반전
import t_side_bwcolor_01_1 from 'assets/images/demo/learning/X05231-211.jpg';
import t_side_bwcolor_02_1 from 'assets/images/demo/learning/X05231-212.jpg';
import t_side_bwcolor_03_1 from 'assets/images/demo/learning/X05231-213.jpg';
import t_side_bwcolor_04_1 from 'assets/images/demo/learning/X05231-214.jpg';

//흑백채도
import t_side_sbwcolor_01_1 from 'assets/images/demo/learning/X05231-215.jpg';
import t_side_sbwcolor_02_1 from 'assets/images/demo/learning/X05231-216.jpg';
import t_side_sbwcolor_03_1 from 'assets/images/demo/learning/X05231-217.jpg';
import t_side_sbwcolor_04_1 from 'assets/images/demo/learning/X05231-218.jpg';
import t_side_sbwcolor_05_1 from 'assets/images/demo/learning/X05231-219.jpg';
import t_side_sbwcolor_06_1 from 'assets/images/demo/learning/X05231-220.jpg';
//================================이미지1


export const THRESSD_IMAGES_DATA = (function () { 
    let arr = [];
    for(let i = 0 ; i <= 179 ; i++ ){
        let tmpImg = require(`assets/images/demo/practice/can/angle/${i}_256x256_Color.png`);
        arr.push(tmpImg);
    }
    return arr;
})();

export const Practice = () => {


    
    const targetUnitList = [
        {
            "unitGroupNo": 49,
            "unitGroupCd": "G000001",
            //"groupName": "총기류",
            "groupName": "Firearms",
            "groupDesc": "Firearms",
            "actionDiv": null,
            "openYn": "CLOSE",
            "passYn": "Prohibited"            
		},
        {
            "unitGroupNo": 50,
            "unitGroupCd": "G000002",
            //"groupName": "폭발물류",
            "groupName": "Explosives",
            "groupDesc": "Explosives",
            "actionDiv": null,
            "openYn": "CLOSE",
            "passYn": "Prohibited"
      
        },
        {
            "unitGroupNo": 51,
            "unitGroupCd": "G000003",
            //"groupName": "실탄류",
            "groupName": "Ammunitions",
            "groupDesc": "Ammunitions",
            "actionDiv": null,
            "openYn": "OPEN",
            "passYn": "Restricted"
        },
        {
            "unitGroupNo": 52,
            "unitGroupCd": "G000004",
            //"groupName": "도검류",
            "groupName": "Knifes and swords",
            "groupDesc": "Knife Sword",
            "actionDiv": null,
            "openYn": "OPEN",
            "passYn": "Restricted"                    
        },
        {
            "unitGroupNo": 53,
            "unitGroupCd": "G000005",
            //"groupName": "일반무기",
            "groupName": "General weapons",
            "groupDesc": "General Weapons",
            "actionDiv": null,
            "openYn": "OPEN",
            "passYn": "Restricted"
        },
        {
            "unitGroupNo": 54,
            "unitGroupCd": "G000006",
            //"groupName": "위장무기류",
            "groupName": "Camouflage weapon",
            "groupDesc": "Camouflage weapon",
            "actionDiv": null,
            "openYn": "OPEN",
            "passYn": "Restricted"
        },
        {
            "unitGroupNo": 55,
            "unitGroupCd": "G000007",
            //"groupName": "공구/생활용품류",
            "groupName": "Tools / supplies",
            "groupDesc": "Tools / supplies category",
            "actionDiv": null,
            "openYn": "OPEN",
            "passYn": "Prohibited"
        },
        {
            "unitGroupNo": 56,
            "unitGroupCd": "G000008",
            //"groupName": "인화성물질류",
            "groupName": "Inflammable substances",
            "groupDesc": "Inflammable substances",
            "actionDiv": null,
            "openYn": "OPEN",
            "passYn": "Prohibited"
        },
        {
            "unitGroupNo": 57,
            "unitGroupCd": "G000009",
            //"groupName": "위험물질류",
            "groupName": "Hazardous materials",
            "groupDesc": "Hazardous materials",
            "actionDiv": null,
            "openYn": "OPEN",
            "passYn": "Prohibited"
        },
        {
            "unitGroupNo": 58,
            "unitGroupCd": "G000010",
            //"groupName": "액체,겔 물품",
            "groupName": "Liquids, gel-type",
            "groupDesc": "Liquids, gel-type",
            "actionDiv": null,
            "openYn": "OPEN",
            "passYn": "PASS"
        },
        {
            "unitGroupNo": 59,
            "unitGroupCd": "G000011",
            //"groupName": "주류",
            "groupName": "Alcohol",
            "groupDesc": "Alcohol",
            "actionDiv": null,
            "openYn": "OPEN",
            "passYn": "PASS"
        },
        {
            "unitGroupNo": 60,
            "unitGroupCd": "G000012",
            //"groupName": "전기/전자제품",
            "groupName": "Electrical / electronic products",
            "groupDesc": "Electrical / electronic products",
            "actionDiv": null,
            "openYn": "OPEN",
            "passYn": "PASS"            
        },
        {
            "unitGroupNo": 61,
            "unitGroupCd": "G000013",
            //"groupName": "통과",
            "groupName": "pass",
            "groupDesc": "pass",
            "actionDiv": null,
            "openYn": "OPEN",
            "passYn": "PASS"
        }
    ];

    const targetUnitSubList1 = [
            {
                "unitScanId" : "UX230324025350",
                "unitGroupCd": "G000001",
                //"unitGroupName": "총기류",
                "unitGroupName": "Firearms",
                "unitName": "소총",
                "openYn": "CLOSE",
                "passYn": "Prohibited",  
                "realImg" : require(`assets/images/demo/practice/gun/real.png`),
                "frontImg" : require(`assets/images/demo/practice/gun/front.png`),
                "sideImg" : require(`assets/images/demo/practice/gun/side.png`),
                "threedImg" : require(`assets/images/demo/practice/gun/threed.png`)                       
            },
            {
                "unitScanId" : "UX230324025351",
                "unitGroupCd": "G000001",
                //"unitGroupName": "총기류",
                "unitGroupName": "Firearms",
                "unitName": "소총2",
                "openYn": "CLOSE",
                "passYn": "Prohibited"            
            },
            {
                "unitScanId" : "UX230324025352",
                "unitGroupCd": "G000001",
                //"unitGroupName": "총기류",
                "unitGroupName": "Firearms",
                "unitName": "소총3",
                "openYn": "CLOSE",
                "passYn": "Prohibited"               
            },
    ]

    const targetUnitSubList2 = [
            {
                "unitScanId" : "UX230324025350",
                "unitGroupCd": "G000002",
                //"unitGroupName": "폭발류",
                "unitGroupName": "Explosives",
                "unitName": "butane gas",
                "openYn": "CLOSE",
                "passYn": "Prohibited",
                "realImg" : require(`assets/images/demo/practice/can/real.png`),
                "frontImg" : THRESSD_IMAGES_DATA[0],
                "sideImg" : THRESSD_IMAGES_DATA[5],
                "threedImg" : require(`assets/images/demo/practice/can/threed.gif`)                     
            },
    ]

    const targetUnitSubList3 = [
        {
            "unitScanId" : "UX230324025350",
            "unitGroupCd": "G000003",
            //"unitGroupName": "실탄류",
            "unitGroupName": "Ammunitions",
            "unitName": "실탄1",
            "openYn": "OPEN",
            "passYn": "Restricted"
        },
        {
            "unitScanId" : "UX230324025351",
            "unitGroupCd": "G000003",
            //"unitGroupName": "실탄류",
            "unitGroupName": "Ammunitions",
            "unitName": "실탄2",
            "openYn": "OPEN",
            "passYn": "Restricted"
        },
        {
            "unitScanId" : "UX230324025352",
            "unitGroupCd": "G000003",
            //"unitGroupName": "실탄류",
            "unitGroupName": "Ammunitions",
            "unitName": "실탄3",
            "openYn": "OPEN",
            "passYn": "Restricted"
        },
    ]


    const targetUnitSubList4 = [
        {
            "unitScanId" : "UX230324025350",
            "unitGroupCd": "G000005",
            //"unitGroupName": "도검류",
            "unitGroupName": "Knifes and swords",
            "unitName": "도검1",
            "openYn": "OPEN",
            "passYn": "Restricted"   
        },
        {
            "unitScanId" : "UX230324025351",
            "unitGroupCd": "G000005",
            //"unitGroupName": "도검류",
            "unitGroupName": "Knifes and swords",
            "unitName": "도검2",
            "openYn": "OPEN",
            "passYn": "Restricted"   
        },
        {
            "unitScanId" : "UX230324025352",
            "unitGroupCd": "G000005",
            //"unitGroupName": "도검류",
            "unitGroupName": "Knifes and swords",
            "unitName": "도검3",
            "openYn": "OPEN",
            "passYn": "Restricted"   
        },
    ]
    

    const targetUnitSubList5 = [
        {
            "unitScanId" : "UX230324025350",
            "unitGroupCd": "G000005",
            //"unitGroupName": "일반무기",
            "unitGroupName": "General weapon",
            "unitName": "무기1",
            "openYn": "OPEN",
            "passYn": "Restricted"
        },
        {
            "unitScanId" : "UX230324025351",
            "unitGroupCd": "G000005",
            //"unitGroupName": "일반무기",
            "unitGroupName": "General weapon",
            "unitName": "무기2",
            "openYn": "OPEN",
            "passYn": "Restricted"
        },
        {
            "unitScanId" : "UX230324025352",
            "unitGroupCd": "G000005",
            //"unitGroupName": "일반무기",
            "unitGroupName": "General weapon",
            "unitName": "무기3",
            "openYn": "OPEN",
            "passYn": "Restricted"
        },
    ]
    

    const targetUnitSubList6 = [
        {
            "unitScanId" : "UX230324025350",
            "unitGroupCd": "G000006",
            //"unitGroupName": "위장무기류",
            "unitGroupName": "Camouflage weapon",
            "unitName": "위장1",
            "openYn": "OPEN",
            "passYn": "Restricted"
        },
        {
            "unitScanId" : "UX230324025351",
            "unitGroupCd": "G000006",
            //"unitGroupName": "위장무기류",
            "unitGroupName": "Camouflage weapon",
            "unitName": "위장2",
            "openYn": "OPEN",
            "passYn": "Restricted"
        },
        {
            "unitScanId" : "UX230324025352",
            "unitGroupCd": "G000006",
            //"unitGroupName": "위장무기류",
            "unitGroupName": "Camouflage weapon",
            "unitName": "위장3",
            "openYn": "OPEN",
            "passYn": "Restricted"
        },
    ]
    

    const targetUnitSubList7 = [
        {
            "unitScanId" : "UX230324025350",
            "unitGroupCd": "G000007",
            //"unitGroupName": "공구/생활용품류",
            "unitGroupName": "Tools / supplies",
            "unitName": "공구1",
            "openYn": "OPEN",
            "passYn": "Prohibited"
        },
        {
            "unitScanId" : "UX230324025351",
            "unitGroupCd": "G000007",
            //"unitGroupName": "공구/생활용품류",
            "unitGroupName": "Tools / supplies",
            "unitName": "생활용품2",
            "openYn": "OPEN",
            "passYn": "Prohibited"
        },
        {
            "unitScanId" : "UX230324025352",
            "unitGroupCd": "G000002",
            //"unitGroupName": "공구/생활용품류",
            "unitGroupName": "Tools / supplies",
            "unitName": "공구3",
            "openYn": "OPEN",
            "passYn": "Prohibited"
        },
    ]
    

    const targetUnitSubList8 = [
        {
            "unitScanId" : "UX230324025350",
            "unitGroupCd": "G000008",
            //"unitGroupName": "인화성물질류",
            "unitGroupName": "Inflammable substances",
            "unitName": "인화성물질",
            "openYn": "OPEN",
            "passYn": "Prohibited",
        },
    ]
    

    const targetUnitSubList9 = [
        {
            "unitScanId" : "UX230324025350",
            "unitGroupCd": "G000009",
            //"unitGroupName": "위험물질류",
            "unitGroupName": "Hazardous materials",
            "unitName": "위험1",
            "openYn": "OPEN",
            "passYn": "Prohibited"
        },
        {
            "unitScanId" : "UX230324025351",
            "unitGroupCd": "G000009",
            //"unitGroupName": "위험물질류",
            "unitGroupName": "Hazardous materials",
            "unitName": "위험2",
            "openYn": "OPEN",
            "passYn": "Prohibited"
        },
        {
            "unitScanId" : "UX230324025352",
            "unitGroupCd": "G000009",
            //"unitGroupName": "위험물질류",
            "unitGroupName": "Hazardous materials",
            "unitName": "위험3",
            "openYn": "OPEN",
            "passYn": "Prohibited"
        },
    ]
    

    const targetUnitSubList10 = [
        {
            "unitScanId" : "UX230324025350",
            "unitGroupCd": "G000010",
            //"unitGroupName": "액체,겔 물품",
            "unitGroupName": "Liquids, gel-type",
            "unitName": "액체1",
            "openYn": "OPEN",
            "passYn": "PASS"
        },
        {
            "unitScanId" : "UX230324025351",
            "unitGroupCd": "G000010",
            //"unitGroupName": "액체,겔 물품",
            "unitGroupName": "Liquids, gel-type",
            "unitName": "겔2",
            "openYn": "OPEN",
            "passYn": "PASS"
        },
        {
            "unitScanId" : "UX230324025352",
            "unitGroupCd": "G000010",
            //"unitGroupName": "액체,겔 물품",
            "unitGroupName": "Liquids, gel-type",
            "unitName": "액체3",
            "openYn": "OPEN",
            "passYn": "PASS"
        },
    ]
    

    
    const targetUnitSubList11 = [
        {
            "unitScanId" : "UX230324025350",
            "unitGroupCd": "G000011",
            //"unitGroupName": "주류",
            "unitGroupName": "Alcohol",
            "unitName": "주류1",
            "openYn": "OPEN",
            "passYn": "PASS"
        },
        {
            "unitScanId" : "UX230324025351",
            "unitGroupCd": "G000011",
            //"unitGroupName": "주류",
            "unitGroupName": "Alcohol",
            "unitName": "주류2",
            "openYn": "OPEN",
            "passYn": "PASS"
        },
        {
            "unitScanId" : "UX230324025352",
            "unitGroupCd": "G000011",
            //"unitGroupName": "주류",
            "unitGroupName": "Alcohol",
            "unitName": "주류3",
            "openYn": "OPEN",
            "passYn": "PASS"
        },
    ]
    

    
    const targetUnitSubList12 = [
        {
            "unitScanId" : "UX230324025350",
            "unitGroupCd": "G000012",
            //"unitGroupName": "전기/전자제품",
            "unitGroupName": "Electrical / electronic products",
            "unitName": "전기1",
            "openYn": "OPEN",
            "passYn": "PASS"    
        },
        {
            "unitScanId" : "UX230324025351",
            "unitGroupCd": "G000012",
            //"unitGroupName": "전기/전자제품",
            "unitGroupName": "Electrical / electronic products",
            "unitName": "전자제품2",
            "openYn": "OPEN",
            "passYn": "PASS"    
        },
        {
            "unitScanId" : "UX230324025352",
            "unitGroupCd": "G000012",
            //"unitGroupName": "전기/전자제품",
            "unitGroupName": "Electrical / electronic products",
            "unitName": "전자제품3",
            "openYn": "OPEN",
            "passYn": "PASS"    
        },
    ]
    

    //정면은 0번 , 측면은 45번
    const targetUnitSubList13 = [
        {
            "unitScanId" : "UX230324025350",
            "unitGroupCd": "G000013",
            //"unitGroupName": "통과",
            "unitGroupName": "pass",
            "unitName": "캔",
            "openYn": "OPEN",
            "passYn": "PASS",
        },
        
    ]
    


    const [unitList, setUnitList] = useState(targetUnitList); //단품그룹목록
    const [unitSubList, setUnitSubList] = useState(targetUnitSubList1);//단품목록
    const inputRef = useRef([]);
    const navigate = useNavigate();

    const [unitGroupCd, setUnitGroupCd] = useState(); //그룹코드
    const [unitGroupName, setUnitGroupName] = useState();//그룹명
    const [unitName, setUnitName] = useState();//단품명
    const [openYn, setOpenYn] = useState();//오픈
    const [passYn, setPassYn] = useState();//통과
    const [nowSelect, setNowSelect] = useState('');//현재선택된 아이콘
     
    const defaultData = () =>{
        setUnitGroupCd(unitSubList[0].unitGroupCd);
        setUnitGroupName(unitSubList[0].unitGroupName);
        setUnitName(unitSubList[0].unitName);
        setOpenYn(unitSubList[0].openYn);
        setPassYn(unitSubList[0].passYn);
    }

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
                firstModal.style.top = `calc(50 % - ${modalHeight / 2}px)`;
                //alert(modalWidth);
            }
            if (tar_act == "close") {
                document.getElementById(tar).style.display = "none";
            }
        }       
        
        
		const label = document.querySelector('.label');
		const options = document.querySelectorAll('.pra_item');
		const handleSelect = function (item) {
			label.innerHTML = item.textContent;
			label.parentNode.classList.remove('active');
		}
		options.forEach(function (option) {
			option.addEventListener('click', function () {
				handleSelect(option)
			})
		})

		label.addEventListener('click', function () {
			if (label.parentNode.classList.contains('active')) {
				label.parentNode.classList.remove('active');
			} else {
				label.parentNode.classList.add('active');
			}
		});        
    },[]);

    const [selectTr, setSelectTr] = useState(1);
    const [selectSubTr, setSelectSubTr] = useState(1);

    //단품그룹선택
    const handleTrSelect = (e, gc) =>{
        console.log(e);
        setSelectTr(e);

        if(gc==='G000001'){ //총기
            setUnitSubList(targetUnitSubList1);
        }else if(gc==='G000002'){//폭발물류
            setUnitSubList(targetUnitSubList2);
        }else if(gc==='G000003'){//실탄류
            setUnitSubList(targetUnitSubList3);
        }else if(gc==='G000004'){//도검류
            setUnitSubList(targetUnitSubList4);
        }else if(gc==='G000005'){//일반무기
            setUnitSubList(targetUnitSubList5);
        }else if(gc==='G000006'){//위장무기류
            setUnitSubList(targetUnitSubList6);
        }else if(gc==='G000007'){//공구/생활용품류
            setUnitSubList(targetUnitSubList7);
        }else if(gc==='G000008'){//인화성물질류
            setUnitSubList(targetUnitSubList8);
        }else if(gc==='G000009'){//위험물질류
            setUnitSubList(targetUnitSubList9);
        }else if(gc==='G000010'){//액체,겔 물품
            setUnitSubList(targetUnitSubList10);
        }else if(gc==='G000011'){//주류
            setUnitSubList(targetUnitSubList11);
        }else if(gc==='G000012'){//전기/전자제품
            setUnitSubList(targetUnitSubList12);
        }else{//통과
            setUnitSubList(targetUnitSubList13);
        }
    }

    //단품선택
    const handleSubTrSelect = (e, uid, gc, gn, nn, oy, py) =>{
        console.log(uid);

        setSelectSubTr(e);
        setUnitGroupCd(gc);
        setUnitGroupName(gn);
        setUnitName(nn);
        setOpenYn(oy);
        setPassYn(py);


        if(gc==='G000001'){ //총기
            setImageList(targetUnitSubList1[0]);         
        }else if(gc==='G000002'){//폭발물류
            setImageList(targetUnitSubList2[0]);
        }else if(gc==='G000003'){//실탄류
        }else if(gc==='G000004'){//도검류
        }else if(gc==='G000005'){//일반무기
        }else if(gc==='G000006'){//위장무기류
        }else if(gc==='G000007'){//공구/생활용품류
        }else if(gc==='G000008'){//인화성물질류
        }else if(gc==='G000009'){//위험물질류
        }else if(gc==='G000010'){//액체,겔 물품
        }else if(gc==='G000011'){//주류
        }else if(gc==='G000012'){//전기/전자제품
        }else{//통과 - 캔
            setImageList(targetUnitSubList13[0]);
        }

        console.log('imageList:',imageList);
    }    

    const handlePrev = () => {
        if (inputRef.current[selectSubTr-2]) {
            inputRef.current[selectSubTr-2].dispatchEvent(new Event('click', { bubbles: true }));
        }        
    }


    const handleNext = () => {
        if (inputRef.current[selectSubTr]) {
            inputRef.current[selectSubTr].dispatchEvent(new Event('click', { bubbles: true }));
        }        
    }

    const learningImages = {
        "realImg" : "",
        "frontImg" : "",
        "sideImg" : "",
        "threedImg" : ""
    };    
    
    //정면 하단아이콘유틸에 따라 변경되는 이미지유형
    const transimages = {
            "color": t_color_01_1,//컬러
            "colorUforce" : t_color_02_1,//컬러유기물강조
            "colorMforce" : t_color_03_1,//컬러무기물강조
            "colorRevers" : t_color_04_1,//컬러반전
            "colorSaturation1": t_scolor_01_1,//컬러채도
            "colorSaturation2": t_scolor_02_1,//컬러채도
            "colorSaturation3": t_scolor_03_1,//컬러채도
            "colorSaturation4": t_scolor_04_1,//컬러채도
            "colorSaturation5": t_scolor_05_1,//컬러채도
            "colorSaturation6": t_scolor_06_1,//컬러채도
            "blackWhite" : t_bwcolor_01_1,//흑백
            "blackWhiteUforce" : t_bwcolor_02_1,//흑백유기물강조
            "blackWhiteMforce" : t_bwcolor_03_1,//흑백무기물강조
            "blackWhiteRevers" : t_bwcolor_04_1,//흑백반전
            "blackWhiteSaturation1": t_sbwcolor_01_1,//흑백채도	
            "blackWhiteSaturation2": t_sbwcolor_02_1,//흑백채도	
            "blackWhiteSaturation3": t_sbwcolor_03_1,//흑백채도	
            "blackWhiteSaturation4": t_sbwcolor_04_1,//흑백채도	
            "blackWhiteSaturation5": t_sbwcolor_05_1,//흑백채도	
            "blackWhiteSaturation6": t_sbwcolor_06_1//흑백채도	
    }                               

    //측면 하단아이콘유틸에 따라 변경되는 이미지유형
    const sideTransimages = {
            "color": t_side_color_01_1,//컬러
            "colorUforce" : t_side_color_02_1,//컬러유기물강조
            "colorMforce" : t_side_color_03_1,//컬러무기물강조
            "colorRevers" : t_side_color_04_1,//컬러반전
            "colorSaturation1": t_side_scolor_01_1,//컬러채도
            "colorSaturation2": t_side_scolor_02_1,//컬러채도
            "colorSaturation3": t_side_scolor_03_1,//컬러채도
            "colorSaturation4": t_side_scolor_04_1,//컬러채도
            "colorSaturation5": t_side_scolor_05_1,//컬러채도
            "colorSaturation6": t_side_scolor_06_1,//컬러채도
            "blackWhite" : t_side_bwcolor_01_1,//흑백
            "blackWhiteUforce" : t_side_bwcolor_02_1,//흑백유기물강조
            "blackWhiteMforce" : t_side_bwcolor_03_1,//흑백무기물강조
            "blackWhiteRevers" : t_side_bwcolor_04_1,//흑백반전
            "blackWhiteSaturation1": t_side_sbwcolor_01_1,//흑백채도	
            "blackWhiteSaturation2": t_side_sbwcolor_02_1,//흑백채도	
            "blackWhiteSaturation3": t_side_sbwcolor_03_1,//흑백채도	
            "blackWhiteSaturation4": t_side_sbwcolor_04_1,//흑백채도	
            "blackWhiteSaturation5": t_side_sbwcolor_05_1,//흑백채도	
            "blackWhiteSaturation6": t_side_sbwcolor_06_1//흑백채도	
    }                                             

    const [imageList, setImageList] = useState(targetUnitSubList1[0]);

    const nowSelectControl = (e) =>{
        setNowSelect(e);//현재선택된 아이콘
    }    

    //하단 이미지컨트롤 아이콘 통합
    const imgTransControl = (e) =>{

        if(e==='color1'){//컬러
            learningImages.frontImg = transimages.color;
            learningImages.sideImg = sideTransimages.color;
            setImageList(learningImages);
        }else if(e==='color2'){//컬러유기물강조
            learningImages.frontImg = transimages.colorUforce;
            learningImages.sideImg = sideTransimages.colorUforce;
            setImageList(learningImages);
        }else if(e==='color3'){//컬러무기물강조
            learningImages.frontImg = transimages.colorMforce;
            learningImages.sideImg = sideTransimages.colorMforce;
            setImageList(learningImages);
        }else if(e==='color4'){//컬러반전
            learningImages.frontImg = transimages.colorRevers;
            learningImages.sideImg = sideTransimages.colorRevers;
            setImageList(learningImages);
        }else if(e==='cd1'){//컬러채도1
            learningImages.frontImg = transimages.colorSaturation1;
            learningImages.sideImg = sideTransimages.colorSaturation1;
            setImageList(learningImages);
        }else if(e==='cd2'){//컬러채도2
            learningImages.frontImg = transimages.colorSaturation2;
            learningImages.sideImg = sideTransimages.colorSaturation2;
            setImageList(learningImages);
        }else if(e==='cd3'){//컬러채도3
            learningImages.frontImg = transimages.colorSaturation3;
            learningImages.sideImg = sideTransimages.colorSaturation3;
            setImageList(learningImages);
        }else if(e==='cd4'){//컬러채도4
            learningImages.frontImg = transimages.colorSaturation4;
            learningImages.sideImg = sideTransimages.colorSaturation4;
            setImageList(learningImages);
        }else if(e==='cd5'){//컬러채도5
            learningImages.frontImg = transimages.colorSaturation5;
            learningImages.sideImg = sideTransimages.colorSaturation5;
            setImageList(learningImages);
        }else if(e==='cd6'){//컬러채도6
            learningImages.frontImg = transimages.colorSaturation6;
            learningImages.sideImg = sideTransimages.colorSaturation6;
            setImageList(learningImages);            
        }else if(e==='blackWhite1'){//흑백
            learningImages.frontImg = transimages.blackWhite;
            learningImages.sideImg = sideTransimages.blackWhite;
            setImageList(learningImages);
        }else if(e==='blackWhite2'){//흑백유기물강조
            learningImages.frontImg = transimages.blackWhiteUforce;
            learningImages.sideImg = sideTransimages.blackWhiteUforce;
            setImageList(learningImages);
        }else if(e==='blackWhite3'){//흑백무기물강조
            learningImages.frontImg = transimages.blackWhiteMforce;
            learningImages.sideImg = sideTransimages.blackWhiteMforce;
            setImageList(learningImages);
        }else if(e==='blackWhite4'){//흑백반전
            learningImages.frontImg = transimages.blackWhiteRevers;
            learningImages.sideImg = sideTransimages.blackWhiteRevers;
            setImageList(learningImages);
        }else if(e==='cd7'){//흑백채도1
            learningImages.frontImg = transimages.blackWhiteSaturation1;
            learningImages.sideImg = sideTransimages.blackWhiteSaturation1;
            setImageList(learningImages);
        }else if(e==='cd8'){//흑백채도2
            learningImages.frontImg = transimages.blackWhiteSaturation2;
            learningImages.sideImg = sideTransimages.blackWhiteSaturation2;
            setImageList(learningImages);
        }else if(e==='cd9'){//흑백채도3
            learningImages.frontImg = transimages.blackWhiteSaturation3;
            learningImages.sideImg = sideTransimages.blackWhiteSaturation3;
            setImageList(learningImages);
        }else if(e==='cd10'){//흑백채도4
            learningImages.frontImg = transimages.blackWhiteSaturation4;
            learningImages.sideImg = sideTransimages.blackWhiteSaturation4;
            setImageList(learningImages);
        }else if(e==='cd11'){//흑백채도5
            learningImages.frontImg = transimages.blackWhiteSaturation5;
            learningImages.sideImg = sideTransimages.blackWhiteSaturation5;
            setImageList(learningImages);
        }else if(e==='cd12'){//흑백채도6
            learningImages.frontImg = transimages.blackWhiteSaturation6;
            learningImages.sideImg = sideTransimages.blackWhiteSaturation6;
            setImageList(learningImages);
        }
    }    

    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();
    const inputRef5 = useRef();
    const inputRef6 = useRef();

    //확대
    const targetZoomIn = () => {
        if (inputRef1.current) {
          inputRef1.current.dispatchEvent(new Event('click', { bubbles: true }));
        }

        if (inputRef4.current) {
            inputRef4.current.dispatchEvent(new Event('click', { bubbles: true }));
        }        
    }

    //축소
    const targetZoomOut = () => {
        if (inputRef2.current) {
          inputRef2.current.dispatchEvent(new Event('click', { bubbles: true }));
        }

        if (inputRef5.current) {
            inputRef5.current.dispatchEvent(new Event('click', { bubbles: true }));
        }          
    }

    //리셋
    const targetZoomReset = () => {
        if (inputRef3.current) {
          inputRef3.current.dispatchEvent(new Event('click', { bubbles: true }));
        }

        if (inputRef6.current) {
            inputRef6.current.dispatchEvent(new Event('click', { bubbles: true }));
        }          
    }        
    
    //3d이미지 각도변경
    const handleThreed = (e) =>{
        learningImages.frontImg = imageList.frontImg;
        learningImages.realImg = imageList.realImg;
        learningImages.sideImg = imageList.sideImg;
        learningImages.threedImg = THRESSD_IMAGES_DATA[e];
        setImageList(learningImages);
    }

    useEffect(() =>{
        defaultData();
        console.log("이미지:", imageList);
    },[])

    return (
        <>
            {/* wrap */}
            <div id="wrap" className="mbg">
                {/* wlayer */}
                <div id="wlayer">

                    <Navi/>

                    {/* mcontent */}
                    <div className="mcontent">
                        <div id="practice-modal" className="modal-wrapper modal_blur">
                            <div className="modal xbt_md2">
                                {/* xbt_content */}
                                <div className="xbt_content">
                                    {/* xbt_top */}
                                    <div className="xbt_top">
                                        {/* xbttop02 */}
                                        <div className="xbttop02">
                                            <ul>
                                                <li>
                                                    {/*<h1 className="contit">물품연습</h1>*/}
                                                    <h1 className="contit">Item practice</h1>
                                                </li>
                                                <li>
                                                    {/*<h2 className="conname tr">홍길동</h2>*/}
                                                    <h2 className="conname tr">David Fincher</h2>
                                                    {/*<button id="close-practice-modal" onClick={()=>onMovePage()} data-mact="close" data-minfo="practice-modal" className="modal_btn conbtn01 conbtn_pd01">종료</button>*/}
                                                    {/*<button type="button" onClick={()=>setParacticeShow(true)} className="conbtn01">반입금지물품</button>*/}
                                                    <button id="close-practice-modal" onClick={()=>onMovePage()} data-mact="close" data-minfo="practice-modal" className="modal_btn conbtn01_eng conbtn_pd01">End</button>
                                                    <button type="button" onClick={()=>setParacticeShow(true)} className="conbtn01_eng">Prohibited item</button>
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
                                                                {/*<th>물품</th>*/}
                                                                {/*<th>개봉여부</th>*/}
                                                                {/*<th>통과여부</th>*/}
                                                                <th>Item</th>
                                                                <th>Whether the item is opened</th>
                                                                <th>Whether the item is passed</th>
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

                                                            {/* 단품 그룹목록 */}
                                                            {
                                                                unitList.map((result, index) => ([
                                                                    <tr onClick={()=>handleTrSelect(index+1, result.unitGroupCd)} className={selectTr===index+1 ? 'on' : ''}>
                                                                        <td>{index+1}</td>
                                                                        <td>{result.groupName}</td>
                                                                        <td>{result.openYn}</td>
                                                                        <td>{result.passYn}</td>
                                                                    </tr>
                                                                ]))
                                                            } 
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
                                                                {/*<th className="t_blue">물품명칭</th>*/}
                                                                <th className="t_blue">Name of items</th>
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
                                                            {/* 단품 목록 */}
                                                            {
                                                                unitSubList?.map((result, index) => ([
                                                                    <tr ref={el => inputRef.current[index] = el} onClick={()=>handleSubTrSelect(index+1, result.unitScanId ,result.unitGroupCd, result.unitGroupName, result.unitName, result.openYn, result.passYn)} className={selectSubTr===index+1 ? 'on' : ''}>
                                                                        <td>{index+1}</td>
                                                                        <td>{result.unitName}</td>
                                                                    </tr>
                                                                ]))
                                                            } 

                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* //물품명칭 내용 표 */}
                                            </div>
                                            {/* cop_con */}
                                            <div className="cop_con conbox_sty conbox_pd01">
                                                <div className="cop_con_tlist">
                                                    <div>
                                                        <p className="number">{unitGroupCd}</p>
                                                    </div>
                                                    <div>
                                                        <p className="products">{unitGroupName}</p>
                                                    </div>
                                                    <div>
                                                        <p className="release">{openYn} / {passYn}</p>
                                                    </div>
                                                    <div>
                                                        <p className="name">{unitName}</p>
                                                    </div>
                                                </div>
                                                <div className="cop_con_btn">
                                                    {/* <button className="back" onClick={()=>handlePrev()}>이전</button>*/}
                                                    {/* <button className="next" onClick={()=>handleNext()}>다음</button>*/}
                                                    <button className="back" onClick={()=>handlePrev()}>Prev</button>
                                                    <button className="next" onClick={()=>handleNext()}>Next</button>                                                      
                                                </div>
                                            </div>
                                        </div>
                                        {/* practice_right */}
                                        <div className="practice_right">
                                            {/* 옵션*/}
                                            <div className="practice_select">
                                                {/*<button className="label">옵션선택</button>*/}
                                                <button className="label">Select Option</button>
                                                <ul className="pra_optionList">
                                                    <li className="pra_item" onClick={()=>handleThreed("6")}>12°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("12")}>24°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("18")}>36°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("24")}>48°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("30")}>60°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("36")}>72°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("42")}>84°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("48")}>96°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("54")}>108°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("60")}>120°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("66")}>132°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("72")}>144°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("78")}>156°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("84")}>168°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("90")}>180°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("96")}>192°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("102")}>204°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("108")}>216°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("114")}>228°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("120")}>240</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("126")}>252°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("132")}>264°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("138")}>276°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("144")}>288°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("150")}>300°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("156")}>312°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("162")}>324°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("168")}>336°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("174")}>348°</li>
                                                    <li className="pra_item" onClick={()=>handleThreed("179")}>360°</li>
                                                </ul>
                                            </div>
                                            {/* //옵션 */}

                                            <div className="angle">
                                                <div className="real">
                                                    <p>Real</p>
                                                    {/*<img src={require('assets/images/practice/sample01.png')} alt=""/>*/}
                                                    <img src={imageList.realImg} alt=""/>
                                                    
                                                </div>
                                                <div className="dimension">
                                                    <p>3D</p>
                                                    {/*<img src={require('assets/images/practice/sample02.png')} alt=""/>*/}
                                                    <img src={imageList.threedImg} alt=""/>
                                                </div>
                                                <div className="front">
                                                    {/*<img src={require('assets/images/practice/sample03.png')} alt=""/>*/}
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
                                                            <p>Front</p>
                                                            <TransformComponent>
                                                                <img src={imageList.frontImg} className="image" alt="image" style={{ width: "100%", height: "100%" }}/>
                                                            </TransformComponent>
                                                            </React.Fragment>
                                                        )}
                                                    </TransformWrapper>                                                      
                                                </div>
                                                <div className="side">
                                                    {/*<img src={require('assets/images/practice/sample04.png')} alt=""/>*/}
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
                                                                <button ref={inputRef4} onClick={() => zoomIn()}>+</button>
                                                                <button ref={inputRef5} onClick={() => zoomOut()}>-</button>
                                                                <button ref={inputRef6} onClick={() => resetTransform()}>x</button>
                                                            </div>
                                                            <p>Side</p>
                                                            <TransformComponent>
                                                                <img src={imageList.sideImg} className="image" alt="image" style={{ width: "100%", height: "100%" }}/>
                                                            </TransformComponent>
                                                            </React.Fragment>
                                                        )}
                                                    </TransformWrapper>                                                     
                                                </div>
                                            </div>
                                            {/* practice_bot */}
                                            <div className="practice_bot">
                                                <div className="practice_btcon">
                                                    {/* copbtc01 */}
                                                    <div className="copbtc01">
                                                        <ul>
                                                            <li><a href="#" onClick={()=>{nowSelectControl('color1');imgTransControl('color1')}} className={nowSelect === 'color1' ? 'on' : '' }><img src={require('assets/images/learning/learnc_ic01_01.png')} alt=""/></a></li>
                                                            <li><a href="#" onClick={()=>{nowSelectControl('color2');imgTransControl('color2')}} className={nowSelect === 'color2' ? 'on' : '' }><img src={require('assets/images/learning/learnc_ic01_02.png')} alt=""/></a></li>
                                                            <li><a href="#" onClick={()=>{nowSelectControl('color3');imgTransControl('color3')}} className={nowSelect === 'color3' ? 'on' : '' }><img src={require('assets/images/learning/learnc_ic01_03.png')} alt=""/></a></li>
                                                            <li><a href="#" onClick={()=>{nowSelectControl('color4');imgTransControl('color4')}} className={nowSelect === 'color4' ? 'on' : '' }><img src={require('assets/images/learning/learnc_ic01_04.png')} alt=""/></a></li>
                                                            <li><a href="#" onClick={()=>{nowSelectControl('blackWhite1');imgTransControl('blackWhite1')}} className={nowSelect === 'blackWhite1' ? 'on' : '' }><img src={require('assets/images/learning/learnc_ic02_01.png')} alt=""/></a></li>
                                                            <li><a href="#" onClick={()=>{nowSelectControl('blackWhite2');imgTransControl('blackWhite2')}} className={nowSelect === 'blackWhite2' ? 'on' : '' }><img src={require('assets/images/learning/learnc_ic02_02.png')} alt=""/></a></li>
                                                            <li><a href="#" onClick={()=>{nowSelectControl('blackWhite3');imgTransControl('blackWhite3')}} className={nowSelect === 'blackWhite3' ? 'on' : '' }><img src={require('assets/images/learning/learnc_ic02_03.png')} alt=""/></a></li>
                                                            <li><a href="#" onClick={()=>{nowSelectControl('blackWhite4');imgTransControl('blackWhite4')}} className={nowSelect === 'blackWhite4' ? 'on' : '' }><img src={require('assets/images/learning/learnc_ic02_04.png')} alt=""/></a></li>
                                                        </ul>
                                                    </div>
                                                    {/* copbtc02 */}
                                                    <div className="copbtc02">
                                                        <ul>
                                                            <li><a href="#" className={nowSelect==='cd1' ? 'on' : ''} onClick={()=>{nowSelectControl('cd1');imgTransControl('cd1')}}><span className="brig_ic01_01"></span></a></li>
                                                            <li><a href="#" className={nowSelect==='cd2' ? 'on' : ''} onClick={()=>{nowSelectControl('cd2');imgTransControl('cd2')}}><span className="brig_ic01_02"></span></a></li>
                                                            <li><a href="#" className={nowSelect==='cd3' ? 'on' : ''} onClick={()=>{nowSelectControl('cd3');imgTransControl('cd3')}}><span className="brig_ic01_03"></span></a></li>
                                                            <li><a href="#" className={nowSelect==='cd4' ? 'on' : ''} onClick={()=>{nowSelectControl('cd4');imgTransControl('cd4')}}><span className="brig_ic01_04"></span></a></li>
                                                            <li><a href="#" className={nowSelect==='cd5' ? 'on' : ''} onClick={()=>{nowSelectControl('cd5');imgTransControl('cd5')}}><span className="brig_ic01_05"></span></a></li>
                                                            <li><a href="#" className={nowSelect==='cd6' ? 'on' : ''} onClick={()=>{nowSelectControl('cd6');imgTransControl('cd6')}}><span className="brig_ic01_06"></span></a></li>
                                                        </ul>
                                                        <ul>
                                                            <li><a href="#" className={nowSelect==='cd7' ? 'on' : ''} onClick={()=>{nowSelectControl('cd7');imgTransControl('cd7')}}><span className="brig_ic02_01"></span></a></li>
                                                            <li><a href="#" className={nowSelect==='cd8' ? 'on' : ''} onClick={()=>{nowSelectControl('cd8');imgTransControl('cd8')}}><span className="brig_ic02_02"></span></a></li>
                                                            <li><a href="#" className={nowSelect==='cd9' ? 'on' : ''} onClick={()=>{nowSelectControl('cd9');imgTransControl('cd9')}}><span className="brig_ic02_03"></span></a></li>
                                                            <li><a href="#" className={nowSelect==='cd10' ? 'on' : ''} onClick={()=>{nowSelectControl('cd10');imgTransControl('cd10')}}><span className="brig_ic02_04"></span></a></li>
                                                            <li><a href="#" className={nowSelect==='cd11' ? 'on' : ''} onClick={()=>{nowSelectControl('cd11');imgTransControl('cd11')}}><span className="brig_ic02_05"></span></a></li>
                                                            <li><a href="#" className={nowSelect==='cd12' ? 'on' : ''} onClick={()=>{nowSelectControl('cd12');imgTransControl('cd12')}}><span className="brig_ic02_06"></span></a></li>
                                                        </ul>
                                                    </div>
                                                    {/* copbtc03 */}
                                                    <div className="copbtc03">
                                                        <ul>
                                                            {/*<li><a href="#" className="on"><img src={require('assets/images/learning/glas_plus.png')} alt=""/></a></li>
                                                            <li><a href="#"><img src={require('assets/images/learning/transform.png')} alt=""/></a></li>
                                                            <li><a href="#"><img src={require('assets/images/learning/glas_minus.png')} alt=""/></a></li>
                                                            <li><a href="#"><img src={require('assets/images/learning/restoration.png')} alt=""/></a></li>*/}

                                                            <li><a href="#" onClick={()=>{targetZoomIn()}}><img src={require('assets/images/learning/glas_plus.png')} alt="이미지 확대"/></a></li>
                                                            <li>{/*<a href="#" onClick={()=>{targetReplaceImg()}}><img src={require('assets/images/learning/transform.png')} alt="이미지 반전"/></a>*/}</li>
                                                            <li><a href="#" onClick={()=>{targetZoomOut()}}><img src={require('assets/images/learning/glas_minus.png')} alt="이미지 축소"/></a></li>
                                                            <li><a href="#" onClick={()=>{targetZoomReset()}}><img src={require('assets/images/learning/restoration.png')} alt="이미지 reset"/></a></li>                                                            
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