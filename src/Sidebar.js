import React from 'react'
import SidebarRow from './SidebarRow'
import "./Sidebar.css"

import HomeIcon from '@mui/icons-material/Home';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={SlowMotionVideoIcon} title="Shorts"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={PlaylistPlayIcon} title="Playlist"/>
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos"/>
            <SidebarRow Icon={AccessTimeIcon} title="Watch Later"/>
            <SidebarRow Icon={ThumbUpIcon} title="Liked Videos"/>
            <hr/>
            <SidebarRow Icon={SettingsIcon} title="Settings"/>


        </div>
    )
}

export default Sidebar
