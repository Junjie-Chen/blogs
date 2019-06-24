import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const user = this.props.users.find(user => user.id === this.props.userId);

    return <div>User Header</div>;
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchUser(id) {
    dispatch(fetchUser(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
