import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/myaccount.css";

export const MyAccount = () => {
    const { store, actions } = useContext(Context);
    const [validated, setValidated] = useState(false);
    const accessToken = sessionStorage.getItem('accessToken');
    console.log(accessToken)
    if (accessToken) {
        actions.myAccount(accessToken).then((data) => {
            if (data) {
                setValidated(true);
            };
        }).catch(err => console.log(err))
    };
    return (
        <>
            {
                validated ? <h1>hello world</h1> : <h5>no puedes entrar</h5>
            }
        </>
    )
}