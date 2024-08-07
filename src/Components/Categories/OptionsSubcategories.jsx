import {useEffect,useState} from 'react';
import { ButtonSubcategories } from './ButtonSubcategories';
import PropTypes from 'prop-types';
import '../../css/subcategories.css';
import {helpHttp} from '../../helpers/helpHttp';
import {servidorAPI} from '../../constants'


export const OptionsSubcategories = ({ onBtnClick, hide }) => {
    
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
                return response;
            } catch (error) {
                console.error(error);
            }   }
        
        getSubCategories();
        },[]) 

    return (
        <div className='group.subcategories'>
            <ul className='listsubcategories-menu'>
                {subCategories.map((subcategory, index) => (
                    <li className='subcategorias' key={index}>
                        <ButtonSubcategories subcategory={subcategory} onBtnClick={onBtnClick} hide={hide}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

OptionsSubcategories.propTypes = {
    onBtnClick: PropTypes.func,
    hide: PropTypes.bool,
    initialVisible: PropTypes.bool,
  };
