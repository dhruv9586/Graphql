import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { CREATE_USER } from '../graphql/mutation';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUser, { error }] = useMutation(CREATE_USER);
    const handleOnClick = () => {
        createUser({
            variables: {
                firstName,
                lastName,
                email,
                password
            }
        });
    };
    return (
        <div>
            <input
                type='text'
                placeholder='First Name'
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type='text'
                placeholder='Last Name'
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type='text'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
            />{' '}
            <input
                type='text'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleOnClick}>Submit</button>
        </div>
    );
};

export default Form;
