import {helpHttp} from '../../helpers/helpHttp';
import { useEffect, useState } from 'react';
import '../../css/listCategories.css';
import '../../css/app.css'
import { Link } from 'react-router-dom';
import {colors, imagenes, servidorAPI} from '../../constants'
import { useAuth0 } from "@auth0/auth0-react";

        
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
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();

    const [categories,setCategories]=useState([]);
        console.log(isAuthenticated)
        useEffect(()=>{
            const getCategories=async()=>{

            try { if (isAuthenticated) {
                const token = await getAccessTokenSilently();
                console.log("Este es el tocken");
                console.log(token);
                const response = await helpHttp().get(servidorAPI + "api/public/Category", {
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                setCategories(await response);
                console.log(await response);
            }
        }
            catch (error) {
                console.error(error);
            }   }
        
        getCategories();
        },[]) 
        console.log(categories);
        


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
                                <img className="img-category" src={getImg(imagenes,category.idCategory)} alt="img-category" />
                                <div className={`trapeze-${index} trap`} style={{ borderBottom: `170px solid ${getColor(colors, category.idCategory)}`}} />
                            </section>
                            <p className="descriptivo" style={{textTransform:'uppercase'}}>{categories[index].name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};
