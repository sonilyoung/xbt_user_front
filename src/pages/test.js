import React, { useState, useEffect } from 'react';

function Learn01() {
    const [containerWidth, setContainerWidth] = useState(0); // 이미지가 움직일 공간 크기
    const [isPaused, setIsPaused] = useState(false); // 일시정지 상태 저장
    const [currentImage, setCurrentImage] = useState(0); // 현재 움직이는 이미지가 몇번째인가
    const [originImg, setOriginImg] = useState([]); // 원본 이미지 배열
    const [thumImg, setThumImg] = useState([]); // 썸네일 이미지 배열
    const [moveTimer, setMoveTimer] = useState(0); // 움직이는 시간(ms, 1/1000초)
    const [moveDistance, setMoveDistance] = useState(0); // 움직일 거리
    const [isLearn01Play, setIsLearn01Play] = useState(true); // 실행 여부
    const [startCount, setStartCount] = useState(0);

    useEffect(() => {
        // 이 부분에서 이미지 목록과 초기화 작업을 수행합니다.
        const originImgs = [];
        const thumImgs = [];
        const imgs = document.querySelectorAll('#learn01_img img');
        imgs.forEach((img, i) => {
            originImgs.push(img);
            thumImgs.push(img.getAttribute('data-thum'));
        });
        setOriginImg(originImgs);
        setThumImg(thumImgs);

        setMoveTimer(slide_time);
        setMoveDistance(slide_speed);
        setIsLearn01Play(true);

        // 초기화 작업
        const range = document.querySelector('#myRange');
        range.setAttribute('max', document.querySelector('#learn01_img').clientWidth);
        range.value = document.querySelector('#learn01_img').clientWidth;
        range.style.visibility = 'visible';
        document.querySelector('#learn01_bimg').style.display = 'block';
        document.querySelector('#learn01_start').style.display = 'none';
        document.querySelector('#learn01_start_on').style.display = 'block';
    }, []);

    // 이하로는 HTML과 이벤트 핸들러를 작성합니다.
    // ...
}
