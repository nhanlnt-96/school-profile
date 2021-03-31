import React from 'react';
import {withRouter} from 'react-router-dom';
import ProfileRequest from "./ProfileRequest";
import ProfileStatus from "./ProfileStatus";

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="profile__request">
                <ProfileRequest/>
            </div>
            <div className="profile-status">
                <ProfileStatus/>
            </div>
        </div>
    );
}

export default withRouter(HomePage);
