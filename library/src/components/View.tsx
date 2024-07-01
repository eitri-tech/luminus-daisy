import React from 'react';

interface ViewProps {
  children: React.ReactNode;
  className?: string;
}

const View: React.FC<ViewProps> = ({ children, className }) => (
  <div data-element="View" className={className}>{children}</div>
);

export default View;
