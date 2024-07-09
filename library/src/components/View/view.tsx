import React, { Component } from 'react';

interface ViewProps {
  children?: React.ReactNode;  
  className?: string;
}

class View extends Component<ViewProps> {
  render() {
    const { children, className } = this.props;
    return (
      <div data-element="View" className={className}>
        {children}
      </div>
    );
  }
}

export default View;
