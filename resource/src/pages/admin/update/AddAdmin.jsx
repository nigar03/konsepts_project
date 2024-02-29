import React from 'react';
import KonseptForm from '../KonseptForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { LangContext } from '../../../context/LangContext';
import { addAdminToDatabase } from '../../../manager/action/adminAction';

const AddAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lang] = useContext(LangContext);
  return (
    <div className='add container'>
        <h3 className='text-center my-4'>{lang==="az"? "Admini əlavə edin":"Add Admin"}</h3>
        <KonseptForm senddData={(i)=>{
          dispatch(addAdminToDatabase(i))
          navigate('/admintwo')
        }} />
    </div>
  )
}
export default AddAdmin;