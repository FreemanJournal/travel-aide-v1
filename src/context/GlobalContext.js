import { createContext, useState } from 'react'
import { data } from "./data"

const initialState = []

export const GlobalContext = createContext(initialState)
export const Provider = ({ children }) => {
    const [childClicked, setChildClicked] = useState(null);
    const [loading, setLoading] = useState(false);
    return (
        <GlobalContext.Provider value={{ data, childClicked, setChildClicked,loading,setLoading }}>{children}</GlobalContext.Provider>
    )
}