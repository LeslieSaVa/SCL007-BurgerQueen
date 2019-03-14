import React from 'react';

function ShowDinner (props) {
        
        if(props.showDinner){
            return (
                <div>
                    <button key="Hamburguesa Simple" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Hamburguesa Simple $1500</button>
                    <button key="Hamburguesa Doble" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Hamburguesa Doble $2500</button>
                    <button key="Res" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Res</button>
                    <button key="Pollo" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Pollo</button>
                    <button key="Vegetariano" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Vegetariano</button>
                    <button key="con queso " className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Con queso $500</button>
                    <button key="con huevo" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Con huevo $500</button>
                    <button key="papasfritas" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Papas Fritas $500</button>
                    <button key="onionrings" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">onion rings $500</button>
                    <button key="Agua" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Agua 500mL $500</button>
                    <button key="Agua1" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Agua 750mL $800</button>
                    <button key="bebida" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Bebida 500mL $700</button>
                    <button key="bebida2" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Bebida 750mL $1000</button>

                </div>
            ) 
        }else{
            return null
        }

}

export default ShowDinner;