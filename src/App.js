//body tag 에 해당 (웹사이트의 화면 출력)
//import logo from './logo.svg';
/* import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
//import { render } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <Customer/>
    );
  }
}

export default App; */

//import React from 'react';
import React from 'react';
//import { Admin, Resource, ListGuesser } from 'react-admin';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
