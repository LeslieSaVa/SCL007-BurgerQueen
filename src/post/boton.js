import React from 'react';


function Boton1 (props) {
    
        return (
            <div>
                <button
                key="waiter"
                className="waves-effecty btn-small btn-options"
                onClick={props.showMenu}
                >DESAYUNO</button>
                <button 
                className="waves-effect btn-small btn-options"
                key="kitchen"
                onClick={props.showDinner}
                >ALMUERZO y CENA</button>
            </div>
        )
}

export default Boton1;