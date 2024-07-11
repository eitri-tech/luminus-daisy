import React, { Component } from 'react';
import CommonProps from '../commonProps';

interface TextProps extends CommonProps {
  render?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'em' | 'blockquote' | 'code' | 'kbd' | 'samp' | 'var' | 'del' | 'ins' | 'mark' | 'small' | 'sub' | 'sup';
}

class Text extends Component<TextProps> {
  render() {
    const { id, render = 'span', children, className = "" } = this.props;
    const Component = render as keyof JSX.IntrinsicElements;

    return (
      <Component data-e="Text" id={id} className={className} data-element={`Text.${render}`}>
        {children}
      </Component>
    );
  }
}

export default Text;
