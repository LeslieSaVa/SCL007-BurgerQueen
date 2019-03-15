import React, { Component } from 'react';
import InputUser from './post/input';
import Boton1 from './post/boton';
import Pedido from './post/pedido';
//import firebase from './post/firebase';
//import BotonMenusyDesayunior from './post/botonmenu';
//import Test from './post/probando';
import ShowMenu1 from './post/showMenu';
import ShowDinner from './post/showDinner';
//import Toggle from './post/pepe'
//import Dinner from './post/jose'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      menu: props.menu,
      displayMenu: Object.keys(props.menu),
      path: props.menu,
      temporalName: "",
      showMenu: false,
      showDinner: false,
      black: true,
      product: []
    }
    this.saveName = this.saveName.bind(this);
    this.clickMenu= this.clickMenu.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.mostrarMenu = this.mostrarMenu.bind(this);
    this.mostrarCena = this.mostrarCena.bind(this);
    this.changeColor=this.changeColor.bind(this);
    this.agregandoProductsTotheList = this.agregandoProductsTotheList.bind(this);
  }

  agregandoProductsTotheList(item) {
    this.setState({
      ...this.state,
      product: this.state.product.concat(item)
    })
  }

  mostrarMenu() {
    this.setState({
      ...this.state,
      showMenu: true,
      showDinner: false
    })
  }

  mostrarCena() {
    this.setState({
      ...this.state,
      showDinner: true,
      showMenu: false
    })
  }

  saveName() {
    this.setState({
      ...this.state,
      name: this.state.temporalName,
      temporalName: ""
    }) 
  }

  handleChangeName(e) {
    this.setState({
      ...this.state,
      temporalName: e.target.value
    })
  }

  clickMenu(elem) {
    this.setState({
      ...this.state,
      displayMenu: Object.keys(this.state.path[elem]),
      path: this.state.path[elem]
    })
  }

  changeColor() {
    this.setState({ 
      ...this.state,
      black: !this.state.black })
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Burguer Queen Pedidos
          </p>
          
        </header>
        <div className="row">

          <div id="half1" className="col s6 m6">
            <InputUser
              onClick={this.saveName}
              onChange={this.handleChangeName}
              temporalName={this.state.temporalName}
            />
            {/* <Toggle /> */}

            <Boton1
            /* onClick={() => {
              this.mostrarCena();
              this.mostrarMenu();
            }} */
            showDinner={this.mostrarCena}
            showMenu={this.mostrarMenu}

            />
            {/* <Test
            onClick={() => {
              this.mostrarMenu();
              this.changeColor();
            }}
            btn_class = {this.state.black ? "blackButton" : "whiteButton"}
            /> */}


            {/* <BotonMenusyDesayunior
              elefante={this.state.displayMenu}
              onClick={this.clickMenu} /> */}
          
            <div><ShowMenu1 
            onClick={this.agregandoProductsTotheList}
            showMenu={this.state.showMenu}
            productList={this.state.menu}
            />
            </div>

            <div>
            <ShowDinner 
            onClick={this.agregandoProductsTotheList}
            showDinner={this.state.showDinner}
            productList={this.state.menu}/>
            </div>    

          </div>
          
                
          <div id="half2" className="col s6 m6">

            <Pedido
            productInfo={this.state.menu}
            productList={this.state.product}
            nameclient={this.state.name}
            />
            

          </div>

        </div>        
      </div>
    );
  }
}

export default App;
