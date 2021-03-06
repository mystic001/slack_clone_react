import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
function Header() {
    return (
        <div className = "header">
            <div className = "header__left">
            <AccessTimeIcon/>
             <Avatar className = "header__avatar"/>
             
            </div>

            <div className = "header__search"> 
            <SearchIcon/>
            <input placeholder = "Mystic"/>
            </div>

            <div className = "header__right">

            <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
