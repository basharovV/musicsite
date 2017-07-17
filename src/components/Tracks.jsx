import React, {Component} from 'react';
import Player from './Player.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import data from '../../tracks.json';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'; // ES6
import { CSSGrid, SpringGrid, layout, makeResponsive, measureItems } from 'react-stonecutter';
import FlipMove from 'react-flip-move';

const polymagicDescription = "This track has an interesting rhythm and jazzy breaks in between. Although some samples and synths are used, the track\
maintains it's acoustic feel. The ending is a improvisational take on the Harry Potter theme";

class Tracks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "featured": props.featured,
      "filterTags": []
    }
  }

  componentWillReceiveProps(props) {
    this.state = {
      "featured": props.featured,
      "filterTags": props.filterTags
    }
  }

  render() {
    let filterTags = this.state.filterTags;
    let featured = this.state.featured;
    return (
      <div className="App-tracks">
        <ul className="App-track-list">
          {data.tracks.map(function(track) {
            if (this.state.filterTags.length > 0) {
              for (var tag of filterTags) {
                if (track.tags.includes(tag)) {
                  console.log("RENDERING");
                  return <li>
                    <Player filterTags={filterTags} {...track}/>
                    </li>
                }
              }
            }
            else if (track.featured === "true" & featured === "true") {
              return <li>
                <Player filterTags={filterTags} {...track}/>
                </li>
            }
            else if (featured === "false" & (track.featured === "false" || track.featured === "true")) {
              return <li>
                <Player filterTags={filterTags} {...track}/>
                </li>
            }
            return null;
            }
          , this)}
        </ul>
        <br/>

      </div>
    )}
}

export default Tracks;
