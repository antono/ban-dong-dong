import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePageTitle } from '../actions/ui';

class Page extends Component {
  static muiName = 'Page';
  static propTypes = {
    changePageTitle: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.element,
  }

  componentWillMount() {
    this.props.changePageTitle(this.props.title);
  }

  render() {
    const style = {
      padding: '15px'
    };

    return (
      <div style={style} className="page">
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changePageTitle: title => dispatch(changePageTitle(title)),
});

export default connect(null, mapDispatchToProps)(Page);
