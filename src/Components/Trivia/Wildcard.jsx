import React from 'react';
import '../../css/wildcard.css'
export function Wildcard({ wildcard,funcionalidad }) {

    const handleClick = async () => {
        if(wildcard.amount>0){
            funcionalidad()
            //const response = await restarComodin(wildcard.idUserWildcard);

        }else{
            alert("no tienes comodines")
        }
    };

    return (
        <aside onClick={() => handleClick()} className='icon-header'>
            <i className={`${wildcard.wildcard.icon} icon`}></i>
            <i className="cantidad" style={{ backgroundColor: wildcard.amount === 0 ? 'red' : '' }}>
                {wildcard.amount === 0 ? '+' : wildcard.amount}
            </i>
        </aside>
    );
}
