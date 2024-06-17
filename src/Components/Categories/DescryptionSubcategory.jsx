import React, { useState } from 'react';
import '../../css/subcategories.css';
import { pathName } from '../../constants';
import { Link } from 'react-router-dom';




export const DescryptionSubcategory = ({ btnSubcategory }) => {
    const [dataForm,setDataForm] = useState({});
    console.log(btnSubcategory);
    const category = JSON.parse(localStorage.getItem("category"));
    let data={}
    let subcategory="";
    let primera=true;
    if(btnSubcategory!=""){
        primera=false;
    }
    if(!primera)
    subcategory= btnSubcategory.name.replace(/ /g, "-");
    else
    subcategory = btnSubcategory.replace(/ /g, "-");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            dificultad: document.getElementById("type-dificults").value,
            idSubCategory: btnSubcategory.idSubCategory
        };
        setDataForm(data);
        localStorage.setItem("data", JSON.stringify(data));
        window.location.href=`/categories/${category.name}/${subcategory}`;
    };

    return (
        <section>
            <h2 className='title-subcategory'>{!primera?btnSubcategory.name:""}</h2>
            <div className='description-img'>
                <img src="" alt="" className="img-carrusel"/>
                <p className='description-subcategory'>{!primera?btnSubcategory.description:""}</p>
            </div>
            <div>
            <form onSubmit={handleSubmit}>
                    <p>Selecciona una dificultad de juego</p>
                    <div className='options-dificult'>
                        <select name="dificult" id="type-dificults" required>
                            <option value="">Seleccione...</option>
                            <option value="1">Simio</option>
                            <option value="2">Humano</option>
                            <option value="3">Alien</option>
                        </select>
                        <button type='submit'>Empezar</button>
                    </div>
                </form>
            </div>
        </section>
    );
};
