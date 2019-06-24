import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
  render() {
    return <div>User Header</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser(id) {
    dispatch(fetchUser(id));
  }
});

export default connect(null, mapDispatchToProps)(UserHeader);
