import React from "react";
import './style.css'
import {getPlaylist} from './javascript'
import { Link } from "react-router-dom";


function Playlist() {
    return (
        <div onLoad={getPlaylist} className="playlist_main_box">
            <h1 className="playlisthed">Playlist</h1>
            
            <Link to={'./Playlist_tracks'} >
            <div className='Playlist' id='playlist_name'>

            </div>
            </Link>

        </div>
    )
}

export default Playlist