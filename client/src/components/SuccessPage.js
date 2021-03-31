import React from "react";
import {withRouter} from "react-router-dom";
import {Result} from 'antd';
import {Button} from "@material-ui/core";

const SuccessPage = ({history}) => {
    const onBtnClick = () => {
        history.push('/');
    }
    return (
        <div className="success-page">
            <Result
                status="success"
                title="ĐĂNG KÝ THÀNH CÔNG"
                subTitle="Bạn đã đăng ký tài khoản thành công !"
                extra={[
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onBtnClick}>TRANG CHỦ</Button>
                ]}
            />
        </div>
    );
}

export default withRouter(SuccessPage);
