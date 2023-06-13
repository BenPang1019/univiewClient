import React,{useState,useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/AuthContext';
import '../Admin/AdminLogin.css'
import axios from "axios"

import wdaLogo from '../../Images/wdaLogo.png'
import eyeOpen from '../../Images/eyeOpen.png'
import eyeClose from '../../Images/eyeClose.png'

export const AdminLogin = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
      });

    const navigate = useNavigate();

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };

    const {adminLogin,currentAdmin} = useContext(AuthContext);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

    const handlesubmit = async (e) => {
        e.preventDefault();
        try{
            await adminLogin(inputs)
            const res = await axios.post("/product/login", inputs);
            navigate("/adminMainPage");
        }catch (err) {
            
          } 
    };


    return (
    <div className='login'>
    {currentAdmin ? 
      (
        setTimeout(() => {
          navigate('/adminMainPage')
        }, 3)
        ) : 
      (
        <>
        <img src={wdaLogo} />
        <form onSubmit={handlesubmit} className="loginForm">
        <div className="usernameLabel">
            <label>Username</label><br/>
            <input
                type="text"
                required
                name="username"
                onChange={handleChange} 
                className="input"
            />
        </div>

        <div className="passwordLabel">
            <label>Password</label><br/>
            {passwordShown?
            <img src={eyeOpen} onClick={togglePassword} className="passwordIcon"/>
            :
            <img src={eyeClose} onClick={togglePassword} className="passwordIcon"/>
            }
            <input
                type={passwordShown ? "text" : "password"}
                required
                name="password"
                onChange={handleChange} 
                className="input"
            />
        </div>

        <button className='button' type="submit">Log in</button>
        </form>
        </>
      )
      }
    </div>
    
    )
}
