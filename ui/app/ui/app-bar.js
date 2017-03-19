import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiAppBar from 'material-ui/AppBar';
import { openDrawer } from '../actions/ui';
import SigninButton from './signin-button';
import UserMenu from './user-menu';

class AppBar extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    signedIn: React.PropTypes.bool.isRequired,
    handleAppBarLeftClick: React.PropTypes.func.isRequired,
  }

  render() {
    const rightButtonElement = this.props.signedIn ? <UserMenu /> : <SigninButton />;
    return <MuiAppBar
      onLeftIconButtonTouchTap={this.props.handleAppBarLeftClick}
      iconElementRight={rightButtonElement} title={this.props.title}
    />;
  }
}

export const mapStateToProps = state => ({
  signedIn: state.currentUser.signedIn
});

export const mapDispatchToProps = dispatch => ({
  handleAppBarLeftClick: () => dispatch(openDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
