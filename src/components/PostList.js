import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPosts() {
    dispatch(fetchPosts());
  }
});

export default connect(null, mapDispatchToProps)(PostList);
