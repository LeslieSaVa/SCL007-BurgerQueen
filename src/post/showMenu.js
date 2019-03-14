import React from 'react';

function ShowMenu1 (props) {
        
        if(props.showMenu){
            return (
                <div>
                    <button key="cafeAmericano" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Cafe Americano $500</button>
                    <button key="jugoNatural" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Jugo Natural $700</button>
                    <button key="sandwich" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Sandwich jamon queso $1000</button>
                    <button key="cafeMilk" className="waves-effect deep-purple lighten-4 btn-large btn-coffee">Café con leche $700</button>
                </div>
            ) 
        }else{
            return null
        }

}

export default ShowMenu1;