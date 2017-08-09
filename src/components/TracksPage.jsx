import React, {Component} from 'react';
import Tracks from './Tracks.jsx';
import { TagCloud } from 'react-tagcloud';
import data from '../../tracks.json';
import update from 'immutability-helper';
import Helmet from 'react-helmet';
import { animateScroll } from 'react-scroll';

class TracksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "tags": [],
      "tagFilterQuery": []
    };
  }

  componentWillMount() {
    let tags = this.getTags();
    this.setState({
      "tags": tags,
      "tagFilterQuery": []
    });
  }

  componentDidMount() {
    animateScroll.scrollToTop({
      smooth: true
    });
  }

  tagRenderer = (tag, size, color) => {
    return <span key={tag.value}
      style={
        {
          "color": this.state.tagFilterQuery.includes(tag.value)? '#212121': color,
          "fontSize": size,
          "verticalAlign": 'middle',
          "display": 'inline-block'
        }}
      className={
        this.state.tagFilterQuery.includes(tag.value)? 'tag-cloud-tag-active' : 'tag-cloud-tag'}>
      {tag.value}
    </span>;
  }

//TODO rename vars
  getTags() {
    let tags = this.state.tags;
    let distinctTags = [];
    data.tracks.forEach(function(track, trackIdx) {
      // console.log(track)
      track.tags.forEach(function(nTag, tagIdx) {
        console.log("Processing" + nTag);
        if (distinctTags.includes(nTag)) {
          console.log("-> Already included" + nTag);
          for(var eIdx in tags) {
            if (tags[eIdx].value === nTag) {
              console.log("-> Incrementing count");
              tags[eIdx].count++;
              break;
            }
          }
        }
        else {
          distinctTags.push(nTag);
          tags.push({
            "value": nTag,
            "count": 1,
          });
        }
      });
    });
    return tags;
    }

  handleTagClick(tag, event) {
    if (this.state.tagFilterQuery.includes(tag.value)) {
      let index = 0;
      for (var idx in this.state.tagFilterQuery) {
        if (this.state.tagFilterQuery[idx] === tag.value) {
          index = idx;
          break;
        }
      }
      this.setState(update(this.state, {
        "tagFilterQuery": {$splice: [[index, 1]]}
      }));
    }
    else {
      this.setState(update(this.state, {
        "tagFilterQuery": {$push: [tag.value]}
      }));
    }
    //TODO check if state was updated
  }

  render() {

    return (
      <div className="App-trackspage">
        <Helmet>
          <meta name="fragment" content="!"/>
          <title>Tracks | Vyacheslav Basharov - Composer</title>
        </Helmet>
        <h2>Tracks</h2>
        <h3>Choose tracks by tags:</h3>
        <TagCloud className="App-tracks-page-tags" minSize={13}
                maxSize={29}
                tags={this.state.tags}
                colorOptions={
                  {
                    "hue": "blue",
                    "luminosity": "light"
                  }
                }
                shuffle={false}
                onClick={this.handleTagClick.bind(this)}
                renderer={this.tagRenderer}/>
        <Tracks featured="false" filterTags={this.state.tagFilterQuery}/>
        {/* <h3>Choose by emoji</h3> */}

      </div>
    )
  }
}

export default TracksPage;
