import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import { push } from 'react-router-redux';

import { signOut } from '../actions/current-user';

class UserMenu extends Component {
  static muiName = 'IconMenu';
  static propTypes = {
    handleSignOut: React.PropTypes.func.isRequired
  }

  render() {
    const { handleSignOut, ...props } = this.props;

    return (
      <IconMenu
        {...props}
        iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <Divider />
        <MenuItem primaryText="Sign Out" onTouchTap={handleSignOut} />
      </IconMenu>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSignOut: () => {
    dispatch(signOut());
    dispatch(push('/'));
  },
});

export default connect(null, mapDispatchToProps)(UserMenu);
