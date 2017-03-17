import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import Page from '../ui/page';

import { signIn } from '../actions/current-user';

class SignInPage extends Component {
  static dispayName = 'SignInPage';

  static propTypes = {
    handleSignIn: React.PropTypes.func.isRequired,
  }

  render() {
    const { handleSignIn, ...props } = this.props;
    return (
      <Page title="Sign In">
        <RaisedButton {...props} label="Sign In" onTouchTap={handleSignIn}></RaisedButton>
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSignIn: () => dispatch(signIn({ user: { id: 123 } })),
});

export default connect(null, mapDispatchToProps)(SignInPage);
