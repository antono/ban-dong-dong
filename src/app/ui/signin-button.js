import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import FlatButton from 'material-ui/FlatButton';

class SigninButton extends Component {
  static muiName = 'FlatButton';
  static propTypes = {
    handleSignIn: React.PropTypes.func.isRequired
  }

  render() {
    const { handleSignIn, ...props } = this.props;
    return (
      <FlatButton {...props} label='Sign In' onTouchTap={handleSignIn} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSignIn: () => dispatch(push('/signIn')),
});

export default connect(null, mapDispatchToProps)(SigninButton);
