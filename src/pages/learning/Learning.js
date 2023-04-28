/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Space, Modal } from 'antd';
import 'antd/dist/antd.css';
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

export const Learning = () => {
    const { confirm } = Modal;

    // Modal창 Start
    const [eduModalopen, setEduModalopen] = useState(false);
    // Modal창 End

    // Loading Start
    const [loading, setLoading] = useState(false);
    // Loading End

    // Modal 버튼처리 Start
    const Edu_handleOk = () => {
        setEduModalopen(false);
    };
    const Edu_handleCancel = () => {
        // setEduModalopen(false);
    };
    // Modal 버튼처리 End

    useEffect(() => {
        setLoading(true); // 로딩 호출
        setEduModalopen(true); // 모달창
    }, []);

    return (
        <>
            <MainCard>XBT Education</MainCard>

            <Modal
                open={eduModalopen}
                onOk={Edu_handleOk}
                onCancel={Edu_handleCancel}
                width={'95%'}
                style={{
                    zIndex: 999
                }}
                closable={false}
                footer={[]}
            >
                <Row variant="body1" style={{ marginBottom: 20 }}>
                    <Col span={20} style={{ textAlign: 'left' }}>
                        학습
                    </Col>
                    <Col span={4} style={{ textAlign: 'right' }}>
                        <Button
                            style={{
                                width: '100px',
                                borderRadius: '5px',
                                backgroundColor: '#e6f4ff',
                                boxShadow: '2px 2px 0px 0px #dbdbdb'
                            }}
                        >
                            반입금지물품
                        </Button>
                    </Col>
                </Row>
                <MainCard>
                    <Typography variant="body1">
                        <Row>
                            <Col span={20} style={{ textAlign: 'left' }}>
                                학습
                            </Col>
                            <Col span={4} style={{ textAlign: 'right' }}>
                                <Space align="center">
                                    <Button
                                        onClick={Edu_handleCancel}
                                        style={{ width: '100px', borderRadius: '5px', boxShadow: '2px 3px 0px 0px #dbdbdb' }}
                                    >
                                        Start
                                    </Button>
                                    <Button
                                        disabled
                                        block
                                        onClick={Edu_handleCancel}
                                        style={{ width: '100px', borderRadius: '5px', boxShadow: '2px 3px 0px 0px #dbdbdb' }}
                                    >
                                        End / Close
                                    </Button>
                                </Space>
                            </Col>
                        </Row>
                    </Typography>
                </MainCard>
            </Modal>
        </>
    );
};
