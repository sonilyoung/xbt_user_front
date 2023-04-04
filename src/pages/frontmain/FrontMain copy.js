/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

export const FrontMain = () => {
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
            <MainCard>
                <Typography variant="body1">Main Edu</Typography>
            </MainCard>

            <Modal
                open={eduModalopen}
                onOk={Edu_handleOk}
                onCancel={Edu_handleCancel}
                width={'95%'}
                style={{
                    zIndex: 999
                }}
                footer={[]}
            >
                <MainCard style={{ marginTop: 30 }}>
                    <Typography variant="body1">
                        <Row>
                            <Col span={20} style={{ textAlign: 'left' }}>
                                학습
                            </Col>
                            <Col span={4} style={{ textAlign: 'right' }}>
                                <Button
                                    type="primary"
                                    disabled
                                    block
                                    onClick={Edu_handleCancel}
                                    style={{ width: '100px', borderRadius: '5px', boxShadow: '2px 3px 0px 0px #dbdbdb' }}
                                >
                                    {' '}
                                    Close
                                </Button>
                            </Col>
                        </Row>
                    </Typography>
                </MainCard>
            </Modal>
        </>
    );
};