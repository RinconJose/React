import { useEffect } from 'react';
import { useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Jose',
        email: 'jose@jose.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const {name,value} = target;
        setFormState({
            ...formState,
            // Propiedades computadas de los objetos
            [ name ]: value
        })
    }

    useEffect(() => {
        // console.log('useEffect called!!');
    },[]);

    useEffect(() => {
        // console.log('formState changed!!');
    },[formState]);

    useEffect(() => {
        // console.log('email changed!!');
    },[email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="jose@jose.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                (username === 'Jose2') && <Message/>
            }
        </>
    )
}
