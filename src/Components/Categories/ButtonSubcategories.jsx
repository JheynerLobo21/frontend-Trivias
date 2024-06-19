import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../css/subcategories.css';
let current = null;

export const ButtonSubcategories = ({ subcategory, onBtnClick }) => {
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
        const btn = document.getElementById(subcategory.name);
        const btnSubcategory = btn.value;

        localStorage.setItem("subCategorySelected", JSON.stringify(subcategory));

        if (current !== btnSubcategory) { 
            if (current) {
                document.getElementById(current).classList.remove('btn-clicked');
            }
            btn.classList.add('btn-clicked');
            current = btnSubcategory;
            if (onBtnClick) {
                onBtnClick(subcategory);
            }
            setAsideVisible(true);
        } else {
            setAsideVisible(!asideVisible);
        }
    };

    useEffect(() => {
        const aside = document.getElementById('descriptionsubcategory');
        const asideB = document.getElementById('listsubcategories');
        if (aside) {
            aside.style.display = asideVisible ? 'block' : 'none';
            asideB.style.width = asideVisible ? '45%' : '55%';
        }
    }, [asideVisible]);

    return (
        <button
            className={`${JSON.parse(localStorage.getItem("category")).name} ${!asideVisible ? `${JSON.parse(localStorage.getItem("category")).name}-infocus-button` : ""} ${asideVisible && 'btn-clicked'}`}
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

ButtonSubcategories.propTypes = {
    subcategory:PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    onBtnClick: PropTypes.func,
    initialVisible: PropTypes.bool,
  };