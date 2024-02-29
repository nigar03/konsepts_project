import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { LangContext } from '../context/LangContext';


const admin = {
  email: 'nigar.baxshiyeva03@gmail.com',
  password: '100zmal'
}
const user = {
  email: '',
  password: '10zmal'

}

const Login = () => {
  const [lang] = useContext(LangContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState({
    text: '',
    color: '',
    textaz:""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg({
        text: 'Please,fill input',
        color: 'warning',
        textaz:"Zəhmət olmasa, girişi doldurun"
      })
    }
    else {
      if (email === admin.email && password === admin.password) {
        setMsg({
          text: 'Login successfully',
          color: 'succes'
        })
        localStorage.setItem('active','nigar.baxshiyeva03@gmail.com');
        navigate('/admin');
        window.location.reload();
      }
      else {
        setMsg({
          text: 'email or password is wrong!',
          color: 'danger',
          textaz:"e-poçt və ya parol səhvdir"
        })

      }
    }
    if (!email || !password) {
      setMsg({
        text: 'Please,fill input',
        color: 'warning',
        textaz:"Zəhmət olmasa, girişi doldurun"
      })
    }
    else {
      if ( password === user.password) {
        setMsg({
          text: 'Login successfully',
          color: 'succes'
        })

        localStorage.setItem('active', 'nigar.baxshiyeva@gmail.com');
        navigate('/');
        window.location.reload();
      }
      else {
        setMsg({
          text: 'email or password is wrong!',
          color: 'danger',
          textaz:"e-poçt və ya parol səhvdir"
        })

      }
    }

  }
  return (
    <div className="log-in">
      <div className="container col col-sm-12 col-md-6 my-5" >
        <main className="form-signin w-100 m-auto" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <form onSubmit={handleSubmit}>
            <p className={`alert alert-${msg.color}`}>{lang==="az"? msg.textaz:msg.text}</p>
            <h1 className="h3 mb-3 fw-normal">{lang==="az"?"Xoş gəldiniz":"Welcome"}</h1>
            <div className="form-floating">
              <input type="email" className="" id="floatingInput" placeholder="Email" onChange={e => setEmail(e.target.value)} />
              <label for="floatingInput"></label>
            </div>
            <div className="form-floating my-2">
              <input type="password" className="" id="floatingPassword" placeholder={lang==="az"? "Parol":"Password"} onChange={e => setPassword(e.target.value)} />
              <label for="floatingPassword"></label>
            </div>

            {/* <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div> */}
         <div style={{display:"flex",flexDirection:'column'}}>   <button className="btn btn-dark py-2" type="submit" style={{ borderRadius: "0px" }}>{lang==="az"? "Daxil ol" : "Log In"}</button>
            <Link to={'/signup'} className='my-3 text-start' style={{textDecoration:"none",color:"black"}}>{lang==="az"? "Hesabınız yoxdur?Qeydiyyatdan keçin":"Don't have an account?Sign up"}</Link></div>
          </form>
        </main>
        <div className="drops">
          <div className="drop drop-one"></div>
          <div className="drop drop-two"></div>
          <div className="drop drop-three"></div>
          <div className="drop drop-four"></div>
          <div className="drop drop-five"></div>
        </div>
      </div>
    </div>
  )
}

export default Login;