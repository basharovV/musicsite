import React, {Component} from 'react';
import Player from './Player.jsx';
import data from '../../tracks.json';

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
                  return <li key={track.title}>
                    <Player key={track.title} filterTags={filterTags} {...track}/>
                    </li>
                }
              }
            }
            else if (track.featured === "true" & featured === "true") {
              return <li key={track.title}>
                <Player filterTags={filterTags} {...track}/>
                </li>
            }
            else if (featured === "false" & (track.featured === "false" || track.featured === "true")) {
              return <li key={track.title}>
                <Player key={track.title} filterTags={filterTags} {...track}/>
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
