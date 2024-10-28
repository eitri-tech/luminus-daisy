import React, { Component } from 'react';
import CommonProps from '../commonProps';
import ColorUtils from '../../utilities/ColorUtils';

interface TextProps extends CommonProps {
  render?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong' | 'em' | 'blockquote' | 'code' | 'kbd' | 'samp' | 'var' | 'del' | 'ins' | 'mark' | 'small' | 'sub' | 'sup';
}

class Text extends Component<TextProps> {
  render() {
    const { id, render = 'span', children, className = "" } = this.props;
    const Component = render as keyof JSX.IntrinsicElements;

    let classNameText = ""
    if(className && ColorUtils.classNameHaveTextColor(className)){
      classNameText = className;
    }else{
      classNameText = "";
    }

    return (
      <Component data-e="Text" id={id} className={classNameText} data-element={`Text.${render}`}>
        {children}
      </Component>
    );
  }
}

export default Text;
