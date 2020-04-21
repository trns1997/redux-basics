import React from 'react'
import { buyIceCream } from '../redux'
import { useDispatch, useSelector } from 'react-redux'

function IceCreamContainer() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of iceCream - {numOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default IceCreamContainer