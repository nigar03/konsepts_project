import React from 'react';
import KonseptForm from '../KonseptForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useContext } from "react";
import { LangContext } from '../../../context/LangContext';
import { editAdminFromDatabase } from '../../../manager/action/adminAction';


const EditAdmin = () => {
  const {id} = useParams();
  const admins = useSelector(p=>p.ar);
  const selectadmin = admins.find(i=>i.id.toString() === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lang] = useContext(LangContext);
  return (
    <div className='edit container'>
        <h3 className='text-center my-4'>{lang==="az"?"Admini Redaktə edin":"Edit Admin"}</h3>
        <KonseptForm editadmin={selectadmin} senddData={(i)=>{
          dispatch(editAdminFromDatabase(selectadmin.id,i))
          navigate('/admintwo')
        }}/>
    </div>
  )
}

export default EditAdmin;