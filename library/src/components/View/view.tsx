import React, { Component } from 'react';
import CommonProps from '../commonProps';

interface ViewProps extends CommonProps { }

class View extends Component<ViewProps> {
  render() {
    const { id, children, className = "" } = this.props;
    return (
      <div id={id} data-e="View" className={className}>
        {children}
      </div>
    );
  }
}

export default View;
