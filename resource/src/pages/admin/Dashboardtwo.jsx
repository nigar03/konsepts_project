// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// // import { deleteProductFromDatabase } from '../../manager/action/konseptAction';
// import { useDispatch } from 'react-redux';
// import { useContext } from "react";
// import { LangContext } from '../../context/LangContext';
// import { deleteAdminFromDatabase } from '../../manager/action/adminAction';


// const Dashboardtwo = () => {
//   const dispatch = useDispatch();
//   const admins = useSelector(p => p.ar);
//   const [lang] = useContext(LangContext);

//   // const konsepts = useSelector(p=>p)
//   return (
//     <div className='adminpanel container'>
//       <h3 className='text-center my-5'>{lang==="az"? "İdarəetmə Paneli":"Admin Panel"}</h3>
//       <Link to={'/admintwo/add'} className='btn btn-success my-2' style={{ width: "90px" }}>{lang==="az"? "əlavə et":"Add"}</Link>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th scope="col">{lang==="az"? "Sira":"No"}</th>
//             <th scope="col">{lang==="az"? "E-poct":"Email"}</th>
//             <th scope="col">{lang==="az"? "Parol":"Password"}</th>
//           </tr>
//         </thead>
//         <tbody>
        
//             <tr >
//               <th scope="row"></th>
//               <td>{admins.email}</td>
//               <td>{admins.password}</td>
          
//               <td><Link to={`/admintwo/edit/${admins.id}`} className='btn btn-warning checkout-btn'>Edit</Link></td>
//               <td><button onClick={() => { dispatch(deleteAdminFromDatabase(admins.id)) }} className='btn btn-danger delete-btn'>X</button></td>
//             </tr>
   
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Dashboardtwo;