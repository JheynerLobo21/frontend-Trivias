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
      let btnSubcategory=document.getElementById(subcategory).value;
        if (current === btnSubcategory) {
            setAsideVisible(!asideVisible);
        } else {
            current=btnSubcategory;
            setCurrentSubcategory(current);
            setAsideVisible(true);}  
            if(onBtnClick){
              onBtnClick(btnSubcategory)
            }
        }

    useEffect(() => {
      const aside = document.getElementById('descriptionsubcategory');
        if (aside) {
            aside.style.display = asideVisible ? 'block' : 'none';
        }
    }, [asideVisible]);

    return (
        <button
            className={`${localStorage.getItem("category")} ${!asideVisible ? `${localStorage.getItem("category")}-infocus-button`:""}`}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
            value={subcategory}
            id={subcategory}
        >
            {subcategory}
            <span className='span-posnawr'></span>
        </button>
    );
};
