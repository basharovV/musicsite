import React, { Component } from 'react';
import { BlogPost } from './BlogPost.jsx';
import './Blog.css';
import Helmet from 'react-helmet';
import { animateScroll } from 'react-scroll';
export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      "posts": []
    }
  }

  componentWillMount() {
    let posts = this.requireAll(require.context('../../posts', true, /\.md$/));
    let postArray = [];

    console.log(posts);
    posts.forEach((file) => {
      postArray.push({
        "file": file.slice(0, -3).slice(2)
      });
    });
    this.setState({
        "posts": postArray
    });
  }
  componentDidMount() {
    animateScroll.scrollToTop({
      smooth: true});
  }

  requireAll(r) {
    let posts = [];
    r.keys().forEach(function(filename) {
      posts.push(filename);
    })
    return posts;
  }

  render() {
    let posts = this.state.posts;
    return (
      <div className="App-blog-container">
        <Helmet>
          <meta name="fragment" content="!"/>
        </Helmet>
        <div className="App-blog">
        {posts.map(function(post) {
          return (
          <BlogPost source={post.file}/>
        )})}
      </div>
    </div>
    )
  }


}
