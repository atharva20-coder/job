import React from 'react';

function Checkbox({ checked = false, onChange, label, className= '', name }) {
    const CheckboxClassName = className === '' ? "checkbox-container" : `${className} checkbox-container`

    return (
        <label className={CheckboxClassName}>
            <input 
                className="checkbox-container__input"
                type="checkbox" 
                name={name}
                checked={checked} 
                onChange={onChange}
            />
            <span className="checkmark" />
            {label}
        </label>

    )
}

export default Checkbox;