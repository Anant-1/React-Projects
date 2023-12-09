import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    // userid name must be same as path mentioned in routing
    <div className='text-center bg-gray-600 text-white text-3xl p-4 max-w-7xl mx-auto'>User: {userid}</div>
  )
}

export default User