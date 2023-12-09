import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Anant-1')
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl max-w-7xl mx-auto'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt='Git Picture' width={300}/>
    <h1 className='text-left ml-auto'>{data.login}</h1>
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/Anant-1')
    return response.json()
}