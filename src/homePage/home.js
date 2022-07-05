import React, {useState,useEffect} from 'react';
import './home.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from "axios";

const Home = (props) => {
   
    
        // axios.get(baseURL).then((response) => {
        //    //setPosts(response.data);
        //    console.log(response);
        // });
        let options2 = {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: {
                username: "guest",
                password: "guest",
                loginMode: 8
            }
        }
        axios.post('https://demo.microstrategy.com/MicroStrategyLibrary' + '/api/auth/login', options2).then((response) => {
           
            console.log("Login successfully");
            let authToken = response.headers["x-mstr-authtoken"];
            console.log(authToken);
            sessionStorage.setItem("authtoken", authToken);
            //setPost(response.data);
            
               
           
            
        });
        

    setTimeout(function(){   
        let options1 = {
            credentials: 'include',
            mode: 'cors',
            headers: { 
                "X-MSTR-AuthToken": sessionStorage.getItem("authtoken"),
                'Content-Type': 'application/json' 
                }
        }
        axios.get('https://demo.microstrategy.com/MicroStrategyLibrary/api/sessions/privileges', options1).then((response) => {
            console.log(response);
            
            //setPost(response.data);
        }); 
    },5000)

    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];
     
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const _onSelect = e => {
        // if (e.target.id === "username") {
        //     setUserName(e.target.value);
        // } else if (e.target.id === "password") {
        //     setPassword(e.target.value);
        // } 
    };

    // handleUpload(e) {
    //     axios({
    //       url: "http://localhost:8080/files",
    //       method: "POST",
    //       headers: {
    //         authorization: "your token comes here",
    //       },
    //       data: formData,
    //     }).then((res) => { 

    //     }).catch((err) => { 

    //     });
    // }

    return (
    <div className="container">
        <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" />
    </div>
    );
}

export default Home;