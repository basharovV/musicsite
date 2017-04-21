import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class Player extends Component {
  render () {
    return <ReactPlayer className="App-music-player" height="100" url='http://localhost:8080/polymagic2.mp3' controls='true' />
  }
}
