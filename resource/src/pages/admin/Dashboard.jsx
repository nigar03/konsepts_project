import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { deleteProductFromDatabase } from '../../manager/action/konseptAction';
import { useDispatch } from 'react-redux';
import { deleteKonseptFromDatabase } from '../../manager/action/konseptAction';
import { useContext } from "react";
import { LangContext } from '../../context/LangContext';


const Dashboard = () => {
  const dispatch = useDispatch();
  const konsepts = useSelector(p => p);
  const [lang] = useContext(LangContext);
  // const konsepts = useSelector(p=>p)
  return (
    <div className='adminpanel container'>
      <h3 className='text-center my-5'>{lang==="az"? "İdarəetmə Paneli":"Admin Panel"}</h3>
     <div className='d-flex align-items-center justify-content-between ' style={{width:"200px"}}> <Link to={'/admin/add'} className='btn btn-success my-2' style={{ width: "90px" }}>{lang==="az"? "əlavə et":"Add"}</Link></div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">{lang==="az"? "Sira":"No"}</th>
            <th scope="col">{lang==="az"? "Şəkil":"Photo"}</th>
            <th scope="col">{lang==="az"? "Başlıq":"Title"}</th>
            <th scope="col">{lang==="az"? "Qiymət":"Price"}</th>
            <th scope="col">{lang==="az"? "Stil":"Style"}</th>
            <th scope="col">{lang==="az"? "Haqqinda":"Desc"}</th>
            <th scope="col">{lang==="az"? "Teqlər":"Tags"}</th>
            <th scope="col">{lang==="az"? "Redaktə":"Edit"}</th>
            <th scope="col">{lang==="az"? "Sil":"Delete"}</th>
          </tr>
        </thead>
        <tbody>
          {konsepts.reverse().map((item, count) => (
            <tr key={count}>
              <th scope="row">{count + 1}</th>
              <td><img src={item.image} alt="" width={50} /></td>
              <td>{lang==="az"? item.titleaz:item.title}</td>
              <td>${item.price}</td>
              <td>{lang==="az"? item.styleaz:item.style}</td>
              <td>{lang==="az"? item.descaz:item.description}</td>
              <td>{lang==="az"? item.tagaz:item.tags}</td>
              <td><Link to={`/admin/edit/${item.id}`} className='btn btn-warning checkout-btn'>Edit</Link></td>
              <td><button onClick={() => { dispatch(deleteKonseptFromDatabase(item.id)) }} className='btn btn-danger delete-btn'>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard;