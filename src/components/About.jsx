import React from 'react';
import {FaSoundcloud, FaVimeo, FaInstagram} from 'react-icons/lib/fa'
const About = () => (
  <div className="App-about">
    {/* <div className="App-about-left">
      <img className="App-about-photo" src="http://localhost:8080/profile.jpg"/>
    </div> */}
    <div className="App-about-right">
    <h3>
      I compose and produce music for your next creative project! Are you looking
      for a non-traditional score with interesting sounds and fresh ideas?
    </h3>
      <h3>On this website you will find a growing library of tracks
      in a broad range of styles, including <span className="App-about-genres">
        <ul>
          <li><p>orchestral</p></li>
          <li><p>experimental</p></li>
          <li><p>electronic</p></li>
          <li><p>jazz</p></li>
          <li><p>ambient</p></li>
        </ul>
    </span>  and more!
  </h3>
  <div className="App-header-social-links">
    <ul>
      <li><a href="https://soundcloud.com/vbash"><FaSoundcloud/></a></li>
      <li><a href="https://vimeo.com/vbash"><FaVimeo/></a></li>
      <li><a href="https://instagram.com/slav_basharov/"><FaInstagram/></a></li>
  </ul>
</div>

</div>
  {/* <h3>
    If you are looking for non-traditional soundtrack material,
    you can find it here. Listen to the available tracks below
  </h3> */}
</div>
)

export default About;
