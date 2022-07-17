import React from "react";
import logo from "../images/logo.png"

export default function Header(){
    return(
        <header className="header">
            <img src={logo} className="header-img"/>
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-sub">Create Your Own Memes</h4>
        </header>
    )
}