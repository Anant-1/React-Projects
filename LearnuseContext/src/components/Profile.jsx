import React, { useContext } from 'react'
import DashboardContext from '../context/context'

function Profile() {
    const user = useContext(DashboardContext)
    console.log(user.name)
  return (
    <div>
        <h1>{user.name}</h1>
    </div>
  )
}

export default Profile