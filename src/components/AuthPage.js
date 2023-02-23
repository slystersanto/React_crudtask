import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Authdata } from '../Data/Authdata';

const AuthPage = () => {
    const [auth,setAuth]=useState(Authdata);
    const [loginName, setLoginName]=useState("");
    const [password, setPassword]=useState("");
    const history=useHistory();

    const loginUser = () => {
        if(loginName === auth[0].name && password === auth[0].password){
            // console.log("correct")
            localStorage.setItem("user-name",loginName);
            history.push("/batchdetails")

        }else{
        //   console.log("wrong"); 
        }

    }

    const SignMeOut = () => {
  localStorage.removeItem("user-name")
  history.push("/");
    }


    return (
        <div className='container-1'>

            <form className='form-1'>
                <label for="username" className='label-1'>Username:</label>
                <input type="text" id="username" name="username" className='input-1' onChange={(e)=>setLoginName(e.target.value)} value={loginName} placeholder="Admin" />

                <label for="password" className='label-1' >Password:</label>
                <input type="password" id="password" name="password" className='input-1' onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password@123" />

                {/* <input type="submit" value="Login" onClick={loginuser} className="input-2" /> */}
                <button type='button' onClick={loginUser}className="input-2" >LOGIN</button>
                <button type='button' onClick={SignMeOut} className='input-2'>LOGOFF!</button>
            </form>


        </div>
    )
}

export default AuthPage