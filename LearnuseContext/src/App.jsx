import './App.css'
import Dashboard from './components/Dashboard'
import DashboardContext from './context/context'

const user = {
  isSubscribed: true,
  name: 'Anant'
}

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
