import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter'

const heavyStuff = ( iterationNumber = 50 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('ahí vamos');
    }
    return `${ iterationNumber } iteraciones realizadas`;
}


export const MemoHook = () => {

    const {counter,increment} = useCounter( 2000 );
    const [show, setShow] = useState(false)

    const memorizedValue = useMemo( () => heavyStuff(counter), [counter] )

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={() => {increment()}}
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary'
                onClick={() => setShow( !show )}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
