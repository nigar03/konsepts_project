import React, { useState } from 'react';
import { useContext } from "react";
import { LangContext } from '../../context/LangContext';

  const KonseptForm = ({ editkonsept, sendData }) => {
  const [lang] = useContext(LangContext);
  const [photo, setPhoto] = useState(editkonsept ? editkonsept.image : "");
  const [title, setTitle] = useState(editkonsept ? editkonsept.title : "");
  const [price, setPrice] = useState(editkonsept ? editkonsept.price : "");
  const [style, setStyle] = useState(editkonsept ? editkonsept.style : "");
  const [tag, setTag] = useState(editkonsept ? editkonsept.tags : "");
  const [desc, setDesc] = useState(editkonsept ? editkonsept.description : "");
  const [category, setCategory] = useState(editkonsept ? editkonsept.category : "");
  const [sku, setSku] = useState(editkonsept ? editkonsept.sku : "");
  const [one, setOne] = useState(editkonsept ? editkonsept.imageone : "");
  const [two, setTwo] = useState(editkonsept ? editkonsept.imagetwo : "");
  const [three, setThree] = useState(editkonsept ? editkonsept.imagethree : "");
  const [four, setFour] = useState(editkonsept ? editkonsept.imagefour : "");
  const [name, setName] = useState(editkonsept ? editkonsept.name : "");
  const konseptFormSubmit = e => {
    e.preventDefault();
    sendData({
      image: photo,
      title: title,
      price: price,
      style: style,
      tags:tag,
      description:desc,
      category:category,
      sku:sku,
      imageone:one,
      imagetwo:two,
      imagethree:three,
      imagefour:four,
      name:name
    })
  }
  return (
    <div className='konseptform container col col-md-6'>
      <form onSubmit={konseptFormSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">{lang==="az"?"Şəkil":"Photo"}</label>
          <input type="text" value={photo} onChange={e => setPhoto(e.target.value)} className="form-control" placeholder={lang==="az"? "Foto URL'sini daxil edin":'Enter photo url'} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">{lang==="az"?"Başlıq":"Title"}</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" placeholder={lang==="az"? "Başlığı daxil edin":'Enter title'} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">{lang==="az"?"Qiymət":"Price"}</label>
          <input type="text" value={price} onChange={e => setPrice(e.target.value)} className="form-control" placeholder={lang==="az"? "Qiyməti daxil edin":'Enter price'}/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">{lang==="az"?"Stil":"Style"}</label>
          <input type="text" value={style} onChange={e => setStyle(e.target.value)} className="form-control" placeholder={lang==="az"? "Stili daxil edin":'Enter style'} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">{lang==="az"?"Haqqinda":"Desc"}</label>
          <input type="text" value={desc} onChange={e => setDesc(e.target.value)} className="form-control" placeholder={lang==="az"? "Haqqinda daxil edin":'Enter description'} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">{lang==="az"?"Teqlər":"Tags"}</label>
          <input type="text" value={tag} onChange={e => setTag(e.target.value)} className="form-control" placeholder={lang==="az"? "Teqleri daxil edin":'Enter tags'} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">{lang==="az"?"Kateqoriya":"Category"}</label>
          <input type="text" value={category} onChange={e => setCategory(e.target.value)} className="form-control" placeholder={lang==="az"? "Kateqoriyani daxil edin":'Enter category'} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Sku</label>
          <input type="text" value={sku} onChange={e => setSku(e.target.value)} className="form-control" placeholder={lang==="az"? "Sku daxil edin":'Enter sku'}/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">{lang==="az"?"Şəkil-bir":"Image-one"}</label>
          <input type="text" value={one} onChange={e => setOne(e.target.value)} className="form-control" placeholder={lang==="az"? "Şəkil-bir- daxil edin":'Enter image-one'}/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">{lang==="az"?"Şəkil - iki":"Image-two"}</label>
          <input type="text" value={two} onChange={e => setTwo(e.target.value)} className="form-control" placeholder={lang==="az"? "Şəkil-ikini daxil edin":'Enter image-two'} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">{lang==="az"?"Şəkil - üç":"Image-three"}</label>
          <input type="text" value={three} onChange={e => setThree(e.target.value)} className="form-control" placeholder={lang==="az"? "Şəkil-üçü daxil edin":'Enter image-three'} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">{lang==="az"?"Şəkil - dörd":"Image-four"}</label>
          <input type="text" value={four} onChange={e => setFour(e.target.value)} className="form-control" placeholder={lang==="az"? "Şəkil - dördü daxil edin":'Enter image-four'} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">{lang==="az"?"Ad":"Name"}</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder={lang==="az"? "Adi daxil edin":'Enter name'} />
        </div>
        <button type="submit" className="btn btn-primary"> {editkonsept ? "Edit" : "Add"} </button>
      </form>
    </div>
  )
}

export default KonseptForm;