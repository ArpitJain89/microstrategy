import React, {useState, useEffect} from 'react';
import CSS from './login.css';
import logo from '../images/saamaLogo.png'
const Login = (props) => {
    //const [test, test] = useState('');
    useEffect(() => {
    }, [])

    
    return (
    <div className="container">
        <div className="main">
            <img src={logo} alt=""/>
            <form id="form_id" method="post" name="myform">
                <label>User Name :</label>
                <input type="text" name="username" id="username" />
                <label>Password :</label>
                <input type="password" name="password" id="password" />
                <input type="button" value="Login" id="submit" onclick="validate()" />
            </form>
        </div>
    </div>
    );
}

export default Login;