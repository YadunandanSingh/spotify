import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
// import { fetchTopTracks, searchbtn } from './Javascipt.js'
import Navigation from './components/Navigation.js';
import Hearder from './components/Hearder.js';
import Playlist from './pages/PlayListSong.js';
// import Playlist_tracks from './pages/Playlist_tracks.js';
import Playlisttracks from './pages/Playlist_tracks.js';
import Home from './pages/Home.js'


function App() {
  return (
    <div className="App " >

      <BrowserRouter>
        <div className='main'>
          <Navigation />

          <Hearder />

          <div className='main_body'>
            <Routes>
            {/* <Route path='/' element={<Home />} /> */}
             <Route path='/' element={<Playlist />} />
              <Route path='/Playlist_tracks' element={ <Playlisttracks />} />
              
            </Routes>
          </div>

        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;
