import React, { useState } from 'react'


const Counter = (props) => {
    return (
        <>
            <div>Tengo {props.items} items.</div>
            <div>Stock {props.stock}</div>
            <button onClick={props.sumar}>sumar</button>
            <button onClick={props.restar}>restar</button>
        </>
    )
}

export default Counter