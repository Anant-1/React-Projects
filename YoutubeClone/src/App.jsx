import { AppContext } from "./context/contextApi"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import {Feed, SearchResult, VideoDetails, Header} from './components'
import { Outlet } from 'react-router-dom'
function App() {
  // console.log('app called')
  return (
    <AppContext>
      <div className="flex flex-col h-full">
          <Header/>
          <Outlet/>
      </div>
    </AppContext>
    
  )
}

export default App
