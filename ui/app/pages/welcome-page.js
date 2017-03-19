import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Page from '../ui/page';

import { changePageTitle } from '../actions/ui';


class WelcomePage extends Component {
  static dispayName = 'WelcomePage';

  static propTypes = {
    changePageTitle: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <Page title="Welcome">
        <RaisedButton label="Welcome"></RaisedButton>
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changePageTitle: () => dispatch(changePageTitle('Welcome'))
});

export default connect(null, mapDispatchToProps)(WelcomePage);
