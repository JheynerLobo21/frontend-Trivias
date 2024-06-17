import React from 'react';
import '../../css/wildcard.css'
export function Wildcard({ wildcard }) {
    return (
        <aside className='icon-header'>
            <i className={`${wildcard.wildcard.icon} icon`}></i>
            <i className="cantidad" style={{ backgroundColor: wildcard.amount === 0 ? 'red' : '' }}>
                {wildcard.amount === 0 ? '+' : wildcard.amount}
            </i>
        </aside>
    );
}
