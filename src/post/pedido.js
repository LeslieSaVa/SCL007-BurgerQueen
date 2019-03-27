import React from 'react';
import './pedido.css'


function Pedido (props) {


    const displayProducts = props.productList.map((elem,i) => {
        return (
            <tr key={i}>
                <td>{elem.food}</td>
                <td></td>
                <td>$ {elem.price}</td>
                <td><i 
                className="material-icons"
                onClick={ () => props.onClick(elem)}
                >delete</i></td>
            </tr>
        )
    })

    const sumPrice = props.productList.reduce(function (prev, next) {
        return (prev + next.price)},0)

        return (

            <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card table-card-content">
                            <div className="card-content white-text">
                                <span className="card-title">Pedido de: {props.nameclient}</span>

                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Cant</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {displayProducts}
                                    {/* <tr>
                                        <td>producto A</td>
                                        <td>2</td>
                                        <td>12.25</td>
                                        <td>icono</td>
                                    </tr>
                                    <tr>
                                        <td>producto B</td>
                                        <td>1</td>
                                        <td>7.10</td>
                                        <td><i className="material-icons">delete</i></td>
                                    </tr>
                                    <tr>
                                        <td>producto C</td>
                                        <td>3</td>
                                        <td>2.20</td>
                                        <td>basurero</td>
                                    </tr> */}
                                </tbody>

                            </div>
                            <div className="card-action">
                                {/* eslint-disable-next-line */}
                                <a href="#">Total</a>
                                {/* eslint-disable-next-line */}
                                <a href="#">$ {sumPrice}</a>
                            </div>
                            <div className="card-action">
                                {/* eslint-disable-next-line */}
                                <a 
                                onClick={props.onClick2}
                                href='#'>Enviar a cocina</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        )
    
}

export default Pedido;