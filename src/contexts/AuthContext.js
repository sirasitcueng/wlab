import React, { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext({});

const initialState = {
    id: null
}




const reducer = (state, action) => {
    switch (action.type) {
        case "SET_ID":
            return {...state, id : action.payload }
        default:
            break;
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { id } = state;
    const setUserID = payload => dispatch({ type : 'SET_ID', payload })

    const isSignIn = () => id === null ? false : true

    useEffect(() => {
        console.log(id)
    }, [id])

    return (
        <AuthContext.Provider value={{ id, setUserID, isSignIn }}>
            {children}
        </AuthContext.Provider>
    )
}