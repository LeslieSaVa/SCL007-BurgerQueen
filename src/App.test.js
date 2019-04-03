import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import menu from './data/menu.json'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import InputUser from './post/input';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App menu={menu}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('debe retornar leslie', () => {  
  const appUserComponent = Enzyme.mount(<App menu={menu} />);//nombre del componente donde esta el input que queremos testear
  const buttonComponent = appUserComponent.find("InputUser").find('button');
  appUserComponent.find("InputUser").find("input").simulate('change', { target: {value: 'leslie'} });
  buttonComponent.filter('.btn-save').simulate('click');
  expect(appUserComponent.state().name).toEqual('leslie');
});