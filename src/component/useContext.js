import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Login from "./login";
import Username from "./username";

export const Context = useContext();

const Usecontext = () => {
    const [state, setState] = useState(false)
    return (
        <Context.Provider value={{state, setState}}>
            <Login />
            <Username />
        </Context.Provider>
    )
}
export default Usecontext