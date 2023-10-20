import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { LogIn } from "./login.js";
import "../../styles/myaccount.css";

export const MyAccount = () => {
    const { store, actions } = useContext(Context);
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
        actions.myAccount(accessToken).then((data) => {
            if (data) {
                setValidated(true);
            };
        }).catch(err => console.log(err))
    };

    const handleLogOut = () => {
        sessionStorage.removeItem('accessToken');
        navigate('/')
    }
    return (
        <>
            {
                validated ?
                    <div className="myAccountMain">
                        <div className="containerMyAccount">
                            <div className="optionMyAccount"><i className="fa-solid fa-circle-user"></i>Your personal data</div>
                            <div className="optionMyAccount"><i className="fa-solid fa-location-dot"></i>Addresses</div>
                            <div className="optionMyAccount"><i className="fa-regular fa-file-lines"></i>Order history</div>
                            <div className="optionMyAccount"><i className="fa-solid fa-receipt"></i>Order returns</div>
                            <div className="optionMyAccount"><i className="fa-solid fa-envelope-open"></i>My alerts</div>
                            <div className="optionMyAccount"><i className="fa-solid fa-user-shield"></i>Data protection</div>
                        </div>
                        <button onClick={handleLogOut}>Log out</button>
                    </div>
                    : <div className="loginInstance"><LogIn /></div>
            }
        </>
    )
}