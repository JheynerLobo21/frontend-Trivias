import React from 'react';
import '../../css/listCategories.css';
import { Link } from 'react-router-dom';
import {colors, imagenes} from '../../constants'

export const ListCategories = () => {

    {/* try {
    const response = await helpHttp().post(SERVIDOR_API + "Usuario/findAdmin", {
        body: form,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
    console.log(response);
} catch (error) {
    console.error(error);
} */}
    const initialCategories = [
        "Cultura General",
        "Gastronomía",
        "Películas y series",
        "Música",
        "Literatura",
        "Historia Mundial",
        "Ciencia y tecnología",
        "Deportes"
    ];

    const adaptCategories = (categories) => {
        return categories.map(category => category.toLowerCase().replace(/\s/g, '-'));
    };

    const guardarCategoria = (category) => {
        localStorage.setItem('category', category.toLowerCase());
      };

    const initCategories=adaptCategories(initialCategories);
    
    return (
        <main className='list-categories'>
            <ul className='categories'>
                {initCategories.map((category, index) => (
                    <li className='category' key={index}>
                        <Link
                            to={`/categories/${category}`}
                            style={{
                                textDecoration: 'none', 
                                color: 'inherit', 
                                textTransform:'lowercase'
                            }}
                            onClick={() => guardarCategoria(category)}
                           
                        >
                            <section className='category-section'>
                                <img src={imagenes[index]} alt="img-category" />
                                <div className={`trapeze-${index}`} style={{ borderBottom: `170px solid ${colors[index]}`, padding: 0, width: "150px", height: "0", borderLeft: "60px solid transparent", borderRight: "60px solid transparent", zIndex: "-1", position: "absolute" }} />
                            </section>
                            <p style={{textTransform:'uppercase'}}>{initialCategories[index]}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};
