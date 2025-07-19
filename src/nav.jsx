import React, { useState } from "react";

export default function Navbar( props ){

    const justImg = props.logo1;

    let [ isMenuActive, setMenuActive ] = useState(false);
    const [menuButton, setMenuButton] = useState("menuBtn");
    const [menuOption, setMenuOption] = useState("menuOptionInactive");

    const MenuActive = () => {
        if(!isMenuActive){
            setMenuButton("menuBtn menuBtnActive");
            setMenuOption("nav menuOptionActive")
        } else {
            setMenuButton("menuBtn");
            setMenuOption("menuOptionInactive")
        }
        setMenuActive(!isMenuActive);
    }
    const closeOption = () => {
        if(!isMenuActive){
            setMenuButton("menuBtn menuBtnActive");
            setMenuOption("nav menuOptionActive")
        } else {
            setMenuButton("menuBtn");
            setMenuOption("menuOptionInactive")
        }
        setMenuActive(!isMenuActive);
    }
    return(
        <nav className="navBar">
            <span>
                <img src={justImg} alt="Logo"></img> 
            </span>
            {/* <ul className={menuOption}>
                <li><h3>Home</h3></li>
                <li><h3>Zcash</h3></li>
            </ul> */}
            <button><a href="https://pump.fun/coin/J1rfosSdRqBbpSegRpCtMQDxDoVsYR41zMywoXkNYiKB" target="_blank">BUY $SIS</a></button>
            <span className={menuButton}  onClick={() => MenuActive()}></span>
        </nav>
    )
}           