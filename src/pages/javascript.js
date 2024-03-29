// import { Link } from "react-router-dom";
// import React from "react";
// :::::::::::::::::::::::::::::::::playlist code::::::::::::::::::::::::::::::::::::::::::::::::::::

const clientId = 'dbe897f5981d464db2a006fa267c36d5';
const clientSecret = 'f96dd886211e464992643b1bf27d130c';

// Step 2: Obtain an access token
export function getAccessToken() {
    return fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    })
        .then(response => response.json())
        .then(data => data.access_token);
}

// Step 3: Retrieve the playlist
export function getPlaylist(accessToken, playlistId) {
    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    })
        .then(response => response.json());
}

// Playlist-id spotify
const top_hindi_playlist = '3zCIdLCGKOFa3XWq1yo5SF';
const play_boy_vibes = '3amq4sPbGcHcTquTfGP0Oh';
const hot_hits_hindi = '37i9dQZF1DX0XUfTFmNBRM'
const punjabi = '37i9dQZF1DWXVJK4aT7pmk'
const bollywood_center = '37i9dQZF1DWXtlo6ENS92N'
const desi_hits = '37i9dQZF1DWTwzVdyRpXm1'
const panjabi_x = '37i9dQZF1DWVDCraF986xg'
const panjabi_101 = '37i9dQZF1DX5cZuAHLNjGz'
const trading_now_india = '37i9dQZF1DXbVhgADFy3im'
const i_pop_superhits = '37i9dQZF1DWXkMnNwaapIj'
const hot_hits_haryanivi = '37i9dQZF1DWZWNsJrgFkZK'
const trading_now_panjabi = '37i9dQZF1DWZEYG45EmWYV'
const you_in_love = '37i9dQZF1DXbQDZkQM83q7'
const party_song = '21xNu8hEE3lexdm6K8WJZB'
const paisaa = '5uUH6wLfPnhSBhHyyMip6j'


// const playlistIda = '3zCIdLCGKOFa3XWq1yo5SF';
const playlistId = [
    top_hindi_playlist,
    play_boy_vibes,
    hot_hits_hindi,
    punjabi,
    bollywood_center,
    desi_hits,
    panjabi_x,
    panjabi_101,
    trading_now_india,
    i_pop_superhits,
    hot_hits_haryanivi,
    trading_now_panjabi,
    you_in_love,
    party_song,
    paisaa,

]

getAccessToken()
    .then(accessToken => {
        let playlist_div = document.getElementById("playlist_name")

        for (let i = 0; i < playlistId.length; i++) {
            const element = playlistId[i];


            getPlaylist(accessToken, element)

                .then(playlist => {
                    let play_name = playlist.name
                    const h1element = document.createElement('div')

                    h1element.innerHTML = `
                    
                    <div class="playlist_box">
                            <img src="${playlist.images[0].url}" alt="${playlist.name}" class="playlist_img_name">
                            <p style= color:white > ${play_name}</p>
                    
                    </div>`

                    playlist_div.appendChild(h1element)


                    console.log(playlist.name);

                    // playlist_box.innerHTML = ``
                    // Do something with the playlist data
                })
                .catch(error => {
                    console.error('Error fetching playlist:', error);
                });


        }
    })
    .catch(error => {
        console.error('Error fetching access token:', error);
    });


// ::::::::::::::::::::::::::::playlist_tracks::::::::::::::::::::::::::::::::::::::::::::::::::::::::
getAccessToken()
    .then(gettrack => {
        let track_div = document.getElementById("main-track-box")


        for (let i = 0; i < playlistId.length; i++) {
            const element = playlistId[i];



            getPlaylist(gettrack, element)
                .then(track => {
                    // function track_play() {
                    //     console.log("song play")
                    // }
                    let track_name = track.tracks.items[0].track.name
                    const divelement = document.createElement('div')

                    divelement.innerHTML = `
                    <div class="track_box" id="${track_name}" >

                    <div class="track_container">
                            <img src="${track.tracks.items[0].track.album.images[0].url}" alt="${track.name}" class="track_img_name">
                            <p style= color:white > ${track_name}</p>
                    </div>
                    <div class="button">
                        <button class="playbutton" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                      </svg>
                      </button>
                    </div>

                    </div>`
                    
                    track_div.appendChild(divelement)
                    console.log(track_name);

                    // playlist_box.innerHTML = ``
                    // Do something with the playlist data

                })
                .catch(error => {
                    console.error('Error fetching playlist:', error);
                });



        }
    })
    .catch(error => {
        console.error('Error fetching access token:', error);
    });



