import React from 'react';

function BotonMenusyDesayunior (props) {
    const gg = props.elefante.map((pp) =>{
        return (
        <button
        key={pp}
        onClick={() => props.onClick(pp)}
        >{pp}</button>
        )
    })
    return (
            <div>{gg}</div>
    ) 
}

export default BotonMenusyDesayunior;