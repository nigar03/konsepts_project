import React from 'react';
import KonseptForm from '../KonseptForm';
import { useDispatch } from 'react-redux';
import { addKonseptToDatabase } from '../../../manager/action/konseptAction';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { LangContext } from '../../../context/LangContext';
const AddKonsept = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lang] = useContext(LangContext);
  return (
    <div className='add container'>
        <h3 className='text-center my-4'>{lang==="az"? "Məhsul əlavə edin":"Add Product"}</h3>
        <KonseptForm sendData={(i)=>{
          dispatch(addKonseptToDatabase(i))
          navigate('/admin')
        }} />
    </div>
  )
}

export default AddKonsept;