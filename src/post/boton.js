import React from 'react';
import './boton.css'

function Boton1 (props) {
    
        return (
            <div>
                <button
                key="waiter"
                className="waves-effecty btn-large btn-options"
                onClick={props.showMenu}
                >DESAYUNO</button>
                <button 
                className="waves-effect btn-large btn-options"
                key="kitchen"
                onClick={props.showDinner}
                >ALMUERZO y CENA</button>
                
                <button 
                className="waves-effect btn-large btn-options"
                key="bebida"
                onClick={props.showBebestibles}
                >BEBESTIBLES</button>

            </div>
        )
}

export default Boton1;