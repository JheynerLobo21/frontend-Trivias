import React, { useState, useEffect } from 'react';
import '../../css/subcategories.css';
let current="";
export const ButtonSubcategories = ({ subcategory, onBtnClick }) => {
    const [currentSubcategory, setCurrentSubcategory] = useState('');
    const [asideVisible, setAsideVisible] = useState(false);

    const handleMouseEnter = (e) => {
        const span = e.target.querySelector('.span-posnawr');
        const parentOffset = e.target.getBoundingClientRect();
        const relX = e.pageX - parentOffset.left;
        const relY = e.pageY - parentOffset.top;
        span.style.top = relY + "px";
        span.style.left = relX + "px";
    };

    const handleMouseOut = (e) => {
        const span = e.target.querySelector('.span-posnawr');
        const parentOffset = e.target.getBoundingClientRect();
        const relX = e.pageX - parentOffset.left;
        const relY = e.pageY - parentOffset.top;
        span.style.top = relY + "px";
        span.style.left = relX + "px";
    };

    const handleClick = () => {
      let btnSubcategory=document.getElementById(subcategory.name).value;
      localStorage.setItem("subCategorySelected",JSON.stringify(subcategory));
        if (current === btnSubcategory) {
            setAsideVisible(!asideVisible);
        } else {
            current=btnSubcategory;
            setCurrentSubcategory(current);
            setAsideVisible(true);}  
            if(onBtnClick){
              onBtnClick(subcategory)
            }
        }

    useEffect(() => {
      const aside = document.getElementById('descriptionsubcategory');
      const asideB= document.getElementById('listsubcategories');
        if (aside) {
            aside.style.display = asideVisible ? 'block' : 'none';
            asideB.style.width = asideVisible ? '45%' : '55%' 
        }
    }, [asideVisible]);

    return (
        <button
            className={`${JSON.parse(localStorage.getItem("category")).name} ${!asideVisible ? `${JSON.parse(localStorage.getItem("category")).name}-infocus-button`:""}`}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
            value={subcategory.name}
            id={subcategory.name}
        >
            {subcategory.name}
            <span className='span-posnawr'></span>
        </button>
    );
};
