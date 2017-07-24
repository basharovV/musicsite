import React from 'react';
import './Player.css';
import {FaPlayCircle, FaPauseCircle} from 'react-icons/lib/fa';
import Wavesurfer from 'react-wavesurfer';
import Truncate from 'react-truncate';

/*
  Player class with descriptive state and tag filter mechanism.
  Description expand/truncate from https://github.com/One-com/react-truncate
*/
export default class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      audio: process.env.REACT_APP_STATIC_URL + props.audio,
      title: props.title,
      description: props.description,
      playing: false,
      timeElapsed: '00:00',
      timeRemaining: '00:00',
      pos: '0',
      expanded: false,
      truncated: false
    };
  };

  handleTruncate(truncated) {
          if (this.state.truncated !== truncated) {
              this.setState({
                  truncated: truncated
              });
          }
      }

  toggleLines(event) {
          event.preventDefault();
          this.setState({
              expanded: !this.state.expanded
          });
      }

  componentWillReceiveProps() {
    // this.setState({ playing: true });
  };

  getRemainingTimeText() {
      let timeRemain = this.audio.duration - this.audio.currentTime;
      let pos = parseFloat(this.audio.currentTime / this.audio.duration).toFixed(2);
      this.setState({
        pos: pos
      });
      let minsRemain = timeRemain  % 3600 / 60;
      let secsRemain = timeRemain % 60;
      let remainText = ('0' + Math.floor(minsRemain)).slice(-2) + ":" + ('0' + Math.floor(secsRemain)).slice(-2);
      return remainText;
  }

  getElapsedTimeText() {
    let minsElapsed = this.audio.currentTime % 3600 / 60;
    let secsElapsed = this.audio.currentTime % 60;
    let elapsedText = ('0' + Math.floor(minsElapsed)).slice(-2) + ":" + ('0' + Math.floor(secsElapsed)).slice(-2);
    return elapsedText;
  }

  componentDidMount() {

    this.audio.addEventListener("loadedmetadata", () => {
      this.setState({
        timeElapsed: this.getElapsedTimeText(),
        timeRemaining: this.getRemainingTimeText()
      });
    });

    this.audio.addEventListener("timeupdate", () => {
      let ratio = this.audio.currentTime / this.audio.duration;
      let position = this.timeline.offsetLeft + (this.timeline.offsetWidth * ratio);
      this.positionHandle(position);

      this.setState({
        timeElapsed: this.getElapsedTimeText(),
        timeRemaining: this.getRemainingTimeText()
      });
    });
    // console.log("Offset width" + this.timeline.offsetWidth);
    // console.log("Offset left" + this.timeline.offsetLeft);
  };

  handlePosChange = (e) => {
    this.setState({
      pos: e.originalArgs ? e.originalArgs[0] : +e.target.value
    });
  }

  handlePlayToggle = () => {
    this.setState({
      playing: !this.state.playing
    })
  }

  render() {
    let playing = this.state.playing;
    let waveOptions = {
     scrollParent: false,
     height: 60,
     progressColor: '#9c7272',
     waveColor: '#e2c1c1',
     normalize: true,
     barWidth: 3,
     audioRate:1,
     fillParent: true,
     cursorColor: '#bb4f4f'
   };
   let expanded = this.state.expanded;
   let truncated = this.state.truncated;
   let audioPath = this.state.audio;
    return (
      <div className="Player">
        <audio src={audioPath}
          ref={(audio) => { this.audio = audio }}
        />
        <div className="Player-top">
          <div className="Player-img-container">
            <img alt={this.props.title + " artwork"} className="Player-img" src={process.env.REACT_APP_STATIC_URL + this.props.artwork}/>
          </div>
            <div className="Player-content">
              <div key="info" className="Player-info-show">
                <span className="Player-title">{this.state.title}</span>
                <span className="Player-tags">
                  <ul>
                    <li className="Player-tag-genre">
                      {this.props.genre}
                    </li>
                    {this.props.tags.map(function(tag) {
                      if (this.props.filterTags.includes(tag)) {
                        return <li key={tag} className="Player-tag-filtered">{tag}</li>;
                      }
                      return <li key={tag} className="Player-tag-default">{tag}</li>;
                    }, this)}
                  </ul>
                </span>
                <Truncate className="Player-description"
                  lines={!expanded && 2}
                  ellipsis={(
                      <span className="Player-description-truncate">... <a href='#' onClick={this.toggleLines.bind(this)}> Show more</a></span>
                  )}
                  onTruncate={this.handleTruncate.bind(this)}>
                  {this.state.description}
                  {/* 😁 */}
                  {!truncated && expanded && (
                      <span className="Player-description-truncate"> • <a href='#' onClick={this.toggleLines.bind(this)}> Show less</a></span>
                  )}
              </Truncate>
              </div>
            </div>
    </div>
    <br/>
    <div className="Player-bottom">

      <div className="Player-controls">
        <div className="Player-play-pause">

          { playing? (
            // <div onClick={this.play} className={!this.state.play ? "icon ion-play" : "icon ion-pause"} />
            <FaPauseCircle size={40} onClick={this.handlePlayToggle}/>
          ): (
            <FaPlayCircle size={40} onClick={this.handlePlayToggle}/>
          )}
          </div>

        {/* <div id="timeline" onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }} >
          <div id="handle" onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }}></div>
        </div> */}
        <br/>
        {/* <div className="Player-time">
          <div>{this.state.timeElapsed} / </div>
          <div>{this.state.timeRemaining}</div>
        </div> */}
    </div>
        <div key="wave" className={this.state.playing? "Player-wave-show": "Player-wave-hide"}>
        <Wavesurfer
         audioFile={audioPath}
         volume={0.5}
         playing={this.state.playing}
         pos={parseFloat(this.state.pos)}
         options={waveOptions}
         onPosChange={this.handlePosChange}
       />
      </div>
      </div>
    </div>
    );
  }
}
