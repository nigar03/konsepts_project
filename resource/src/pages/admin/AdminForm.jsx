import React, { useState } from 'react';
import { useContext } from "react";
import { LangContext } from '../../context/LangContext';

  const AdminForm = ({ editadmin, senddData }) => {
  const [lang] = useContext(LangContext);
  const [email, setEmail] = useState(editadmin ? editadmin.email : "");
  const [password, setPassword] = useState(editkonsept ? editkonsept.password : "");

  const AdminFormSubmit = e => {
    e.preventDefault();
    senddData({
      email: email,
      password: password,
    })
  }
  return (
    <div className='konseptform container col col-md-6'>
      <form onSubmit={AdminFormSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">{lang==="az"?"Şəkil":"Photo"}</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder={lang==="az"? "E-poct daxil edin":'Enter email'} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">{lang==="az"?"Başlıq":"Title"}</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder={lang==="az"? "Parolu daxil edin":'Enter password'} />
        </div>
        <button type="submit" className="btn btn-primary"> {editadmin ? "Edit" : "Add"} </button>
      </form>
    </div>
  )
}

export default AdminForm;