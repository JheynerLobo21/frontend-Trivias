import {helpHttp} from '../../helpers/helpHttp';
import React, { useEffect, useState } from 'react';
import '../../css/listCategories.css';
import { Link } from 'react-router-dom';
import {colors, imagenes, servidorAPI} from '../../constants'



    
        
        
    const getImg = (imagenes, id) => {
        const imagen = imagenes.find((imagen) => imagen.id === id);
        if (imagen) {
            console.log(imagen.path);
            return imagen.path;
        }
    };

    const getColor = (colors, id) => {
        const color = colors.find((color) => color.id === id);
        if (color) {
            console.log(color.path);
            return color.path;
        }
    };
    
export const ListCategories =  () => {

    
    const [categories,setCategories]=useState([]);
        useEffect(()=>{
            const getCategories=async()=>{
            try {
                const response =  await helpHttp().get(servidorAPI+ "api/public/Category", {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                });
                setCategories(await response);
                console.log(await response);
                return response;
            } catch (error) {
                console.error(error);
            }   }
        
        getCategories();
        },[]) 


    const adaptCategories = (categories) => {
        return categories.map(category => category.name.toLowerCase().replace(/\s/g, '-'));
    };

    const guardarCategoria = (category) => {
        localStorage.setItem('category', JSON.stringify({name:category.name.toLowerCase(),id:category.idCategory}));
      };

    const initCategories=adaptCategories(categories);
    
    return (
        <main className='list-categories'>
            <ul className='categories'>
                {categories.map((category, index) => (
                    <li className='category' key={index}>
                        <Link
                            to={`/categories/${initCategories[index]}`}
                            style={{
                                textDecoration: 'none', 
                                color: 'inherit', 
                                textTransform:'lowercase'
                            }}
                            onClick={() => guardarCategoria(category)}
                           
                        >
                            <section className='category-section'>
                                <img src={getImg(imagenes,category.idCategory)} alt="img-category" />
                                <div className={`trapeze-${index}`} style={{ borderBottom: `170px solid ${getColor(colors, category.idCategory)}`, padding: 0, width: "150px", height: "0", borderLeft: "60px solid transparent", borderRight: "60px solid transparent", zIndex: "-1", position: "absolute" }} />
                            </section>
                            <p className="descriptivo" style={{textTransform:'uppercase'}}>{categories[index].name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};
