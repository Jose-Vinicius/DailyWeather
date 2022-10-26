import { createContext, useContext, useState } from "react";

export const AppContext = createContext();
AppContext.displayName = "AppContext";

export const AppProvider = ({children}) => {
    const [geolocation, setGeolocation] = useState('')

    return(
        <AppContext.Provider
            value={{
                geolocation, setGeolocation

            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const {
        geolocation, setGeolocation
    } = useContext(AppContext)
    return {
        geolocation
    }
}