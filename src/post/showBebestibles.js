import React from 'react';
import './showBebestibles.css'

function ShowBebestibles (props) {
        
    if(props.showBebestibles){
        return (
            <div>
                <button 
                key="Agua" 
                className="waves-effect  btn-large btn-coffee"
                onClick={() => {
                        props.onClick([{
                            food:Object.keys(props.productList.Menúrestodeldía)[6],
                            price:props.productList.Menúrestodeldía[ "Agua 500mL"].precio
                        }])
                    }}>
                Agua 500mL $500
                </button>

                <button 
                key="Agua1" 
                className="waves-effect  btn-large btn-coffee"
                onClick={() => {
                        props.onClick([{
                            food:Object.keys(props.productList.Menúrestodeldía)[7],
                            price:props.productList.Menúrestodeldía[ "Agua 750mL"].precio
                        }])
                }}>
                Agua 750mL $800
                </button>

                <button 
                key="bebida" 
                className="waves-effect  btn-large btn-coffee"
                onClick={() => {
                        props.onClick([{
                            food:Object.keys(props.productList.Menúrestodeldía)[8],
                            price:props.productList.Menúrestodeldía[ "Bebida 500mL"].precio
                        }])
                }}>
                Bebida 500mL $700
                </button>

                <button 
                key="bebida2" 
                className="waves-effect  btn-large btn-coffee"
                onClick={() => {
                        props.onClick([{
                            food:Object.keys(props.productList.Menúrestodeldía)[9],
                            price:props.productList.Menúrestodeldía[ "Bebida 750mL"].precio
                        }])
                }}>
                Bebida 750mL $1000
                </button>
            </div>
        ) 
    }else{
        return null
    }

}

export default ShowBebestibles;