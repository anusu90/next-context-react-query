import React from 'react'


const AppContext = React.createContext(null)

const AppProvider = ({ children }) => {

    const [user] = React.useState("Anunay")
    console.log(user, "Hello")
    return (
        <AppContext.Provider value={user}>
            {children}
        </AppContext.Provider>
    )

}

const useAppContext = () => {

    let context = React.useContext(AppContext)
    return context

}

export { AppProvider, useAppContext }
