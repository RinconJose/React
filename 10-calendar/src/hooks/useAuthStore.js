import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import { clearErrorMessage, onChecking, onLogin, onLogoutCalendar, onLoguot } from '../store';
import { useState } from 'react';

export const useAuthStore = () => {

    const [error, setError] = useState('')
    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await calendarApi.post('/auth',{email,password});
            localStorage.setItem( 'token',data.token );
            localStorage.setItem( 'tokenInitDate',new Date().getTime() );
            dispatch( onLogin({name: data.name, uid: data.uid}) );


        } catch (error) {
            dispatch( onLoguot('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    };

    const startRegister = async({name, email, password}) => {
        dispatch(onChecking());
        try {
            const {data} = await calendarApi.post('/auth/new',{name,email,password});
            localStorage.setItem( 'token',data.token );
            localStorage.setItem( 'token-init-Date',new Date().getTime() );
            dispatch( onLogin({name: data.name, uid: data.uid}) );
        } catch (error) {
            dispatch( onLoguot( error.response.data?.msg || '---') );
            setTimeout(() => {
                dispatch( clearErrorMessage(error) );
            }, 10);
        }
    } 

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if( !token ) return dispatch(onLoguot());
        try {
            const {data} = await calendarApi.get('/auth/renew');
            localStorage.setItem( 'token',data.token );
            localStorage.setItem( 'token-init-Date',new Date().getTime() );
            dispatch( onLogin({name: data.name, uid: data.uid}) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLoguot() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogoutCalendar());
        dispatch(onLoguot());
    }


    return {
        //* Properties
        errorMessage,
        status,
        user,

        //* Method
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister
    }
}