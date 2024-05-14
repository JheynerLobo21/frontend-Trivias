import React,{useEffect,useState} from 'react';
import { ButtonSubcategories } from './ButtonSubcategories';
import '../../css/subcategories.css';
import {helpHttp} from '../../helpers/helpHttp';
import {servidorAPI} from '../../constants'


export const OptionsSubcategories = ({ onBtnClick }) => {
    
    const [subCategories,setSubCategories]=useState([]);
        useEffect(()=>{
            const getSubCategories=async()=>{
            try {
                const response =  await helpHttp().get(servidorAPI+ "api/public/AllSubCategory/"+JSON.parse(localStorage.getItem("category")).id, {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                });
                setSubCategories(await response);
                console.log(await response);
                return response;
            } catch (error) {
                console.error(error);
            }   }
        
        getSubCategories();
        },[]) 

    return (
        <div>
            <ul className='listsubcategories-menu'>
                {subCategories.map((subcategory, index) => (
                    <li className='subcategorias' key={index}>
                        <ButtonSubcategories subcategory={subcategory} onBtnClick={onBtnClick} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
