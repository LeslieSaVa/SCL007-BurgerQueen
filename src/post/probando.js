import React from 'react';
function Test (props) {
        return (
            <button
                className={props.btn_class}
                onClick={props.onClick}
            >
                PROBANDO
            </button>
        )
    
}

export default Test;