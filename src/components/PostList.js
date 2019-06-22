import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostList extends Component {
  render() {
    return <div>Post List</div>;
  }
}

export default connect()(PostList);
