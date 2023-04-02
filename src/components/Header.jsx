import React from "react";
import{BrowserRouter,Routes, Route, Link} from "react-router-dom";
import { useState, useEffect } from 'react';


import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config";

import "./Header.css"
import logo from "../img/logo.png"
import avatar from "../img/avatar.png";

import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const[{user}, dispatch] = useStateValue();

    const [ismenu, setIsmenu]  = useState(false);

    const login = async () => {
    if (!user){
        const {
            user: {refreshToken, providerData},
        } = await signInWithPopup(firebaseAuth, provider);
        dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
        });
        localStorage.setItem("user", JSON.stringify(providerData[0]))
    }else{
        setIsmenu(!ismenu);
    }}
    const logout = () => {
        setIsmenu(false);
        localStorage.clear();
    }
         
    return (
        <header>
            <div className="head">
                <div className="logo">
                    <img className="img1" src={logo} alt="logo" />
                    <p> City</p>
                </div>
                <div className="navigation">
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>About Us</li>
                        <li>Service</li>
                    </ul>
                    <img className="img2" src={/*user? photoURL :*/avatar}  onClick={login}/>
                </div>
            </div>    
            {ismenu && ( <div className="logout">
                    {user && user.email == "bebi.anteneh@gmail.com" && (<Link /*to={/createItem}*/><p onClick={()=> setIsmenu(false)}>NewItem</p></Link>)}
                    <p onClick={logout}>Log Out</p>
                </div>)
            }
        </header>
        );
}
export default Header;