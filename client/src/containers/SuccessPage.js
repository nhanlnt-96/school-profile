import React from "react";
import {withRouter} from "react-router-dom";
import {Button} from "@material-ui/core";

const SuccessPage = ({history}) => {
    const onBtnClick = () => {
        history.push('/');
    }
    return (
        <div className="success-page">
            
        </div>
    );
}

export default withRouter(SuccessPage);
