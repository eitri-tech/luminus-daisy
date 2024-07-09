import React, { Component, ReactNode } from 'react';

interface TextProps {
  render?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'em' | 'blockquote' | 'code' | 'kbd' | 'samp' | 'var' | 'del' | 'ins' | 'mark' | 'small' | 'sub' | 'sup';
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

class Text extends Component<TextProps> {
  render() {
    const { render = 'span', children, className, style } = this.props;
    const Component = render as keyof JSX.IntrinsicElements;

    return (
      <Component className={className} style={style} data-element={`Text.${render}`}>
        {children}
      </Component>
    );
  }
}

export default Text;
