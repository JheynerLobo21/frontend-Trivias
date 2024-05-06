import React from 'react';
import { ButtonSubcategories } from './ButtonSubcategories';
import '../../css/subcategories.css';

export const OptionsSubcategories = ({ onBtnClick }) => {
    const subcategories = [
        "option 1",
        "option 2",
        "option 3",
        "option 4",
        "option 5",
        "option 6",
        "option 7",
        "option 8",
        "option 9",
        "option 10",
        "option 11",
    ];

    return (
        <div>
            <ul className='listsubcategories-menu'>
                {subcategories.map((subcategory, index) => (
                    <li className='subcategorias' key={index}>
                        <ButtonSubcategories subcategory={subcategory} onBtnClick={onBtnClick} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
