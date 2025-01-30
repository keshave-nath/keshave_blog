import React, { createContext, useState } from 'react'

export const ContextAPI=createContext()

const Maincontext = ({children}) => {
    
    const  [user,setUser]=useState([])
    const [pathh,setpathh]=useState([])
    
    // const [val, setval]=useState(1);

  return (
    <div>
        <ContextAPI.Provider value={{user,setUser,pathh,setpathh}}>
          {children}
        </ContextAPI.Provider>
    </div>
  )
}

export default Maincontext