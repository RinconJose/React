import {PropTypes} from 'prop-types';

const newMeassge = {
    message: 'Hola Mundo',
    title: 'José'
}

const suma = (a, b) => {
    return a + b;
}

export const FirstApp = ({title,subtitle}) => {

    // if(!title) {
    //     throw new Error('El titulo no existe')
    // }

    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{JSON.stringify(newMeassge)}</p>
            <p>El resultado es {suma(2, 5)}</p>
        </>
    )
}

// sirve para colocar validaciones a los tipos de datos de los props
FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'No hay subtitle'
}