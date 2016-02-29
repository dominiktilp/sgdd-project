import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from '../actions/appActions.js';

class ButtonsContainer extends React.Component {
  componentDidMount() {
    this.refs.sgddExampleIFrame.addEventListener('load', function() {
      this.contentDocument.getElementById("sgdd-example").innerHTML = "<a class=\"button\">button</a>"
    });
  }
  render() {
    const { appState, actions } = this.props;

    return (
      <div>
        <h2>Buttons</h2>        
        <iframe ref='sgddExampleIFrame' src="http://localhost:8080/default.html?component=button&example=color"></iframe>        
      </div>
    );
  }
}

ButtonsContainer.propTypes = {
  children: PropTypes.element,
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

ButtonsContainer.componentDidMount = function() {
  this.refs.sgddExampleIFrame.getDOMNode().addEventListener('load', function() {
    this.refs.sgddExampleIFrame.getDOMNode().contentDocument.getElementById("sgdd-example").innerHTML = "<a class=\"button\">button</a>"
  });
}

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
)(ButtonsContainer);