import React from 'react';
import Player from './Player.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const polymagicDescription = "This track has an interesting rhythm and jazzy breaks in between. Although some samples and synths are used, the track\
maintains it's acoustic feel. The ending is a improvisational take on the Harry Potter theme";

const Tracks = ({ match }) => (
  <div className="App-tracks">
  <h2>Tracks</h2>


  <Player audio="http://localhost:8080/tracks/polymagic.mp3"
    title="Polymagic"
    description={polymagicDescription}
    genre="Jazz fusion"
    tags={['jazz', 'piano', 'synth']}/>

  <Player audio="http://localhost:8080/tracks/TheNightmareRevelation.wav"
    title="TheNightmareRevelation"
    description={polymagicDescription}
    genre="Jazz fusion"
    tags={['jazz', 'piano', 'synth']}/>
  <Player audio="http://localhost:8080/tracks/RiseAndFall.wav"
    title="Rise And Fall"
    description={polymagicDescription}
    genre="Cinematic"
    tags={['orcestral', 'piano', 'synth']}/>
  <Player audio="http://localhost:8080/tracks/polymagic.mp3"
    title="Polymagic"
    description={polymagicDescription}
    genre="Jazz fusion"
    tags={['jazz', 'piano', 'synth']}/>
<br/>
<div href="" className="App-all-tracks-button">
  <Link to="/tracks">All tracks</Link>
</div>
  </div>
)

export default Tracks;
