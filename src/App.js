//html body tag에 해당 (웹사이트의 화면 출력)

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
//defualt language : korean
import koreanMessages from '@spectrum/ra-language-korean';
import polyglotI18nProvider from 'ra-i18n-polyglot';
const messages = {
    'ko': koreanMessages,
};
//english
/* import englishMessages from 'ra-language-english';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    //'ko': koreanMessages,
    'en': englishMessages,    
}; */
//const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

//french
/* import frenchMessages from 'ra-language-french';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    'fr': frenchMessages,
}; */
//const i18nProvider = polyglotI18nProvider(locale => messages[locale]);
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'ko');


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin i18nProvider={i18nProvider} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);


export default App;
