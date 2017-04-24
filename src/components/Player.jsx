import React from 'react';
import './Player.css';
import {MdPause, MdPlayArrow} from 'react-icons/lib/md';
import Wavesurfer from 'react-wavesurfer';

export default class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      description: props.description,
      playing: false,
      timeElapsed: '00:00',
      timeRemaining: '00:00',
      pos: '0'
    };
  };


  componentWillReceiveProps() {
    this.setState({ playing: true });
  };

  getRemainingTimeText() {
      let timeRemain = this.audio.duration - this.audio.currentTime;
      let pos = parseFloat(this.audio.currentTime / this.audio.duration).toFixed(2);
      this.setState({
        pos: pos
      });
      let minsRemain = timeRemain  % 3600 / 60;
      let secsRemain = timeRemain % 60;
      console.log("secsremain" + secsRemain);
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
      console.log("Position" + position);
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
    const playing = this.state.play;
    const waveOptions = {
     scrollParent: true,
     height: 120,
     progressColor: '#9c7272',
     waveColor: '#dfcdcd',
     normalize: true,
     barWidth: 3,
     audioRate:1,
     fillParent: true,
     scrollParent: false,
     cursorColor: '#bb4f4f'
   };
   console.log(this.props.audio);
    return (
      <div className="Player">
        <audio src={this.props.audio}
          ref={(audio) => { this.audio = audio }}
        />
        <div className="Player-top">
          <img className="Player-img" src={"http://localhost:8080/artwork/" + this.state.title + ".jpg"}/>
          <div className="Player-info">
            <span className="Player-title">{this.state.title}</span>
            <span className="Player-description">{this.state.description}</span>
          </div>
          <br/>
        </div>
        <br/>
        <div className="Player-bottom">
          <div className="Player-wave">
          <Wavesurfer
           audioFile={this.props.audio}
           volume={0.5}
           playing={this.state.playing}
           pos={parseFloat(this.state.pos)}
           options={waveOptions}
           onPosChange={this.handlePosChange}
         />
       </div>
          <div className="Player-controls">
            <div className="Player-play-pause">
            { playing? (
              // <div onClick={this.play} className={!this.state.play ? "icon ion-play" : "icon ion-pause"} />
              <MdPause color='red' size={20} onClick={this.handlePlayToggle}/>
            ): (
              <MdPlayArrow color='red' size={20} onClick={this.handlePlayToggle}/>
            )}
            </div>
            {/* <div id="timeline" onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }} >
              <div id="handle" onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }}></div>
            </div> */}
            <div className="Player-time">
              <div>{this.state.timeElapsed} / </div>
              <div>{this.state.timeRemaining}</div>
            </div>
        </div>
      </div>
    </div>
    );
  }
}
