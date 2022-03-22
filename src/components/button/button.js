import React from 'react';

function Button({type,name,modifer,size,transparent}) {
    return(
        <button  className={`button button--${modifer} button--${size} button--${transparent}`} type={type}>
            {name}
        </button>
    )
}

export default Button;