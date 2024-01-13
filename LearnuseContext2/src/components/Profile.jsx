import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    console.log('Profile called')
    const {user} = useContext(UserContext)
    if(!user) return <div>Please Login</div>
    return (
        <div> {user.username}</div>
    )
}

export default Profile