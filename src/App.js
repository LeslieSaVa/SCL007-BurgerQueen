import React, { Component } from 'react';
import InputUser from './post/input';
import Boton1 from './post/boton';
//import BotonMenusyDesayunior from './post/botonmenu';
import Test from './post/probando';
import ShowMenu1 from './post/showMenu';
import ShowDinner from './post/showDinner';
import './App.css';

// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css';

//import 'materialize-css/dist/css/materialize.min.css'
//import M from 'materialize-css/dist/js/materialize.min.js'

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
      black: true
    }
    this.saveName = this.saveName.bind(this);
    this.clickMenu= this.clickMenu.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.mostrarMenu = this.mostrarMenu.bind(this);
    this.mostrarCena = this.mostrarCena.bind(this);
    this.changeColor=this.changeColor.bind(this);
  }

  mostrarMenu() {
    this.setState({
      ...this.state,
      showMenu: true
    })
  }

  mostrarCena() {
    this.setState({
      ...this.state,
      showDinner: true
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
          <hr/>
        </header>
        <div className="row">

          <div id="half1" className="col s6 m6">
            <InputUser
              onClick={this.saveName}
              onChange={this.handleChangeName}
              temporalName={this.state.temporalName}
            />

            <Boton1
            /* onClick={() => {
              this.mostrarCena();
              this.mostrarMenu();
            }} */
            showDinner={this.mostrarCena}
            showMenu={this.mostrarMenu}

            />
            <Test
            onClick={() => {
              this.mostrarMenu();
              this.changeColor();
            }}
            btn_class = {this.state.black ? "blackButton" : "whiteButton"}
            />


            {/* <BotonMenusyDesayunior
              elefante={this.state.displayMenu}
              onClick={this.clickMenu} /> */}
          
            <div><ShowMenu1 
            showMenu={this.state.showMenu}/>
            </div>

            <div>
            <ShowDinner 
            showDinner={this.state.showDinner}/>
            </div>    

          </div>
          
                
          <div id="half2" className="col s6 m6">
            <div>{this.state.name}</div>
          </div>

        </div>        
      </div>
    );
  }
}

export default App;
