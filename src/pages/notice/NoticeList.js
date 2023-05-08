/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

import larrow from '../../images/main/larrow.svg';
import rarrow from '../../images/main/rarrow.svg';

import { NoticeView } from 'pages/notice';

// Notice 목록조회 API
import { useSelectNoticeListMutation } from '../../hooks/api/NoticeManagement/NoticeManagement';

export const NoticeList = (props) => {
    const { confirm } = Modal;
    const [ndModalOpen, setNdModalOpen] = useState(false); // Notice Detail Modal창
    const [noticeListApi, setNoticeListApi] = useState([]); // Notice List 값
    const [noticeid, setNoticeid] = useState(); // Notice id 값
    const [ndLoading, setNdLoading] = useState(false);

    // Notice api 정보
    const [NoticeListApi] = useSelectNoticeListMutation();

    // Notice Api 호출
    const Notice_ApiCall = async () => {
        const noticeResponse = await NoticeListApi({
            languageCode: 'kor'
        });

        setNoticeListApi(noticeResponse?.data?.RET_DATA);
    };

    // Notice View Modal 이벤트처리 Start
    const NoticeView_Modal = (Notice_Id) => {
        setNoticeid(Notice_Id);
        setNdModalOpen(true);
        setNdLoading(true);
    };

    const ndhandleOk = () => {
        setNdModalOpen(false);
    };

    const ndhandleCancel = () => {
        setNdModalOpen(false);
    };
    // Notice View Modal 이벤트처리 End

    const ModalClose = () => {
        props.ModalClose();
    };

    useEffect(() => {
        Notice_ApiCall(); // api 호출
    }, []);

    return (
        <>
            <div className="xbt_content">
                <div className="xbt_top">
                    <div className="md_notice">
                        <div className="mdnc_top">
                            <h1>Notice</h1>
                        </div>
                        <table className="bbslist">
                            <thead>
                                <tr>
                                    <th style={{ width: '15%' }}>No.</th>
                                    <th style={{ width: '70%' }}>제목</th>
                                    <th style={{ width: '15%' }}>일자</th>
                                </tr>
                            </thead>
                            <tbody>
                                {noticeListApi?.map((d, i) => (
                                    <tr key={i}>
                                        <td className="num">{d.noticeId}</td>
                                        <td className="al-Left">
                                            <button
                                                id="open-thr-md"
                                                data-mact="open"
                                                data-minfo="thr-md"
                                                className="modal_btn"
                                                onClick={() => NoticeView_Modal(d.noticeId)}
                                            >
                                                {d.title}
                                            </button>
                                        </td>
                                        <td className="Date">{d.insertDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="bbs_pagi">
                            <ul>
                                <li>
                                    <a href="#" className="page_prev">
                                        <span>
                                            <img src={larrow} alt="" />
                                        </span>
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="#" className="page_current">
                                        <span>1</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>2</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>3</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>4</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>5</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="page_next">
                                        <span>
                                            <img src={rarrow} alt="" />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button
                        id="close-two-md"
                        data-mact="close"
                        data-minfo="two-md"
                        className="modal_btn close_btn"
                        style={{ marginTop: '20px', marginRight: '20px' }}
                        onClick={ModalClose}
                    ></button>
                </div>
            </div>

            {/* Notice 상세정보 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={ndModalOpen}
                onOk={ndhandleOk}
                onCancel={ndhandleCancel}
                width={680}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <NoticeView NoticeId={noticeid} />
            </Modal>
            {/* Notice 상세정보 모달 창 End */}
        </>
    );
};
