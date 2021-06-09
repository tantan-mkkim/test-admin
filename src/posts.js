// in src/posts.js
import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
//import { List, Datagrid, TextField, ReferenceField } from 'react-admin';
import {
    Filter,
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

/* export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
       <Datagrid>
           <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
           <EditButton />
        </Datagrid>
    </List>
); */

export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>
};

export const PostEdit = props => (
    <Edit title={<PostTitle />}{...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
        <Create {...props}>
           <SimpleForm>
               <ReferenceInput source="userId" reference="users">
                   <SelectInput optionText="name" />
               </ReferenceInput>
               <TextInput source="title" />
               <TextInput multiline source="body" />
           </SimpleForm>
       </Create>
    );