import React from 'react';
// import {memo} from 'react';

export const Small = React.memo(({value}) => {

    console.log('me volví a redibujar');

    return (
        <small>{value}</small>
    )
})
