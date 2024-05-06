import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/subcategories.css';

export const DescryptionSubcategory = ({ btnSubcategory }) => {
    const category = decodeURIComponent(window.location.pathname);
    const subcategory = btnSubcategory.replace(/ /g, "-");
    const urlSubcategory = `${category}/${subcategory}`;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(urlSubcategory);
    };

    return (
        <section>
            <h2 className='title-subcategory'>{btnSubcategory}</h2>
            <div className='description-img'>
                <img src="" alt="" className="img-carrusel"/>
                <p className='description-subcategory'>Descubre los avances más recientes en ciencia y tecnología, desde descubrimientos fascinantes en el universo hasta innovaciones revolucionarias en el mundo digital.</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>Selecciona una dificultad de juego</p>
                    <div className='options-dificult'>
                        <select name="dificult" id="type-dificults" required>
                            <option value="">Seleccione...</option>
                            <option value="Noob">Noob</option>
                            <option value="Donatello">Donatello</option>
                            <option value="Einstein">Einstein</option>
                        </select>
                        <Link to={{ pathname: urlSubcategory }}> 
                            <button type='submit'>Empezar</button>
                        </Link>  
                    </div>
                </form>
            </div>
        </section>
    );
};
