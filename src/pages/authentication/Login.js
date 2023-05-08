/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// material-ui
import { Typography, Stack, InputLabel, OutlinedInput, FormHelperText } from '@mui/material';

import { Col, Row, Form, Input, Dropdown, Space, Modal } from 'antd';
import koricon from '../../images/login/kor_icon.svg';
import engicon from '../../images/login/eng_icon.svg';
import jpicon from '../../images/login/jp_icon.svg';
import cnicon from '../../images/login/cn_icon.svg';
import success from '../../images/login/success.svg';
import fail from '../../images/login/fail.svg';

import '../../css/login.css';

import { useUserToken } from '../../hooks/core/UserToken';
import { useUserStatus } from '../../hooks/core/UserStatus';
import { useLoginMutation } from '../../hooks/api/LoginManagement/LoginManagement';

// ================================|| LOGIN ||================================ //

const Login = () => {
    const { confirm } = Modal;
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const isLoggedIn = useUserStatus();

    const [isModalOpen, setIsModalOpen] = useState(false); // 로그인창 Modal창

    const [loading, setLoading] = useState(false);
    const [stuId, setStuId] = useState();
    const [stuPw, setStuPw] = useState();
    const [languageLabel, setLanguageLabel] = useState('한국어');
    const [languageKey, setLanguageKey] = useState('kor');

    // 로그인 토큰 정보
    const [userToken] = useUserToken();

    // 로그인 api 정보
    const [login] = useLoginMutation();

    // 언어 셀렉트박스 옵션 정의 Start
    const items = [
        {
            label: '한국어',
            key: 'kor',
            icon: <img src={koricon} alt="Korean flag" />
        },
        {
            label: 'English',
            key: 'eng',
            icon: <img src={engicon} alt="Korean flag" />
        },
        {
            label: '日本語',
            key: 'jp',
            icon: <img src={jpicon} alt="Korean flag" />
        },
        {
            label: '汉语',
            key: 'cn',
            icon: <img src={cnicon} alt="Korean flag" />
        }
    ];
    // 언어 셀렉트박스 옵션 정의 End

    // 언어 선택시 정의 Start
    const handleMenuClick = (e) => {
        if (e.key === 'kor') {
            setLanguageLabel('한국어');
        } else if (e.key === 'eng') {
            setLanguageLabel('English');
        } else if (e.key === 'jp') {
            setLanguageLabel('日本語');
        } else if (e.key === 'cn') {
            setLanguageLabel('汉语');
        }
        setLanguageKey(e.key);
    };
    // 언어 선택시 정의 End

    // 언어 셀렉트 박스 마우스 오버시 Start
    const menuProps = {
        items,
        onClick: handleMenuClick
    };
    // 언어 셀렉트 박스 마우스 오버시 End

    // 로그인 창 Modal
    const LoginForm_Show = () => {
        setIsModalOpen(true);
        setLoading(true);
    };

    // 로그인 성공 modal
    const success_info = () => {
        Modal.success({
            content: (
                <div style={{ textAlign: 'center', width: '330px', padding: '0px 0 10px' }}>
                    <div style={{ marginBottom: '2rem', height: '78px' }}>
                        <img src={success} alt="로그인 성공" />
                    </div>
                    <p style={{ marginBottom: '1rem', width: '360px', fontSize: '2rem', color: '#666666' }}>
                        <b>로그인 성공!</b>
                    </p>
                </div>
            ),
            okText: '확인',
            onOk() {
                navigate('/frontmain');
            }
        });
    };

    // 로그인 실패 modal
    const failure_info = () => {
        Modal.error({
            content: (
                <div style={{ textAlign: 'center', width: '330px', padding: '0px 0 10px' }}>
                    <div style={{ marginBottom: '2rem', height: '78px' }}>
                        <img src={fail} alt="로그인 실패" />
                    </div>
                    <p style={{ marginBottom: '1rem', width: '360px', fontSize: '2rem', color: '#666666' }}>
                        <b>로그인에 실패하였습니다.</b>
                    </p>
                </div>
            ),
            okText: '확인',
            onOk() {}
        });
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // Enter시 handleSubmit 호출
    const handleChangeSubmit = (e) => {
        if (e.key === 'Enter') handleLogin();
    };

    // 아이디 입력
    const handleChangeId = (e) => {
        const value = e.target.value;
        setStuId(value);
    };

    // 비밀번호 입력
    const handleChangePw = (e) => {
        const value = e.target.value;
        setStuPw(value);
    };

    // 로그인 처리
    const handleLogin = async () => {
        const userLoginResponse = await login({
            loginId: stuId,
            loginPw: stuPw
        });
        if (userLoginResponse.data.RET_CODE === '0000') {
            const jwtToken = userLoginResponse.data.RET_DATA.accessToken;
            userToken.setItem(jwtToken);
            success_info();
        } else {
            failure_info();
        }
    };

    useEffect(() => {
        if (isLoggedIn === true) {
            navigate('/frontmain');
        }
    }, []);

    return (
        <>
            {/* wrap */}
            <div id="wrap" className="mbg">
                {/* wlayer */}
                <div id="wlayer" className="login_layer">
                    {/* mcontent */}
                    <div className="mcontent">
                        {/* login_con */}
                        <div className="login_con">
                            <Typography variant="h3">X-RAY 보안 훈련 시스템 교육생 전용</Typography>
                            <Typography variant="h1">
                                X-ray Security
                                <br />
                                Training
                                <br />
                                <span>trainee</span>
                            </Typography>
                            <p>
                                X-ray 보안 시스템 훈련을 통해 보안 전문 역량을 강화할 수 있도록
                                <br />
                                체계적인 교육훈련 프로그램을 제공합니다.
                            </p>
                            <button className="login_btn modal_btn" onClick={() => LoginForm_Show()}>
                                로그인
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 로그인 폼 모달 창 Start */}
            <Modal
                maskClosable={false}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={520}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <Form noValidate layout="vertical" name="Login_Form" form={form} style={{ marginTop: 30 }}>
                    <Row gutter={24}>
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <div>
                                <Typography variant="h3" style={{ marginBottom: '1rem', fontSize: '2rem', color: '#666666' }}>
                                    X-ray 보안 훈련 시스템 교육생 전용
                                </Typography>
                                <Typography
                                    variant="h1"
                                    style={{
                                        fontFamily: 'Outfit',
                                        fontSize: '3.6rem',
                                        fontWeight: '600',
                                        lineHeight: '1.2',
                                        color: '#155eb6'
                                    }}
                                >
                                    X-ray Security Training
                                    <span style={{ display: 'block', fontWeight: '200', color: '#0e276c' }}>trainee</span>
                                </Typography>
                                {/* 언어선택 */}
                                <div className="lan_select">
                                    <Space direction="vertical">
                                        <Dropdown placement="bottomRight" menu={menuProps} style={{ border: '0px' }}>
                                            <button
                                                className={`label ${languageKey}`}
                                                style={{
                                                    width: '180px',
                                                    backgroundColor: '#0e276c',
                                                    borderRadius: '20px'
                                                }}
                                            >
                                                {languageLabel}
                                            </button>
                                        </Dropdown>
                                    </Space>
                                </div>

                                {/* 언어선택 */}
                                {/* login_box */}
                                <div className="login_box">
                                    <div className="form-group id">
                                        <Input
                                            type="text"
                                            name="stu_id"
                                            className="form-input border-animation set-1"
                                            placeholder="아이디"
                                            maxLength="16"
                                            onChange={(e) => handleChangeId(e)}
                                        />
                                    </div>

                                    <div className="form-group pw">
                                        <Input
                                            type="password"
                                            name="stu_pw"
                                            className="form-input border-animation set-1"
                                            placeholder="비밀번호"
                                            maxLength="32"
                                            onKeyPress={handleChangeSubmit}
                                            onChange={(e) => handleChangePw(e)}
                                        />
                                    </div>
                                </div>
                                <button
                                    id="open-second-modal"
                                    data-mact="open"
                                    data-minfo="second-modal"
                                    className="modal_btn blue_btn wide_btn"
                                    onClick={handleLogin}
                                >
                                    로그인
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Modal>
            {/* 모달 창 End */}
        </>
    );
};

export default Login;
