//body tag 에 해당 (웹사이트의 화면 출력)
//import logo from './logo.svg';
/* import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
//import { render } from '@testing-library/react';
*/

//import React from 'react';
import React from 'react';
import { Admin, Resource } from 'react-admin';
//import { Admin, Resource, ListGuesser } from 'react-admin';
//import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
