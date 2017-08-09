import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import frontmatter from 'front-matter';
import ReactPlayer from 'react-player';
import Player, { SimplePlayer } from './Player.jsx';

function LinkRenderer(props) {
  if (props.href.includes('vimeo')) {
    return <ReactPlayer style={{margin: 'auto'}} width='100%' url={props.href} />
  }
  if (props.href.includes('.mp3') || props.href.includes('.wav')) {
    return <SimplePlayer audio={props.href}/>
  }
  return <a href={props.href}/>
}

function ImageRenderer(props) {
  return <img className="Blog-img" alt={props.alt} src={props.src}/>
}

class BlogPost extends Component {

  constructor(props) {
    super(props);
    var source;
    var isSingle;
    if (props.hasOwnProperty('match')) {
      source = props.match.params.post;
      isSingle = true;
    }
    else {
       source = props.source;
       isSingle = false;
    }
    source = './' + source + '.md';
    this.state = {
      title: props.title,
      body: props.body,
      description: props.desciption,
      source: source,
      single: isSingle
    }
  }

  componentDidMount() {
    if (this.state.single) {
      var disqus_config = function () {
      this.page.url = this.props.match.params.url;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = this.props.source; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://vyacheslavbasharov.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      })();
  }
}


  render() {
    var req = require.context('../../posts/');
    var content = req(this.state.source);
    var parsedContent = frontmatter(content);
    var isSingle = this.state.isSingle;
    return (
      <div className="App-blog-post">
          <div className="App-blog-post-header">
            <div className="App-blog-post-title-container">
            <a href={'/blog/'+ this.props.source}><h1 className="App-blog-post-title">{parsedContent.attributes.title}</h1></a></div>
          <div className="App-blog-post-info-container">
            <div className="App-blog-post-author"><span style={{"fontWeight": "normal"}}>by</span> {parsedContent.attributes.author}</div>
            <div className="App-blog-post-date">{parsedContent.attributes.date}</div>
          </div>
        </div>
          <div className="App-divider"></div>
          <div className="App-blog-post-body">
            <ReactMarkdown source={parsedContent.body} renderers={{Link: LinkRenderer, Image: ImageRenderer}}/>
          </div>
          <div id="disqus_thread"></div>

      </div>
    )
  }
}

class WrappedBlogPost extends Component {
    render() {
      return (
      <div className="App-blog-container">
        <div className="App-blog">
          <BlogPost {...this.props}/>
        </div>
      </div>)
    }
  }

export { WrappedBlogPost, BlogPost };
