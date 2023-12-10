import React from "react"
import { user } from "../User/user"

const DashboardContext = React.createContext(user)

// function useUserContext() {
//     const user = useContext(DashboardContext)
//     if(user === null) {
//         throw new Error ("User context is undefined")
//     }
//     return user
// }
export default DashboardContext




