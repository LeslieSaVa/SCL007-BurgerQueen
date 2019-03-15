import React from 'react';
import './showDinner.css'

function ShowDinner (props) {
        
        if(props.showDinner){
            return (
                <div>
                    <button 
                    key="Hamburguesa Simple Res" 
                    className="waves-effect  btn-large btn-coffee"
                    onClick={() => {
                        props.onClick([{
                            food:Object.keys(props.productList.Menúrestodeldía)[0],
                            price:props.productList.Menúrestodeldía["Hamburguesa Simple Res"].precio
                        }])
                    }}>
                    Hamburguesa Simple Res $1500
                    </button>

                    <button
                    key="Hamburguesa Simple pollo"
                    className="waves-effect  btn-large btn-coffee"
                    onClick={() => {
                        props.onClick([{
                            food: Object.keys(props.productList.Menúrestodeldía)[1],
                            price: props.productList.Menúrestodeldía["Hamburguesa Simple Pollo"].precio                            }])
                        }}>
                    Hamburguesa Simple Pollo $1500
                    </button>
                    
                    <button
                    key="Hamburguesa Simple vegetariana"
                    className="waves-effect  btn-large btn-coffee"
                    onClick={() => {
                        props.onClick([{
                            food: Object.keys(props.productList.Menúrestodeldía)[2],
                            price: props.productList.Menúrestodeldía["Hamburguesa Simple vegetariana"].precio                            }])
                        }}>
                    Hamburguesa Simple Vegetariana $1500
                    </button>
                    
                    <button 
                    key="Hamburguesa Doble Res" 
                    className="waves-effect btn-large btn-coffee"
                    onClick={() => {
                        props.onClick([{
                            food: Object.keys(props.productList.Menúrestodeldía)[3],
                            price: props.productList.Menúrestodeldía["Hamburguesa Doble Res"].precio                            }])
                        }}>
                    Hamburguesa Doble Res $2500
                    </button>
                    
                    <button 
                    key="Hamburguesa Doble Pollo" 
                    className="waves-effect  btn-large btn-coffee"
                    onClick={() => {
                        props.onClick([{
                            food: Object.keys(props.productList.Menúrestodeldía)[4],
                            price: props.productList.Menúrestodeldía["Hamburguesa Doble Pollo"].precio                            }])
                        }}>
                    Hamburguesa Doble Pollo $2500
                    </button>

                    <button 
                    key="Hamburguesa Doble Vegetariana" 
                    className="waves-effect  btn-large btn-coffee"
                    onClick={() => {
                        props.onClick([{
                            food: Object.keys(props.productList.Menúrestodeldía)[5],
                            price: props.productList.Menúrestodeldía["Hamburguesa Doble vegetariana"].precio                            }])
                        }}>
                    Hamburguesa Doble Vegetariana $2500
                    </button>

                    <button 
                    key="con huevo" 
                    className="waves-effect  btn-large btn-coffee"
                    onClick={() => {
                        props.onClick([{
                            food: Object.keys(props.productList.Menúrestodeldía)[10],
                            price: props.productList.Menúrestodeldía["Con huevo"].precio                           
                            }])
                        }}>
                    Con huevo $500
                    </button>

                    <button 
                    key="con queso" 
                    className="waves-effect  btn-large btn-coffee"
                    onClick={() => {
                        props.onClick([{
                            food: Object.keys(props.productList.Menúrestodeldía)[11],
                            price: props.productList.Menúrestodeldía["Con queso"].precio                           
                            }])
                        }}>
                    Con queso $500
                    </button>

                    <button key="papasfritas" 
                    className="waves-effect  btn-large btn-coffee"
                    onClick={() => {
                        props.onClick([{
                            food: Object.keys(props.productList.Menúrestodeldía)[12],
                            price: props.productList.Menúrestodeldía["Papas fritas"].precio                           
                            }])
                        }}>
                    Papas Fritas $500
                    </button>

                    <button 
                    key="onionrings" 
                    className="waves-effect  btn-large btn-coffee"
                    onClick={() => {
                        props.onClick([{
                            food: Object.keys(props.productList.Menúrestodeldía)[13],
                            price: props.productList.Menúrestodeldía["Onion rings"].precio                           
                            }])
                        }}>
                    onion rings $500
                    </button>
            
                </div>
            ) 
        }else{
            return null
        }

}

export default ShowDinner;