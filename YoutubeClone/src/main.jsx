import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider ,createBrowserRouter } from 'react-router-dom'
import {Feed, SearchResult, VideoDetails} from './components'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element:<Feed/>
        },
        {
          path:"/searchResult/:searchQuery",
          element:<SearchResult />
        },
        {
          path:"/video/:id", 
          element:<VideoDetails />
        }
    ],
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
