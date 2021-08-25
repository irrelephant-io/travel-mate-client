import React from 'react';
import s from './ToSelector.module.css';

const ToSelector = () => {
    return (
        <div className={s.searchTo}>
            <input type="text" className={s.input} id="to" placeholder="To?" required="" />
            <label htmlFor="to" className={s.label}>To?</label>
        </div>
    )
}

export default ToSelector;

