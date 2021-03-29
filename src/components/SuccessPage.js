import React from "react";
import {Result} from 'antd';
import {Button} from "@material-ui/core";

export const SuccessPage = () => {
    return (
        <div className="success-page">
            <Result
                status="success"
                title="ĐĂNG KÝ THÀNH CÔNG"
                subTitle="Bạn đã đăng ký tài khoản thành công !"
                extra={[
                    <Button variant="contained" color="primary">TRANG CHỦ</Button>
                ]}
            />
        </div>
    );
}