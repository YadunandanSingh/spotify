import React from "react";
import './style.css'
import {fetchTopTracks} from './javascript'
import { Link } from "react-router-dom";

function Hearder() {
    return (
        <div>
            <div className='main-header'>
                <div className='header-back-btn'>
                    <button className='back-btn pre-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                        </svg>
                    </button>
                    <button className='back-btn next-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>
                    </button>
                    <input type='search' className='search-btn' id='search-btn' placeholder='Search Songs' ></input>
                    <input type='submit' value={"search"} onClick={fetchTopTracks} id='searchbtn' className='searchbtn'></input>
                </div>

                <div className='login-btn'>
                    <span className='Premium'>Premium  </span>
                    <span className='Support'>Support  </span>
                    <span className='Download'>Download  </span>
                    <div className='line'></div>
                    <span className='Sign up'>Sign up</span>
                    <button className='Log-in'>Log in</button>
                </div>

            </div>
            <div className='body'>
                <div className='catagry'>
                    <button className='cat-btn'>All </button>
                    <button className='cat-btn'>Music </button>
                    <button className='cat-btn'> <Link className="cat_link" to={'./playlist_track'}>Prodcast </Link> </button>
                    <button className='cat-btn'><Link className="cat_link" to={'./playlist'}>Playlist </Link></button>
                </div>


            </div>

        </div>
    )
}

export default Hearder