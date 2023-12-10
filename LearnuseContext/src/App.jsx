import './App.css'
import Dashboard from './components/Dashboard'
import DashboardContext from './context/context'
import {user} from './User/user'

function App() {
  return (
    <>
      <DashboardContext.Provider value={user}>
        <Dashboard/> 
      </DashboardContext.Provider>
    </>
  )
}

export default App
