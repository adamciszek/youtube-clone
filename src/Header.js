import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/icons-material/AccountCircleOutlined';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt=""
                />
            </div>

            <div className="header__input">
                <input placeholder={"Search"} type={"text"}/>
                <SearchIcon className="header__search-icon" />
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
