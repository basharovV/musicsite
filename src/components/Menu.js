import React, {Component} from 'react';
import About from './About.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      focused: 0
    }
  }

  click(index) {
    this.setState({focused: index})
  }

  render() {
    return (
      <Router>
        <div className="App-menu">
          <ul>
            <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
        <li><Link to="/tracks">tracks</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/tracks" component={Tracks}/>
        </div>
      </Router>
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Tracks = ({ match }) => (
  <div>
    <h2>Tracks</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
