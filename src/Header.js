import React, { useState } from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/icons-material/AccountCircleOutlined';
import {Link} from "react-router-dom";

function Header() {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to={"/"}>
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt=""
                    />
                </Link>

            </div>

            <div className="header__input">
                <input
                    onChange={e => setInputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder={"Search"}
                    type={"text"}/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__search-icon" />
                </Link>


            </div>

            <div className="header__right">
                <VideoCallOutlinedIcon className={"header__icon"}/>
                <NotificationsOutlinedIcon className={"header__icon"}/>
                <Avatar className={"header__icon"}/>
            </div>


        </div>
    )
}

export default Header
