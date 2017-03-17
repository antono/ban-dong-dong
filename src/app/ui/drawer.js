import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { closeDrawer } from '../actions/ui';

class AppDrawer extends Component {
  static muiName = 'Drawer';
  static propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    handleCloseDrawer: React.PropTypes.func,
    handleOpenLink: React.PropTypes.func,
  }

  render() {
    const { handleOpenLink, isOpen, handleCloseDrawer, ...props } = this.props;

    return (
      <Drawer
        {...props}
        open={isOpen}
        onRequestChange={handleCloseDrawer}
        docked={false} >

        <MenuItem onTouchTap={handleOpenLink('/')}>Welcome</MenuItem>
        <MenuItem onTouchTap={handleOpenLink('/signIn')}>Sign In</MenuItem>
      </Drawer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleCloseDrawer: () => dispatch(closeDrawer()),
  handleOpenLink: link => () => {
    dispatch(push(link));
    dispatch(closeDrawer());
  },
});

const mapStateToProps = state => ({
  isOpen: state.ui.drawer.open,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer);
