import React from 'react';

var HelloComponent = React.createClass({
  render: function () {
    return <h1>Hello {this.props.message}!</h1>;
  }
});

