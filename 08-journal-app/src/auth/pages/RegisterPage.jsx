import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import {Grid, Typography, TextField, Button, Link, Alert} from '@mui/material';
import { useForm } from '../../hooks';
import { AuthLeyout } from '../layout/AuthLeyout';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
    email: '',
    password: '',
    displayName: '',
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener una @'],
    password: [(value) => value.length >= 6, 'El password debe de tener más de 6 letras'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const {status, errorMessage} = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

    const {
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations);

    console.log(displayNameValid);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if( !isFormValid ) return;

        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    return (
        <AuthLeyout title='Crear cuenta'>
            <h1>FormValid: {isFormValid ? 'Valido' : 'Incorrecto'}</h1>
            <form
                className='animate__animated animate__fadeIn animate__faster'
                onSubmit={onSubmit}
            >
                <Grid container>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder='Coloca tu nombre'
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ displayNameValid }
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder='Correo@google.com'
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid }
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder='Contraseña'
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid }
                        ></TextField>
                    </Grid>
                    <Grid container spacing={2} sx={{mb:2, mt: 1,}}>
                        <Grid
                            item
                            xs={12}
                            display={!!errorMessage ? '' : 'none'}
                        >
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                disabled={isCheckingAuthentication}
                                type='submit'
                                variant='contained'
                                fullWidth
                            >
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to="/auth/login">
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLeyout>
    )
}
