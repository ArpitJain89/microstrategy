import React, {useState} from 'react';
import './login.css';
import logo from '../images/saamaLogo.png';
import axios from "axios";

const Login = (props) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleTextInput = e => {
        if (e.target.id === "username") {
            setUserName(e.target.value);
        } else if (e.target.id === "password") {
            setPassword(e.target.value);
        } 
    };

    const handleValidation = () => {
        if (username == "guest" && password == "guest") {
            
            let options = {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    loginMode: 8
                })
            }
            axios.post('https://demo.microstrategy.com/MicroStrategyLibrary' + '/api/auth/login', options).then((response) => {
                console.log(response);
                console.log("Login successfully");
                let authToken = response.headers["x-mstr-authtoken"];
                sessionStorage.setItem("authtoken", authToken);
                //setPost(response.data);
            });
        }else{
            alert("UserName or Password is incorrect")
        }
    };

    return (
    <div className="container">
        <div className="main">
            <img src={logo} alt=""/>
            <form id="form_id" method="post" name="myform">
                <label>User Name :</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    onChange={(handleTextInput)}
                    value={username}
                    placeholder="Enter Username"
                    />
                <label>Password :</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    onChange={(handleTextInput)}
                    value={password}
                    placeholder="Enter Password"
                    />
                <input type="button" value="Login" id="submit" onClick={handleValidation} />
            </form>
        </div>
    </div>
    );
}

export default Login;