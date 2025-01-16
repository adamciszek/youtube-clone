import React from 'react'
import "./VideoRow.css"
import Avatar from "@mui/material/Avatar";

function VideoRow({
                      views,
                      description,
                      timestamp,
                      channelImage,
                      channel,
                      title,
                      image
}) {
    return (
        <div className={"videoRow"}>
            <img src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p1>{views} views • {timestamp}</p1>
                <p2>
                    <Avatar className={"videoRow__logo"}
                            src={channelImage}
                            alt={""}
                    />
                    {channel}
                </p2>
                <p3 className={"videoRow__description"} >{description}</p3>
            </div>

        </div>
    )
}

export default VideoRow
