import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';
import AppBar from './ui/app-bar';
import Drawer from './ui/drawer';
import SignInPage from './pages/signin-page';
import WelcomePage from './pages/welcome-page';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

class AppShell extends Component {
  static displayName = 'AppShell';
  static propTypes = {
    onAppBarLeftClick: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    drawerIsOpen: React.PropTypes.bool,
    title: React.PropTypes.string,
  }

  componentWillMount() {
    const routerComponent = (
      <Router history={history}>
        <Route path="/" component={WelcomePage} />
        <Route path="/signIn" component={SignInPage} />
      </Router>
    );
    this.setState({ routerComponent });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title={this.props.title} />
          <Drawer />

          {this.state.routerComponent}

        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  title: state.ui.title,
});

export default connect(mapStateToProps)(AppShell);
