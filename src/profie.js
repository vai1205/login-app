import React from 'react';

const Profile = (props) => {
    const {username, password} = props;
    return (
        <div className="profile">
            <div className="card">
                <h1>ARCHANA</h1>
                <div className="profile-container">
                    <h2>Welcome!</h2>
                    <h3>{username}</h3>
                    <h3>{password}</h3>
                </div>
            </div>
        </div>
    );
}

export default Profile;