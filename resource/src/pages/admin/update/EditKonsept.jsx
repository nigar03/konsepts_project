import React from 'react';
import KonseptForm from '../KonseptForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editKonseptFromDatabase } from '../../../manager/action/konseptAction';
import { useContext } from "react";
import { LangContext } from '../../../context/LangContext';


const EditKonsept = () => {
  const {id} = useParams();
  const konsepts = useSelector(p=>p);
  const selectkonsept = konsepts.find(i=>i.id.toString() === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lang] = useContext(LangContext);
  return (
    <div className='edit container'>
        <h3 className='text-center my-4'>{lang==="az"?"Məhsulu Redaktə edin":"Edit Product"}</h3>
        <KonseptForm editkonsept={selectkonsept} sendData={(i)=>{
          dispatch(editKonseptFromDatabase(selectkonsept.id,i))
          navigate('/admin')
        }}/>
    </div>
  )
}

export default EditKonsept;