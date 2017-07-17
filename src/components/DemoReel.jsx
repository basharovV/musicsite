import React from 'react';
import ReactPlayer from 'react-player';
import MediaQuery from 'react-responsive';

const DemoReel = () => (
  <div className="App-featured">
    <h2>Featured</h2>
    <div>
      <MediaQuery minWidth={768}>
        <ReactPlayer className="App-featured-video" url="https://vimeo.com/215550767" />
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <ReactPlayer className="App-featured-video" url="https://vimeo.com/215550767" width='100%' height='300px'/>
      </MediaQuery>
    <div className="App-featured-info">
      <div className="App-featured-title">
        <h3>Stranger Things - Title Sequence rescore</h3>
      </div>
      <div className="App-featured-description">
        As an alternative to an already great retro sounding opening theme,
        I attempted to bring out the mysterious tones in this
        theme for one of my favourite shows of the past year.
      </div>
  </div>
</div>
</div>
)

export default DemoReel;
