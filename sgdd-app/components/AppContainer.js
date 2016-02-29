import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from '../actions/appActions.js';

class AppContainer extends React.Component {
  render() {
    const { appState, actions } = this.props;

    return (
      <div>
        <h1>SGDD App</h1>
        <Link to="/">Home</Link>
        <Link to="/buttons">Buttons</Link>
        <div style={{background: '#fff'}}>
          {this.props.children}
        </div>        
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.element,
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    appState: state.get("appState")
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);