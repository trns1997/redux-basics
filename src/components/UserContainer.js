import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer() {
    const users = useSelector(state => state.user.users)
    const loading = useSelector(state => state.user.loading)
    const error = useSelector(state => state.user.error)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return loading ? (
        <h2>Loading</h2>
    ) : error ? (
        <h2>{error}</h2>
    ) : (
                <div>
                    {users && users.map((user, idx) => <p key={idx}>{user.name}</p>)}
                </div>
            )
}

export default UserContainer