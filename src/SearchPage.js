import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className={"searchPage"}>
            <div className="searchPage__filter">
                <TuneIcon/>
                <h2>FILTER</h2>

            </div>
            <hr/>

            <ChannelRow
                image={"https://yt3.googleusercontent.com/ytc/AIdro_nl1Y5-1ZJCenLuafNKHu7nI5RVrZch5cjQ47v_rrUcjOE=s160-c-k-c0x00ffffff-no-rj"}
                channel={"Elliot Choy"}
                verified
                subs={"1.28M"}
                noOfVideos={219}
                description={"Hi ~ I’m Elliot, based in NYC, making videos, living life."}
            />

            <hr/>

            <VideoRow
                views={"234K"}
                description={"I flew ANA business class from NYC to Tokyo using points and only paid $5 ~ this is my dream flight to book using points ever since I learned how :)"}
                timestamp={"2 weeks ago"}
                channelImage={"https://yt3.googleusercontent.com/ytc/AIdro_nl1Y5-1ZJCenLuafNKHu7nI5RVrZch5cjQ47v_rrUcjOE=s160-c-k-c0x00ffffff-no-rj"}
                channel={"Elliot Choy"}
                title={"15 hrs in the World’s Best Business Class (NYC → TOKYO)"}
                image={"https://i.ytimg.com/vi/zw83RUdZ-t0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBp-dzTEEyqZC7IZC_ZT-YH2UqnZA"}
            />

            <VideoRow
                views={"210K"}
                description={"this is part one of my solo travels to tokyo, japan ~ I think this is my first time properly solo traveling for fun and not for work, so excited to do it in one of my fav cities :)"}
                timestamp={"4 weeks ago"}
                channelImage={"https://yt3.googleusercontent.com/ytc/AIdro_nl1Y5-1ZJCenLuafNKHu7nI5RVrZch5cjQ47v_rrUcjOE=s160-c-k-c0x00ffffff-no-rj"}
                channel={"Elliot Choy"}
                title={"solo traveling in Tokyo vlog 🗼"}
                image={"https://i.ytimg.com/vi/tu3rdwHVk0M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDQBROxUxpDmXRQPfTtI8KddJcdZQ"}

            />

            <VideoRow
                views={"132K"}
                description={"another solo travel vlog in tokyo, japan + an unexpected twist :)"}
                timestamp={"11 days ago"}
                channelImage={"https://yt3.googleusercontent.com/ytc/AIdro_nl1Y5-1ZJCenLuafNKHu7nI5RVrZch5cjQ47v_rrUcjOE=s160-c-k-c0x00ffffff-no-rj"}
                channel={"Elliot Choy"}
                title={"traveling solo in TOKYO vlog 🇯🇵"}
                image={"https://i.ytimg.com/vi/sZVVRGCwzmQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBtMa1qIg31sILaOkQLZ-SK1vAu_w"}
            />

        </div>
    )
}

export default SearchPage
