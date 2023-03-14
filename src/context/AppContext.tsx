import {createContext, ReactNode, useContext} from 'react'
import axios from 'axios'




type AppContexts = {
 
}
type AppContextProviderProps = {
    children : ReactNode
}
export const AppContext = createContext({}as AppContexts)

const URL = process.env.REACT_APP_URL

export function AppContextProvider ({children}:AppContextProviderProps){
    
    const value = {}
    
    
   
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}


export function useAppContext(){
    return useContext(AppContext)
}