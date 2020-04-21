import React, { useState } from 'react'
import { buyCake } from '../redux'
import { useDispatch, useSelector } from 'react-redux'

function NewCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cake</button>
        </div>
    )
}

export default NewCakeContainer