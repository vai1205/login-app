import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Profile from './profie';

function Login({history}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        history.push("/profile")
    }
    return (
       <>
        <div className="login">
            <div className="input-group">
                <label for="username">Username</label>
                <input onChange={()=>{setUsername(document.getElementById("username").value)}} type="text" id="username"/>
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                <input onChange={()=>{setPassword(document.getElementById("password").value)}} type="password" id="password"/>
            </div>
        </div>
        <button onClick={handleSubmit} id="login-btn">Sign in</button>
        <div className="ask-signup">
            <p>Don't have an account?</p>
            <button>Sign up</button>
        </div>
       </>
    );
}

export default withRouter(Login);