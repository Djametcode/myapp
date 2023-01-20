import React from "react";
import { useContext } from "react";
import { Context } from "./useContext";

const Login = () => {
    const item = useContext(Context);
    console.log(item)
    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default Login;