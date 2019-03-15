import React from 'react';

function InputUser (props) {
    
        return (
            <div>
                
                <div className="container">
                    <div className="row">
                        <div className="col s6 m6">
                            <input
                                id="inputName"
                                className="holi2"
                                type="text"
                                placeholder="Nombre Cliente"
                                onChange={props.onChange}
                                value={props.temporalName}/> 
                        </div>
                        <div className="col s6 m6">
                        <button className="waves-effect btn btn-save" onClick= {props.onClick} >Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        ) 
}

export default InputUser;