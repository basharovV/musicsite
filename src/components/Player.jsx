import React from 'react';
import './Player.css';
import {MdPause, MdPlayArrow} from 'react-icons/lib/md';

export default class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      description: props.description,
      play: false,
      timeElapsed: '00:00',
      timeRemaining: '00:00'
    };
  };

  componentWillReceiveProps() {
    this.setState({ play: true });
  };

  getRemainingTimeText() {
      let timeRemain = this.audio.duration - this.audio.currentTime;
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

  positionHandle = (position) => {
    let timelineWidth = this.timeline.offsetWidth;
    let handleLeft = position - this.timeline.offsetLeft;
    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
      this.handle.style.marginLeft = handleLeft + "px";
    }
    if (handleLeft < 0) {
      this.handle.style.marginLeft = "0px";
    }
    if (handleLeft > timelineWidth) {
      this.handle.style.marginLeft = timelineWidth + "px";
    }
  };

  mouseMove = (e) => {
    this.positionHandle(e.pageX);
    console.log(((e.pageX - this.timeline.offsetLeft) / this.timeline.offsetWidth) * this.audio.duration);
    this.audio.currentTime = ((e.pageX - this.timeline.offsetLeft) / this.timeline.offsetWidth) * this.audio.duration;
  };

  mouseUp = (e) => {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseUp);
  };

  mouseDown = (e) => {
    window.addEventListener('mousemove', this.mouseMove);
    window.addEventListener('mouseup', this.mouseUp);
  };

  play = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.audio.pause();
    } else {
      this.setState({ play: true });
      this.audio.play();
    }
  };

  render() {
    const playing = this.state.play;
    return (
      <div className="Player">
        <audio src={this.props.audio}
          ref={(audio) => { this.audio = audio }}
        />
      <div className="Player-top">
        <img className="Player-img" src={"http://localhost:8080/artwork/" + this.state.title + ".jpg"}/>
        <div className="Player-info">
          <p className="Player-title">{this.state.title}</p>

          <p className="Player-description">{this.state.description}</p>
          <br/>
        </div>
      </div>
        <br/>
        <div className="Player-controls">
          <div className="Player-play-pause">
          { playing? (
            // <div onClick={this.play} className={!this.state.play ? "icon ion-play" : "icon ion-pause"} />
            <MdPause color='white' size={20} onClick={this.play}/>
          ): (
            <MdPlayArrow color='white' size={20} onClick={this.play}/>
          )}
          </div>
          <div id="timeline" onClick={this.mouseMove} ref={(timeline) => { this.timeline = timeline }}>
            <div id="handle" onMouseDown={this.mouseDown} ref={(handle) => { this.handle = handle }} />
          </div>
          <div className="Player-time">
            <div>{this.state.timeElapsed} / </div>
            <div>{this.state.timeRemaining}</div>
          </div>
        </div>
      </div>
    );
  }
}
